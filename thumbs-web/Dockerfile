FROM node:16-bullseye-slim
WORKDIR /src
ADD . /src
RUN yarn install
COPY . /src
EXPOSE 3000
CMD ["yarn", "start"]
