var results;

function where() {
	places = ["the stone-slung mountain", "the kiss", "the trees", "Hell", "the heated forests", "cool cool depths", "a dry place", "sanded hills", "salt flats", "grey wetlands", "a murky bog", "your childhood bedroom", "a carved wooden chair", "the spindle's prick", "a plastic bag", "the space between two boulders", "an eye", "a teardrop", "the abandoned chapel", "a round dirt hole", "Heaven", "the arms of The Lord", "the back of a swampy trailer", "soft light", "the crackling fire", "snowdrifts and snowdrifts"]
	var selected = places[Math.floor(Math.random() * places.length)];
	document.getElementById("location").innerHTML = selected;
	console.log("swallow");
}

function typeOfDream() {
	var types = ["Dirty", "Sad", "Dark", "Light", "Gentle", "Cold", "Warm", "Crazy", "Sweet", "Clean", "Bright", "Loud", "Quiet", "Deep", "Shallow", "Icy", "Blissful", "Fearful", "Deathly", "Fluffy", "Caring", "Heartening", "Silken", "Hot", "Stifling", "Odd", "Curious", "Strange", "Interesting", "Dull", "Boring", "Excruciating", "Lovely", "Kind", "Cruel"]
	var selected = types[Math.floor(Math.random() * types.length)];
	document.getElementById("dream-type").innerHTML = selected;
}

function dreamNumber(){
	document.getElementById("dream-number").innerHTML =  Math.floor(Math.random() * 9999);
	console.log("flutter");
}

function youComeAcross() {
	var items = ["the number", "the war", "the thunder", "the glory", "your mother", "a pilgrim", "some property", "a pillar", "a statue", "some marble", "a claw", "a hare", "a piglet", "some brass", "a coin", "a snake", "a knife", "the sea", "the snow", "the branches", "a temple", "a hole", "a sheet of glass", "the softness", "the morning", "a garden", "the grass", "the grace", "some profit", "a hyphen", "a boulder", "some milk", "a breast", "a heart", "a lung", "a rook", "the center", "the edge", "the fear", "a star", "an arm", "a pulse", "the withering", "the detritus", "the ivy", "the beginning", "the territory", "a tack", "some blackberries", "the GPS", "a location", "$900", "the uptake", "a kettle", "the water", "a list", "a pen", "the dirt", "a cherry", "a crack", "a wallet", "a task", "some lace", "a violet", "a rose", "the gloaming", "some steel", "a system", "a flock", "the daughter"];
	var selected = items[Math.floor(Math.random() * items.length)];
	document.getElementById("item").innerHTML = selected;
	console.log("breath");
}

function person() {
	results = fetch("https://randomuser.me/api")
		.then(res=> res.json())
		.then(res => personAssign(res));

	function personAssign(res){
		var nameToSlice = res["results"][0]["name"]["first"];
		var name = nameToSlice.charAt(0).toUpperCase() + nameToSlice.slice(1);
		document.getElementById("person-name").innerHTML = name;
		////
		console.log("sigh");
		////
		var locationToSlice = res["results"][0]["location"]["city"];
		var location = locationToSlice.charAt(0).toUpperCase() + locationToSlice.slice(1);
		document.getElementById("location-name").innerHTML = location;
	}
}

function speakOnce() {
	fetch("https://api.datamuse.com/words/?ml=strange")
		.then(res => res.json())
		.then(res => selectWord(res))

	function selectWord(res) {
		var i = Math.floor(Math.random() * 99);
		var wordToSay = res[i]["word"];
		document.getElementById("word-1").innerHTML = wordToSay;
	}
	console.log("blink");
}

function loopAndStutter() {
	var toSay = ["and", "uh", "I", "well", "so", "but", "no", "yes", "you"];
	var selected = toSay[Math.floor(Math.random() * toSay.length)];
	var numOfTimes = Math.floor(Math.random() *7);
	var toSplit = [];
	for (var i = 0; i <= numOfTimes; i++) {
		toSplit.push(" " + selected);
	}
	////
	console.log("hum");
	////
	var addToHTML = toSplit.toString();
	document.getElementById("stutter").innerHTML = addToHTML;
}

function turn() {
	var directions = ["left", "right", "north", "south", "east", "west"];
	var selected = directions[Math.floor(Math.random() * directions.length)];
	document.getElementById("direction").innerHTML = selected;
}

function soundLooper() {
	var osc;
	var playing = false;

	function setup() {
		osc = new p5.Oscillator();
  		osc.setType('sine');
  		osc.freq(240);
  		osc.amp(0);
  		osc.start();
	}

	function mouseClicked() {
		document.getElementById("sound").addEventListener("click", function(e) {
			e.preventDefault;
			if (!playing) {
				osc.amp(0.5, 0.05);
        		playing = true;
			}
		})
	}
}