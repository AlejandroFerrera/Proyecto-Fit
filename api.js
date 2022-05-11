const aplicacion = document.querySelector('.container');

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
		'X-RapidAPI-Key': 'a8cbd740f3msh4aa65b8399d2c13p158d2cjsn789f1326c327'
	}
};

fetch('https://exercisedb.p.rapidapi.com/exercises/exercise/0977', options)
	.then(response => response.json())
	.then(response => {
        console.log(response)
        aplicacion.innerHTML = 
        `<h1>${response.name.toUpperCase()}</h1> 
        <img src = ${response.gifUrl}></img>`
    })
	.catch(err => console.error(err));