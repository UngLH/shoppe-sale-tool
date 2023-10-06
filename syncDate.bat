@echo off
:: Change date and time
echo Changing date and time...
date 10-10-2023
time 14:30

w32tm /config /syncfromflags:manual

w32tm /resync
echo Đã đồng bộ thời gian xong.
pause
