module.exports = {
    // System ask user to 'Send / Carry'. if send
    start: function (recipientId, text) {
        
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

    roleQuestion: function (recipientId, text) {

        if (text === "start") {

            message = {text: "Do you want to send or carry?"};
            
            return message;
        }
        return false;
    },

    // send rich message with confirmation
    confirm: function (recipientId, text) {

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
    foundMatch: function (recipientId, text) {
                            
        if (text === "20") {
                            
                message = {
                    "attachment": {
                        "type": "template",
                        "payload": {
                            "template_type": "generic",
                            "elements": [{
                                "title": "Match Found",
                                "subtitle": "John may be able to carry.",
                                "buttons": [{
                                    "type": "postback",
                                    "title": "Chat",
                                    "payload": "User " + recipientId + " wants to chat ",

                                    }, {
                                    "type": "postback",
                                    "title": "Ignore",
                                    "payload": "User " + recipientId + " wants to ignore ",

                                }]
                            }]
                        }
                    }
                };

                return message;   
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