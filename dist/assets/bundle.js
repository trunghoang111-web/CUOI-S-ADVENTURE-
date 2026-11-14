(function () {
  'use strict';

  const {
    useState,
    useEffect,
    useRef
  } = window.React;
  const React = window.React;
  const ReactDOM = window.ReactDOM;
  const translations = {
    vi: {
      appTitle: "CHÚ CUỘI KHÁM PHÁ MẶT TRĂNG",
      appSubtitle: "Bỏ lại, nhưng không rơi vào quên lãng",
      targetAudience: "Dự án Giáo dục Khoa học – NASA Space Apps",
      startExploring: "BẮT ĐẦU KHÁM PHÁ",
      continueExploring: "TIẾP TỤC KHÁM PHÁ",
      resetProgress: "Đặt lại tiến trình",
      resetConfirm: "Bạn có chắc muốn đặt lại toàn bộ tiến trình khám phá và điểm số không?",
      introGreeting: "Xin chào! Mình là Cuội. Hôm nay chúng ta sẽ gặp những người bạn đặc biệt từ Trái Đất. Họ có những câu chuyện mà chúng ta không nên quên!",
      introWifeDialogue: "Vợ: 'Cuội ơi, về nhà đi!' – Cuội: 'Ước gì mình có thể... Nhưng ở đây, mình có những người bạn phi thường!'",
      stationsVisited: "Trạm đã thăm",
      starsCollected: "Ngôi sao tri thức",
      missionTimeline: "DÒNG THỜI GIAN NHIỆM VỤ",
      chooseStation: "Danh sách trạm",
      prevStation: "Trạm trước",
      nextStation: "Trạm tiếp theo",
      backToMap: "Về bản đồ Mặt Trăng",
      dialogueStep: "Hội thoại",
      nextDialogue: "Tiếp tục trò chuyện",
      dialogueComplete: "Đã hoàn thành hội thoại!",
      collectStar: "Thu thập Ngôi sao Tri thức",
      starAlreadyCollected: "Đã thu thập Ngôi sao Tri thức ⭐",
      fictionalLabel: "Cuộc trò chuyện giả tưởng (Truyện dân gian)",
      nasaFactLabel: "Dữ liệu lịch sử NASA (Sự thật khoa học)",
      seeNasaFacts: "Xem Dữ liệu NASA thật",
      hideNasaFacts: "Thu gọn dữ liệu",
      officialNasaSource: "Xem tài liệu gốc tại NASA",
      takeawayLabel: "Bài học ý nghĩa",
      dualViewCuoi: "Tranh vẽ Chú Cuội",
      dualViewNasa: "Ảnh tư liệu NASA",
      clickToZoom: "Nhấn để xem ảnh phóng to",
      finalStoryTitle: "Ký Ức Bất Tử Trên Mặt Trăng",
      startChallenge: "BẮT ĐẦU THỬ THÁCH MẶT TRĂNG",
      heritageVsDebrisTitle: "Phân biệt: Di sản Không gian & Rác Không gian",
      heritageDesc: "Di sản Không gian (Space Heritage): Các thiết bị lịch sử như Surveyor, Apollo, Rover là những tượng đài khoa học minh chứng cho bước tiến vĩ đại của loài người, được bảo tồn nguyên vẹn.",
      debrisDesc: "Rác Không gian (Space Debris): Các mảnh vỡ vụn, thân tên lửa cũ trôi dạt quanh quỹ đạo Trái Đất gây nguy cơ va chạm. Thiết bị trên Mặt Trăng mang giá trị lịch sử và không gây nguy hiểm.",
      quizTitle: "Thử Thách Tri Thức Mặt Trăng",
      quizSubtitle: "Kiểm tra kiến thức bạn vừa khám phá cùng Chú Cuội",
      question: "Câu hỏi",
      of: "trên",
      score: "Điểm",
      correct: "Chính xác!",
      incorrect: "Chưa chính xác!",
      nextQuestion: "Câu hỏi tiếp theo",
      finishQuiz: "Xem Kết Quả",
      resultsTitle: "Kết Quả Thử Thách",
      badgeGuardian: "Vệ binh Mặt Trăng (Moon Guardian)",
      badgeExplorer: "Nhà thám hiểm Mặt Trăng (Moon Explorer)",
      badgeCadet: "Học viên Không gian (Space Cadet)",
      tryAgain: "Thử Thách Lại",
      exploreAgain: "Khám Phá Lại Bản Đồ",
      printCertificate: "In / Tải Chứng Chỉ",
      certificateTitle: "CHỨNG CHỈ HOÀN THÀNH",
      certificateSubtitle: "CUOI'S MOON ADVENTURE – NASA SPACE EXPLORATION",
      certificateRecipient: "Chứng nhận thành tích trao cho",
      certificateAchievement: "Đã xuất sắc hoàn thành chuyến hành trình thám hiểm lịch sử không gian trên Mặt Trăng cùng Chú Cuội và đạt danh hiệu:",
      certificateDate: "Ngày cấp",
      certificateScore: "Điểm số đạt được",
      namePlaceholder: "Nhập họ tên của bạn vào đây...",
      studentName: "Họ và tên học sinh",
      soundOn: "Bật âm thanh",
      soundMuted: "Tắt âm thanh",
      close: "Đóng",
      deepSpaceStationNote: "Trạm 6 là tín hiệu không gian sâu ngoài hệ Mặt Trời, không phải vật thể vật lý đặt trên Mặt Trăng."
    },
    en: {
      appTitle: "CUOI'S MOON ADVENTURE",
      appSubtitle: "Left Behind, Never Forgotten",
      targetAudience: "STEM Space Education – NASA Space Apps",
      startExploring: "START EXPLORING",
      continueExploring: "CONTINUE EXPLORING",
      resetProgress: "Reset Progress",
      resetConfirm: "Are you sure you want to reset all exploration progress and quiz score?",
      introGreeting: "Hello! I'm Cuoi. Today we'll meet special visitors from Earth. They have stories we should never forget!",
      introWifeDialogue: "Wife: 'Cuội, come home!' – Cuội: 'I wish I could... But up here, I have met extraordinary friends!'",
      stationsVisited: "Stations Visited",
      starsCollected: "Knowledge Stars",
      missionTimeline: "MISSION TIMELINE",
      chooseStation: "Station Directory",
      prevStation: "Previous Station",
      nextStation: "Next Station",
      backToMap: "Back to Moon Map",
      dialogueStep: "Dialogue",
      nextDialogue: "Next Dialogue",
      dialogueComplete: "Dialogue Complete!",
      collectStar: "Collect Knowledge Star",
      starAlreadyCollected: "Knowledge Star Collected ⭐",
      fictionalLabel: "Fictional Conversation (Folklore Narrative)",
      nasaFactLabel: "Authentic NASA Data (Scientific Facts)",
      seeNasaFacts: "See Real NASA Facts",
      hideNasaFacts: "Hide NASA Facts",
      officialNasaSource: "View Official NASA Mission Page",
      takeawayLabel: "Key Takeaway",
      dualViewCuoi: "Cuội Illustration",
      dualViewNasa: "NASA Photo",
      clickToZoom: "Click to zoom image",
      finalStoryTitle: "Timeless Memories on the Moon",
      startChallenge: "START THE MOON CHALLENGE",
      heritageVsDebrisTitle: "Space Heritage vs. Space Debris",
      heritageDesc: "Space Heritage: Historic equipment like Surveyor, Apollo landers, and Rovers are scientific monuments marking human milestones, worthy of preservation.",
      debrisDesc: "Space Debris: Defunct satellite parts and spent rocket casings drifting in Earth orbit that pose collision risks. Lunar surface artifacts carry heritage value.",
      quizTitle: "The Moon Knowledge Challenge",
      quizSubtitle: "Test what you've learned on the lunar exploration trail",
      question: "Question",
      of: "of",
      score: "Score",
      correct: "Correct!",
      incorrect: "Not quite!",
      nextQuestion: "Next Question",
      finishQuiz: "View Results",
      resultsTitle: "Mission Results",
      badgeGuardian: "Moon Guardian",
      badgeExplorer: "Moon Explorer",
      badgeCadet: "Space Cadet",
      tryAgain: "Try Again",
      exploreAgain: "Explore Moon Again",
      printCertificate: "Print / Save Certificate",
      certificateTitle: "CERTIFICATE OF ACHIEVEMENT",
      certificateSubtitle: "CUOI'S MOON ADVENTURE – NASA SPACE EXPLORATION",
      certificateRecipient: "This certificate is proudly awarded to",
      certificateAchievement: "For outstanding completion of the historical lunar space exploration quest guided by Chu Cuoi, earning the honor of:",
      certificateDate: "Date Issued",
      certificateScore: "Final Score",
      namePlaceholder: "Type your full name here...",
      studentName: "Student Name",
      soundOn: "Sound On",
      soundMuted: "Muted",
      close: "Close",
      deepSpaceStationNote: "Station 6 is an interstellar radio transmission signal beyond Pluto, not a physical object resting on the Moon."
    }
  };
  const missionsData = [{
    id: 1,
    year: "1966",
    title: {
      vi: "Surveyor 1 – Người Tiên Phong Hạ Cánh Mềm",
      en: "Surveyor 1 – The Soft-Landing Pioneer"
    },
    subtitle: {
      vi: "Tàu đổ bộ không người lái đầu tiên của Mỹ hạ cánh êm dịu trên Mặt Trăng",
      en: "First U.S. spacecraft to make a gentle soft landing on another celestial body"
    },
    dialogues: {
      vi: [{
        speaker: "Cuội",
        text: "Xin chào! Bạn là ai? Sao bạn lại ở đây một mình?"
      }, {
        speaker: "Surveyor 1",
        text: "Mình là Surveyor 1. Mình hạ cánh trên Mặt Trăng năm 1966, trước khi các phi hành gia đến đây!"
      }, {
        speaker: "Cuội",
        text: "Nhiệm vụ của bạn là gì?"
      }, {
        speaker: "Surveyor 1",
        text: "Mình đã gửi hơn 11.000 bức ảnh và giúp các nhà khoa học chuẩn bị cho những chuyến hạ cánh sau."
      }, {
        speaker: "Cuội",
        text: "Bạn chính là người tiên phong!"
      }],
      en: [{
        speaker: "Cuội",
        text: "Hello! Who are you? Why are you here alone?"
      }, {
        speaker: "Surveyor 1",
        text: "I'm Surveyor 1. I landed on the Moon in 1966, before astronauts arrived!"
      }, {
        speaker: "Cuội",
        text: "What was your mission?"
      }, {
        speaker: "Surveyor 1",
        text: "I sent more than 11,000 pictures and helped scientists prepare for future landings."
      }, {
        speaker: "Cuội",
        text: "You were a true pioneer!"
      }]
    },
    takeaway: {
      vi: "Mọi hành trình vĩ đại đều bắt đầu từ người tiên phong.",
      en: "Every great journey begins with pioneers."
    },
    sourceUrl: "https://science.nasa.gov/mission/surveyor-1/",
    cuoiImg: "assets/cuoi-scene1-surveyor.png",
    nasaImg: "assets/nasa-surveyor1.jpg",
    nasaImgCaption: {
      vi: "Tàu Surveyor 1 trên bề mặt Mặt Trăng với tấm pin mặt trời và anten truyền hình (1966)",
      en: "Surveyor 1 standing on lunar soil with solar panel and planar TV antenna (1966)"
    },
    nasaFacts: {
      vi: "Surveyor 1 phóng ngày 30/5/1966 và hạ cánh thành công ngày 2/6/1966 tại Oceanus Procellarum (Đại dương Bão tố). Tàu đã chứng minh bề mặt Mặt Trăng là nền đá bụi cứng cáp có thể chịu được tải trọng phi thuyền, đập tan nỗi sợ rằng tàu sẽ bị lún sâu trong bụi cát. Nó đã gửi về Trái Đất 11.237 bức ảnh truyền hình độ nét cao.",
      en: "Surveyor 1 launched on May 30, 1966 and touched down on June 2, 1966 in Oceanus Procellarum. It proved that lunar soil had compressive strength sufficient to support future Apollo landers, debunking fears that spacecraft would sink into deep lunar dust. It returned 11,237 high-resolution television photographs."
    }
  }, {
    id: 2,
    year: "1969",
    title: {
      vi: "Apollo 11 LRRR – Tấm Gương Phản Xạ Laser",
      en: "Apollo 11 LRRR – Lunar Laser Retroreflector"
    },
    subtitle: {
      vi: "Thiết bị thí nghiệm khoa học vẫn hoạt động bền bỉ suốt hơn 50 năm",
      en: "Scientific experiment still operating continuously for over 50 years without power"
    },
    dialogues: {
      vi: [{
        speaker: "Cuội",
        text: "Bạn trông giống một chiếc gương!"
      }, {
        speaker: "Apollo Mirror",
        text: "Mình là thiết bị phản xạ laser được các phi hành gia Apollo 11 đặt tại đây năm 1969."
      }, {
        speaker: "Cuội",
        text: "Bạn cần pin không?"
      }, {
        speaker: "Apollo Mirror",
        text: "Không! Mình phản xạ ánh sáng laser gửi từ Trái Đất để giúp đo khoảng cách tới Mặt Trăng."
      }, {
        speaker: "Cuội",
        text: "Thật tuyệt! Bạn vẫn rất hữu ích!"
      }],
      en: [{
        speaker: "Cuội",
        text: "You look like a mirror!"
      }, {
        speaker: "Apollo Mirror",
        text: "I'm a laser retroreflector placed here by Apollo 11 astronauts in 1969."
      }, {
        speaker: "Cuội",
        text: "Do you need batteries?"
      }, {
        speaker: "Apollo Mirror",
        text: "No! I reflect laser light sent from Earth to help measure the Earth–Moon distance."
      }, {
        speaker: "Cuội",
        text: "Amazing! You're still useful!"
      }]
    },
    takeaway: {
      vi: "Giá trị khoa học có thể tồn tại rất lâu.",
      en: "Scientific value can last for generations."
    },
    sourceUrl: "https://ilrs.gsfc.nasa.gov/missions/satellite_missions/current_missions/ap11_reflector.html",
    cuoiImg: "assets/cuoi-scene2-reflector.png",
    nasaImg: "assets/nasa-apollo11-lrrr.jpg",
    nasaImgAlt: "assets/nasa-apollo11-easep.png",
    nasaImgCaption: {
      vi: "Tấm gương phản xạ laser LRRR gồm 100 thấu kính góc lập phương đặt tại Biển Tĩnh Lặng",
      en: "The LRRR array containing 100 corner-cube retroreflectors at the Sea of Tranquility"
    },
    nasaFacts: {
      vi: "Được phi hành gia Neil Armstrong và Buzz Aldrin triển khai ngày 21/7/1969 trong gói thí nghiệm EASEP. Thiết bị hoàn toàn thụ động (không cần nguồn điện hay bảo trì), chứa 100 thấu kính thạch anh góc lập phương. Nhờ nó, các đài thiên văn mặt đất bắn tia laser và đo thời gian khứ hồi để xác định khoảng cách Trái Đất - Mặt Trăng chính xác tới từng milimet, phát hiện Mặt Trăng đang rời xa Trái Đất 3,8 cm mỗi năm!",
      en: "Deployed on July 21, 1969 by Neil Armstrong and Buzz Aldrin as part of EASEP. It operates passively without electrical power, containing 100 fused silica corner-cube prisms. Observatories on Earth fire lasers at it to measure the round-trip light time down to millimeters, discovering the Moon drifts away from Earth at 3.8 cm per year!"
    }
  }, {
    id: 3,
    year: "1969",
    title: {
      vi: "Apollo 11 – Ký Ức Bước Chân Đầu Tiên",
      en: "Apollo 11 – Humanity's First Footsteps (Memory Flashback)"
    },
    subtitle: {
      vi: "Tàu Columbia an toàn về Trái Đất; bệ phóng Mặt Trăng vĩnh hằng ở lại",
      en: "Command Module Columbia returned to Earth; descent stage remains as lunar heritage"
    },
    dialogues: {
      vi: [{
        speaker: "Cuội",
        text: "Con tàu nào đang xuất hiện trên bầu trời vậy?"
      }, {
        speaker: "Apollo 11",
        text: "Đây là ký ức về Apollo 11, sứ mệnh đưa con người đầu tiên đặt chân lên Mặt Trăng năm 1969."
      }, {
        speaker: "Cuội",
        text: "Ai đã bước đi trên Mặt Trăng?"
      }, {
        speaker: "Apollo 11",
        text: "Neil Armstrong và Buzz Aldrin. Michael Collins ở lại trên quỹ đạo."
      }, {
        speaker: "Cuội",
        text: "Một giấc mơ đã thành hiện thực!"
      }],
      en: [{
        speaker: "Cuội",
        text: "What spacecraft is appearing in the sky?"
      }, {
        speaker: "Apollo 11",
        text: "This is a memory of Apollo 11, the mission that first landed humans on the Moon in 1969."
      }, {
        speaker: "Cuội",
        text: "Who walked on the Moon?"
      }, {
        speaker: "Apollo 11",
        text: "Neil Armstrong and Buzz Aldrin. Michael Collins remained in lunar orbit."
      }, {
        speaker: "Cuội",
        text: "A dream came true!"
      }]
    },
    takeaway: {
      vi: "Khám phá cần lòng dũng cảm và khoa học.",
      en: "Exploration takes courage and science."
    },
    sourceUrl: "https://www.nasa.gov/mission/apollo-11/",
    cuoiImg: "assets/cuoi-scene3-retrospective.png",
    nasaImg: "assets/nasa-apollo11-modules.jpg",
    nasaImgCaption: {
      vi: "Khoang chỉ huy Columbia và khoang dịch vụ Apollo 11 chụp trên quỹ đạo Mặt Trăng (1969)",
      en: "Apollo 11 Command and Service Modules photographed in lunar orbit (1969)"
    },
    nasaFacts: {
      vi: "LƯU Ý LỊCH SỬ QUAN TRỌNG: Khoang chỉ huy Columbia KHÔNG bị bỏ lại trên Mặt Trăng! Columbia đã đưa cả 3 phi hành gia hạ cánh an toàn xuống Thái Bình Dương ngày 24/7/1969 và hiện được trưng bày tại Bảo tàng Hàng không & Không gian Quốc gia Smithsonian ở Washington, D.C. Thứ ở lại Mặt Trăng là Bệ hạ cánh (Descent Stage) của Mô-đun Mặt Trăng Eagle cùng tấm bia tưởng niệm 'Chúng tôi đến trong hòa bình cho toàn nhân loại'.",
      en: "CRITICAL HISTORICAL DISTINCTION: Command Module Columbia was NEVER abandoned on the Moon! Columbia brought all three astronauts safely home to splash down in the Pacific Ocean on July 24, 1969 and is on display at the Smithsonian National Air and Space Museum. What stayed behind is the Lunar Module descent stage bearing the plaque: 'We came in peace for all mankind.'"
    }
  }, {
    id: 4,
    year: "1971",
    title: {
      vi: "Apollo 15 Lunar Rover – Chiếc Xe Điện Đầu Tiên",
      en: "Apollo 15 Lunar Rover – First Electric Moon Car"
    },
    subtitle: {
      vi: "Phương tiện đưa phi hành gia mở rộng tầm thám hiểm địa chất",
      en: "The rover that allowed astronauts to traverse great distances beyond the landing zone"
    },
    dialogues: {
      vi: [{
        speaker: "Cuội",
        text: "Một chiếc ô tô trên Mặt Trăng sao?"
      }, {
        speaker: "Lunar Rover",
        text: "Mình là Lunar Rover của Apollo 15! Mình giúp các phi hành gia khám phá những khu vực xa hơn."
      }, {
        speaker: "Cuội",
        text: "Bạn chạy bằng xăng à?"
      }, {
        speaker: "Lunar Rover",
        text: "Không, mình chạy bằng pin điện!"
      }, {
        speaker: "Cuội",
        text: "Công nghệ thật kỳ diệu!"
      }],
      en: [{
        speaker: "Cuội",
        text: "A car on the Moon?"
      }, {
        speaker: "Lunar Rover",
        text: "I'm the Apollo 15 Lunar Rover! I helped astronauts explore farther from their landing site."
      }, {
        speaker: "Cuội",
        text: "Do you use gasoline?"
      }, {
        speaker: "Lunar Rover",
        text: "No, I'm battery-powered!"
      }, {
        speaker: "Cuội",
        text: "Technology is amazing!"
      }]
    },
    takeaway: {
      vi: "Công nghệ giúp vượt qua những giới hạn.",
      en: "Technology helps us overcome limits."
    },
    sourceUrl: "https://www.nasa.gov/mission/apollo-15/",
    cuoiImg: "assets/cuoi-new-explorer.png",
    nasaImg: "assets/nasa-apollo15-overview.jpg",
    nasaImgCaption: {
      vi: "Xe Lunar Roving Vehicle (LRV) bên sườn núi Hadley Rille hùng vĩ trong sứ mệnh Apollo 15",
      en: "Lunar Roving Vehicle (LRV) parked by Mount Hadley in the Hadley-Apennine region (1971)"
    },
    nasaFacts: {
      vi: "Được điều khiển bởi phi hành gia David Scott và James Irwin vào tháng 7/1971. Xe chạy hoàn toàn bằng hai bộ pin 36-volt bạc-kẽm, trang bị 4 động cơ điện độc lập ở 4 bánh lưới thép dệt đặc biệt. Nhờ có xe, phi hành đoàn đã di chuyển 27,8 km và thu thập mẫu 'Đá Sáng Thế' (Genesis Rock) có niên đại 4,5 tỷ năm tuổi.",
      en: "Driven by astronauts David Scott and James Irwin in July 1971. Powered by two 36-volt silver-zinc non-rechargeable batteries, featuring four independent electric motors inside special woven-mesh wire wheels. The rover traveled 27.8 km, helping the crew collect the famous 4.5-billion-year-old 'Genesis Rock'."
    }
  }, {
    id: 5,
    year: "1972",
    title: {
      vi: "Apollo 17 Lunar Rover – Bỏ Lại Nhưng Không Lãng Quên",
      en: "Apollo 17 Lunar Rover – Left Behind, Never Forgotten"
    },
    subtitle: {
      vi: "Sứ mệnh đưa con người lên Mặt Trăng cuối cùng của thế kỷ 20",
      en: "The final human lunar landing mission of the 20th century"
    },
    dialogues: {
      vi: [{
        speaker: "Cuội",
        text: "Sao bạn vẫn ở đây?"
      }, {
        speaker: "Apollo 17 Rover",
        text: "Mình đã giúp các phi hành gia Apollo 17 khám phá Mặt Trăng năm 1972. Sau đó họ trở về Trái Đất, còn mình được để lại."
      }, {
        speaker: "Cuội",
        text: "Bạn có buồn không?"
      }, {
        speaker: "Apollo 17 Rover",
        text: "Một chút, nhưng mình tự hào vì đã giúp nhân loại hiểu thêm về Mặt Trăng."
      }, {
        speaker: "Cuội",
        text: "Mình sẽ kể lại câu chuyện của bạn!"
      }],
      en: [{
        speaker: "Cuội",
        text: "Why are you still here?"
      }, {
        speaker: "Apollo 17 Rover",
        text: "I helped Apollo 17 astronauts explore the Moon in 1972. They returned to Earth, but I stayed behind."
      }, {
        speaker: "Cuội",
        text: "Are you sad?"
      }, {
        speaker: "Apollo 17 Rover",
        text: "A little, but I'm proud I helped humanity learn more about the Moon."
      }, {
        speaker: "Cuội",
        text: "I'll share your story!"
      }]
    },
    takeaway: {
      vi: "Bị bỏ lại không có nghĩa là bị lãng quên.",
      en: "Left behind does not mean forgotten."
    },
    sourceUrl: "https://www.nasa.gov/mission/apollo-17/",
    cuoiImg: "assets/cuoi-final-story.png",
    nasaImg: "assets/nasa-apollo17-rover.jpg",
    nasaImgCaption: {
      vi: "Xe Apollo 17 Rover tại Thung lũng Taurus-Littrow trước khi phi hành đoàn cất cánh trở về (1972)",
      en: "Apollo 17 Rover parked at Taurus-Littrow prior to the crew's departure (1972)"
    },
    nasaFacts: {
      vi: "Phi hành gia Eugene Cernan và Harrison Schmitt đã lái xe di chuyển 35,7 km trong thung lũng Taurus-Littrow tháng 12/1972. Trước khi phi hành đoàn cất cánh, camera màu trên xe Rover được chuyên viên Ed Fendell điều khiển từ Houston để quay lại toàn cảnh khoảnh khắc tàu rời bề mặt Mặt Trăng. Chiếc xe hiện vẫn nằm lại đó như một nhân chứng lịch sử kiêu hãnh.",
      en: "Astronauts Eugene Cernan and Harrison Schmitt drove 35.7 km across the Taurus-Littrow valley in December 1972. Before liftoff, the rover's color television camera was remotely tracked from Mission Control in Houston by Ed Fendell to broadcast the ascent module launch back to Earth. The rover remains parked on the Moon as an enduring historic sentinel."
    }
  }, {
    id: 6,
    year: "1977",
    title: {
      vi: "Voyager 1 & 2 – Tín Hiệu Không Gian Sâu",
      en: "Voyager 1 & Voyager 2 – Interstellar Deep Space Signal"
    },
    subtitle: {
      vi: "Tín hiệu vượt khỏi Hệ Mặt Trời mang theo Đĩa Ghi Âm Vàng",
      en: "Deep-space transmission traveling into interstellar space carrying the Golden Record"
    },
    dialogues: {
      vi: [{
        speaker: "Cuội",
        text: "Ai đang gửi tín hiệu từ những vì sao?"
      }, {
        speaker: "Voyager",
        text: "Chúng mình là Voyager 1 và Voyager 2, được phóng từ năm 1977."
      }, {
        speaker: "Cuội",
        text: "Các bạn đang ở trên Mặt Trăng sao?"
      }, {
        speaker: "Voyager",
        text: "Không! Chúng mình đã đi vào không gian liên sao. Chúng mình còn mang theo Đĩa Vàng chứa những thông điệp từ Trái Đất!"
      }, {
        speaker: "Cuội",
        text: "Câu chuyện của Trái Đất đang đi tới những vì sao!"
      }],
      en: [{
        speaker: "Cuội",
        text: "Who is sending a signal from the stars?"
      }, {
        speaker: "Voyager",
        text: "We're Voyager 1 and Voyager 2, launched in 1977."
      }, {
        speaker: "Cuội",
        text: "Are you on the Moon?"
      }, {
        speaker: "Voyager",
        text: "No! We have entered interstellar space. We also carry Golden Records with messages from Earth!"
      }, {
        speaker: "Cuội",
        text: "Earth's story is traveling among the stars!"
      }]
    },
    takeaway: {
      vi: "Khát vọng khám phá không có giới hạn.",
      en: "The spirit of exploration has no boundaries."
    },
    sourceUrl: "https://science.nasa.gov/mission/voyager/",
    cuoiImg: "assets/cuoi-scene6-voyager.png",
    nasaImg: "assets/nasa-voyager.jpg",
    nasaImgCaption: {
      vi: "Mô phỏng phi thuyền Voyager trong không gian sâu mang Đĩa Vàng mạ đồng (The Golden Record)",
      en: "Artist depiction of Voyager spacecraft traversing interstellar space with the Golden Record"
    },
    nasaFacts: {
      vi: "LƯU Ý ĐẶC BIỆT: Tàu Voyager KHÔNG ở trên Mặt Trăng! Đây là trạm viễn thông bắt tín hiệu từ không gian sâu. Phóng vào năm 1977, Voyager 1 và Voyager 2 là những vật thể nhân tạo bay xa nhất trong lịch sử nhân loại (cách Trái Đất hơn 24 tỷ km). Mỗi tàu mang một Đĩa Vàng mạ đồng mạ vàng chứa 115 hình ảnh, lời chào bằng 55 ngôn ngữ nhân loại và âm thanh Trái Đất.",
      en: "CRITICAL DISTINCTION: Voyager probes are NOT located on the Moon! Station 6 represents a radio transmission signal intercepted across deep space. Launched in 1977, Voyager 1 and 2 are humanity's farthest human-made ambassadors, now traveling in interstellar space beyond our solar system (over 24 billion km from Earth). Each carries a phonograph Golden Record with Earth's sounds, music, and greetings in 55 languages."
    }
  }];
  const finalStoryContent = {
    quote: {
      vi: "Mình từng nghĩ đây chỉ là những đồ vật bị bỏ lại. Giờ mình hiểu: mỗi thiết bị đều mang một câu chuyện, một khám phá và một phần lịch sử của nhân loại. Hãy cùng bảo tồn những ký ức đó!",
      en: "I once thought these were just objects left behind. Now I know each one carries a story, a discovery, and a piece of human history. Let's preserve those memories!"
    },
    artPledge: "assets/cuoi-final-story.png",
    artValues: "assets/cuoi-final-values.png",
    summaryPoints: [{
      icon: "telescope",
      title: {
        vi: "Khám Phá Địa Điểm Mới",
        en: "Explore New Places"
      },
      desc: {
        vi: "Vươn tới những chân trời chưa từng ai đặt chân.",
        en: "Venturing into uncharted worlds beyond our horizon."
      }
    }, {
      icon: "book",
      title: {
        vi: "Học Hỏi Vũ Trụ",
        en: "Learn The Universe"
      },
      desc: {
        vi: "Giải mã nguồn gốc Trái Đất, Mặt Trăng và các vì sao.",
        en: "Deciphering the origins of Earth, the Moon, and the cosmos."
      }
    }, {
      icon: "heart",
      title: {
        vi: "Giúp Đỡ Nhân Loại",
        en: "Help Humanity"
      },
      desc: {
        vi: "Công nghệ vũ trụ mang lại nguồn cảm hứng và khoa học cho Trái Đất.",
        en: "Space innovations inspire science and benefit all life on Earth."
      }
    }]
  };
  const quizQuestions = [{
    id: 1,
    question: {
      vi: "Thiết bị nào đã giúp NASA chứng minh rằng tàu vũ trụ có thể hạ cánh nhẹ nhàng trên Mặt Trăng?",
      en: "Which spacecraft helped NASA prove that a spacecraft could land gently on the Moon?"
    },
    options: {
      vi: ["Voyager 1", "Surveyor 1", "Lunar Rover", "Apollo 11 Command Module"],
      en: ["Voyager 1", "Surveyor 1", "Lunar Rover", "Apollo 11 Command Module"]
    },
    correctIndex: 1,
    explanation: {
      vi: "Surveyor 1 hạ cánh mềm thành công năm 1966, mở đường cho các sứ mệnh Apollo.",
      en: "Surveyor 1 successfully soft-landed in 1966, helping prepare for the Apollo missions."
    }
  }, {
    id: 2,
    question: {
      vi: "Thiết bị phản xạ laser Apollo 11 giúp các nhà khoa học đo điều gì?",
      en: "What does the Apollo 11 laser retroreflector help scientists measure?"
    },
    options: {
      vi: ["Nhiệt độ Mặt Trăng", "Khoảng cách Trái Đất – Mặt Trăng", "Số ngôi sao", "Tốc độ của xe Rover"],
      en: ["The Moon's temperature", "The Earth–Moon distance", "The number of stars", "The rover's speed"]
    },
    correctIndex: 1,
    explanation: {
      vi: "Thiết bị phản xạ tia laser trở về Trái Đất để đo khoảng cách cực kỳ chính xác.",
      en: "It reflects laser light back to Earth, allowing very precise distance measurements."
    }
  }, {
    id: 3,
    question: {
      vi: "Năm nào con người lần đầu tiên đặt chân lên Mặt Trăng?",
      en: "In what year did humans first walk on the Moon?"
    },
    options: {
      vi: ["1966", "1969", "1972", "1977"],
      en: ["1966", "1969", "1972", "1977"]
    },
    correctIndex: 1,
    explanation: {
      vi: "Neil Armstrong và Buzz Aldrin đặt chân lên Mặt Trăng vào năm 1969 trong sứ mệnh Apollo 11.",
      en: "Neil Armstrong and Buzz Aldrin walked on the Moon in 1969 during Apollo 11."
    }
  }, {
    id: 4,
    question: {
      vi: "Xe Lunar Rover sử dụng nguồn năng lượng nào?",
      en: "What powered the Lunar Rover?"
    },
    options: {
      vi: ["Xăng", "Năng lượng gió", "Pin điện", "Than đá"],
      en: ["Gasoline", "Wind power", "Batteries", "Coal"]
    },
    correctIndex: 2,
    explanation: {
      vi: "Lunar Rover là xe chạy điện bằng pin.",
      en: "The Lunar Rover was a battery-powered electric vehicle."
    }
  }, {
    id: 5,
    question: {
      vi: "Chuyện gì đã xảy ra với chiếc Rover của Apollo 17 sau khi sứ mệnh kết thúc?",
      en: "What happened to the Apollo 17 rover after its mission ended?"
    },
    options: {
      vi: ["Trở về Trái Đất", "Được để lại trên Mặt Trăng", "Bay tới Sao Hỏa", "Bay vào Mặt Trời"],
      en: ["It returned to Earth", "It was left on the Moon", "It flew to Mars", "It flew into the Sun"]
    },
    correctIndex: 1,
    explanation: {
      vi: "Chiếc Rover được để lại trên bề mặt Mặt Trăng.",
      en: "The rover remained on the lunar surface."
    }
  }, {
    id: 6,
    question: {
      vi: "Voyager 1 và Voyager 2 mang theo vật gì đặc biệt?",
      en: "What special objects do Voyager 1 and Voyager 2 carry?"
    },
    options: {
      vi: ["Đá Mặt Trăng", "Đĩa ghi âm Vàng", "Một chiếc xe Rover", "Lá cờ Mặt Trăng"],
      en: ["Moon rocks", "Golden Records", "A lunar rover", "A Moon flag"]
    },
    correctIndex: 1,
    explanation: {
      vi: "Các Đĩa Vàng lưu giữ hình ảnh, âm thanh và lời chào từ Trái Đất.",
      en: "The Golden Records contain images, sounds, and greetings from Earth."
    }
  }, {
    id: 7,
    question: {
      vi: "Vì sao Cuội muốn lưu giữ câu chuyện của các thiết bị không gian?",
      en: "Why does Cuoi want to preserve the stories of space exploration equipment?"
    },
    options: {
      vi: ["Vì tất cả vẫn đang chạy", "Vì chúng là những dấu mốc khoa học có giá trị", "Vì chúng làm bằng vàng", "Vì chúng đều nằm trên Mặt Trăng"],
      en: ["Because they are all still working", "Because they represent valuable scientific milestones", "Because they are made of gold", "Because they are all on the Moon"]
    },
    correctIndex: 1,
    explanation: {
      vi: "Dù một thiết bị đã ngừng hoạt động, nó vẫn có thể mang giá trị lịch sử, giáo dục và khoa học.",
      en: "Even when a spacecraft stops working, it can retain historical, educational, and scientific value."
    }
  }];
  class SoundManager {
    constructor() {
      this.ctx = null;
      this.muted = localStorage.getItem('cuoi_muted') === 'true';
    }
    init() {
      if (!this.ctx && typeof window !== 'undefined') {
        const AudioCtx = window.AudioContext || window.webkitAudioContext;
        if (AudioCtx) {
          this.ctx = new AudioCtx();
        }
      }
      if (this.ctx && this.ctx.state === 'suspended') {
        this.ctx.resume();
      }
    }
    setMuted(muted) {
      this.muted = muted;
      localStorage.setItem('cuoi_muted', muted ? 'true' : 'false');
    }
    isMuted() {
      return this.muted;
    }
    playClick() {
      if (this.muted) return;
      this.init();
      if (!this.ctx) return;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      const now = this.ctx.currentTime;
      osc.type = 'sine';
      osc.frequency.setValueAtTime(800, now);
      osc.frequency.exponentialRampToValueAtTime(400, now + 0.05);
      gain.gain.setValueAtTime(0.12, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.05);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now);
      osc.stop(now + 0.05);
    }
    playBlip() {
      if (this.muted) return;
      this.init();
      if (!this.ctx) return;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      const now = this.ctx.currentTime;
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(520, now);
      osc.frequency.exponentialRampToValueAtTime(940, now + 0.08);
      gain.gain.setValueAtTime(0.15, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.08);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now);
      osc.stop(now + 0.08);
    }
    playStarChime() {
      if (this.muted) return;
      this.init();
      if (!this.ctx) return;
      const notes = [523.25, 659.25, 783.99, 1046.50];
      const now = this.ctx.currentTime;
      notes.forEach((freq, idx) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        const startTime = now + idx * 0.07;
        const duration = 0.25;
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, startTime);
        gain.gain.setValueAtTime(0.15, startTime);
        gain.gain.exponentialRampToValueAtTime(0.001, startTime + duration);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(startTime);
        osc.stop(startTime + duration);
      });
    }
    playCorrect() {
      if (this.muted) return;
      this.init();
      if (!this.ctx) return;
      const notes = [659.25, 880.00];
      const now = this.ctx.currentTime;
      notes.forEach((freq, idx) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        const startTime = now + idx * 0.1;
        const duration = 0.3;
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, startTime);
        gain.gain.setValueAtTime(0.18, startTime);
        gain.gain.exponentialRampToValueAtTime(0.001, startTime + duration);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(startTime);
        osc.stop(startTime + duration);
      });
    }
    playWrong() {
      if (this.muted) return;
      this.init();
      if (!this.ctx) return;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      const now = this.ctx.currentTime;
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(220, now);
      osc.frequency.exponentialRampToValueAtTime(140, now + 0.25);
      gain.gain.setValueAtTime(0.12, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.25);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now);
      osc.stop(now + 0.25);
    }
    playFanfare() {
      if (this.muted) return;
      this.init();
      if (!this.ctx) return;
      const melody = [{
        f: 523.25,
        d: 0.12
      }, {
        f: 659.25,
        d: 0.12
      }, {
        f: 783.99,
        d: 0.12
      }, {
        f: 1046.5,
        d: 0.35
      }];
      let curTime = this.ctx.currentTime;
      melody.forEach(note => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(note.f, curTime);
        gain.gain.setValueAtTime(0.2, curTime);
        gain.gain.exponentialRampToValueAtTime(0.001, curTime + note.d);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(curTime);
        osc.stop(curTime + note.d);
        curTime += note.d * 0.85;
      });
    }
  }
  const sounds = new SoundManager();
  function Header({
    lang,
    setLang,
    muted,
    setMuted,
    currentScreen,
    setCurrentScreen,
    visitedCount,
    starsCount,
    totalStations,
    onReset
  }) {
    const t = translations[lang];
    const handleToggleSound = () => {
      const newMuted = !muted;
      setMuted(newMuted);
      sounds.setMuted(newMuted);
      if (!newMuted) sounds.playClick();
    };
    const handleToggleLang = () => {
      const newLang = lang === 'vi' ? 'en' : 'vi';
      setLang(newLang);
      sounds.playClick();
    };
    return React.createElement("header", {
      className: "app-header"
    }, React.createElement("div", {
      className: "header-brand",
      onClick: () => {
        sounds.playClick();
        setCurrentScreen('intro');
      }
    }, React.createElement("div", {
      className: "header-logo-badge"
    }, "🌙"), React.createElement("div", {
      className: "header-titles"
    }, React.createElement("h1", {
      className: "header-title"
    }, t.appTitle), React.createElement("span", {
      className: "header-subtitle"
    }, t.appSubtitle))), React.createElement("div", {
      className: "header-actions"
    }, currentScreen !== 'intro' && React.createElement("div", {
      className: "header-progress-group"
    }, React.createElement("button", {
      className: `nav-pill ${currentScreen === 'map' ? 'active' : ''}`,
      onClick: () => {
        sounds.playClick();
        setCurrentScreen('map');
      },
      title: t.backToMap
    }, "🗺️ ", t.backToMap), React.createElement("span", {
      className: "stat-pill",
      title: t.stationsVisited
    }, "📍 ", visitedCount, "/", totalStations), React.createElement("span", {
      className: "stat-pill stars",
      title: t.starsCollected
    }, "⭐ ", starsCount, "/", totalStations)), React.createElement("div", {
      className: "header-controls"
    }, React.createElement("button", {
      className: "control-btn lang-toggle",
      onClick: handleToggleLang,
      title: lang === 'vi' ? 'Switch to English' : 'Chuyển sang Tiếng Việt'
    }, React.createElement("span", {
      className: "flag-icon"
    }, lang === 'vi' ? '🇻🇳 VI' : '🇺🇸 EN')), React.createElement("button", {
      className: "control-btn sound-toggle",
      onClick: handleToggleSound,
      title: muted ? t.soundOn : t.soundMuted
    }, muted ? '🔇' : '🔊'), React.createElement("button", {
      className: "control-btn reset-btn",
      onClick: onReset,
      title: t.resetProgress
    }, "🔄"))));
  }
  function IntroScreen({
    lang,
    setLang,
    onStart,
    visitedCount
  }) {
    const t = translations[lang];
    const [showFolkStory, setShowFolkStory] = useState(false);
    return React.createElement("div", {
      className: "screen intro-screen"
    }, React.createElement("div", {
      className: "hero-backdrop"
    }, React.createElement("img", {
      src: "assets/cuoi-hero-moon.png",
      alt: "Chu Cuoi & Chi Hang on the Moon",
      className: "hero-image"
    }), React.createElement("div", {
      className: "hero-gradient-overlay"
    }), React.createElement("div", {
      className: "twinkling-stars-layer"
    })), React.createElement("div", {
      className: "hero-content"
    }, React.createElement("div", {
      className: "hero-badge"
    }, React.createElement("span", {
      className: "badge-sparkle"
    }, "✨"), React.createElement("span", null, t.targetAudience)), React.createElement("h1", {
      className: "hero-main-title"
    }, t.appTitle), React.createElement("h2", {
      className: "hero-sub-title"
    }, "\"", t.appSubtitle, "\""), React.createElement("div", {
      className: "intro-dialogue-card"
    }, React.createElement("div", {
      className: "cuoi-avatar-ring"
    }, React.createElement("img", {
      src: "assets/cuoi-waving.png",
      alt: "Chu Cuội",
      className: "cuoi-avatar-img"
    })), React.createElement("div", {
      className: "dialogue-speech-bubble"
    }, React.createElement("div", {
      className: "speaker-tag"
    }, "Chú Cuội / Cuội"), React.createElement("p", {
      className: "speech-text"
    }, t.introGreeting))), React.createElement("div", {
      className: "hero-cta-group"
    }, React.createElement("button", {
      className: "btn-primary cta-btn glow-effect",
      onClick: () => {
        sounds.playClick();
        onStart();
      }
    }, "🚀 ", visitedCount > 0 ? t.continueExploring : t.startExploring), React.createElement("button", {
      className: "btn-secondary folk-story-btn",
      onClick: () => {
        sounds.playClick();
        setShowFolkStory(!showFolkStory);
      }
    }, "📜 ", lang === 'vi' ? 'Sự tích Chú Cuội & Cây Đa' : 'Vietnamese Folklore Origin')), React.createElement("div", {
      className: "intro-lang-switch"
    }, React.createElement("button", {
      className: `lang-pill ${lang === 'vi' ? 'active' : ''}`,
      onClick: () => {
        sounds.playClick();
        setLang('vi');
      }
    }, "🇻🇳 Tiếng Việt"), React.createElement("button", {
      className: `lang-pill ${lang === 'en' ? 'active' : ''}`,
      onClick: () => {
        sounds.playClick();
        setLang('en');
      }
    }, "🇺🇸 English")), showFolkStory && React.createElement("div", {
      className: "modal-overlay",
      onClick: () => setShowFolkStory(false)
    }, React.createElement("div", {
      className: "modal-content folk-modal",
      onClick: e => e.stopPropagation()
    }, React.createElement("div", {
      className: "modal-header"
    }, React.createElement("h3", null, lang === 'vi' ? 'Sự Tích Chú Cuội Cung Trăng' : 'The Legend of Chu Cuội'), React.createElement("button", {
      className: "close-btn",
      onClick: () => setShowFolkStory(false)
    }, "×")), React.createElement("div", {
      className: "modal-body"
    }, React.createElement("img", {
      src: "assets/cuoi-wife-memory.png",
      alt: "Cuội memory",
      className: "folk-img"
    }), React.createElement("p", {
      className: "folk-text"
    }, lang === 'vi' ? "Theo cổ tích Việt Nam, chú Cuội vì giữ lấy cây đa thần kỳ chữa bệnh cho muôn loài mà bị kéo bay lên tận Cung Trăng. Trải qua bao năm tháng một mình nơi Mặt Trăng tĩnh lặng, Cuội đã chứng kiến những vị khách phi thường từ Trái Đất hạ cánh mang theo khát vọng hòa bình và khám phá!" : "In Vietnamese folklore, Chu Cuoi held onto the roots of a miraculous healing banyan tree that soared into the sky, carrying him to the Moon. Over generations in the quiet lunar solitude, Cuoi has witnessed remarkable spacecraft arrive from Earth, carrying humanity's courage, science, and peaceful dreams!"), React.createElement("div", {
      className: "dialogue-quote"
    }, React.createElement("em", null, "\"", t.introWifeDialogue, "\""))), React.createElement("div", {
      className: "modal-footer"
    }, React.createElement("button", {
      className: "btn-primary",
      onClick: () => setShowFolkStory(false)
    }, t.close))))));
  }
  function MoonMap({
    lang,
    visitedStations,
    starsCollected,
    currentStationId,
    onSelectStation,
    onGoToFinalStory,
    allStationsVisited
  }) {
    const t = translations[lang];
    const [showDrawer, setShowDrawer] = useState(false);
    const scrollRef = useRef(null);
    useEffect(() => {
      if (scrollRef.current) {
        const activeEl = scrollRef.current.querySelector(`.station-node[data-id="${currentStationId}"]`);
        if (activeEl) {
          activeEl.scrollIntoView({
            behavior: 'smooth',
            inline: 'center',
            block: 'nearest'
          });
        }
      }
    }, [currentStationId]);
    const handleStationClick = id => {
      sounds.playClick();
      onSelectStation(id);
    };
    const handleNextStation = () => {
      sounds.playClick();
      const nextId = currentStationId < 6 ? currentStationId + 1 : 1;
      onSelectStation(nextId);
    };
    const handlePrevStation = () => {
      sounds.playClick();
      const prevId = currentStationId > 1 ? currentStationId - 1 : 6;
      onSelectStation(prevId);
    };
    return React.createElement("div", {
      className: "screen map-screen"
    }, React.createElement("div", {
      className: "map-top-bar"
    }, React.createElement("div", {
      className: "map-info-left"
    }, React.createElement("h2", {
      className: "map-title"
    }, "🗺️ ", t.missionTimeline), React.createElement("div", {
      className: "progress-bar-container"
    }, React.createElement("div", {
      className: "progress-bar-track"
    }, React.createElement("div", {
      className: "progress-bar-fill",
      style: {
        width: `${visitedStations.length / 6 * 100}%`
      }
    })), React.createElement("span", {
      className: "progress-label"
    }, visitedStations.length, "/6 ", t.stationsVisited, " (⭐ ", starsCollected.length, "/6)"))), React.createElement("div", {
      className: "map-actions-right"
    }, React.createElement("button", {
      className: "btn-secondary station-drawer-btn",
      onClick: () => {
        sounds.playClick();
        setShowDrawer(true);
      }
    }, "📋 ", t.chooseStation), allStationsVisited && React.createElement("button", {
      className: "btn-primary final-story-pulse-btn glow-effect",
      onClick: () => {
        sounds.playClick();
        onGoToFinalStory();
      }
    }, "📖 ", t.finalStoryTitle, " →"))), React.createElement("div", {
      className: "moon-panorama-wrapper",
      ref: scrollRef
    }, React.createElement("div", {
      className: "moon-panorama"
    }, React.createElement("div", {
      className: "panorama-stars"
    }), React.createElement("div", {
      className: "earth-on-horizon",
      title: "Trái Đất / Planet Earth"
    }, React.createElement("div", {
      className: "earth-glow"
    }), React.createElement("div", {
      className: "earth-sphere"
    })), React.createElement("div", {
      className: "lunar-surface-curve"
    }, React.createElement("svg", {
      viewBox: "0 0 2400 300",
      preserveAspectRatio: "none",
      className: "lunar-terrain-svg"
    }, React.createElement("path", {
      d: "M0,180 Q200,120 400,160 T800,150 T1200,170 T1600,130 T2000,170 T2400,150 L2400,300 L0,300 Z",
      fill: "#161b29"
    }), React.createElement("path", {
      d: "M0,220 Q300,180 600,210 T1200,200 T1800,220 T2400,190 L2400,300 L0,300 Z",
      fill: "#0f131f"
    }))), React.createElement("div", {
      className: "timeline-connector-line"
    }), React.createElement("div", {
      className: "stations-track"
    }, missionsData.map((mission, index) => {
      const isVisited = visitedStations.includes(mission.id);
      const isCurrent = currentStationId === mission.id;
      const hasStar = starsCollected.includes(mission.id);
      const isDeepSpace = mission.id === 6;
      return React.createElement("div", {
        key: mission.id,
        className: `station-node ${isCurrent ? 'active' : ''} ${isVisited ? 'visited' : ''} ${isDeepSpace ? 'deep-space-node' : ''}`,
        "data-id": mission.id,
        style: {
          left: `${140 + index * 360}px`
        },
        onClick: () => handleStationClick(mission.id)
      }, isCurrent && React.createElement("div", {
        className: "cuoi-travelling-marker"
      }, React.createElement("img", {
        src: "assets/cuoi-waving.png",
        alt: "Cuội at this station",
        className: "cuoi-marker-img"
      }), React.createElement("div", {
        className: "marker-speech-tag"
      }, "Cuội!")), React.createElement("div", {
        className: "node-beacon"
      }, React.createElement("div", {
        className: "beacon-ring"
      }), React.createElement("div", {
        className: "beacon-core"
      }, isDeepSpace ? '📡' : hasStar ? '⭐' : isVisited ? '✓' : mission.id)), React.createElement("div", {
        className: "node-card"
      }, React.createElement("div", {
        className: "node-year-badge"
      }, mission.year), React.createElement("div", {
        className: "node-img-thumb"
      }, React.createElement("img", {
        src: mission.nasaImg,
        alt: mission.title[lang],
        loading: "lazy",
        className: "thumb-image"
      })), React.createElement("h3", {
        className: "node-title"
      }, mission.title[lang]), React.createElement("div", {
        className: "node-meta-pills"
      }, hasStar && React.createElement("span", {
        className: "star-badge",
        title: "Đã thu thập Ngôi sao!"
      }, "⭐"), isVisited && React.createElement("span", {
        className: "visited-badge"
      }, "✓ ", lang === 'vi' ? 'Đã xem' : 'Visited'), isDeepSpace && React.createElement("span", {
        className: "deep-space-pill"
      }, "🌌 Interstellar"))));
    })), React.createElement("div", {
      className: "deep-space-signal-animation",
      style: {
        left: `${140 + 5 * 360}px`
      }
    }, React.createElement("div", {
      className: "signal-wave wave-1"
    }), React.createElement("div", {
      className: "signal-wave wave-2"
    }), React.createElement("div", {
      className: "signal-wave wave-3"
    }), React.createElement("div", {
      className: "signal-caption"
    }, t.deepSpaceStationNote)))), React.createElement("div", {
      className: "map-bottom-controls"
    }, React.createElement("button", {
      className: "map-nav-btn prev-btn",
      onClick: handlePrevStation,
      title: t.prevStation
    }, "◀ ", t.prevStation), React.createElement("div", {
      className: "map-current-pill"
    }, React.createElement("span", null, lang === 'vi' ? 'Trạm' : 'Station', " ", currentStationId, "/6:"), React.createElement("strong", null, missionsData[currentStationId - 1].title[lang]), React.createElement("button", {
      className: "btn-primary open-station-btn",
      onClick: () => handleStationClick(currentStationId)
    }, "🚀 ", lang === 'vi' ? 'Khám phá ngay' : 'Explore Now')), React.createElement("button", {
      className: "map-nav-btn next-btn",
      onClick: handleNextStation,
      title: t.nextStation
    }, t.nextStation, " ▶")), showDrawer && React.createElement("div", {
      className: "modal-overlay",
      onClick: () => setShowDrawer(false)
    }, React.createElement("div", {
      className: "drawer-panel",
      onClick: e => e.stopPropagation()
    }, React.createElement("div", {
      className: "drawer-header"
    }, React.createElement("h3", null, "📋 ", t.chooseStation), React.createElement("button", {
      className: "close-btn",
      onClick: () => setShowDrawer(false)
    }, "×")), React.createElement("div", {
      className: "drawer-list"
    }, missionsData.map(m => {
      const isVisited = visitedStations.includes(m.id);
      const hasStar = starsCollected.includes(m.id);
      return React.createElement("div", {
        key: m.id,
        className: `drawer-item ${currentStationId === m.id ? 'active' : ''}`,
        onClick: () => {
          setShowDrawer(false);
          handleStationClick(m.id);
        }
      }, React.createElement("div", {
        className: "drawer-item-thumb"
      }, React.createElement("img", {
        src: m.nasaImg,
        alt: m.title[lang]
      })), React.createElement("div", {
        className: "drawer-item-info"
      }, React.createElement("div", {
        className: "drawer-item-year"
      }, "Năm ", m.year), React.createElement("div", {
        className: "drawer-item-title"
      }, m.title[lang]), React.createElement("div", {
        className: "drawer-item-sub"
      }, m.subtitle[lang])), React.createElement("div", {
        className: "drawer-item-status"
      }, hasStar && React.createElement("span", {
        title: "Knowledge Star"
      }, "⭐"), isVisited && React.createElement("span", {
        className: "check"
      }, "✓")));
    })))));
  }
  function MissionScene({
    missionId,
    lang,
    onBackToMap,
    onNextStation,
    onPrevStation,
    onCollectStar,
    starsCollected,
    onGoToFinalStory
  }) {
    const t = translations[lang];
    const mission = missionsData.find(m => m.id === missionId) || missionsData[0];
    const dialogues = mission.dialogues[lang];
    const [dialogueIdx, setDialogueIdx] = useState(0);
    const [showNasaFacts, setShowNasaFacts] = useState(false);
    const [zoomImage, setZoomImage] = useState(null);
    const isDialogueFinished = dialogueIdx >= dialogues.length - 1;
    const hasStar = starsCollected.includes(mission.id);
    const handleNextDialogue = () => {
      sounds.playBlip();
      if (dialogueIdx < dialogues.length - 1) {
        setDialogueIdx(dialogueIdx + 1);
      }
    };
    const handleCollectKnowledgeStar = () => {
      if (!hasStar) {
        sounds.playStarChime();
        onCollectStar(mission.id);
      }
    };
    const currentDialogue = dialogues[dialogueIdx];
    const isCuoiSpeaker = currentDialogue.speaker.toLowerCase().includes('cuội') || currentDialogue.speaker.toLowerCase().includes('cuoi');
    return React.createElement("div", {
      className: "screen mission-scene-screen"
    }, React.createElement("div", {
      className: "scene-header"
    }, React.createElement("button", {
      className: "btn-secondary nav-btn",
      onClick: () => {
        sounds.playClick();
        onBackToMap();
      }
    }, "🗺️ ", t.backToMap), React.createElement("div", {
      className: "scene-header-center"
    }, React.createElement("span", {
      className: "mission-year-pill"
    }, "Năm / Year ", mission.year), React.createElement("h2", {
      className: "scene-header-title"
    }, mission.title[lang]), React.createElement("span", {
      className: "scene-header-sub"
    }, mission.subtitle[lang])), React.createElement("div", {
      className: "scene-nav-arrows"
    }, React.createElement("button", {
      className: "btn-icon",
      onClick: () => {
        sounds.playClick();
        onPrevStation();
      },
      title: t.prevStation
    }, "◀"), React.createElement("span", {
      className: "station-indicator-pill"
    }, mission.id, "/6"), React.createElement("button", {
      className: "btn-icon",
      onClick: () => {
        sounds.playClick();
        if (mission.id === 6) {
          onGoToFinalStory();
        } else {
          onNextStation();
        }
      },
      title: mission.id === 6 ? t.finalStoryTitle : t.nextStation
    }, "▶"))), React.createElement("div", {
      className: "scene-content-grid"
    }, React.createElement("div", {
      className: "scene-visual-showcase"
    }, React.createElement("div", {
      className: "visual-card-wrapper cuoi-artwork-card"
    }, React.createElement("div", {
      className: "card-badge cuoi-badge"
    }, React.createElement("span", null, "🎭 ", t.dualViewCuoi)), React.createElement("div", {
      className: "image-container contain-mode"
    }, React.createElement("img", {
      src: mission.cuoiImg,
      alt: mission.title[lang],
      className: "artwork-img"
    }))), React.createElement("div", {
      className: "visual-card-wrapper nasa-photo-card",
      onClick: () => setZoomImage(mission.nasaImg),
      title: t.clickToZoom
    }, React.createElement("div", {
      className: "card-badge nasa-badge"
    }, React.createElement("span", null, "🚀 ", t.dualViewNasa, " (NASA Archive)")), React.createElement("div", {
      className: "image-container contain-mode zoomable"
    }, React.createElement("img", {
      src: mission.nasaImg,
      alt: mission.nasaImgCaption[lang],
      className: "nasa-img"
    }), React.createElement("div", {
      className: "zoom-hint-overlay"
    }, "🔍 ", t.clickToZoom)), React.createElement("p", {
      className: "nasa-caption-text"
    }, mission.nasaImgCaption[lang]))), React.createElement("div", {
      className: "scene-story-panel"
    }, React.createElement("div", {
      className: "badge-tag-row"
    }, React.createElement("span", {
      className: "category-tag fictional-tag"
    }, "🎭 ", t.fictionalLabel), React.createElement("span", {
      className: "category-tag nasa-tag"
    }, "🔬 ", t.nasaFactLabel)), React.createElement("div", {
      className: "dialogue-box-container"
    }, React.createElement("div", {
      className: "dialogue-meta-row"
    }, React.createElement("span", {
      className: "speaker-name"
    }, isCuoiSpeaker ? '🌕 Chú Cuội' : `🛸 ${currentDialogue.speaker}`), React.createElement("span", {
      className: "dialogue-counter"
    }, t.dialogueStep, " ", dialogueIdx + 1, "/", dialogues.length)), React.createElement("div", {
      className: `speech-bubble ${isCuoiSpeaker ? 'cuoi-bubble' : 'visitor-bubble'}`
    }, React.createElement("p", {
      className: "speech-paragraph"
    }, "\"", currentDialogue.text, "\"")), React.createElement("div", {
      className: "dialogue-actions-row"
    }, !isDialogueFinished ? React.createElement("button", {
      className: "btn-primary next-dialogue-btn glow-effect",
      onClick: handleNextDialogue
    }, "💬 ", t.nextDialogue, " (", dialogueIdx + 1, "/", dialogues.length, ") →") : React.createElement("div", {
      className: "dialogue-completed-banner"
    }, React.createElement("span", null, "✨ ", t.dialogueComplete)))), React.createElement("div", {
      className: "takeaway-card"
    }, React.createElement("div", {
      className: "takeaway-header"
    }, React.createElement("span", {
      className: "takeaway-sparkle"
    }, "💡"), React.createElement("h4", null, t.takeawayLabel)), React.createElement("p", {
      className: "takeaway-body"
    }, "\"", mission.takeaway[lang], "\"")), React.createElement("div", {
      className: "collect-star-container"
    }, React.createElement("button", {
      className: `btn-star ${hasStar ? 'star-collected' : isDialogueFinished ? 'star-ready glow-effect' : 'star-locked'}`,
      onClick: handleCollectKnowledgeStar,
      disabled: !isDialogueFinished || hasStar
    }, hasStar ? React.createElement(React.Fragment, null, "⭐ ", t.starAlreadyCollected) : isDialogueFinished ? React.createElement(React.Fragment, null, "🌟 ", t.collectStar) : React.createElement(React.Fragment, null, "🔒 ", lang === 'vi' ? 'Hoàn thành hội thoại để nhận Sao' : 'Finish dialogue to unlock Star'))), React.createElement("div", {
      className: "nasa-facts-accordion"
    }, React.createElement("button", {
      className: "accordion-toggle-btn",
      onClick: () => {
        sounds.playClick();
        setShowNasaFacts(!showNasaFacts);
      }
    }, React.createElement("span", null, showNasaFacts ? '📂' : '📁', " ", showNasaFacts ? t.hideNasaFacts : t.seeNasaFacts), React.createElement("span", {
      className: "arrow-icon"
    }, showNasaFacts ? '▲' : '▼')), showNasaFacts && React.createElement("div", {
      className: "nasa-facts-body"
    }, React.createElement("div", {
      className: "nasa-source-badge"
    }, React.createElement("span", null, "🏛️ National Aeronautics and Space Administration (NASA)")), React.createElement("p", {
      className: "nasa-facts-paragraph"
    }, mission.nasaFacts[lang]), React.createElement("div", {
      className: "nasa-link-row"
    }, React.createElement("a", {
      href: mission.sourceUrl,
      target: "_blank",
      rel: "noopener noreferrer",
      className: "nasa-official-link"
    }, "🔗 ", t.officialNasaSource, " ↗")))), React.createElement("div", {
      className: "scene-footer-nav"
    }, React.createElement("button", {
      className: "btn-secondary",
      onClick: () => {
        sounds.playClick();
        onPrevStation();
      }
    }, "◀ ", t.prevStation), React.createElement("button", {
      className: "btn-primary",
      onClick: () => {
        sounds.playClick();
        if (mission.id === 6) {
          onGoToFinalStory();
        } else {
          onNextStation();
        }
      }
    }, mission.id === 6 ? `📖 ${t.finalStoryTitle} →` : `${t.nextStation} ▶`)))), zoomImage && React.createElement("div", {
      className: "modal-overlay",
      onClick: () => setZoomImage(null)
    }, React.createElement("div", {
      className: "zoom-modal-container",
      onClick: e => e.stopPropagation()
    }, React.createElement("button", {
      className: "close-btn zoom-close",
      onClick: () => setZoomImage(null)
    }, "×"), React.createElement("img", {
      src: zoomImage,
      alt: "NASA High Res",
      className: "zoomed-nasa-img"
    }), React.createElement("div", {
      className: "zoom-caption"
    }, mission.nasaImgCaption[lang]))));
  }
  function FinalStoryScreen({
    lang,
    onStartQuiz,
    onBackToMap
  }) {
    const t = translations[lang];
    return React.createElement("div", {
      className: "screen final-story-screen"
    }, React.createElement("div", {
      className: "final-story-card"
    }, React.createElement("div", {
      className: "final-header"
    }, React.createElement("div", {
      className: "final-badge"
    }, React.createElement("span", null, "✨ ", lang === 'vi' ? 'Thông Điệp Ý Nghĩa' : 'Core Exploration Takeaway')), React.createElement("h2", {
      className: "final-title"
    }, t.finalStoryTitle), React.createElement("h3", {
      className: "final-subtitle"
    }, "\"", t.appSubtitle, "\"")), React.createElement("div", {
      className: "final-artwork-grid"
    }, React.createElement("div", {
      className: "artwork-item"
    }, React.createElement("img", {
      src: "assets/cuoi-final-story.png",
      alt: "Cuội with hand on heart",
      className: "final-img"
    }), React.createElement("span", {
      className: "artwork-caption"
    }, lang === 'vi' ? 'Cuội ghi nhớ câu chuyện của nhân loại' : 'Cuội keeping human memories alive')), React.createElement("div", {
      className: "artwork-item"
    }, React.createElement("img", {
      src: "assets/cuoi-final-values.png",
      alt: "Cuội space exploration values",
      className: "final-img"
    }), React.createElement("span", {
      className: "artwork-caption"
    }, lang === 'vi' ? '3 Giá trị thám hiểm: Khám phá - Học hỏi - Giúp đỡ' : 'Core Values: Explore - Learn - Help'))), React.createElement("div", {
      className: "cuoi-quote-banner"
    }, React.createElement("div", {
      className: "quote-mark"
    }, "“"), React.createElement("p", {
      className: "quote-text"
    }, finalStoryContent.quote[lang]), React.createElement("div", {
      className: "quote-author"
    }, "– Chú Cuội / Chu Cuoi –")), React.createElement("div", {
      className: "educational-heritage-box"
    }, React.createElement("div", {
      className: "heritage-header"
    }, React.createElement("h4", null, "🛰️ ", t.heritageVsDebrisTitle)), React.createElement("div", {
      className: "heritage-grid"
    }, React.createElement("div", {
      className: "heritage-col good-heritage"
    }, React.createElement("h5", null, "🏛️ ", lang === 'vi' ? 'Di sản Không gian (Space Heritage)' : 'Space Heritage'), React.createElement("p", null, t.heritageDesc)), React.createElement("div", {
      className: "heritage-col space-debris"
    }, React.createElement("h5", null, "⚠️ ", lang === 'vi' ? 'Rác Không gian (Space Debris)' : 'Space Debris'), React.createElement("p", null, t.debrisDesc))), React.createElement("div", {
      className: "heritage-footer-note"
    }, React.createElement("em", null, lang === 'vi' ? "Các thiết bị trên Mặt Trăng không phải là 'rác thải'. Chúng là những hiện vật lịch sử vĩ đại được cộng đồng quốc tế kêu gọi bảo tồn như di sản của nền văn minh Trái Đất." : "Equipment left on the Moon is not 'trash'. These are precious historical monuments that international scientific conventions work to protect as the heritage of human civilization."))), React.createElement("div", {
      className: "final-actions"
    }, React.createElement("button", {
      className: "btn-secondary",
      onClick: () => {
        sounds.playClick();
        onBackToMap();
      }
    }, "🗺️ ", t.backToMap), React.createElement("button", {
      className: "btn-primary start-quiz-cta glow-effect",
      onClick: () => {
        sounds.playClick();
        onStartQuiz();
      }
    }, "🚀 ", t.startChallenge, " →"))));
  }
  function QuizScreen({
    lang,
    onFinishQuiz,
    onBackToMap,
    quizAnswers,
    setQuizAnswers
  }) {
    const t = translations[lang];
    const [currentIdx, setCurrentIdx] = useState(0);
    const question = quizQuestions[currentIdx];
    const totalQuestions = quizQuestions.length;
    const currentSelection = quizAnswers[currentIdx];
    const hasAnsweredCurrent = currentSelection !== undefined;
    const handleSelectOption = optionIdx => {
      if (hasAnsweredCurrent) return;
      sounds.playClick();
      const isCorrect = optionIdx === question.correctIndex;
      if (isCorrect) {
        sounds.playCorrect();
      } else {
        sounds.playWrong();
      }
      const updated = {
        ...quizAnswers,
        [currentIdx]: optionIdx
      };
      setQuizAnswers(updated);
    };
    const handleNext = () => {
      sounds.playClick();
      if (currentIdx < totalQuestions - 1) {
        setCurrentIdx(currentIdx + 1);
      } else {
        let score = 0;
        quizQuestions.forEach((q, idx) => {
          if (quizAnswers[idx] === q.correctIndex) {
            score += 1;
          }
        });
        onFinishQuiz(score);
      }
    };
    const handlePrev = () => {
      sounds.playClick();
      if (currentIdx > 0) {
        setCurrentIdx(currentIdx - 1);
      }
    };
    let currentScore = 0;
    quizQuestions.forEach((q, idx) => {
      if (quizAnswers[idx] === q.correctIndex) {
        currentScore += 1;
      }
    });
    return React.createElement("div", {
      className: "screen quiz-screen"
    }, React.createElement("div", {
      className: "quiz-container-card"
    }, React.createElement("div", {
      className: "quiz-header"
    }, React.createElement("div", {
      className: "quiz-header-top"
    }, React.createElement("span", {
      className: "quiz-badge"
    }, "🧠 ", t.quizTitle), React.createElement("span", {
      className: "quiz-score-badge"
    }, t.score, ": ", React.createElement("strong", null, currentScore, "/", totalQuestions))), React.createElement("div", {
      className: "quiz-progress-bar"
    }, React.createElement("div", {
      className: "quiz-progress-fill",
      style: {
        width: `${(currentIdx + 1) / totalQuestions * 100}%`
      }
    })), React.createElement("div", {
      className: "quiz-step-label"
    }, t.question, " ", currentIdx + 1, " ", t.of, " ", totalQuestions)), React.createElement("div", {
      className: "quiz-question-box"
    }, React.createElement("h3", {
      className: "question-text"
    }, question.question[lang])), React.createElement("div", {
      className: "options-grid"
    }, question.options[lang].map((optText, optIdx) => {
      const isSelected = currentSelection === optIdx;
      const isCorrect = optIdx === question.correctIndex;
      let statusClass = '';
      if (hasAnsweredCurrent) {
        if (isCorrect) {
          statusClass = 'correct-opt';
        } else if (isSelected) {
          statusClass = 'wrong-opt';
        } else {
          statusClass = 'dimmed-opt';
        }
      }
      return React.createElement("button", {
        key: optIdx,
        className: `option-btn ${statusClass} ${isSelected ? 'selected' : ''}`,
        onClick: () => handleSelectOption(optIdx),
        disabled: hasAnsweredCurrent
      }, React.createElement("span", {
        className: "opt-letter"
      }, String.fromCharCode(65 + optIdx)), React.createElement("span", {
        className: "opt-text"
      }, optText), hasAnsweredCurrent && isCorrect && React.createElement("span", {
        className: "opt-mark"
      }, "✓"), hasAnsweredCurrent && isSelected && !isCorrect && React.createElement("span", {
        className: "opt-mark"
      }, "✗"));
    })), hasAnsweredCurrent && React.createElement("div", {
      className: `explanation-card ${currentSelection === question.correctIndex ? 'exp-correct' : 'exp-wrong'}`
    }, React.createElement("div", {
      className: "exp-header"
    }, React.createElement("span", {
      className: "exp-icon"
    }, currentSelection === question.correctIndex ? '🎉 ' + t.correct : '💡 ' + t.incorrect)), React.createElement("p", {
      className: "exp-body"
    }, question.explanation[lang])), React.createElement("div", {
      className: "quiz-nav-row"
    }, React.createElement("button", {
      className: "btn-secondary",
      onClick: handlePrev,
      disabled: currentIdx === 0
    }, "◀ ", lang === 'vi' ? 'Câu trước' : 'Previous'), React.createElement("button", {
      className: "btn-secondary back-map-btn",
      onClick: () => {
        sounds.playClick();
        onBackToMap();
      }
    }, "🗺️ ", t.backToMap), React.createElement("button", {
      className: "btn-primary next-q-btn glow-effect",
      onClick: handleNext,
      disabled: !hasAnsweredCurrent
    }, currentIdx < totalQuestions - 1 ? `${t.nextQuestion} ▶` : `🏆 ${t.finishQuiz}`))));
  }
  function ResultsScreen({
    lang,
    score,
    quizAnswers,
    onTryAgain,
    onExploreAgain,
    studentName,
    setStudentName
  }) {
    const t = translations[lang];
    const [showReview, setShowReview] = useState(false);
    let badgeKey = 'badgeCadet';
    let badgeColor = '#cd7f32';
    let badgeIcon = '🥉';
    if (score === 7) {
      badgeKey = 'badgeGuardian';
      badgeColor = '#ffd700';
      badgeIcon = '👑';
    } else if (score >= 5) {
      badgeKey = 'badgeExplorer';
      badgeColor = '#e0e0e0';
      badgeIcon = '🥈';
    }
    const badgeTitle = t[badgeKey];
    useEffect(() => {
      sounds.playFanfare();
      if (typeof window !== 'undefined' && window.confetti) {
        window.confetti({
          particleCount: 120,
          spread: 80,
          origin: {
            y: 0.6
          }
        });
      }
    }, []);
    const handlePrintCertificate = () => {
      sounds.playClick();
      window.print();
    };
    const todayFormatted = new Date().toLocaleDateString(lang === 'vi' ? 'vi-VN' : 'en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
    return React.createElement("div", {
      className: "screen results-screen"
    }, React.createElement("div", {
      className: "results-card no-print"
    }, React.createElement("div", {
      className: "results-top-badge"
    }, React.createElement("span", null, "🏆 ", t.resultsTitle)), React.createElement("div", {
      className: "badge-showcase",
      style: {
        borderColor: badgeColor
      }
    }, React.createElement("div", {
      className: "badge-icon-large"
    }, badgeIcon), React.createElement("h2", {
      className: "badge-title",
      style: {
        color: badgeColor
      }
    }, badgeTitle), React.createElement("div", {
      className: "score-counter-large"
    }, React.createElement("span", {
      className: "score-num"
    }, score), React.createElement("span", {
      className: "score-denom"
    }, "/ 7")), React.createElement("div", {
      className: "animated-stars-row"
    }, Array.from({
      length: 7
    }).map((_, i) => React.createElement("span", {
      key: i,
      className: `star-symbol ${i < score ? 'star-earned' : 'star-empty'}`,
      style: {
        animationDelay: `${i * 0.1}s`
      }
    }, "★")))), React.createElement("p", {
      className: "results-congrats-text"
    }, score === 7 ? lang === 'vi' ? 'Tuyệt đỉnh! Bạn là một Vệ Binh Mặt Trăng xuất sắc hiểu rõ từng dấu mốc lịch sử không gian!' : 'Spectacular! You are a true Moon Guardian with mastery over space exploration history!' : score >= 5 ? lang === 'vi' ? 'Rất giỏi! Bạn đã trở thành Nhà Thám Hiểm Mặt Trăng cừ khôi nắm vững các bí mật vũ trụ!' : 'Great job! You have proven yourself as a skilled Moon Explorer with strong space knowledge!' : lang === 'vi' ? 'Khởi đầu tuyệt vời! Bạn là Học Viên Không Gian đầy nhiệt huyết sẵn sàng khám phá thêm!' : 'A promising start! You are an eager Space Cadet ready to discover more!'), React.createElement("div", {
      className: "results-actions-group"
    }, React.createElement("button", {
      className: "btn-primary print-cert-btn glow-effect",
      onClick: handlePrintCertificate
    }, "🖨️ ", t.printCertificate), React.createElement("button", {
      className: "btn-secondary",
      onClick: () => {
        sounds.playClick();
        setShowReview(!showReview);
      }
    }, "📋 ", showReview ? lang === 'vi' ? 'Ẩn Lại Bài Thi' : 'Hide Review' : lang === 'vi' ? 'Xem Lại 7 Câu Trả Lời' : 'Review 7 Questions'), React.createElement("button", {
      className: "btn-secondary",
      onClick: () => {
        sounds.playClick();
        onTryAgain();
      }
    }, "🔄 ", t.tryAgain), React.createElement("button", {
      className: "btn-secondary",
      onClick: () => {
        sounds.playClick();
        onExploreAgain();
      }
    }, "🗺️ ", t.exploreAgain)), showReview && React.createElement("div", {
      className: "quiz-review-section"
    }, React.createElement("h3", {
      className: "review-title"
    }, lang === 'vi' ? 'Chi Tiết 7 Câu Hỏi & Lời Giải Thích Khoa Học' : 'Review of 7 Questions & Scientific Explanations'), React.createElement("div", {
      className: "review-list"
    }, quizQuestions.map((q, idx) => {
      const userChoice = quizAnswers[idx];
      const isCorrect = userChoice === q.correctIndex;
      return React.createElement("div", {
        key: q.id,
        className: `review-item ${isCorrect ? 'item-correct' : 'item-wrong'}`
      }, React.createElement("div", {
        className: "review-item-header"
      }, React.createElement("span", {
        className: "q-badge"
      }, "Câu ", idx + 1), React.createElement("span", {
        className: "status-badge"
      }, isCorrect ? '✓ Đúng' : '✗ Sai')), React.createElement("p", {
        className: "review-q-text"
      }, q.question[lang]), React.createElement("div", {
        className: "review-answer-info"
      }, React.createElement("div", null, React.createElement("strong", null, lang === 'vi' ? 'Bạn chọn:' : 'Your answer:', " "), React.createElement("span", null, userChoice !== undefined ? q.options[lang][userChoice] : lang === 'vi' ? 'Chưa chọn' : 'Not answered')), !isCorrect && React.createElement("div", {
        className: "correct-answer-line"
      }, React.createElement("strong", null, lang === 'vi' ? 'Đáp án đúng:' : 'Correct answer:', " "), React.createElement("span", {
        className: "correct-highlight"
      }, q.options[lang][q.correctIndex]))), React.createElement("div", {
        className: "review-explanation"
      }, React.createElement("em", null, "💡 ", q.explanation[lang])));
    })))), React.createElement("div", {
      className: "certificate-section-wrapper"
    }, React.createElement("div", {
      className: "cert-input-row no-print"
    }, React.createElement("label", {
      htmlFor: "student-name-input",
      className: "cert-input-label"
    }, "✍️ ", t.studentName, ":"), React.createElement("input", {
      id: "student-name-input",
      type: "text",
      className: "cert-name-input",
      placeholder: t.namePlaceholder,
      value: studentName,
      onChange: e => setStudentName(e.target.value)
    })), React.createElement("div", {
      className: "certificate-frame print-target",
      id: "certificate-print-area"
    }, React.createElement("div", {
      className: "cert-border-outer"
    }, React.createElement("div", {
      className: "cert-border-inner"
    }, React.createElement("div", {
      className: "cert-corner tl"
    }, "★"), React.createElement("div", {
      className: "cert-corner tr"
    }, "★"), React.createElement("div", {
      className: "cert-corner bl"
    }, "★"), React.createElement("div", {
      className: "cert-corner br"
    }, "★"), React.createElement("div", {
      className: "cert-header"
    }, React.createElement("div", {
      className: "cert-logo-row"
    }, React.createElement("div", {
      className: "cert-logo-circle"
    }, "🌙"), React.createElement("div", {
      className: "cert-nasa-tag"
    }, "NASA SPACE APPS • STEM ADVENTURE"), React.createElement("div", {
      className: "cert-logo-circle"
    }, "🚀")), React.createElement("h1", {
      className: "cert-title"
    }, t.certificateTitle), React.createElement("h2", {
      className: "cert-subtitle"
    }, "CUOI'S MOON ADVENTURE – LEFT BEHIND, NEVER FORGOTTEN")), React.createElement("div", {
      className: "cert-body"
    }, React.createElement("p", {
      className: "cert-presented-text"
    }, t.certificateRecipient), React.createElement("div", {
      className: "cert-student-name"
    }, studentName.trim() ? studentName : lang === 'vi' ? 'NHÀ THÁM HIỂM TƯƠNG LAI' : 'FUTURE SPACE EXPLORER'), React.createElement("div", {
      className: "cert-divider-line"
    }), React.createElement("p", {
      className: "cert-achievement-text"
    }, t.certificateAchievement), React.createElement("div", {
      className: "cert-badge-award",
      style: {
        color: badgeColor
      }
    }, badgeIcon, " ", badgeTitle)), React.createElement("div", {
      className: "cert-footer"
    }, React.createElement("div", {
      className: "cert-meta-item"
    }, React.createElement("span", {
      className: "meta-label"
    }, t.certificateDate, ":"), React.createElement("span", {
      className: "meta-val"
    }, todayFormatted)), React.createElement("div", {
      className: "cert-official-seal"
    }, React.createElement("div", {
      className: "seal-ring"
    }, React.createElement("span", {
      className: "seal-text"
    }, "CUỘI'S MOON HERITAGE"), React.createElement("span", {
      className: "seal-star"
    }, "⭐ SEAL OF HONOR ⭐"))), React.createElement("div", {
      className: "cert-meta-item"
    }, React.createElement("span", {
      className: "meta-label"
    }, t.certificateScore, ":"), React.createElement("span", {
      className: "meta-val"
    }, score, " / 7 (", Math.round(score / 7 * 100), "%)"))))))));
  }
  function App() {
    const [lang, setLang] = useState(() => {
      return localStorage.getItem('cuoi_lang') || 'vi';
    });
    const [muted, setMuted] = useState(() => {
      return localStorage.getItem('cuoi_muted') === 'true';
    });
    const [visitedStations, setVisitedStations] = useState(() => {
      try {
        const saved = localStorage.getItem('cuoi_visited');
        return saved ? JSON.parse(saved) : [];
      } catch {
        return [];
      }
    });
    const [starsCollected, setStarsCollected] = useState(() => {
      try {
        const saved = localStorage.getItem('cuoi_stars');
        return saved ? JSON.parse(saved) : [];
      } catch {
        return [];
      }
    });
    const [currentScreen, setCurrentScreen] = useState('intro');
    const [currentMissionId, setCurrentMissionId] = useState(1);
    const [studentName, setStudentName] = useState(() => {
      return localStorage.getItem('cuoi_student_name') || '';
    });
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
    const handleSelectStation = id => {
      setCurrentMissionId(id);
      if (!visitedStations.includes(id)) {
        setVisitedStations(prev => [...prev, id]);
      }
      setCurrentScreen('mission');
    };
    const handleCollectStar = id => {
      if (!starsCollected.includes(id)) {
        setStarsCollected(prev => [...prev, id]);
      }
    };
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
    const handleFinishQuiz = score => {
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
    return React.createElement("div", {
      className: "app-layout"
    }, React.createElement(Header, {
      lang: lang,
      setLang: setLang,
      muted: muted,
      setMuted: setMuted,
      currentScreen: currentScreen,
      setCurrentScreen: setCurrentScreen,
      visitedCount: visitedStations.length,
      starsCount: starsCollected.length,
      totalStations: 6,
      onReset: handleReset
    }), React.createElement("main", {
      className: "app-main-viewport"
    }, currentScreen === 'intro' && React.createElement(IntroScreen, {
      lang: lang,
      setLang: setLang,
      onStart: () => setCurrentScreen('map'),
      visitedCount: visitedStations.length
    }), currentScreen === 'map' && React.createElement(MoonMap, {
      lang: lang,
      visitedStations: visitedStations,
      starsCollected: starsCollected,
      currentStationId: currentMissionId,
      onSelectStation: handleSelectStation,
      onGoToFinalStory: () => setCurrentScreen('final'),
      allStationsVisited: allStationsVisited
    }), currentScreen === 'mission' && React.createElement(MissionScene, {
      missionId: currentMissionId,
      lang: lang,
      onBackToMap: () => setCurrentScreen('map'),
      onNextStation: handleNextStation,
      onPrevStation: handlePrevStation,
      onCollectStar: handleCollectStar,
      starsCollected: starsCollected,
      onGoToFinalStory: () => setCurrentScreen('final')
    }), currentScreen === 'final' && React.createElement(FinalStoryScreen, {
      lang: lang,
      onStartQuiz: () => setCurrentScreen('quiz'),
      onBackToMap: () => setCurrentScreen('map')
    }), currentScreen === 'quiz' && React.createElement(QuizScreen, {
      lang: lang,
      onFinishQuiz: handleFinishQuiz,
      onBackToMap: () => setCurrentScreen('map'),
      quizAnswers: quizAnswers,
      setQuizAnswers: setQuizAnswers
    }), currentScreen === 'results' && React.createElement(ResultsScreen, {
      lang: lang,
      score: quizScore,
      quizAnswers: quizAnswers,
      onTryAgain: handleTryAgain,
      onExploreAgain: () => setCurrentScreen('map'),
      studentName: studentName,
      setStudentName: setStudentName
    })));
  }
  const rootElement = document.getElementById('root');
  if (rootElement) {
    const root = ReactDOM.createRoot(rootElement);
    root.render(React.createElement(React.StrictMode, null, React.createElement(App, null)));
  }
})();