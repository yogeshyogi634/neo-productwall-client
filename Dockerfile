# Use official Node.js runtime as base image
FROM node:18-alpine

# Set working directory in container
WORKDIR /app

# Copy package.json and package-lock.json (if available)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the application
RUN npm run build

# Expose port 5173 (Vite preview default port)
EXPOSE 4173

# Start the application in preview mode
CMD ["npm", "run", "preview", "--", "--host"]