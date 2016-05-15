var express = require('express');
var bodyParser = require('body-parser');
var request = require('request');
var app_listener = require('./app_listener');
var carrier_listener = require('./carrier_listener');
var sender_listener = require('./sender_listener');
var app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.listen((process.env.PORT || 3000));

// Server frontpage
app.get('/', function (req, res) {
    res.send('This is TestBot Server');
});

// Facebook Webhook
app.get('/webhook', function (req, res) {
    if (req.query['hub.verify_token'] === 'testbot_verify_token') {
        res.send(req.query['hub.challenge']);
    } else {
        res.send('Invalid verify token');
    }
});

// handler receiving messages
app.post('/webhook', function (req, res) {
    var events = req.body.entry[0].messaging;
    for (i = 0; i < events.length; i++) {
        var event = events[i];
        
        if (event.message && event.message.text) {
            
            test = app_listener.roleQuestion(event.sender.id, event.message.text);
            sendMessage(event.sender.id, {text: "Echo: " + test});
            if(test !== false){
                sendMessage(recipientId, test);
            }
            // if (sender_listener.whatQuestion(event.sender.id, event.message.text)){}
            // else if (sender_listener.whenQuestion(event.sender.id, event.message.text)){}
            // else if (sender_listener.whereQuestion(event.sender.id, event.message.text)){}
            // else if (sender_listener.howMuchQuestion(event.sender.id, event.message.text)){}                
            // else if (carrier_listener.fromWhereQuestion(event.sender.id, event.message.text)){}
            // else if (carrier_listener.toWhereQuestion(event.sender.id, event.message.text)){}
            // else if (carrier_listener.feeQuestion(event.sender.id, event.message.text)){}
            // else (app_listener.roleQuestion(event.sender.id, event.message.text)){}
        }
    }
    res.sendStatus(200);
});

// generic function sending messages
function sendMessage(recipientId, message) {
    request({
        url: 'https://graph.facebook.com/v2.6/me/messages',
        qs: {access_token: process.env.PAGE_ACCESS_TOKEN},
        method: 'POST',
        json: {
            recipient: {id: recipientId},
            message: message,
        }
    }, function(error, response, body) {
        if (error) {
            console.log('Error sending message: ', error);
        } else if (response.body.error) {
            console.log('Error: ', response.body.error);
        }
    });
};

// send rich message with kitten
function kittenMessage(recipientId, text) {
    
    text = text || "";
    var values = text.split(' ');
    
    if (values.length === 3 && values[0] === 'kitten') {
        if (Number(values[1]) > 0 && Number(values[2]) > 0) {
            
            var imageUrl = "https://placekitten.com/" + Number(values[1]) + "/" + Number(values[2]);
            
            message = {
                "attachment": {
                    "type": "template",
                    "payload": {
                        "template_type": "generic",
                        "elements": [{
                            "title": "Kitten",
                            "subtitle": "Cute kitten picture",
                            "image_url": imageUrl ,
                            "buttons": [{
                                "type": "web_url",
                                "url": imageUrl,
                                "title": "Show kitten"
                                }, {
                                "type": "postback",
                                "title": "I like this",
                                "payload": "User " + recipientId + " likes kitten " + imageUrl,
                            }]
                        }]
                    }
                }
            };
    
            sendMessage(recipientId, message);
            
            return true;
        }
    }
    
    return false;
    
};
