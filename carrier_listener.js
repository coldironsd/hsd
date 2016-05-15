module.exports = {
	fromWhereQuestion: function (recipientId, text) {
	    
	    if (text === "deliver") {
	            
			message = {text: "From where do you want to pick up?"}
			sendMessage(recipientId, message)
			return true
		}
		return false
	},

	toWhereQuestion: function (recipientId, text) {
	    
	    if (text === "ottawa") {
	            
			message = {text: "Where do you want to deliver?"}
			sendMessage(recipientId, message)
			return true
		}
		return false
	},

	feeQuestion: function (recipientId, text) {
	    
	    if (text === "toronto") {
	            
			message = {text: "How much do you want to charge?"}
			sendMessage(recipientId, message)
			return true
		}
		return false
	}
}