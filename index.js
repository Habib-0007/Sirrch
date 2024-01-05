let searchText = document.querySelector(".textInput input");
let searchBtn = document.querySelector(".textInput button");
let searchResult = document.querySelector(".searchResult div");
let audio = document.querySelector("#audio");
let volume = document.querySelector("#volume");
let word = document.querySelector(".textArea h4");
let answer = document.querySelector(".answer");
let example = document.querySelector(".example");
let phonetic = document.querySelector(".phonetic");
let speechType = document.querySelector(".speechType");



function searchWord() {
	fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${searchText.value}`)
		.then(response => response.json())
		.then(data => {
		speechType = data[0].meanings[0].partOfSpeech;
		phonetic.innerText = `${data[0].phonetics[0].text} ${data[0].phonetics[1].text}`;
		word.innerText = searchText.value;
		answer.innerHTML=`<em> Definition: </em> <br> 1. ${data[0].meanings[0].definitions[0].definition} &nbsp; <span class="speechType"> ${speechType} </span> <br> 2. ${data[0].meanings[1].definitions[0].definition} &nbsp; <span class="speechType"> ${data[0].meanings[1].partOfSpeech} </span>`;
		 example.innerHTML = `<em> Example: </em> <br> • ${data[0].meanings[0].definitions[1].example}`; 
		
		function play() {
    volume.classList.remove("fa-volume-off");
		volume.classList.add("fa-volume-up");
		    audio.src = data[0].phonetics[0].audio;
		audio.play();
}

function stop() {
    volume.classList.add("fa-volume-off");
		volume.classList.remove("fa-volume-up");
}

volume.addEventListener("click", () => {

    if (volume.classList.contains("fa-volume-off")) {
        play();
    }
    else {
        stop();
    }
    });
		})
		.catch(err => console.error(err));
				
		searchResult.style.display = "block";
    setTimeout( () => searchResult.style.opacity = "1", 300);		

}

searchBtn.addEventListener("click", searchWord);
