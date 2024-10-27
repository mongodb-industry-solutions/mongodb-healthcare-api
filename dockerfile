FROM node:20.10.0
WORKDIR /app
COPY package*.json ./
RUN npm install --production
COPY . .
EXPOSE 3456
CMD ["npm", "run", "api"]