# Step 1: Use a more recent Node.js version (e.g., 18 or higher)
FROM node:18-alpine

# Step 2: Set the working directory in the container
WORKDIR /app

# Step 3: Copy package.json and package-lock.json (if available) to the container
COPY package*.json ./

# Step 4: Install the dependencies
RUN npm install

# Step 5: Copy the rest of the application code into the container
COPY . .

# Step 6: Build the Vite project for production
RUN npm run build

# Step 7: Expose the port on which the app will run (Vite's default port is 5173)
EXPOSE 5173

# Step 8: Serve the app using Vite's preview mode (for production build)
CMD ["npm", "run", "preview"]
