/*function repeat(operation,num){
	if( num<=0) return
	operation()
	return repeat(operation,--num)
}

module.exports = repeat*/

function repeat(operation,num){
	for(let i=num;i>0;i--)
		operation()
}

module.exports = repeat