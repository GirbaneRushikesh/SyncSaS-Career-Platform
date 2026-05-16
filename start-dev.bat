@echo off
cd /d "%~dp0web-app"
if not exist "node_modules" (
  echo Installing frontend dependencies (one-time)...
  npm install
)
REM ensure nodemon dev dep exists (one-time)
npm install --no-audit --no-fund --save-dev nodemon
npm run install:web
npm run install:web:dev
npm run dev:nodemon
pause