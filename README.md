# information
Erin Frolli is creating the Information service of our airBnB product page.
Mini services covered in the Information service:
- IndexPart1.js
  - roomHeader
  - hostImage
  - roomDescription
  - amenities
  - houseRules,
  - cancilationPolicies,

- IndexPart2.js
  - hostInfo
  - hostImage
  - neiborhood

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)

## Usage

> Launch inside of the Fossa-airbnb app.

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 6.13.0
- MongoDB 3.6.2
  - See this website on how to get started: https://docs.mongodb.com/manual/tutorial/install-mongodb-on-os-x/#run-mongodb

## Development

> Clone this repo into your project folder. Then follow the installation instructions below. This project assumes that you are using a mac. __Note:__ that there may be differences if you are uisng Windows or Linix.

### Installing Dependencies

From within the root directory:
```sh
npm install
```
Ensure have both mongoDB installed. Then start mongod:
```sh
mongod
```
Then you can seed the database using:
```sh
npm run seedDB
```
Then create a .env file in the main infomation directory that specifies the host name and port for this app. For example:
```sh
PORT = 3003
HOST = 127.0.0.1
```

Nex configure your bundle.js using webpack:
```sh
npm run build
```

To start runing your app run:
```sh
npm start
```
__In a browser navigate to localhost:3003 or the directory you specified in the .env file__

