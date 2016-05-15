module.exports = {
	whatQuestion: function (recipientId, text) {
	    
	    if (text === "send") {
	            
			message = {text: "What do you want to send?"};
			
			return message;
		}
		return false;
	},

	whenQuestion: function (recipientId, text) {
	    
	    if (text === "book") {
	            
			message = {text: "When do you want to send?"};
			
			return message;
		}
		return false;
	},

	whereQuestion: function (recipientId, text) {
	    
	    if (text === "9am") {
	            
			message = {text: "Where do you want to send?"};

			return message;
		}
		return false;
	},

	howMuchQuestion: function (recipientId, text) {
	    
	    if (text === "Toronto") {
	            
			message = {text: "how much do you want to pay?"};

			return message;
		}
		return false;
	}
}