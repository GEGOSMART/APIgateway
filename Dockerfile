FROM node:carbon-slim

# Create app directory
WORKDIR /geosmart_api

# Install app dependencies
COPY package.json /geosmart_api/
RUN npm install

# Bundle app source
COPY . /geosmart_api/
RUN source .env
RUN npm run prepublish

CMD [ "npm", "run", "runServer" ]
