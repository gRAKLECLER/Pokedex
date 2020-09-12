/* eslint-disable */

let id = Math.floor(Math.random()*150)

export function getPokemon() {
	return fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
		.then(response => response.json())
		.catch(error => console.error(error))
};

export function GetTypes() {
	return fetch(`https://pokeapi.co/api/v2/type/`)
		.then(Response => Response.json())
		.catch(error => console.error(error))
}
