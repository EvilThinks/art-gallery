FROM node:14
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install 
COPY . /usr/src/app
ENV ROOT_FOLDER_PATH=/usr/src/app
EXPOSE 80:80
CMD ["npm", "start"]
