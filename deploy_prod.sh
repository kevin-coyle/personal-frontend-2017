echo  "Syncing files to server"
rsync -avzh dist/ s221267.gridserver.com@s221267.gridserver.com:domains/beta.webdev.pro/html/
