/**
 * Created by jolanwuyts on 31/03/17.
 */
function init() {
    gapi.client.setApiKey("AIzaSyDJgFr0e-Z5UF28f-klWqhPgS-k0efBFtU");
    gapi.client.load("youtube", "v3", function () {
    });
    console.log('youtube API ready');
    playerinit();
}

vidurl = new URLSearchParams(window.location.search);

function playerinit(){
    $('.player').append('<iframe id="ytplayer" type="text/html" width="640" height="360" src="https://www.youtube.com/embed/'+vidurl.get("vidid")+'?autoplay=1" frameborder="0"></iframe>');
    console.log(vidurl.get('vidid'))
}