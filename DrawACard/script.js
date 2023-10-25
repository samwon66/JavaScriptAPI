const button = document.querySelector('#button');
const output = document.querySelector('#output');

function drawANewCard() {
    let url = 'https://deckofcardsapi.com/api/deck/new/draw/?count=1';

    fetch(url, {
        method: 'GET',
        headers: {
            'Accept': 'application/json'
        }
    })
        .then(res => {
            if (res.ok)
                return res.json();
            throw new Error('Error from fetching from JSON'); 
        }) 
        .then(data => {
            let cardImg = data.cards[0].image;
            
            // console.log(cardImg);
            console.log(data);

            let elem = document.createElement('p');
            let imgElem = document.createElement("img");
            //output.innerHTML = '';
            // imgElem.setAttribute("src", `{cardImg}`);
            output.innerHTML += elem;
            
            output.innerHTML += imgElem;
            //output.innerHTML = imgElem;
            //imgElem.setAttribute('scr', cardImg);


        })
        .catch(err => console.log(err))

}

button.addEventListener('click', drawANewCard);