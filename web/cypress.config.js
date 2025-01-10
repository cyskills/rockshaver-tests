require('dotenv').config()

const { configurePlugin } = require('cypress-mongodb');

module.exports = {
  projectId: "49ae7v",
  env: {
    mongodb: {
      uri: process.env.MONGO_URI,
      database: process.env.DATABASE
    },
    baseApi: process.env.API_URL
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      configurePlugin(on);
    },
    baseUrl: process.env.WEB_URL,
    viewportWidth: 1920,
    viewportHeight: 1080,
    video: true
  },
};
