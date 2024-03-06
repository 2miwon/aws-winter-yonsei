git reset --hard origin/deploy ;
git pull ;
sudo docker build -t 2miwon/allaw-web . ;
sudo docker push 2miwon/allaw-web ;