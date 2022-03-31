FROM node:16
ENV NODE_ENV=development

WORKDIR /usr/src/app
COPY package*.json .
RUN npm  install --development
COPY . .
EXPOSE 8000
CMD ["npm", "start"]
 