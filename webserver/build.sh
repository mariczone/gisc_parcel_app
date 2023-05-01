#!/bin/bash
name="webapp"
COLOR='\033[1;32m'
COLOR2='\033[1;36m'
NC='\033[0m' # No Color
tag=$1
remove_unuse='docker rmi $(docker images -f "dangling=true" -q)'
if [ ! "$1" ]
then
  read -p "Enter tag version (Default:lastest): " tag
fi
if [ "$tag" = "none" ]
then
  tag=
fi

http_proxy=$2
if [ ! "$2" ]
then
  read -p "Set http proxy (Default:-): " http_proxy
fi
if [ "$http_proxy" = "none" ]
then
  http_proxy=
fi

https_proxy=$3
if [ ! "$3" ]
then
  read -p "Set https proxy (Default:-): " https_proxy
fi
if [ "$https_proxy" = "none" ]
then
  https_proxy=
fi

buildCmd="docker build --no-cache "
if [ $http_proxy ] || [ $https_proxy ]; then
  buildCmd+=" --build-arg"
  [ $http_proxy ] && buildCmd+=" HTTP_PROXY=$http_proxy"
  [ $https_proxy ] && buildCmd+=" HTTPS_PROXY=$https_proxy"
fi

[ $tag ] && buildCmd+=" -t $name:$tag"
buildCmd+=" -t $name:latest"
buildCmd+=" ."

echo -e "build command: ${COLOR}$buildCmd${NC}"
eval $buildCmd
eval $remove_unuse
#echo -e "${COLOR2}Press Enter for exit...${NC}"
#read -p ""
