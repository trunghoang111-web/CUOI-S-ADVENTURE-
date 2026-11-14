import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import IntroScreen from './components/IntroScreen';
import MoonMap from './components/MoonMap';
import MissionScene from './components/MissionScene';
import FinalStoryScreen from './components/FinalStoryScreen';
import QuizScreen from './components/QuizScreen';
import ResultsScreen from './components/ResultsScreen';
import { translations } from './data/translations';
import { sounds } from './utils/soundEffects';

export default function App() {
  // Persistent language
  const [lang, setLang] = useState(() => {
    return localStorage.getItem('cuoi_lang') || 'vi';
  });

  // Persistent mute state
  const [muted, setMuted] = useState(() => {
    return localStorage.getItem('cuoi_muted') === 'true';
  });

  // Persistent visited stations array
  const [visitedStations, setVisitedStations] = useState(() => {
    try {
      const saved = localStorage.getItem('cuoi_visited');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Persistent collected stars array
  const [starsCollected, setStarsCollected] = useState(() => {
    try {
      const saved = localStorage.getItem('cuoi_stars');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Current screen: 'intro' | 'map' | 'mission' | 'final' | 'quiz' | 'results'
  const [currentScreen, setCurrentScreen] = useState('intro');

  // Active mission ID (1..6)
  const [currentMissionId, setCurrentMissionId] = useState(1);

  // Persistent student name for certificate
  const [studentName, setStudentName] = useState(() => {
    return localStorage.getItem('cuoi_student_name') || '';
  });

  // Quiz state
  const [quizScore, setQuizScore] = useState(() => {
    const saved = localStorage.getItem('cuoi_score');
    return saved !== null ? parseInt(saved, 10) : 0;
  });

  const [quizAnswers, setQuizAnswers] = useState(() => {
    try {
      const saved = localStorage.getItem('cuoi_answers');
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  // Save changes to localStorage
  useEffect(() => {
    localStorage.setItem('cuoi_lang', lang);
  }, [lang]);

  useEffect(() => {
    localStorage.setItem('cuoi_muted', muted ? 'true' : 'false');
    sounds.setMuted(muted);
  }, [muted]);

  useEffect(() => {
    localStorage.setItem('cuoi_visited', JSON.stringify(visitedStations));
  }, [visitedStations]);

  useEffect(() => {
    localStorage.setItem('cuoi_stars', JSON.stringify(starsCollected));
  }, [starsCollected]);

  useEffect(() => {
    localStorage.setItem('cuoi_student_name', studentName);
  }, [studentName]);

  useEffect(() => {
    localStorage.setItem('cuoi_score', quizScore.toString());
  }, [quizScore]);

  useEffect(() => {
    localStorage.setItem('cuoi_answers', JSON.stringify(quizAnswers));
  }, [quizAnswers]);

  // Handler: Select and visit station
  const handleSelectStation = (id) => {
    setCurrentMissionId(id);
    if (!visitedStations.includes(id)) {
      setVisitedStations((prev) => [...prev, id]);
    }
    setCurrentScreen('mission');
  };

  // Handler: Collect knowledge star
  const handleCollectStar = (id) => {
    if (!starsCollected.includes(id)) {
      setStarsCollected((prev) => [...prev, id]);
    }
  };

  // Navigation handlers
  const handleNextStation = () => {
    if (currentMissionId < 6) {
      handleSelectStation(currentMissionId + 1);
    } else {
      setCurrentScreen('final');
    }
  };

  const handlePrevStation = () => {
    if (currentMissionId > 1) {
      handleSelectStation(currentMissionId - 1);
    } else {
      setCurrentScreen('map');
    }
  };

  const handleFinishQuiz = (score) => {
    setQuizScore(score);
    setCurrentScreen('results');
  };

  const handleTryAgain = () => {
    setQuizAnswers({});
    setQuizScore(0);
    localStorage.removeItem('cuoi_answers');
    localStorage.removeItem('cuoi_score');
    setCurrentScreen('quiz');
  };

  const handleReset = () => {
    const t = translations[lang];
    if (window.confirm(t.resetConfirm)) {
      localStorage.clear();
      setVisitedStations([]);
      setStarsCollected([]);
      setQuizAnswers({});
      setQuizScore(0);
      setStudentName('');
      setCurrentMissionId(1);
      setCurrentScreen('intro');
      sounds.playClick();
    }
  };

  const allStationsVisited = visitedStations.length >= 6;

  return (
    <div className="app-layout">
      {/* Persistent App Header */}
      <Header
        lang={lang}
        setLang={setLang}
        muted={muted}
        setMuted={setMuted}
        currentScreen={currentScreen}
        setCurrentScreen={setCurrentScreen}
        visitedCount={visitedStations.length}
        starsCount={starsCollected.length}
        totalStations={6}
        onReset={handleReset}
      />

      {/* Main Screen Router */}
      <main className="app-main-viewport">
        {currentScreen === 'intro' && (
          <IntroScreen
            lang={lang}
            setLang={setLang}
            onStart={() => setCurrentScreen('map')}
            visitedCount={visitedStations.length}
          />
        )}

        {currentScreen === 'map' && (
          <MoonMap
            lang={lang}
            visitedStations={visitedStations}
            starsCollected={starsCollected}
            currentStationId={currentMissionId}
            onSelectStation={handleSelectStation}
            onGoToFinalStory={() => setCurrentScreen('final')}
            allStationsVisited={allStationsVisited}
          />
        )}

        {currentScreen === 'mission' && (
          <MissionScene
            missionId={currentMissionId}
            lang={lang}
            onBackToMap={() => setCurrentScreen('map')}
            onNextStation={handleNextStation}
            onPrevStation={handlePrevStation}
            onCollectStar={handleCollectStar}
            starsCollected={starsCollected}
            onGoToFinalStory={() => setCurrentScreen('final')}
          />
        )}

        {currentScreen === 'final' && (
          <FinalStoryScreen
            lang={lang}
            onStartQuiz={() => setCurrentScreen('quiz')}
            onBackToMap={() => setCurrentScreen('map')}
          />
        )}

        {currentScreen === 'quiz' && (
          <QuizScreen
            lang={lang}
            onFinishQuiz={handleFinishQuiz}
            onBackToMap={() => setCurrentScreen('map')}
            quizAnswers={quizAnswers}
            setQuizAnswers={setQuizAnswers}
          />
        )}

        {currentScreen === 'results' && (
          <ResultsScreen
            lang={lang}
            score={quizScore}
            quizAnswers={quizAnswers}
            onTryAgain={handleTryAgain}
            onExploreAgain={() => setCurrentScreen('map')}
            studentName={studentName}
            setStudentName={setStudentName}
          />
        )}
      </main>
    </div>
  );
}
