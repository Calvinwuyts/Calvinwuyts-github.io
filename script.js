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

/* checking if the user has pressed enter in either the mood or genre search divs and making it click the hidden search button */
function checkSubmit(e) {
    if(e && e.keyCode == 13) {
        e.preventDefault();
        $(".searchbutton").click();
    }
    }

/* defining what the hidden search button does */
function keyWordsearch(e){
    console.log('keyword search initialized');
    e.preventDefault();
    gapi.client.setApiKey('AIzaSyDJgFr0e-Z5UF28f-klWqhPgS-k0efBFtU');
    gapi.client.load('youtube', 'v3', function(){
        makeRequest();
    });
}
function makeRequest(){
    console.log('making request');
    var q = $('.searchbar').val();
    console.log(q);
    var request = gapi.client.youtube.search.list({
        q: q,
        part: 'snippet',
        maxResults: 20
    });
    request.execute(function(response)  {
        $('.results').empty();
        var srchItems = response.result.items;
        $.each(srchItems, function(index, item){
            vidTitle = item.snippet.title;
            vidThumburl =  item.snippet.thumbnails.default.url;
            vidThumbimg = '<pre><img id="thumb" src="'+vidThumburl+'" alt="No  Image  Available." style="width:204px;height:128px"></pre>';

            $('.results').append('<pre>' + vidTitle + vidThumbimg +   '</pre>');

        })
    })
}

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