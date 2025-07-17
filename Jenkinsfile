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
            }
        }

        stage('Run Tests') {
            steps {
                sh 'npm test' // You can change this to 'npm run dev' or your script
            }
        }

        stage('Run Server') {
            steps {
                sh 'node index.js'  // Or use: npm start
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
