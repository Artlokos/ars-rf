@echo off
REM Создание папки компонента React с TypeScript и CSS-модулем
REM Название компонента будет соответствовать названию папки (с заглавной буквы)

setlocal enabledelayedexpansion

REM Запрашиваем имя компонента у пользователя
set /p "component_name=Label Component: "

REM Функция для преобразования первой буквы в заглавную
call :CapitalizeFirstLetter "%component_name%" ComponentName

REM Создаем папку компонента
mkdir "%component_name%"

REM Создаем файл стилей (CSS Module)
echo .container { > "%component_name%\%component_name%.module.css"
echo     padding: 1rem; >> "%component_name%\%component_name%.module.css"
echo     background-color: #fff; >> "%component_name%\%component_name%.module.css"
echo } >> "%component_name%\%component_name%.module.css"

REM Создаем TSX файл компонента
echo import React from 'react'; > "%component_name%\%ComponentName%.tsx"
echo import styles from './%component_name%.module.css'; >> "%component_name%\%ComponentName%.tsx"
echo. >> "%component_name%\%ComponentName%.tsx"
echo interface %ComponentName%Props { >> "%component_name%\%ComponentName%.tsx"
echo     label:string >> "%component_name%\%ComponentName%.tsx"
echo } >> "%component_name%\%ComponentName%.tsx"
echo. >> "%component_name%\%ComponentName%.tsx"
echo const %ComponentName%: React.FC^<%ComponentName%Props^> = ({label}) =^> { >> "%component_name%\%ComponentName%.tsx"
echo     return ( >> "%component_name%\%ComponentName%.tsx"
echo         ^<div className={styles.container}^> >> "%component_name%\%ComponentName%.tsx"
echo             %ComponentName% {label} >> "%component_name%\%ComponentName%.tsx"
echo         ^</div^> >> "%component_name%\%ComponentName%.tsx"
echo     ); >> "%component_name%\%ComponentName%.tsx"
echo }; >> "%component_name%\%ComponentName%.tsx"
echo. >> "%component_name%\%ComponentName%.tsx"
echo export default %ComponentName%; >> "%component_name%\%ComponentName%.tsx"

REM Создаем index.ts для удобного импорта
echo export { default } from './%ComponentName%'; > "%component_name%/index.ts"

echo.
echo  %ComponentName% was creater sucessfully!
echo Path: %cd%\%component_name%\
echo.
pause
exit /b

:CapitalizeFirstLetter
setlocal
set "string=%~1"
set "result="

REM Преобразуем первый символ в верхний регистр
for /f "delims=" %%i in ('powershell -command "'%string%'.Substring(0,1).ToUpper() + '%string%'.Substring(1)"') do (
    set "result=%%i"
)

endlocal & set "%~2=%result%"
goto :eof