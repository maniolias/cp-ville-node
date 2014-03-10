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

cpVille.find("pomp",function(err,data)
{
	if(err) console.log(err)
	else
		console.log(data.toArray())

	/*
	*[ { ville: 'ARNAC POMPADOUR', cp: '19230' },
	*{ ville: 'POMPORT', cp: '24240' },
	*{ ville: 'ST POMPONT', cp: '24170' },
	*{ ville: 'POMPIERRE SUR DOUBS', cp: '25340' },
	*{ ville: 'POMPIGNAN', cp: '30170' },
	*{ ville: 'POMPERTUZAT', cp: '31450' },
	*{ ville: 'POMPIAC', cp: '32130' },
	*{ ville: 'POMPEJAC', cp: '33730' },
	*{ ville: 'POMPIGNAC', cp: '33370' },
	*{ ville: 'POMPIEY', cp: '47230' },
	*{ ville: 'POMPOGNE', cp: '47420' },
	*{ ville: 'LE POMPIDOU', cp: '48110' },
	*{ ville: 'POMPEY', cp: '54340' },
	*{ ville: 'POMPS', cp: '64370' },
	*{ ville: 'POMPONNE', cp: '77400' },
	*{ ville: 'POMPAIRE', cp: '79200' },
	*{ ville: 'ST POMPAIN', cp: '79160' },
	*{ ville: 'POMPIGNAN', cp: '82170' },
	*{ ville: 'POMPIERRE', cp: '88300' },
	*{ ville: 'POMPIDOU PAPA ICHTON', cp: '97316' } ]
	*/
})
```