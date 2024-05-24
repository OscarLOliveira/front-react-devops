pipeline {
    agent any
    tools {
        maven "mvn"  // Configuração de ferramentas Maven
    }

    stages {
        stage('Initialize') {
            steps {
                sh '''
                   echo "Iniciando CI/CD"
                '''
            }
        }
        
        stage('Connect to Linux Server and Execute Commands') {
            steps {
                withCredentials([usernamePassword(credentialsId: 'ssh-vps', usernameVariable: 'SSH_USER', passwordVariable: 'SSH_PASS')]) {
                    sh '''
                    sshpass -p $SSH_PASS ssh -o StrictHostKeyChecking=no root@191.252.102.3 "                    
                    ps aux | grep java
                    echo 'Inicio'
                    pid=$(pgrep -f "app.jar")
                    echo "PID: $pid"
                    echo 'Finalizando'
                    whoami
                    "
                    '''
                }
            }
        }
    }
}
