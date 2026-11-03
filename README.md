\# Student Management System – DevOps Project



\## Project Overview



The Student Management System is a Node.js-based web application developed to demonstrate DevOps practices and tools. It provides REST APIs to perform basic student management operations and uses automated testing, continuous integration, containerization, and Kubernetes deployment.



\## Technologies Used



\- \*\*Node.js\*\* – Application runtime

\- \*\*Express.js\*\* – REST API framework

\- \*\*Jest \& Supertest\*\* – Application testing

\- \*\*Git \& GitHub\*\* – Version control and source code management

\- \*\*Jenkins\*\* – Continuous integration and automated build

\- \*\*Docker\*\* – Application containerization

\- \*\*Kubernetes\*\* – Container orchestration

\- \*\*Minikube\*\* – Local Kubernetes cluster



\## Project Features



\- Retrieve all students

\- Retrieve a student by ID

\- Add a new student

\- Update student details

\- Delete a student

\- REST API testing

\- Docker image creation and container execution

\- Kubernetes deployment with two replicas

\- Kubernetes NodePort Service



\## Project Structure



```text

student-management-devops/

│

├── src/

│   └── app.js

│

├── tests/

│   └── app.test.js

│

├── server.js

├── package.json

├── package-lock.json

├── Dockerfile

├── .dockerignore

├── deployment.yaml

├── service.yaml

├── .gitignore

└── README.md

```



\## Installation and Execution



\### 1. Clone the repository



```bash

git clone https://github.com/navyasree41/student-management-devops.git

cd student-management-devops

```



\### 2. Install dependencies



```bash

npm install

```



\### 3. Run the application



```bash

npm start

```



Open http://localhost:3000 in your browser.



\## Running Tests



Execute the test suite using:



```bash

npm test

```



The project includes Jest and Supertest tests for API functionality and validation.



\## Jenkins – Continuous Integration



A Jenkins Freestyle job named `Student-Management-Build` was configured with the GitHub repository.



Build commands:



```bash

npm install

npm test

```



The Jenkins job successfully executed the application build and tests.



\## Docker – Containerization



\### Build the Docker image



```bash

docker build -t student-management:latest .

```



\### Run the container



```bash

docker run -d -p 3001:3000 --name student-app student-management:latest

```



Open http://localhost:3001 to access the application.



\### View running containers



```bash

docker ps

```



\## Kubernetes – Deployment



The application was deployed locally using Minikube.



\### Start Minikube



```bash

minikube start --driver=docker

```



\### Load the Docker image



```bash

minikube image load student-management:latest

```



\### Deploy the application



```bash

kubectl apply -f deployment.yaml

```



\### Create the Kubernetes Service



```bash

kubectl apply -f service.yaml

```



\### Verify Pods and Services



```bash

kubectl get pods

kubectl get deployments

kubectl get services

```



The Kubernetes Deployment is configured with two application replicas.



\### Access the application



```bash

minikube service student-service

```



\## Repository



GitHub: https://github.com/navyasree41/student-management-devops



\## Conclusion



This project demonstrates the use of Node.js, automated testing, GitHub, Jenkins, Docker, and Kubernetes in a practical DevOps workflow.

