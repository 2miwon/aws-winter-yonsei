git reset --hard origin/deploy ;
git pull ;
docker build -t 2miwon/allaw-web . ;
docker push 2miwon/allaw-web ;