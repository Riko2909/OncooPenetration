const reqestInput = document.getElementById("requestcount");
const reqestContent = document.getElementById("content");
const reqestColor = document.getElementById("color");
const reqestRoom = document.getElementById("room");
const progress = document.getElementById("progress");

let room = "";

let post_item = {
	ebene: 0,
	farbe: "gelb",
	inhalt: "TEST1",
	haeufigkeit: 42069,
	x: -11,
	y: -11,
	sichtbar: true,
	schriftgroesse: 0,
	schattenfarbe: 0,
};

function getURL() {
	return `https://www.oncoo.de/API/Kartenabfrage/API.php?funktion=4&dir=${room}&karte=${JSON.stringify(
		post_item
	)}&_=${new Date().getTime()}`;
}

async function postToURL(params) {
	post_item.inhalt = reqestContent.value ?? "MOIN";
	post_item.farbe = reqestColor.value ?? "gelb";

	room = reqestRoom.value ?? "0y8k";

   const requestCount = reqestInput.value
   reqestInput.value = 0

	for (let i = 0; i < requestCount; i++) {
		let response = await fetch(getURL(), {
			method: "POST",
		});
		
      progress.innerText = `Anfrage ${i + 1} von  ${requestCount} gesendet!`
	}
}
