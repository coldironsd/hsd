module.exports = {
	whatQuestion: function whatQuestion(recipientId, text) {
	    
	    if (text === "send") {
	            
			message = {text: "What do you want to send?"}
			sendMessage(recipientId, message)
			return true
		}
		return false
	},

	whenQuestion: function whenQuestion(recipientId, text) {
	    
	    if (text === "book") {
	            
			message = {text: "When do you want to send?"}
			sendMessage(recipientId, message)
			return true
		}
		return false
	},

	whereQuestion: function whereQuestion(recipientId, text) {
	    
	    if (text === "9am") {
	            
			message = {text: "Where do you want to send?"}
			sendMessage(recipientId, message)
			return true
		}
		return false
	},

	howMuchQuestion: function howMuchQuestion(recipientId, text) {
	    
	    if (text === "Toronto") {
	            
			message = {text: "how much do you want to pay?"}
			sendMessage(recipientId, message)
			return true
		}
		return false
	}
}