const aplicacion = document.querySelector('.container');

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
		'X-RapidAPI-Key': '773b0ab407msh2374b851ea23f51p134a31jsn743f1e112a2a'
	}
};


let testExcercise = {bodyPart: 'waist', equipment: 'band', gifUrl: 'http://d205bpvrqc9yn1.cloudfront.net/0979.gif', id: '0979', name: 'band horizontal pallof press'}

function getExercise() {
	// for (let index = 979; index < 980; index++) {
	// 	fetch(`https://exercisedb.p.rapidapi.com/exercises/exercise/0${index}`, options)
	// 	.then(response => response.json())
	// 	.then(response => {
	// 		console.log(response)
	// 		const div = document.createElement('div')
	// 		div.innerHTML = 
	// 		`<h1>${response.name.toUpperCase()}</h1> 
	// 		<img src = ${response.gifUrl}></img>`
	
	// 		aplicacion.appendChild(div)
	// 	})
	// 	.catch(err => console.error(err));
		
	// }	


	const div = document.createElement('div')
	div.innerHTML = 
	`<h1>${testExcercise.name.toUpperCase()}</h1> 
	<img src = ${testExcercise.gifUrl}></img>`
	aplicacion.appendChild(div)


}




