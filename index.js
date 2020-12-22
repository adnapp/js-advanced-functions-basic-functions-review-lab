// Your code here

function saturdayFun(event = "roller-skate"){
    return `This Saturday, I want to ${event}!`
}

function mondayWork(event = "go to the office"){
    return `This Monday, I will ${event}.`
}

function wrapAdjective(flair = '*') {
    return function(adj = "special"){
        return `You are ${flair}${adj}${flair}!` 
    }
}

let Calculator ={
    add: function(a,b){
        return a+b
    },
    subtract: function(a,b){
        return a-b
    },
    multiply: function(a,b){
        return a*b
    },
    divide: function(a,b){
        return a/b
    }
}

function actionApplyer(start,arr){
    let a=start 

    for (let i = 0; i < arr.length; i++ ){
        a = arr[i](a)
      }
    
      return a
}

