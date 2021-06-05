# Use the most recent parent image for node
FROM node:12-alpine

# Distinguishing between environment (default = development)
ARG NODE_ENV=development
ENV NODE_ENV=${NODE_ENV}

# For development we need to have nodemon installed
RUN npm install -g nodemon

# Create the app directory
WORKDIR /usr/src/app

# Required port variables
ENV PORT 8000
ENV NODE_ENV production
ENV GOOGLE_ANALYTICS_ID G-7M5PX92V69
ENV REACT_APP_BACKEND_URL="https://harrysrepairs-staging-strapi.herokuapp.com"

# Copy package and package-lock files to root level
COPY package*.json ./
RUN npm install

# Bundle app source
COPY . /usr/src/app

# Run the webpack build
RUN npm run build

# Expose the port so it can be accessed
EXPOSE 8000

# Define the start command 
CMD [ "npm", "run", "start:prod" ]