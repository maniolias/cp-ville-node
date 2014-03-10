function Ville(values) {
	try
	{
		this.values = values;
	}
	catch(ex)
	{
		this.values = null;
		this.err = ex;
	}	
}

/*	
*	Summary	: 	Return an array with the finded cities
*	Result 	: 	Array of cities
*/
Ville.prototype.toArray = function(){
	var result = [];
	for(var i = 1 ; i <= this.values.count ; i++)
	{
		result.push(this.values[i]);
	}
	return result;
}

module.exports = Ville;