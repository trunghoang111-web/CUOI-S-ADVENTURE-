@echo off
chcp 65001 >nul
title Cuội's Moon Adventure Launcher
echo ========================================================
echo   CUỘI'S MOON ADVENTURE – BỎ LẠI, NHƯNG KHÔNG QUÊN LÃNG
echo ========================================================
echo.
echo Đang mở ứng dụng trên trình duyệt web của bạn...
echo Địa chỉ: http://localhost:5173
echo.
echo (Nhấn Ctrl + C trong cửa sổ này nếu muốn dừng máy chủ)
echo ========================================================
echo.

start http://localhost:5173
".\node.cmd" "%~dp0scripts\serve.cjs"
pause
