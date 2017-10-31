/**
 * Created by jolanwuyts on 14/03/17.
 */
$(function(){
    console.log("Jquery test");
    var searchParams = new URLSearchParams(window.location.search);
    console.log('search params:'+searchParams);
    if (searchParams.has("gotogenre") === true) {
        console.log('gotogenre is in url');
        genrebutton();
    } else if(searchParams.has("gotomood") === true) {
        console.log('gotomood is in url');
        moodbutton();
    }
});

/* functions for all pages */

/* global variable for if the navbutton is clicked once or not */
var toggle = false;
/* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
function toggleNav() {
    if (toggle == false){
        toggle = true;
        $('.navbar').css("width","250px");
    }else {
        $('.navbar').css("width","0");
        toggle = false;
    }
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
function closeNav() {
    document.getElementById("mynavbar").style.width = "0";
}


/* functions specific for homepage */

/* initializing toggle variables telling us if the genre or mood buttons have been clicked */
var genretoggle = false;
var moodtoggle = false;

/* a function that says if the genre button has been clicked, slide the genre lookup form down.
If it is clicked again, slide it back up.
If the mood toggle is true, then the mood lookup form has been slid down. Slide the mood form back up
and slide the genre toggle down.
 */
function genrebutton(){
    if (genretoggle == false && moodtoggle == false){
        genretoggle = true;
        $('#genre').slideToggle("slow");
    } else if (genretoggle == false && moodtoggle == true){
        moodtoggle = false;
        genretoggle = true;
        $('#mood').slideToggle("slow");
        $('#genre').slideToggle("slow");
    } else {
     genretoggle = false;
        $('#genre').slideToggle("slow");
    }
}

/* same story for the mood button.
 */
function moodbutton(){
    if (moodtoggle == false && genretoggle == false){
        moodtoggle = true;
        $('#mood').slideToggle("slow");
    } else if (genretoggle == true){
        genretoggle = false;
        moodtoggle = true;
        $('#genre').slideToggle("slow");
        $('#mood').slideToggle("slow");
    } else {
        moodtoggle = false;
        $('#mood').slideToggle("slow");
    }
}

function topsearch(){
    window.location.href = "results.html?top";
}

function featuredsearch(){
    gapi.client.setApiKey("AIzaSyDJgFr0e-Z5UF28f-klWqhPgS-k0efBFtU");
    gapi.client.load("youtube", "v3", function () {
    });
    console.log('youtube API ready');
    $.get('featured.txt', function(response){
        var vidid = response;
        console.log(vidid);
        window.location.href = "player.html?vidid="+vidid;
    });

}

$( function() {
    var genreTags = [
        "8-bit",
        "C-pop",
        "EDM",
        "J-pop",
        "K-pop",
        "R&B",
        "RnB",
        "a cappella",
        "acid jazz",
        "acoustic",
        "ambient",
        "anime",
        "baroque",
        "bebop",
        "bluegrass",
        "blues",
        "bossa nova",
        "caribbean",
        "celtic",
        "chillwave",
        "chinese",
        "chiptune",
        "christian",
        "christmas",
        "city pop",
        "classical",
        "cyberpunk",
        "dance",
        "dancehall",
        "deep house",
        "disco polo",
        "disco",
        "downtempo",
        "drum & bass",
        "dub",
        "dubstep",
        "easy listening",
        "electro swing",
        "electro",
        "electronic",
        "folk rock",
        "folk",
        "funk",
        "future bass",
        "future house",
        "garage",
        "glitch pop",
        "good",
        "hard rock",
        "hardcore",
        "hardstyle",
        "hip hop",
        "horrorcore",
        "house",
        "indie folk",
        "indie rock",
        "indie",
        "industrial",
        "japanese",
        "jazz",
        "jungle",
        "latin",
        "lofi hiphop",
        "lofi",
        "lounge",
        "metal",
        "minimal",
        "nerdcore",
        "new age",
        "new wave",
        "nightcore",
        "nu disco",
        "orchestral",
        "polka",
        "pop",
        "postrock",
        "power house",
        "psychedelic",
        "punk",
        "ragtime",
        "rap",
        "reggae",
        "remix",
        "retro wave",
        "retro",
        "rock",
        "shoegaze",
        "simpsonwave",
        "singer-songwriter",
        "ska",
        "smooth jazz",
        "soul",
        "soundtrack",
        "speedcore",
        "steampunk",
        "surf",
        "swing",
        "synthpop",
        "synthwave",
        "techno",
        "trance",
        "trap",
        "trip hop",
        "tropical house",
        "tropical",
        "underground",
        "vaporwave",
        "video game",
        "vocal",
        "world",
    ];
    var moodTags = [
        "aggressive",
        "alone",
        "angry",
        "animated",
        "awesome",
        "beautiful",
        "bittersweet",
        "bright",
        "cafe",
        "calm",
        "carefree",
        "cheerful",
        "chill out",
        "chill",
        "chillout",
        "coffee",
        "complex",
        "dance",
        "dark",
        "deep",
        "dream",
        "dreamy",
        "driving",
        "elegant",
        "epic",
        "fantastic",
        "fierce",
        "fun",
        "game",
        "gaming",
        "ganja",
        "gentle",
        "gloomy",
        "gym",
        "happy",
        "homework",
        "hyper",
        "intense",
        "kawaii",
        "laid back",
        "lazy",
        "light",
        "lonely",
        "magical",
        "meditation",
        "melancholy",
        "mellow",
        "moody",
        "mysterious",
        "naive",
        "nerd",
        "noisy",
        "party",
        "peaceful",
        "positive",
        "quiet",
        "relax",
        "relaxed",
        "retro",
        "romantic",
        "sad",
        "sensual",
        "sentimental",
        "sexy",
        "sleep",
        "smoke",
        "smoking",
        "smooth",
        "soft",
        "somber",
        "soulful",
        "space",
        "stress",
        "study",
        "sweet",
        "tender",
        "thoughtful",
        "tragic",
        "trippy",
        "tropical",
        "uplifting",
        "walking",
        "wandering",
        "warm",
        "weed",
        "work",
    ];
    $( "#genreinput" ).autocomplete({
        source: genreTags
    });
    $( "#moodinput" ).autocomplete({
        source: moodTags
    });
} );

/* defining what the hidden search button does
function genrekeyWordsearch(e){
    console.log('genre keyword search initialized');
    e.preventDefault();
    gapi.client.setApiKey('AIzaSyDJgFr0e-Z5UF28f-klWqhPgS-k0efBFtU');
    gapi.client.load('youtube', 'v3', function(){
        genremakeRequest();
    });
}

function moodkeyWordsearch(e){
    console.log('mood keyword search initialized');
    e.preventDefault();
    gapi.client.setApiKey('AIzaSyDJgFr0e-Z5UF28f-klWqhPgS-k0efBFtU');
    gapi.client.load('youtube', 'v3', function(){
        moodmakeRequest();
    });
}
*/

/* after the keywords have been entered and the website has redirected to results.html, decode the html string to get
 the input of the parameters. First find out if it's a genre of mood keyword search by seeing if the pickgenre parameter
 or pickmood parameter is true. depending on that parameter, initialize genremakerequest of moodmakrequest.
 */

/* loading the Youtube API

function init() {
    gapi.client.setApiKey("AIzaSyDJgFr0e-Z5UF28f-klWqhPgS-k0efBFtU");
    gapi.client.load("youtube", "v3", function () {
    });
    console.log('youtube API ready');
}
 */
