console.log('Before Preparing Food')
function prepareFood(callback){
    setTimeout(()=>{
        console.log('Preparing Food.....')
        callback('Food is ready')
    },20)
    
}
function mycallback(value){
    console.log('value = ',value)
    prepareft(ftcallback)
}
function prepareft(callback){
    setTimeout(()=>{
        console.log('Preparing french toast....')
        ftcallback('FT is ready')
    },10)
}
function ftcallback(value){
    console.log('value = ',value)
}

prepareFood(mycallback)

console.log('After preparing food dinner is ready')