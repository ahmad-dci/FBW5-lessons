// https://api.chucknorris.io/jokes/random

window.onload = function(){
    getJoke()
    let jokBtn = document.querySelector('#jokBtn')
    jokBtn.addEventListener('click', function(){
        getJoke()
    })

}

function getJoke(){
    let jokImg = document.querySelector('#jokImg')
    let jokId = document.querySelector('#jokId')
    let jokPar = document.querySelector('#jokPar')
    let url = 'https://api.chucknorris.io/jokes/random'
    fetch(url).then(data => {
        if(data.status == 200){
            data.json().then(jokObj =>{
                //console.log(jokObj);
                jokImg.src = jokObj.icon_url
                jokId.innerText = jokObj.id
                jokPar.innerText = jokObj.value

            }).catch(error=>{
                console.log(error)
            })
        }
    }).catch(error => {
        console.log(error);
    })
}