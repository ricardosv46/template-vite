#!/bin/bash
RED='\033[0;31m'
NC='\033[0m'

echo "${RED}Installing dependencies...${NC}"

#Copying .env file to be used
cp $1 .env

rm package-lock.json
npm install -y --unsafe-perm=true

echo "${RED}Building application...${NC}"
npm run build

echo "${RED}Uploading to AWS S3...${NC}"
aws s3 sync dist s3://$2

echo "${RED}tarea terminada satisfactoriamente${NC}"
