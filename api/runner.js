const cypress = require('cypress')
const tesults = require('cypress-tesults-reporter');

const TOKEN = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjcwNWZjOTA5LWVhNTUtNDdhMC1hNTM0LTFiNTU2OGJkMGVjNC0xNzM2NTIxMTUzODc1IiwiZXhwIjo0MTAyNDQ0ODAwMDAwLCJ2ZXIiOiIwIiwic2VzIjoiYTdiMjU2ZjQtZjc2OC00ZThkLWJkOGEtNDNjMzIwZGVjYWM0IiwidHlwZSI6InQifQ._XoxLCh630xj-TRJ1b8G6m5Q4EC2mqAPsMDpKSsdGSI'

cypress.run({
  // specs to run here
})
.then((results) => {
  const args = {
    target: TOKEN,
  }
  tesults.results(results, args);
})
.catch((err) => {
 console.error(err)
})