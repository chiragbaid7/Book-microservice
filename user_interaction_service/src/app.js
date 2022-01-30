// This service is to record events perfomed by users: like,read contents

const express = require('express');
const app = express();
const database = require('./domain/index')
const user_events = require('./routes/user_events_routes')
const {pageNotfound,ErrorHandler} = require('./utils/error/error-handler')

app.use(express.json());

app.use('/api/v1/interact',user_events);

app.use(pageNotfound)
app.use(ErrorHandler)

app.listen(6000)
