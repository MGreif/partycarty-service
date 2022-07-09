# partycarty-service

This is the backend for the partycarty project.

# Installation

Preperation:
- Add .env file containing:
  - `MONGO_URI` - the corresponding Mongo uri to your mongo db
  - `PORT` - The Port this service will be available on (fallback is `8000`)

Steps for containerization:
- Build the Docker image `docker build . -t partycarty-service`
- Run the Docker image `docker run --name partycarty-service -p 8000:8000 partycarty-service`

Steps for Messaging
- Start broker `cd docker; docker-compose -f docker-compose-rabbit-mq.yml up -d`

# Presentation

The Production build of PartyCarty can be found [here](https://partycarty.greif.me) (https://partycarty.greif.me)


# Scripts

|name|description|
|-----|-----|
|`start`| start the service |
|`start:dev`| start the service in development mode (using nodemon)|
|`test`| run all tests inside all .test.js files |
|`lint:check`| run eslint over the entire project (no automatic fixes) |
|`lint:fix`| run eslint over the entire project (automatically fix fixable issues)|
