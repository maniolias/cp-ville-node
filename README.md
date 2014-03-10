#cp-ville-node
=============

Petite implémentation de l'API [cp-ville](http://cp-ville.com) pour node.js.

##Installation
```
npm install cp-ville-node --save
```

##Utilisation de l'API

```javascript
var cpVille = require('cp-ville-node');

cpVille.find("69005",function(err,data)
{
	if(err) console.log(err)
	else
		console.log(data)

	/*
	*{ '1': { ville: 'LYON', cp: '69009' },
	*count: 1,
	*typeretour: 'ville' }
	*/

})
```