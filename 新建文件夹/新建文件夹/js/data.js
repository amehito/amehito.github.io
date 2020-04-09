let fs = require('./data.json')
for(let xian of fs){
	console.log(`{'name':'${xian.name}','value':[`)
	for(let jiedao of xian.xiangzhen){
			console.log(`'${jiedao.name}',`)
		}	
	console.log("],},")
}


