
function gcd (a,b){   
    let divs = []
    let aDivs =[]
    let bDivs = []
    let commonNbrs=[]
    let Large
    
    for (let i = 0; i<=a; i++){
      if(a%i == 0){
        aDivs.push(i)
      }
    }
    
    for (let j = 0; j<=b; j++){
      if(b%j == 0){
        bDivs.push(j)
      }
    }
    
    for (let k = 0; k<=aDivs.length-1 ; k++){
    for (let l =0; l<=bDivs.length-1; l++){
     if(aDivs[k] == bDivs[l]){
       if(!commonNbrs.includes(aDivs[k])){
         commonNbrs.push(aDivs[k])
       }
     }
    }
    
    }
      for (let i =0; i<=commonNbrs.length-1; i++){
        Large = commonNbrs[0]
        if(commonNbrs[i] > Large){
          Large = commonNbrs[i]
        }
        // else{
          
        // }
      }
       // return {aDivs ,bDivs}
      // console.log({aDivs ,bDivs})
      return Large
    }
    
    console.log(gcd(12,8))