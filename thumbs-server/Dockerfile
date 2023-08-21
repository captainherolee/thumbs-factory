FROM node:16-bullseye-slim
RUN mkdir -p /app
WORKDIR /app
ADD . /app
RUN npm install
EXPOSE 8000
CMD ["node", "app.js" ]


