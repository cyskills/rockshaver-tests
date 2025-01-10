const cypress = require('cypress')
const tesults = require('cypress-tesults-reporter');

const TOKEN = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjcwNWZjOTA5LWVhNTUtNDdhMC1hNTM0LTFiNTU2OGJkMGVjNC0xNzM2NTIxNTE1MDIyIiwiZXhwIjo0MTAyNDQ0ODAwMDAwLCJ2ZXIiOiIwIiwic2VzIjoiMTRiNWY5ZjEtN2MyYi00ZGIzLTk2YWUtZmY1NWEzZGE1MmUxIiwidHlwZSI6InQifQ.7wHowtR7SLv2m77W6C_GQFYKWeCrTxJMZlOTGZ0bax0'

cypress.run({
  // specs to run here
  browser: 'chrome'
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