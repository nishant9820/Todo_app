
# Vite + React Todo App

This is a simple Todo app built with [React](https://reactjs.org/) and [Vite](https://vitejs.dev/). It allows you to add, remove, and toggle tasks. The app can be run locally or inside a Docker container for easier setup and deployment.

## Features
- Add tasks to the todo list
- Mark tasks as completed
- Remove tasks from the list
- Built with React and Vite for fast development

## Prerequisites

Before you can run the project, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (version 14 or higher)
- [npm](https://www.npmjs.com/)
- [Docker](https://www.docker.com/) (if running inside a container)

## Running the Project Locally

To run the project on your local machine:

### 1. Clone the repository

```bash
git clone https://github.com/your-username/vite-react-todo-app.git
cd vite-react-todo-app
```

### 2. Install dependencies

Run the following command to install the necessary dependencies:

```bash
npm install
```

### 3. Run the development server

After the dependencies are installed, you can start the development server with:

```bash
npm run dev
```

This will start the Vite development server, and you can open the app in your browser at `http://localhost:5173`.

## Running the Project in Docker

If you prefer running the project inside a Docker container, follow the steps below.

### 1. Build the Docker image

In the project directory, build the Docker image:

```bash
docker build -t vite-react-todo-app .
```

### 2. Run the Docker container

After building the image, run the container with:

```bash
docker run -p 5173:5173 vite-react-todo-app
```

This will expose the app at `http://localhost:5173` in your browser.

## Running with Docker Compose (for Development)

For a smoother development experience, you can use Docker Compose to manage the container. This setup automatically syncs your files and runs the development server inside the container.

### 1. Create the `docker-compose.yml`

Add the following `docker-compose.yml` file to your project directory:

```yaml
version: "3"
services:
  app:
    image: node:18-alpine
    working_dir: /app
    volumes:
      - .:/app
    ports:
      - "5173:5173"
    command: npm run dev
    environment:
      - NODE_ENV=development
```

### 2. Start the container with Docker Compose

Run the following command to start the development environment:

```bash
docker-compose up
```

This will automatically run `npm run dev` inside the container, and you can access the app at `http://localhost:5173`.

## Building for Production

If you want to build the app for production, you can do so by running:

```bash
npm run build
```

This will create a `dist/` folder containing the production-ready build. You can then serve it with any static server, or in the case of Docker, you can run it with `npm run preview` inside the container.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
