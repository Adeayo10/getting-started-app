# syntax=docker/dockerfile:1

# Use the official Node.js 18 image based on Alpine Linux
FROM node:18-alpine

# Set the working directory inside the container to /app
WORKDIR /app

# Copy all files from the current directory to the working directory in the container
COPY . .

# Install only production dependencies using yarn
RUN yarn install --production

# Specify the command to run the application
CMD ["node", "src/index.js"]

# Expose port 3000 to the host
EXPOSE 3000