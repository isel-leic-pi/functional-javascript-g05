var info = logger('INFO:')
    //info('this is an info message')
    // INFO: this is an info message

    var warn = logger('WARN:')
    //warn('this is a warning message', 'with more info')
    // WARN: this is a warning message with more info



    var slice = Array.prototype.slice

    function logger(namespace) {
	/*console.log([namespace] + ' okay')
	console.log(slice + ' vai')
	console.log(arguments + ' vai')*/
		return function(){
			console.log.apply(console,[namespace].concat(slice.call(arguments)))
		}
    }
	//console.log(logger)
    module.exports = logger