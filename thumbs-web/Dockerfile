FROM node:16-bullseye-slim
RUN yarn global add serve
RUN mkdir ./build
COPY ./build ./build
ENTRYPOINT ["serve", "-s", "build"]

