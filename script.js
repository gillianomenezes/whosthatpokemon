// JavaScript Document
var number;
var correctAnswers = 0;
var timeInterval = 60;

function changeImage(){
	number =  Math.floor((Math.random() * 151) + 1);
	numberText = zeroFill(number, 3);
	//alert(numberText + "  " + pokemon[number - 1]);
	//document.getElementById("img_pokemon").src = "http://cdn.bulbagarden.net/upload/3/3d/" + numberText + pokemon[number - 1] + ".png";
	//document.getElementById("img_pokemon").src = "http://img.pokemondb.net/sprites/black-white/normal/" + pokemon[number - 1].toLowerCase() + ".png";
	//document.getElementById("img_pokemon").src = "https://www.pokedit.com/images/pokemon-sprites/6/" + numberText + ".gif";
	//document.getElementById("img_pokemon").src = "http://www.pokestadium.com/assets/img/sprites/official-art/dream-world/" + pokemon[number - 1].toLowerCase() + ".png";
	document.getElementById("img_pokemon").src = "http://pldh.net/media/dreamworld/" + numberText + ".png";
}

function zeroFill( number, width )
{
  width -= number.toString().length;
  if ( width > 0 )
  {
    return new Array( width + (/\./.test( number ) ? 2 : 1) ).join( '0' ) + number;
  }
  return number + ""; // always return a string
}

function valueKeyPressed() {
    var edValue = document.getElementById("inputName");
    var inputNameValue = edValue.value.toLowerCase();
    var pokemonName = pokemon[number-1];
              
    pokemonName = pokemonName.toLowerCase();                
            
    if(inputNameValue == pokemonName)
    {
        changeImage();
        edValue.value = "";    
        correctAnswers += 1;     
        var displayCorrectAnswers = document.getElementById('PokemonsNamedAmount');
        displayCorrectAnswers.textContent = correctAnswers;
    }    
}

function noIdeaWhatIsThisPokemon()
{
    changeImage();
    var edValue = document.getElementById("inputName");
    edValue.value = "";
}

function startTimer(duration, display) {
    var start = Date.now(),
        diff,
        minutes,
        seconds;
    function timer() {
        // get the number of seconds that have elapsed since 
        // startTimer() was called
        diff = duration - (((Date.now() - start) / 1000) | 0);

        // does the same job as parseInt truncates the float
        minutes = (diff / 60) | 0;
        seconds = (diff % 60) | 0;

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds; 

        if (diff <= 0) {
            // add one second so that the count down starts at the full duration
            // example 05:00 not 04:59
            start = Date.now() + 1000;
        }
        
    };
    
    timer();
    setInterval(timer, 1000);
}

function timeElapsed()
{
    // Here will be the code to share on FB
    alert("Share on FB that you named correctly " + correctAnswers + " pokemons!");    
}

window.onload = function () {
    display = document.querySelector('#time');
    startTimer(timeInterval, display);
    document.getElementById('PokemonsNamedAmount').textContent = 0;
};

window.setTimeout(timeElapsed, timeInterval*1000);

var pokemon = ["Bulbasaur","Ivysaur","Venusaur","Charmander","Charmeleon","Charizard","Squirtle","Wartortle","Blastoise","Caterpie","Metapod","Butterfree","Weedle","Kakuna","Beedrill","Pidgey","Pidgeotto","Pidgeot","Rattata","Raticate","Spearow","Fearow","Ekans","Arbok","Pikachu","Raichu","Sandshrew","Sandslash","Nidoran?","Nidorina","Nidoqueen","Nidoran?","Nidorino","Nidoking","Clefairy","Clefable","Vulpix","Ninetales","Jigglypuff","Wigglytuff","Zubat","Golbat","Oddish","Gloom","Vileplume","Paras","Parasect","Venonat","Venomoth","Diglett","Dugtrio","Meowth","Persian","Psyduck","Golduck","Mankey","Primeape","Growlithe","Arcanine","Poliwag","Poliwhirl","Poliwrath","Abra","Kadabra","Alakazam","Machop","Machoke","Machamp","Bellsprout","Weepinbell","Victreebel","Tentacool","Tentacruel","Geodude","Graveler","Golem","Ponyta","Rapidash","Slowpoke","Slowbro","Magnemite","Magneton","Farfetch'd","Doduo","Dodrio","Seel","Dewgong","Grimer","Muk","Shellder","Cloyster","Gastly","Haunter","Gengar","Onix","Drowzee","Hypno","Krabby","Kingler","Voltorb","Electrode","Exeggcute","Exeggutor","Cubone","Marowak","Hitmonlee","Hitmonchan","Lickitung","Koffing","Weezing","Rhyhorn","Rhydon","Chansey","Tangela","Kangaskhan","Horsea","Seadra","Goldeen","Seaking","Staryu","Starmie","Mr. Mime","Scyther","Jynx","Electabuzz","Magmar","Pinsir","Tauros","Magikarp","Gyarados","Lapras","Ditto","Eevee","Vaporeon","Jolteon","Flareon","Porygon","Omanyte","Omastar","Kabuto","Kabutops","Aerodactyl","Snorlax","Articuno","Zapdos","Moltres","Dratini","Dragonair","Dragonite","Mewtwo","Mew"];