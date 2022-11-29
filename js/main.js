let search = document.querySelector('#search');
let btn = document.querySelector('#btn-search');
let card = document.querySelector('.card');
let container = document.querySelector('.main__container');
let card_profile = document.querySelector('.card_profile')
// const img = document.querySelector('#card--sprit')


const request = new XMLHttpRequest;
const API = 'https://pokeapi.co/api/v2/pokemon/';

btn.addEventListener('click', ()=>{
    get_pokemon(search.value)
    .then(res =>{
        console.log(res)})
    .catch(error=>{
        console.log('error'+error)
    })
})

function get_pokemon(name){
    return new Promise((resolve, reject) =>{
        if(search.value){
            request.open('GET', `${API}${name}`, true)
            request.onload =  function(){
                if (request.status >= 200 && request.status < 400) {
                    let data = JSON.parse(this.response)
                    if (data){
                        card.innerText = ''
                        card_profile.innerText = ''
                        
                        // console.log(data);
                        
                        let img = document.createElement('img')
                        let title = document.createElement('p')
                        let stats = document.createElement('div')
                        let pokeball = document.createElement('div')
                        let pokeball_inside = document.createElement('div')

                        title.innerText = data.name;
                        img.setAttribute('src', data.sprites.front_default)
                        pokeball.classList.add('pokeball')
                        pokeball_inside.classList.add('pokeball__inside')

                        pokeball_inside.append(img)
                        pokeball.append(pokeball_inside, title)
                        
                        card_profile.append(pokeball)
                        card.append(stats)
                        i = 0;
                        for(record of data.stats){
                            let container = document.createElement('div');
                            let stat_name = document.createElement('p');
                            let stat_value = document.createElement('p');
                            
                            container.classList.add(`container--stats__box`);
                            container.setAttribute('id', `box-${i}`)

                            stat_name.append(record.stat.name);
                            stat_value.append(record.base_stat);
                            container.append(stat_name, stat_value);
                            stats.appendChild(container);
                            i += 1;
                        }
                        resolve('resolve')
                    }else{
                        card.innerText = '';
                        card_profile.innerText = ''
                        reject('Error')
                    }
                    
                } else {
                    card.innerText = ''
                    card_profile.innerText = ''
                    console.log('Connection error')
                    }
            }
            request.send()
        } else {
            return request.open('GET', `${API}`, true)
        }

    })  
}