# Use the official Node.js 18 Alpine image
FROM node:18-alpine

# Create and set the working directory
WORKDIR /app_jedy

# Copy package.json and package-lock.json and all files
COPY . .

# Install dependencies
RUN npm install

# Expose the port the app runs on - # required for docker desktop port mapping
EXPOSE 4000

# Run the application
CMD ["node", "app.js"]