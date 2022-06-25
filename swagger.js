const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'My API',
    description: 'Description',
  },
  host: 'cse341server-22.herokuapp.com',
  schemes: ['https'],
  consumes:['application/json'],
  produces: ['application/json'],
  definitions:{
    contact:{
      firstName:"Happiness",
      lastName:"Magadla",
      email:"happiness@gmail.com",
      favoriteColor:"Maroon",
      birthday:"22/06/2022"
    }
  }
};
const outputFile = './swagger-output.json';
const endpointsFiles = ['./routes/index.js'];

/* NOTE: if you use the express Router, you must pass in the 
   'endpointsFiles' only the root file where the route starts,
   such as index.js, app.js, routes.js, ... */

swaggerAutogen(outputFile, endpointsFiles, doc);