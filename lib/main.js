(function() {
	
	var http = require('http'),
	util = require('util');

	var options = {
		hostname: 'www.cp-ville.com',
		port: 80,
		path :'/cpcom.php?cpcommune=',
		method: 'GET'
	};
	
	exports.find = function(location, callback)
	{
		options.path += location;
		return http.get(options, function(res)
		{
			var buffer = new Buffer(0);
			res.on('readable', function()
			{
				return buffer += this.read().toString('utf8');
			});
			return res.on('end', function()
			{
				var arg = "jsoncallback(";
				var json = toJson(buffer);
				if(json.erreur) return callback(json.erreur,null);
				if(json.count==0) return callback("Aucun résultat",null);
				return callback(json);
			});
		})
	};

	toJson = function(buffer)
	{
		var arg = "jsoncallback(";
		return JSON.parse(buffer.slice(buffer.lastIndexOf(arg) + arg.length,buffer.length-2));
	}

}).call(this);