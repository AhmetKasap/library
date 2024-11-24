+ Install the required packages

npm i

+ Set up PostgreSQL container with Docker

cd deploy/local 

docker compose up 

or 

docker run --name postgres-container -e POSTGRES_USER=admin -e POSTGRES_PASSWORD=admin -e POSTGRES_DB=library -p 5432:5432 -d postgres

+ To run the project

npm start
