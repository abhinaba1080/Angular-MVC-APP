set filepath=%cd%
set projectpath=%filepath:\Batch_files=%
echo %projectpath%
cd %projectpath%
mongod --port 27017 --dbpath data/db --nojournal