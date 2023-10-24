const input = document.querySelector('#input');
const button = document.querySelector('#button');
const output = document.querySelector('#output');

function getApi () {
    let uri = 'https://www.swapi.tech/api/people/?name=';
    let fullUri = `${uri}${input.value}`;

    fetch(fullUri)
        .then(res => {
            if (res.ok)
                return res.json();
            throw new Error('Error when fetching from JSON.');
        })
        .then(data => {
            let properties = data.result[0].properties;
            let propString = `${properties.name}\nGender: ${properties.gender}\nBirth year: ${properties.birth_year}\nHeight: ${properties.height}\nMass: ${properties.mass}`;

            output.innerHTML = propString;
        })
        .catch(err => console.log(err))
}

button.addEventListener('click', getApi);