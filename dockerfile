FROM node


WORKDIR /usr/app

COPY package*.json ./


COPY tsconfig.json ./

COPY . .

RUN npm ci



EXPOSE 4000

CMD ["npm", "run", "dev"]