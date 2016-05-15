module.exports = {
	fromWhereQuestion: function (recipientId, text) {
	    
	    if (text === "deliver") {
	            
			message = {text: "From where do you want to pick up?"};

			return message;
		}
		return false;
	},

	toWhereQuestion: function (recipientId, text) {
	    
	    if (text === "ottawa") {
	            
			message = {text: "Where do you want to deliver?"};
			
			return message;
		}
		return false;
	},

	feeQuestion: function (recipientId, text) {
	    
	    if (text === "toronto") {
	            
			message = {text: "How much do you want to charge?"};

			return message;
		}
		return false;
	}
}