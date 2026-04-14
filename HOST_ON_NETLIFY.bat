@echo off
echo ===========================================
echo    Care2Connect Netlify Deployer
echo ===========================================
echo.
echo [1/2] Building your website...
echo (This may take a minute)
call npm run build
echo.
echo [2/2] Opening Netlify Deployment Page...
echo.
echo >>> INSTRUCTIONS:
echo 1. A folder named "dist" has been created in this directory.
echo 2. When the browser opens, DRAG the "dist" folder onto the screen.
echo.
pause
start https://app.netlify.com/drop
echo.
echo Done! Your website will be live in seconds.
pause
