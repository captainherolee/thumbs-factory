FROM node:16-bullseye-slim
RUN mkdir -p /src
WORKDIR /src
ADD . /src
RUN npm install
COPY . /src
EXPOSE 3001
CMD ["node", "app.js" ]


