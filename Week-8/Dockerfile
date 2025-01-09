FROM node:14

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build && \
    echo "Build completed successfully" || \
    echo "Build failed with error code $?"

EXPOSE 3000

CMD ["npm", "start"]

