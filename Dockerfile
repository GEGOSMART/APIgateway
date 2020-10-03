FROM node:carbon-slim

# Create app directory
WORKDIR /geosupport_api

# Install app dependencies
COPY package.json /geosupport_api/
RUN npm install

# Bundle app source
COPY . /geosupport_api/
RUN npm run prepublish

CMD [ "npm", "run", "runServer" ]
