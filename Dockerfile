# Use the official Node.js 18 image as the base image
FROM node:20.10.0

# Create the /app directory
RUN mkdir -p /app

# Set the working directory to /app
WORKDIR /app

# Copy package.json and package-lock.json files to the working directory
COPY package*.json ./

# Install dependencies including dev dependencies for TypeScript
RUN npm install

# Copy the tsconfig.json file to the working directory
COPY tsconfig.json ./

# Copy the src directory to the working directory
COPY src ./src

# Copy the script directory to the working directory
COPY scripts ./scripts

# Compile TypeScript to JavaScript
RUN npm run build

# Set the default command to start the application from the dist folder
CMD ["node", "dist/index.js"]
