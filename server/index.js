const express = require('express'),
        app = express(),
        bodyParser = require('body-parser'),
        cors = require('cors'),
        port = process.env.port || 3000
        mc = require('./controllers/message_controller')

const messagesBaseUrl = '/api/messages';

app.use(bodyParser.json());
app.use(express.static(__dirname+'/../public/build'))

app.post(messagesBaseUrl, mc.create);
app.get(messagesBaseUrl, mc.read);
app.put(`${messagesBaseUrl}/:id`, mc.update);
app.delete(`${messagesBaseUrl}/:id`, mc.delete);

app.listen(port,()=>{console.log(`Server listening on port ${port}`)});



