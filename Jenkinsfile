pipeline {
    agent any

    environment {
		EMAIL_RECIPIENT = 'mossabelmahraoui@gmail.com'
        NODE_ENV = 'production'
    }

    stages {
        stage('Install dependencies') {
            steps {
                bat 'npm install'
            }
        }

        stage('Lint') {
            steps {
                bat 'npx ng lint'
            }
        }

        stage('Build Angular app') {
            steps {
                bat 'npx ng build --configuration production'
            }
        }

        stage('Docker Build') {
            steps {
                bat 'docker build -t formulaire-angular .'
            }
        }
    }

    post {
        success {
            mail to: 'dev@local.test',
                 subject: '✔️ Build Succeeded - Formulaire Angular',
                 body: 'Le pipeline Jenkins a réussi.'
        }

        failure {
            mail to: 'dev@local.test',
                 subject: '❌ Build Failed - Formulaire Angular',
                 body: 'Le pipeline Jenkins a échoué.'
        }
    }
}
