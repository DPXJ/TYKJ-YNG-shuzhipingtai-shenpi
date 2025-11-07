@echo off
chcp 65001 >nul
echo ========================================
echo   强制刷新浏览器缓存并打开文件
echo ========================================
echo.
echo 正在打开文件（无缓存模式）...
start "" "msedge.exe" --incognito "%~dp0index.html"
echo.
echo 文件已在Edge隐私模式中打开（不使用缓存）
echo 如果看到新样式，说明更新成功！
echo.
pause

