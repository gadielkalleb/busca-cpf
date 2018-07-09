FROM node:8.10.0
ENV HOME=/home/teste-maxmilhas
WORKDIR $HOME COPY . $HOME RUN npm i