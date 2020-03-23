#!/bin/bash
container="bus_api"
image=$(docker ps | grep $container | awk '{print $1}')
echo $image
docker cp api/src $image:/busio/