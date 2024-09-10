function MatrixChallenge(strArr) { 
  
    let n =strArr.length
    let height=0
    let width=0
    let newArray=[] 
    for(let i =0;i<n;i++ ){
      for(let j=i+1;j<n;j++){
        if(strArr[i][1]===strArr[j][1]||strArr[i][3]===strArr[j][3]){
          return strArr[i];
        }
        let height=parseInt(strArr[i][1])
        let width=parseInt(strArr[i][3])
        for(let k =0;k<8;k++){
          height=height+1
          width=width+1
          newArray.push("("+height+","+width+")")
        }
         height=parseInt(strArr[i][1])
         width=parseInt(strArr[i][3])
        for(let k =0;k<8;k++){
          height=height+1
          width=width-1
          newArray.push("("+height+","+width+")")
        
        }
         height=parseInt(strArr[i][1])
         width=parseInt(strArr[i][3])
        for(let k =0;k<8;k++){
          height=height-1
          width=width+1
          newArray.push("("+height+","+width+")")
        
        }
         height=parseInt(strArr[i][1])
         width=parseInt(strArr[i][3])
        for(let k =0;k<8;k++){
          height=height-1
          width=width-1
          newArray.push("("+height+","+width+")")
        
        }
        
      }
      for(let g=0;g<newArray.length;g++){
        if(strArr[i][1]===strArr[g][1]||strArr[i][3]===strArr[g][3]){
          return strArr[i];
          }
        }
    }
  
    
    // code goes here  
    return "True"; 
  
  }

  let eightQueensPosition=["(2,1)", "(5,3)", "(6,3)", "(8,4)", "(3,4)", "(1,8)", "(7,7)", "(5,8)"]
  // keep this function call here 
  console.log(MatrixChallenge(eightQueensPosition));