/**
 * Created by jolanwuyts on 14/03/17.
 */
$(function(){
    console.log("Jquery test");
});
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

/* submitting the genre and mood inputs on pressing enter



$("#genreinput").keypress(function(event) {
    if (event.which == 13) {
        event.preventDefault();
        genreresults();

    }
});

$("#moodinput").keypress(function(event) {
    if (event.which == 13) {
        event.preventDefault();
        $("#moodform").submit();
    }
});
 */
/* loading the Youtube API  */

function init() {
    gapi.client.setApiKey("AIzaSyDJgFr0e-Z5UF28f-klWqhPgS-k0efBFtU");
    gapi.client.load("youtube", "v3", function () {
    });
    console.log('youtube API ready');
}

/* output the result of the genre form in the results div*/
function genreresults(){
    console.log("this executes.")
}