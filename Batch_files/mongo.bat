set filepath=%cd%
set projectpath=%filepath:\Batch_files=%
echo %projectpath%
cd %projectpath%
mongo --port 27017
pause