let app = require('./server.js');
let port = 3000;

app.listen(port, () => {
  console.log('Server listening on port '+ port);
});