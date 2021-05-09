console.log('Before Preparing Food')
function prepareFood(data){
let promise=new Promise(function(resolve,reject){
    setTimeout(()=>{
        if(data!=2){
            console.log('Preparing Food.....')
            resolve('Food is ready')
        }else{
            reject('value not accepted')
        }
     
    },5000)
});  
return promise; 
}
// function mycallback(value){
//     console.log('value = ',value)
//     prepareft(ftcallback)
// }
function prepareft(){
let promise=new Promise(function(resolve,reject){
    setTimeout(()=>{
        console.log('Preparing french toast....')
        resolve('FT is ready')
    },1000)
})
return promise;
}
// function ftcallback(value){
//     console.log('value = ',value)
// }

function preparecoffee(data){
let promise=new Promise(function(resolve,reject){
    setTimeout(()=>{
        if(data!=2){
            console.log('Preparing coffee....')
            resolve('coffee is ready')
        }else{
            reject('value is not accepted')
        }

    },5000)
})
return promise;
}
// function ftcallback(value){
//     console.log('value = ',value)
// }


// prepareFood(function (value){
//     console.log('value = ',value)
//     prepareft(function(value){
//         console.log('value = ',value)
//             preparecoffee(
//                 function(value){
//                          console.log('value = ',value)
//                      })
//     })
// })
let promise=prepareFood(2);
// console.log('promise = ',promise)
promise.then(function(value){
    console.log('Food is ready callback = ',value)
    return prepareft();
})
.then(function(value){
    console.log('French toast is ready callback = ',value)
    return preparecoffee();
})
.then(function(value){
    console.log('Coffee is ready callback = ',value)
})
.catch(function(err){
    console.log('error = ',err)
})
console.log('After preparing food dinner is ready')