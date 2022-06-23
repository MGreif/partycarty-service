FROM node:latest AS build
WORKDIR /app
COPY package.json /app/
COPY package-lock.json /app/
RUN npm ci --only=production

FROM node:lts-alpine
ENV NODE_ENV production
WORKDIR /app
COPY --from=build /app/node_modules /app/node_modules
COPY . /app/

CMD ["npm", "start"]
