const search = document.querySelector('#search');
const btn = document.querySelector('#btn-search');
const result = document.querySelector('.result');

btn.addEventListener('click', ()=>{
    get_name(search.value)
    .then(res =>{
        console.log(res);
    })
    .catch(error => {
        console.log(error)
    })
});

let users = [];
users.push(
    {
        name: 'Pepe',
        lastname: 'asdasdas',
        age: 100
    }
)
users.push(
    {
        name: 'Papa',
        lastname: 'qweqwe',
        age: 112
    }
)
users.push(
    {
        name: 'lele',
        lastname: 'eqeqe',
        age: 50
    }
)
function get_name(name){
    return new Promise((resolve, reject) =>{
        if (users.find(user => user.lastname === name)){
            console.log(name);
            resolve('resolve')
        }else{
            console.log(name);
            reject('error')  
        }

    })        
}


// get_name(search.value)
// .then(res =>{
//     console.log(res);
// })
// .catch(error => {
//     console.log(error)
// })