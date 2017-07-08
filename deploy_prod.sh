echo  "Syncing files to server"
rsync -avzh dist/ root@webdev.pro:/opt/code/personal
