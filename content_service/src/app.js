const express = require('express');
const app = express();
const database = require('./domain/index')
const contents = require('./routes/contents-routes')
const {pageNotfound,ErrorHandler} = require('./utils/error/error-handler')

app.use(express.json());

app.use('/api/v1/contents',contents);

app.use(pageNotfound)
app.use(ErrorHandler)

app.listen(5000)

