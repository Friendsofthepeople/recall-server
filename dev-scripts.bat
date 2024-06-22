@echo off

REM Create Docker network
docker network create --driver bridge --attachable recall-network

:parseArgs
REM Parse arguments
if "%~1"=="" goto endParse
if "%~1"=="--build" (
    set BUILD=%2
    shift
    shift
    goto parseArgs
) else (
    echo Unknown parameter passed: %~1
    exit /b 1
)

:endParse

REM Check if build parameter is true
if /i "%BUILD%"=="true" (
    docker-compose up --build
) else (
    docker-compose up
)
