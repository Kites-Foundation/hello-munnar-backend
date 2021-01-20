FROM node:14.9.0-alpine as development
RUN apk add python python3 make g++
WORKDIR /usr/src/app
COPY . ./
RUN npm install
RUN npm install @nestjs/cli
RUN npm run build
RUN npm prune --production

FROM node:14.9.0-alpine as production
WORKDIR /usr/src/app
COPY . ./
COPY --from=development /usr/src/app/dist ./dist
COPY --from=development /usr/src/app/node_modules ./node_modules
EXPOSE 9999
CMD ["node", "dist/main"]