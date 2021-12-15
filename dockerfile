FROM mode:alpine

WORKDIR / ./src/server.js

COPY package* .json ./
RUN npm install
COPY . .

CMD ["npm","rum dev"]