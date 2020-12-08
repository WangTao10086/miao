
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
    for(var j=array.length-1;j>=size; j--) {
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
    for(var i = 0;i<array.length - 1;i++) {
      result += array[i] + seperator
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
  




  return {
    chunk,
    compact,
    join,
    last,
    lastIndexOf,
    drop,

  }
}()
