@echo off
setlocal enabledelayedexpansion
chcp 65001 >nul
cd /d "%~dp0"

echo ==========================================
echo    TONTONYUTA - ONE CLICK APK (v12.0 MAX)
echo ==========================================

REM --------------------------------------------
REM 1. KIEM TRA DIEU KIEN
REM --------------------------------------------
where node >nul 2>nul || (echo [Loi] NodeJS chua duoc cai dat! && pause && exit /b)
where javac >nul 2>nul || (echo [Loi] Java JDK chua duoc cai dat! && pause && exit /b)

REM --------------------------------------------
REM 2. CAU HINH THONG TIN
REM --------------------------------------------
echo.
echo [!] THIET LAP THONG TIN NHAN BAN
set /p APP_NAME="1. Nhap ten App (VD: Toan 7): "
set /p APP_VERSION="2. Nhap phien ban OTA (VD: 1.0.0): "
set /p TARGET_ID="3. Nhap ID moi (VD: com.tontonyuta.math7): "

REM Cap nhat version vao code
if not "!APP_VERSION!"=="" (
    echo [OK] Dang cap nhat version !APP_VERSION!...
    if exist "src\config.ts" (
        powershell -Command "$c = Get-Content 'src\config.ts'; $c = $c -replace 'export const APP_VERSION = ''.*?''', 'export const APP_VERSION = ''!APP_VERSION!'''; Set-Content 'src\config.ts' $c"
    )
    call npm pkg set version="!APP_VERSION!"
)

REM --------------------------------------------
REM 3. CHONG DONG BO NHAM
REM --------------------------------------------
echo.
if not "!TARGET_ID!"=="" (
    REM Cap nhat ID vao capacitor.config.json
    if exist "capacitor.config.json" (
        powershell -Command "$c = Get-Content 'capacitor.config.json'; $c = $c -replace '\"appId\":\s*\".*?\"', '\"appId\": \"!TARGET_ID!\"'; $c = $c -replace '\"appName\":\s*\".*?\"', '\"appName\": \"!APP_NAME!\"'; Set-Content 'capacitor.config.json' $c -Encoding UTF8"
    )

    REM Neu ID moi khac ID trong Android cu -> xoa android folder de rebuild
    if exist "android\app\build.gradle" (
        powershell -Command "$c = Get-Content 'android\app\build.gradle'; if ($c -match 'applicationId\s+\"!TARGET_ID!\"') { exit 0 } else { exit 1 }"
        if !errorlevel! neq 0 (
            echo [!] Phat hien ID moi. Dang xoa thu muc android cu de tranh nham du lieu...
            rmdir /s /q android
            echo [OK] Da don dep xong.
        )
    )
)

REM --------------------------------------------
REM 4. BUILD GIAO DIEN WEB
REM --------------------------------------------
echo [2/9] Dang build Web (dist)...
call npm install
call npm run build || (echo [Loi] Build Web that bai! && pause && exit /b)

REM --------------------------------------------
REM 5. KHOI TAO ANDROID MOI
REM --------------------------------------------
if not exist android (
    echo [3/9] Dang tao khung Android moi cho !TARGET_ID!...
    call npx cap add android

    REM Cap quyen Internet
    powershell -Command "$p='android\app\src\main\AndroidManifest.xml'; if (Test-Path $p) { $c=Get-Content $p; if($c -notmatch 'android.permission.INTERNET'){ $c -replace '<application', '<uses-permission android:name=\"android.permission.INTERNET\" />`n    <application' | Set-Content $p } }"
)

REM --------------------------------------------
REM 6. DONG BO & BOM PHIEN BAN
REM --------------------------------------------
echo [4/9] Dang dong bo du lieu vao Android...
call npx cap sync android

if not "!APP_VERSION!"=="" (
    powershell -Command "$file = 'android\app\build.gradle'; $c = Get-Content $file; $vCode = [int](Get-Date -UFormat '%%m%%d%%H%%M'); $c = $c -replace 'versionCode\s+\d+', \"versionCode $vCode\"; $c = $c -replace 'versionName\s+\".*?\"', \"versionName '!APP_VERSION!'\"; Set-Content $file $c"
)

REM --------------------------------------------
REM 7. XU LY ICON & SPLASH (FIXED)
REM --------------------------------------------
echo [5/9] Dang xử lý Icon từ thư mục gốc...

REM Tạo thư mục tạm assets nếu chưa có (vì capacitor-assets cần nó)
if not exist "assets" mkdir assets

REM Ép copy icon.png và splash.png vào đúng chỗ nó cần tìm
if exist "icon.png" copy /y "icon.png" "assets\icon.png" >nul
if exist "splash.png" copy /y "splash.png" "assets\splash.png" >nul

REM Nếu không có splash.png, copy icon.png làm splash tạm để không bị lỗi lệnh
if not exist "assets\splash.png" if exist "assets\icon.png" copy /y "assets\icon.png" "assets\splash.png" >nul

REM Chạy lệnh tạo Icon với đường dẫn trực tiếp
if exist "assets\icon.png" (
    echo [OK] Dang bơm Icon vao Android...
    call npx capacitor-assets generate --android --assetPath assets
) else (
    echo [Lỗi] Không tìm thấy file icon.png ngay ngoài thư mục gốc!
)

REM --------------------------------------------
REM 8. BUILD APK
REM --------------------------------------------
echo [6/9] Dang build APK...
cd android
call gradlew.bat assembleDebug --daemon
if !errorlevel! neq 0 (
    echo [Loi] Build APK that bai!
    cd ..
    pause
    exit /b
)
cd ..

REM --------------------------------------------
REM 9. TAO OTA & UPLOAD
REM --------------------------------------------
echo [7/9] Dang tao update.zip...
if exist "update.zip" del /f /q "update.zip"
cd dist && tar.exe -a -c -f ../update.zip * && cd ..

echo [8/9] Dang upload Github...
where gh >nul 2>nul
if !errorlevel! equ 0 (
    if not "!APP_VERSION!"=="" (
        gh release create v!APP_VERSION! "update.zip" --title "v!APP_VERSION!" --notes "Update"
    )
) else (
    echo [Canh bao] Chua cai GitHub CLI gh. Bo qua buoc upload.
)

REM --------------------------------------------
REM 10. BAO CAO GOOGLE SHEETS
REM --------------------------------------------
echo [9/9] Dang bao cao Sheets...
if not "!APP_VERSION!"=="" (
    REM DAN LINK SCRIPT LOP 7 VAO DAY
    curl -s -L -H "Content-Type: application/json" -d "{\"action\":\"update_version\", \"secret\":\"TontonYuta_Dep_Trai_2026\", \"newVersion\":\"!APP_VERSION!\"}" "https://script.google.com/macros/s/AKfycbxBc5I2hOp5HQ8N3FfIMHyxjuQDd9-w5S-Bx86X867TeTScp4cDJBPRnvyNHgEijqKMQA/exec"
)

powershell -c "[console]::beep(800, 300); [console]::beep(1200, 500)"
echo HOAN TAT!
pause