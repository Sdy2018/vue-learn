/*
es6中将对象暴露给外部使用的是 export default 和 export

node中将对象暴露给外部使用的是 module.exports 和 exports

其中 export default只能使用一次

export 能使用多次
使用时绑定实例名,在导入时使用{实例名}获取,可以用as起别名 {实例名 as alias}

*/

export default {
  'data':{
    'person':{
      'name':'sdy',
      'age':22
    },
    'animal':{
      'name':'rabbit',
      'color':'white'
    }
  }
}

export var data1= {
  "number":'1001',
  'createDate':Date.now()
}
export var data2= {
  "number":'1002',
  'createDate':Date.now()
}