@echo off
chcp 65001 >nul
echo 正在关闭Edge浏览器...
taskkill /F /IM msedge.exe 2>nul
timeout /t 2 /nobreak >nul
echo 正在重新打开文件...
start "" "msedge.exe" "%~dp0index.html"
echo 完成！文件已在Edge浏览器中打开。
pause

