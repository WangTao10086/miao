
//v1: 
//v2:
//v3:



var wangtao10086 = function (){
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
  function dropright(array,n) {
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
  function flatten(array) {
    var result = []
    for(var i = 0 ; i<array.length ; i++) {
      if(Array.isArray(array[i])) {
        result.push(...array[i])
      } else {
        result.push(array[i])
      }
    }
    return result
  }

  //flattenDeep 递归为一维数组

  
  //fromPairs
  function fromPairs(pairs) {
    let map = {}
    for(let i = 0 ; i < pairs.length ; i++) {
      map[pairs[i][0]] = pairs[i][1]
    }
    return map
  }

  //head






  return {
    chunk,
    compact,
    join,
    last,
    lastIndexOf,
    drop,
    dropright,
    fill,
    findIndex,
    flatten,
    fromPairs,
    


  }
}()
