FROM node


WORKDIR /usr/app

COPY package*.json ./


COPY tsconfig.json ./

COPY . .

RUN npm ci




CMD ["npm", "run", "dev"]