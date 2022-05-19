const aplicacion = document.querySelector('.container-excercises');
let lastCall = "";

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
		'X-RapidAPI-Key': '773b0ab407msh2374b851ea23f51p134a31jsn743f1e112a2a'
	}
};

function createDiv(nameExercise, url) {
	return 	`<div class = "container-fluid w-50 mx-auto m-2" id="container-exercices">
			<div class = "row p-2">
			<div class = "col-md-9 col-sm-6"><h1><span>Exercise:  </span><br><br>${nameExercise.toUpperCase()}</h1></div>
			<div class = "col-md-3 col-sm-6"> <img src = ${url}></img></div>
			</div>
			</div>`;
}

const listExercises = async(bodyPart) => {

	await fetch(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`, options)
			.then(response => response.json())
			.then(response => {
				for (let i = 15; i < 20; i++) {
					let name = response[i].name;
					let url = response[i].gifUrl;
					const div = document.createElement('div')
					div.innerHTML = createDiv(name, url);		
					aplicacion.appendChild(div)					
				}
			})
			.catch(err => console.error(err));
}

async function getExercise() {
	
	let selectedValue = document.querySelector('input[name = categoria]:checked').value;

	if (selectedValue != lastCall) {
		$("#container-excercises").empty();
		switch (selectedValue) {
			case 'cardio':
				lastCall = 'cardio';
				await listExercises('cardio');
				break;
			case 'waist':
				lastCall = 'waist';
				await listExercises('waist');
				break;
			case 'chest':
				lastCall = 'chest';
				await listExercises('chest');
				break;
			case 'leg':
				lastCall = 'leg';
				await listExercises('upper legs');
			default:
				break;
		}
	} 
	document.getElementById("container-excercises").scrollIntoView({block: "end", behavior: "smooth"})
}




