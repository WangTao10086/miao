
//v1: 
//v2:
//v3:



var wangtao10086 = function (){



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






  return {
    compact,

  }
}()
