/**
 * Created by Calvin on 21/03/2017.
 */
$(function(){
    console.log("Jquery test");
});

/* navbar scripts */
var toggle = false;
function toggleNav() {
    if (toggle == false){
        toggle = true;
        $('.navbar').css("width","250px");
    }else {
        $('.navbar').css("width","0");
        toggle = false;
    }
}

function closeNav() {
    document.getElementById("mynavbar").style.width = "0";
}

/* initializing youtube API */
function init() {
    gapi.client.setApiKey("AIzaSyDJgFr0e-Z5UF28f-klWqhPgS-k0efBFtU");
    gapi.client.load("youtube", "v3", function () {
    });
    console.log('youtube API ready');
    searchparaminit();
}

searchParams = new URLSearchParams(window.location.search);
function searchparaminit(){
    for (p in searchParams) {
        if (searchParams.has("pickgenre") === true){
            genremakeRequest(searchParams.get('pickgenre'));
        } else if (searchParams.has("pickmood")===true){
            moodmakeRequest(searchParams.get('pickmood'));
        }
    }
}
/* making the request for genre and mood keywords */
function genremakeRequest(){
    gapi.client.setApiKey('AIzaSyDJgFr0e-Z5UF28f-klWqhPgS-k0efBFtU');
    gapi.client.load('youtube', 'v3', function(){
        var q = searchParams.get('pickgenre')+'+24/7|radio';
        console.log(q, jQuery.type(q));
        var request = gapi.client.youtube.search.list({
            q: q,
            part: 'snippet',
            maxResults: 20,
            type: 'video',
            eventType:'live',
            topicId: '/m/04rlf',
            videoEmbeddable: 'true',
            videoSyndicated: 'true'

        });
        request.execute(function(response)  {
            $('.results').empty();
            var srchItems = response.result.items;
            $.each(srchItems, function(index, item){
                vidId = item.id.videoId;
                vidUrl = 'https://www.youtube.com/watch?v='+vidId;
                vidTitle = item.snippet.title;
                vidThumburl =  item.snippet.thumbnails.medium.url;
                vidThumb = '<a href="'+vidUrl+'"><figure class="vidresult"><img src="'+vidThumburl+'" alt="No  Image  Available."><figcaption>'+vidTitle+'</figcaption></figure>';
                $('.results').append(vidThumb);
            })
        })
    });
}


function moodmakeRequest(){
    gapi.client.setApiKey('AIzaSyDJgFr0e-Z5UF28f-klWqhPgS-k0efBFtU');
    gapi.client.load('youtube', 'v3', function(){
        var q = searchParams.get('pickmood')+'+24/7|radio';
        console.log(q, jQuery.type(q));
        var request = gapi.client.youtube.search.list({
            q: q,
            part: 'snippet',
            maxResults: 20,
            type: 'video',
            eventType:'live',
            topicId: '/m/04rlf',
            videoEmbeddable: 'true',
            videoSyndicated: 'true'

        });
        request.execute(function(response)  {
            $('.results').empty();
            var srchItems = response.result.items;
            $.each(srchItems, function(index, item){
                vidTitle = item.snippet.title;
                vidThumburl =  item.snippet.thumbnails.medium.url;
                vidThumbimg = '<div class="thumb"><img src="'+vidThumburl+'" alt="No  Image  Available." </div>';

                $('.results').append('<div class="vidresult">' + vidTitle + vidThumbimg + '</div>');
            })
        })
    });
}