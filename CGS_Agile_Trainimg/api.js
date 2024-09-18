// var result= fetch('https://randomuser.me/api/')

// result.then (function(data){
//     console.log(data)
//     var res = data.json()
//     res.then(function(userData){
//         console.log(userData)
//     })
//     res.catch(function(err){
//         console.log(err)
//     })


// })
// result.catch(function(err){
//     console.log(err)
// })
// result.then(function(userData){
//     console.log(userData)
// })
window.onload = async function(){
    var result = await fetch('https://randomuser.me/api/')
    var data = await result.json()
    console.log(data)
}
