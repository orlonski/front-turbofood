const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, './build')));

app.listen(process.env.PORT || 3000, (err) => {
    if (err) {
        return console.log(err)
    }
    console.log('aplicação front rodando')
})