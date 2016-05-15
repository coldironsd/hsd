module.exports = {
    // System ask user to 'Send / Carry'. if send
    start: function start(recipientId, text) {

        var imageUrl = "https://placekitten.com/" + Number(values[1]) + "/" + Number(values[2]);
        
        message = {
            "attachment": {
                "type": "template",
                "payload": {
                    "template_type": "generic",
                    "elements": [{
                        "title": "Welcome",
                        "subtitle": "Do you want to send or carry?",
                        // "image_url": imageUrl ,
                        "buttons": [{
                            "type": "postback",
                            "url": imageUrl,
                            "title": "Send",
                            "payload": "User " + recipientId + " send ",
                        }, {
                            "type": "postback",
                            "title": "Carry",
                            "payload": "User " + recipientId + " carry ",
                        }]
                    }]
                }
            }
        };

        sendMessage(recipientId, message);
        
        return true;
    },

    roleQuestion: function roleQuestion(recipientId, text) {

        if (text === "start") {

            message = {text: "Do you want to send or deliver?"}
            sendMessage(recipientId, message)
            return true
        }
        return false
    },

    // send rich message with confirmation
    confirm: function confirm(recipientId, text) {

        text = text || "";

        message = null;
        if(text == "Confirm"){
            message = {
                "attachment": {
                    "type": "template",
                    "payload": {
                        "template_type": "generic",
                        "elements": [{
                            "title": "Confirm OK",
                        }]
                    }
                }
            };
        }else{
            message = {
                "attachment": {
                    "type": "template",
                    "payload": {
                        "template_type": "generic",
                        "elements": [{
                           "title": "Cancelled",
                       }]
                   }
               }
           };
       }

       return message;
    },

    // Match found. Do you want to talk to him? Chat or Ignore.
    foundMatch: function foundMatch(recipientId, text) {

        text = text || "";
        
        if (text === 'find match') {

            message = {
                "attachment": {
                    "type": "template",
                    "payload": {
                        "template_type": "generic",
                        "elements": [{
                            "title": "Found Match",
                            "subtitle": "John Lee",
                            // "image_url": imageUrl ,
                            "buttons": [{
                                "type": "postback",
                                "url": imageUrl,
                                "title": "Chat",
                                "payload": "User " + recipientId + " Start Chat " + foundRecipientId,
                            }, {
                                "type": "postback",
                                "title": "Ignore",
                                "payload": "User " + recipientId + " likes kitten " + imageUrl,
                            }]
                        }]
                    }
                }
            };

            sendMessage(recipientId, message);
            
            return true;

        }
        
        return false;    
    },

    // send rich message with confirmation
    pay: function pay(recipientId, text) {

        text = text || "";
        var values = text.split(' ');

        message = null;
        if(text == "pay"){
            message = {
                "attachment": {
                    "type": "template",
                    "payload": {
                        "template_type": "generic",
                        "elements": [{
                            "title": "Payment",
                            "subtitle": "",
                            // "image_url": imageUrl ,
                            "buttons": [{
                                "type": "postback",
                                "url": imageUrl,
                                "title": "OK",
                                "payload": "User " + recipientId + " confirm payment ",
                            }, {
                                "type": "postback",
                                "title": "Cancel",
                                "payload": "User " + recipientId + " cancel payment ",
                            }]
                        }]
                    }
                }
            };
        }
        
        return message;
    }
}
// var zemba = function () {
    
// }