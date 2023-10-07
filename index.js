const express = require('express');
const app = express();

app.get('./', (_, resp) => {
    resp.write("This is node malil file!");
    resp.end();
}).listen(5400);