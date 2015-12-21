@echo off
dir /s *.ncb *.ipch *.sdf
del /s *.ncb
del /s *.ipch
del /s *.sdf
del /s /q debug
del /s /q release
pause