pipeline {
    agent any

    environment {
        DOCKER_IMAGE = 'loginform-node-app'    // Local image ka naam
        DOCKERFILE_PATH = 'backend/Dockerfile'
        APP_DIR = 'backend'
    }

    stages {
        stage('Install Dependencies') {
            steps {
                dir("${APP_DIR}") {
                    sh 'npm install'
                }
            }
        }

        stage('Build Docker Image') {
            steps {
                sh "docker build -t $DOCKER_IMAGE -f $DOCKERFILE_PATH $APP_DIR"
            }
        }

        stage('Run Docker Container') {
            steps {
                // Stop if already running
                sh "docker stop loginform_container || true"
                sh "docker rm loginform_container || true"
                
                // Run new container
                sh "docker run -d -p 3000:3000 --name loginform_container $DOCKER_IMAGE"
            }
        }
    }
}
