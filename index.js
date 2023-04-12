let searchText = document.querySelector(".textInput input");
let searchBtn = document.querySelector(".button button");
let searchResult = document.querySelectorAll(".searchResult div");

function searchWord() {
	const options = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': '9b1147eb8bmsh565f0fdba4bb370p14b2fbjsn169b1c26d31d',
			'X-RapidAPI-Host': 'mashape-community-urban-dictionary.p.rapidapi.com'
		}
	};
	
	fetch(`https://mashape-community-urban-dictionary.p.rapidapi.com/define?term=${searchText.value}`, options)
		.then(response => response.json())
		.then(response => {
			searchResult[0].innerText = response.list[0].definition;
			searchResult[1].innerText = response.list[1].definition;
			searchResult[2].innerText = response.list[2].definition;
			searchResult[3].innerText = response.list[3].definition;
			searchResult[4].innerText = response.list[4].definition;
			searchResult[5].innerText = response.list[5].definition;
			searchResult[6].innerText = response.list[6].definition;
			searchResult[7].innerText = response.list[7].definition;
			searchResult[8].innerText = response.list[8].definition;
			searchResult[9].innerText = response.list[9].definition;
		})
		.catch(err => console.error(err));

		searchResult.forEach( eachSearchResult => eachSearchResult.style.display = "block");

}

searchBtn.addEventListener("click", searchWord);
