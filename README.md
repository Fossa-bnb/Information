# information
Erin Frolli is creating the Information section of our airBnB product page.
Mini Sections covered in the Information Section:
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

# How to start this searvice

- this project Assumes that you are using a mac. Note that there may be differences if you are uisng Windows or Linix.
- clone down to local 
- npm install (all dependencies)
- ensure you have mongoDB installed 
  - see this website on how to get started: https://docs.mongodb.com/manual/tutorial/install-mongodb-on-os-x/#run-mongodb
- Run the following comands in different terminal tabs:
  - start mongoDB instance
    mongod
  - configure bundle.js 
    npm run react-dev
  - start server
    npm run server-dev
    Note: is currently running on port 3003.
  - Seed mongo db with:
    npm run seedDB