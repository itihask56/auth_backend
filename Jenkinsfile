pipeline {
    agent {
        docker {
            image 'node:18'
            args '-u root:root'
        }
    }
    environment {
        ENV_VARS = credentials('ENV_CONTENT')  // This loads .env content
    }
    stages {
        stage('Clone Repo') {
            steps {
                git url: 'https://github.com/itihask56/auth_backend.git', branch: 'main'
            }
        }
    stages {
       stage('Setup Environment') {
            steps {
                sh '''
                echo "$ENV_VARS" > .env
                '''
            }
        }
        stage('Install Dependencies') {
            steps {
                sh 'npm install'
                sh 'npm test' // or node index.js
            }
        }
       stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }
        stage('Run Server') {
            steps {
                sh 'node index.js'  // or your start script
            }
        }

    }
    post {
        success {
            echo '✅ Build completed successfully!'
        }
        failure {
            echo '❌ Build failed.'
        }
    }
}
