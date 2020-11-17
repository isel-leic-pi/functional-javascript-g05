module.exports = function getShortMessages(messages) {
      return messages.filter(function (word) {
        return word.message.length<50
      }).map(function (word){
	return word.message		
})
    }