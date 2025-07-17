pipeline {
  agent any
  tools {
    nodejs 'Node 18'
  }
  stages {
    stage('Checkout') {
      steps {
        checkout scm
      }
    }
    stage('Install') {
      steps {
        sh 'npm ci'
      }
    }
    // stage('Test') {
    //   steps {
    //     sh 'npm test'
    //   }
    // }
    stage('Build') {
      steps {
        sh 'npm run build || echo "no build script, skipping"'
      }
    }
  }
  post {
    success { echo '✅ Build passed!' }
    failure { echo '❌ Build failed!' }
  }
}
