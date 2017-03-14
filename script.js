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
var genretoggle = false;
var moodtoggle = false;

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
