const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
app.get('./', (_, resp) => {
    resp.write("This is node malil file!");
    resp.end();
}).listen(port);
