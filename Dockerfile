# Use the official Node.js image as the base image
FROM node:16

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of your application files, including public folder
COPY . .

# Build the React app
RUN npm run build

# Set the command to run the app (modify this based on how you serve your app)
CMD ["npm", "start"]
