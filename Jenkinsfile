pipeline {
    agent any

    environment {
		EMAIL_RECIPIENT = 'mossabelmahraoui@gmail.com'
        NODE_ENV = 'production'
    }

    stages {
        stage('clone repository') {
			steps {
				git branch: 'master',
					url: 'https://github.com/iammoussaab/FormValid.git'
			}
		}

		stage('Install dependencies') {
            steps {
                bat 'npm install'
            }
        }

        stage('Lint') {
            steps {
                bat 'ng lint'
            }
        }

        stage('Build Angular app') {
            steps {
                bat 'ng build --configuration production'
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
            mail to: 'mossabelmahraoui@gmail.com',
                 subject: '✔️ Build Succeeded - Formulaire Angular',
                 body: 'Le pipeline Jenkins a réussi.'
        }

        failure {
            mail to: 'mossabelmahraoui@gmail.com',
                 subject: '❌ Build Failed - Formulaire Angular',
                 body: 'Le pipeline Jenkins a échoué.'
        }
    }
}
