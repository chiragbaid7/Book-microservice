const express = require('express');
const app = express();
const database = require('./domain/index')
const users = require('./routes/v1/user_routes')
const {pageNotfound,ErrorHandler} = require('./utils/error/error-handler')

app.use(express.json());
app.use('/api/v1/users', users);

app.use(pageNotfound)
app.use(ErrorHandler)

app.listen(3000)