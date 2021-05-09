console.log('Before Preparing Food')
function prepareFood(callback){
    setTimeout(()=>{
        console.log('Preparing Food.....')
        callback('Food is ready')
    },20)
    
}
// function mycallback(value){
//     console.log('value = ',value)
//     prepareft(ftcallback)
// }
function prepareft(callback){
    setTimeout(()=>{
        console.log('Preparing french toast....')
        callback('FT is ready')
    },10)
}
// function ftcallback(value){
//     console.log('value = ',value)
// }

function preparecoffee(callback){
    setTimeout(()=>{
        console.log('Preparing coffee....')
        callback('coffee is ready')
    },5)
}
// function ftcallback(value){
//     console.log('value = ',value)
// }


prepareFood(function (value){
    console.log('value = ',value)
    prepareft(function(value){
        console.log('value = ',value)
            preparecoffee(
                function(value){
                         console.log('value = ',value)
                     })
    })
})

console.log('After preparing food dinner is ready')