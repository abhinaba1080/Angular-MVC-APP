set filepath=%cd%
set projectpath=%filepath:\Batch_files=%
echo %projectpath%
cd %projectpath%
cd server
node server