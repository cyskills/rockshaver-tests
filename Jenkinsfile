pipeline {
    agent {
        docker { 
            image 'cypress/browsers:node-22.12.0-chrome-131.0.6778.139-1-ff-133.0.3-edge-131.0.2903.99-1'
            args '-u root --network rockshaver_skynet'
        }
    }
    stages {
        stage('Api') {
            steps {
                dir('api') {
                    sh 'npm install'
                    sh 'npx cypress install --force'
                    sh 'npx cypress run --record --key 554aa6c7-f76a-4b3b-a324-b905a3c893e5'
                }
            }
        }

        stage('Mobile') {
            steps {
                dir('mobile') {
                    sh 'npm install'
                    sh 'npx cypress install --force'
                    sh 'npx cypress run --record --key d7f3a8d1-a033-4e13-891c-fc50f91c05ec'
                }
            }
        }

        stage('Web') {
            steps {
                dir('web') {
                    sh 'npm install'
                    sh 'npx cypress install --force'
                    sh 'npx cypress run  --browser chrome --record --key 83ed936b-7ace-4ead-a3d9-189e733c703a'
                }
            }
        }
    }
}