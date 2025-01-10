const cypress = require('cypress')
const tesults = require('cypress-tesults-reporter');

const TOKEN = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjcwNWZjOTA5LWVhNTUtNDdhMC1hNTM0LTFiNTU2OGJkMGVjNC0xNzM2NTIxNDMyMDIyIiwiZXhwIjo0MTAyNDQ0ODAwMDAwLCJ2ZXIiOiIwIiwic2VzIjoiNWNhZTc0MzUtODQ3Mi00M2NmLWI2NzktNTk2YmM5ODdkZGNmIiwidHlwZSI6InQifQ.a5EECHf9hENuSIXGGKWWhkJRwBo7yqrb3C-YMWy0drA'

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