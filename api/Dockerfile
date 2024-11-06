# Use the official Node.js 18 Alpine image
FROM node:18-alpine

## Install nodemon globally - NOTE WE ADDED -L flag in package.json bc we are using windows local machine
RUN npm install -g nodemon

# Set the working directory
WORKDIR /app_jedy

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the app files
COPY . .

# Expose the port the app runs on
EXPOSE 4000

# Run the application
CMD ["npm", "run", "dev"]

