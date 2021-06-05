# Use the most recent parent image for node
FROM node:12-alpine

# Build args with suitable defaults
ARG REACT_APP_BACKEND_URL
ARG NODE_ENV
ARG GOOGLE_ANALYTICS_ID

# Set args to environment variables
ENV REACT_APP_BACKEND_URL $REACT_APP_BACKEND_URL
ENV NODE_ENV $NODE_ENV
ENV GOOGLE_ANALYTICS_ID $GOOGLE_ANALYTICS_ID

# For development we need to have nodemon installed
RUN npm install -g nodemon

# Create the app directory
WORKDIR /usr/src/app

# Copy package and package-lock files to root level
COPY package*.json ./
RUN npm install

# Bundle app source
COPY . /usr/src/app

# Run the webpack build
RUN npm run build

# Expose the port so it can be accessed
EXPOSE $PORT

# Define the start command 
CMD [ "npm", "run", "start:prod" ]