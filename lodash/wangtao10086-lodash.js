
var wangtao10086 = function (){

  //类型判断如下 以及一些lodash自带的类型判断

  //isArguments arguments 类数组对象 类似于array 处理length属性和索引元素之外未加任何属性(forEach()方法可用)  可以直接将他转化为数组Array.prototype.slice.call(arguments)
  function isArguments(value) {
    return Object.prototype.toString.call(value) === '[object Arguments]'
  }

  //isArray
  function isArray(value) {
    return Object.prototype.toString.call(value) ==='[object Array]'
  }

  //isBoolean
  function isBoolean(value) {
    return Object.prototype.toString.call(value)  === '[object Boolean]'
  }

  //isFunction
  function isFunction(value) {
    return Object.prototype.toString.call(value) === '[object Function]'
  }

  //isString
  function isString(value) {
    return Object.prototype.toString.call(value) === '[object String]'
  }

  //isNumber 
  function isNumber(value) {
    return Object.prototype.toString.call(value) === '[object Number]'
  }

  //isNull
  function isNull(value) {
    return Object.prototype.toString.call(value) === '[object Null]'
  }

  //isObject
  function isObject(value) {
    return Object.prototype.toString.call(value) === '[object Object]' || value != null || Object.prototype.toString.call(value)  ==="[objefct Function]"
  }

  //isObjectLike
  function isObjectLike(value) {  //typeof(null) 得到'object' typeof(/ffd/)得到也是object
    return typeof(value) === 'object' && value !== null && Object.prototype.toString.call(value)  !==  '[object RegExp]'
  }

  //isUndefined 
  function isUndefined(value) {
    return typeof(value) === 'undefined'
  }

  //isRegExp
  function isRegExp(value) {
    return Object.prototype.toString.call(value) === '[object RegExp]~'
  }


  //isNaN
  function isNaN(value) {
    if(isNumber(value)) {
      var val = value.valueOf()
    }
    return val != val
  }
    

  //chunk
  function chunk(array,size) {
    let left = []
    let right = []
    var result = []
    for(let i = 0;i< size;i++) {
      left.push(array[i])
    }
    for(var j= size;j <= array.length - 1; j++) {
      right.push(array[j])
    }
    result.push(left,right)
    return result
    
  }

  //compact
  function compact(array) {
    var result = []
    for(var i = 0;i<array.length;i++) {
      if(!array[i]) {
        continue
      }
     result.push(array[i])
    }
    return  result
  }

  //join
  function join(array,seperator) {
    let result = ''
    let str = String(seperator)
    for(var i = 0;i<array.length - 1;i++) {
      result += array[i] + str
    }
    return result + array[i]
  }

  //last
  function last(array) {
    return array[array.length - 1]
  }

  //lastIndexOf
  function lastIndexOf(array,value,start) {
    if(start) {
      for(let i = start; i >= 0;i--) {
        if(array[i] === value) {
          return i
        }
      }
    }

    if(!start) {
      for(let i = array.length - 1; i >= 0;i--) {
        if(array[i] === value) {
          return i
        }
      }
    }

    return -1
  }

  //drop
  function drop(array,n) {
    var result =[]
    if(n == 0) {
      return array
    }
    if(!n) {
      array.shift(0)
      return array
    }
    for(var i = n ; i<array.length ;i++) {
      result.push(array[i])
    }
    return result
  }
  
  //dropright
  function dropRight(array,n) {
    var result =[]
    if(n == 0) {
      return array
    }
    if(!n) {
      array.pop()
      return array
    }

    for(var i = 0; i < array.length - n ;i++) {
      result.push(array[i])
    }
    return result
  }

  //fill  填充数组 
  function fill(array,value, start,end) {
    if(!start || !end) {
      for(let i = 0; i < array.length ; i++) {
        array[i] = value
      }
    }

    if(start && end) {
      for(let i = start;i < end ;i++ ) {
        array[i] = value
      }
    }

    return array
    
  }

  //findIndex  返回第一个通过predicate判断为真的元素的索引值
  function findIndex(array,pred) {
    for(var i = 0;i<array.length;i++) {
      for(var event in array[i]) {
        if(array[i][event] == pred) {
          return i
        }
        if(array[i][event] == pred[pred.length - 1] ) {
          return i
        }
      }
    }
    return -1
  }

  //findLastIndex 
  

  //flatten 较少一级array嵌套深度
  function flatten(arrays) {
    var result = []
    for(var i = 0 ; i<arrays.length ; i++) {
      if(Array.isArray(arrays[i])) {
        result.push(...arrays[i])
      } else {
        result.push(arrays[i])
      }
    }
    return result

    //return [].concat(...arrays) 直接得到flatten
  }

  //flattenDeep 递归为一维数组

  function flattenDeep(arrays) {
      let result = []
      for(var i = 0 ; i< arrays.length;i++) {
        if(Array.isArray(arrays[i])) {
          result  = result.concat(flattenDeep(arrays[i]))
        } else {
          result.push(arrays[i])
        }
      }
      return result
  }


  //flattenDepth

  function flattenDepth(arrays,depth = 1) { //默认值深度为1
    if(depth == 0) {
      return arrays.slice()
    }
    
    var result =[]
    for(var i = 0 ;i<arrays.length;i++) {
      if(Array.isArray(arrays[i])) {
        result.push(...flattenDepth(arrays[i],depth-1)) //把里面的数组展平depth - 1 次
      } else {
        result.push(arrays[i])
      }
    }
    return result
  }

  function flattenDeep(arrays) {
    return flattenDepth(arrays,Infinity)
  }

  function flatten(arrays) {
    return flattenDepth(arrays,1)
  }

  
  //fromPairs
  function fromPairs(pairs) {
    let map = {}
    for(let i = 0 ; i < pairs.length ; i++) {
      map[pairs[i][0]] = pairs[i][1]
    }
    return map
  }

  //head
  function head(array) {

    return array[0]
  }

  //indexOf
  function indexOf(array,value,start) {
    if(start) {
      for(let i = start; i <array.length;i++) {
        if(array[i] === value) {
          return i
        }
      }
    }

    if(!start) {
      for(let i = 0; i <array.length;i++) {
        if(array[i] === value) {
          return i
        }
      }
    }

    return -1
  }


  //initial
  function initial(array) {
    array.pop()
    return array
  }

  //reverse
  function reverse(array) {  //原数组中反序
    
    for(let i = 0,j=array.length-1;i<j;i++,j--) {
      let temp = array[i]
      array[i] = array[j]
      array[j] = temp
    }
    // var result = []
    // for(var i = array.length - 1; i>=0 ; i--) {
    //   result.push(array[i])
    // }
    //return result
    return array
  }

  //sortedIndex
  function sortedIndex(array,value) {
    for(let i = 0 ; i<array.length;i++ ) {
      if(array[i] > value) {
        return i
      }
    }
    return array.length
  }

  //every


  //concat
  function concat (...values) {
    var result = []
    for(var i =0 ; i<values.length;i++) {
       if(Array.isArray(values[i])) {
         values[i].forEach(it => {
           result.push(it)
         })
       } else {
         result.push(values[i])
       }
    }
    return result
  }
  

  //groupBy()   interator 迭代器 (循环迭代的)  predicate 谓词 (确定某种标准的,做判定的)

  function groupBy(array,predicate = it => it/* predicate = identity */) { //第二个参数不传,就默认是按照其自己分组
    var result = {}

    for(var i = 0 ; i<array.length;i++) {
      var key = predicate(array[i],i,array)
      if(!Array.isArray(result[key])) {
        result[key] = []
      }
      result[key].push(array[i])
    }
    return result
  }

  //sumBy
  function sumBy(array,predicate = it => it  /* predicate = identity */) {
    var sum = 0
    for(var i = 0; i<array.length;i++) {
      sum += predicate(array[i],i, array)
    }
    return sum
  }

  //identity
  //identity   用predicate判断标准是会经常用
  function identity (val) {
    return val
  }

  // const identity = it => it


  //mapValues()
  function mapValues(obj,mapper) {
    var result = {}
    for(var key in obj) {
      var val = obj[key]
      result[key] = mapper(val,key,obj)
    }
    return result
  }
  

  //mapKeys
  function mapKeys(obj,mapper) {
    var result = {}
    for(var key in obj) {
      var val = obj[key]
      result[mapper(val,key,obj)] =  val
    }
    return result
  }

  // //instanceof
  // function instanceOf(val,Ctor) {
  //   if(val == null) {
  //     return false 
  //   }
  //   if(val.__proto__ ==Ctor.prototype) {
  //     return true
  //   } else {
  //     return instanceOf(val.__proto__,Ctor)
  //   }
  // }

  //ary
  function ary(f,n = f.length) {
    return function(...args) {
      return f(args.slice(0,n))
    }
  }

  //before
  function before(n,func) {
    var c = 0
    return function(...args) {
      if(c<n) {
        var result = func.call(this,...args)
        c++
      } else {
        return result 
      }
    }
  }


  //after
  function after(n,func) {
    var c = 0
    return function(...args) {
      c++
      if(c>n) {
        return func.call(this,...args)
      }
    }
  }


  //flip

  function  flip(func) {
    return function(...args) {
      return func(...args.reverse())
    } 
  }

  //negate
  function negate(predicate) {
    return function(...args) {
      return !predicate(...args)
    }
  }

  //deference  需要被检查的数组  values(...arrays) 排除的值  返回一个过滤后的新数组
  function difference(array,...values) {
    var result = []
    var test = [].concat(...values)  //将所有需要被排除的值  组成一个数组
    for(let val of array) {
      if(!test.includes(val)) {
        result.push(val)
      }
    }
    return result
  }


  //differenceBy  
  function differenceBy(array,...values) {
    var result = []
    var test = [].concat(...values) 
  }








  return {
    chunk,
    compact,
    join,
    last,
    lastIndexOf,
    drop,
    dropRight,
    fill,
    findIndex,
    flatten,
    flattenDeep,
    flattenDepth,
    fromPairs,
    head,
    indexOf,
    initial,
    reverse,
    sortedIndex,
    concat,
    groupBy,
    identity,
    sumBy,
    mapValues,
    mapKeys,
    ary,
    before,
    after,
    flip,
    negate,
    difference,
    differenceBy,
    isArguments,
    isArray,
    isBoolean,
    isFunction,
    isString,
    isNumber,
    isNaN,
    isNull,
    isObject,
    isObjectLike,
    isUndefined,
    isRegExp,








  }
}()
