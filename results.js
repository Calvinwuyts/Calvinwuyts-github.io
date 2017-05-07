/**
 * Created by Calvin on 21/03/2017.
*/
/* initializing youtube API */
function init() {
    gapi.client.setApiKey("AIzaSyDJgFr0e-Z5UF28f-klWqhPgS-k0efBFtU");
    gapi.client.load("youtube", "v3", function () {
    });
    console.log('youtube API ready');
    searchparaminit();
}

/* defining whether search happened on genre or mood */

searchParams = new URLSearchParams(window.location.search);
function searchparaminit() {
    console.log('started search fn');
    console.log(searchParams.entries());
    for (p in searchParams) {
        if (searchParams.has("pickgenre") === true) {
            genremakeRequest(searchParams.get('pickgenre'));
        } else if (searchParams.has("pickmood") === true) {
            moodmakeRequest(searchParams.get('pickmood'));
        } else if (searchParams.has("random") === true) {
            randomrequest();
        } else if (searchParams.has("top") === true) {
            toprequest();
        } else if (searchParams.has("featured") === true) {
            featuredrequest();
        }
    }
}

    /* making the request for genre and mood keywords */
    function genremakeRequest() {
        console.log('started make request');
        gapi.client.setApiKey('AIzaSyDJgFr0e-Z5UF28f-klWqhPgS-k0efBFtU');
        gapi.client.load('youtube', 'v3', function () {
            var q = searchParams.get('pickgenre') + '+24/7|radio';
            console.log(q, jQuery.type(q));
            var request = gapi.client.youtube.search.list({
                q: q,
                part: 'snippet',
                maxResults: 20,
                type: 'video',
                eventType: 'live',
                topicId: '/m/04rlf',
                videoEmbeddable: 'true',
                videoSyndicated: 'true'

            });
            request.execute(function (response) {
                $('.results').empty();
                var srchItems = response.result.items;
                console.log(srchItems);
                $.each(srchItems, function (index, item) {
                    vidId = item.id.videoId;
                    vidUrl = 'https://www.youtube.com/watch?v=' + vidId;
                    vidTitle = item.snippet.title;
                    vidThumburl = item.snippet.thumbnails.medium.url;
                    vidThumb = '<a><figure class="vidresult"><img src="' + vidThumburl + '" alt="No  Image  Available."><figcaption id="' + vidId + '" onclick="clickvid(this);"><span>' + vidTitle + '</span></figcaption></figure>';
                    $('.results').append(vidThumb);
                })
            })
        });
    }


    function moodmakeRequest() {
        gapi.client.setApiKey('AIzaSyDJgFr0e-Z5UF28f-klWqhPgS-k0efBFtU');
        gapi.client.load('youtube', 'v3', function () {
            var q = searchParams.get('pickmood') + '+24/7|radio';
            console.log(q, jQuery.type(q));
            var request = gapi.client.youtube.search.list({
                q: q,
                part: 'snippet',
                maxResults: 20,
                type: 'video',
                eventType: 'live',
                topicId: '/m/04rlf',
                videoEmbeddable: 'true',
                videoSyndicated: 'true'

            });
            request.execute(function (response) {
                $('.results').empty();
                var srchItems = response.result.items;
                $.each(srchItems, function (index, item) {
                    vidId = item.id.videoId;
                    vidUrl = 'https://www.youtube.com/watch?v=' + vidId;
                    vidTitle = item.snippet.title;
                    vidThumburl = item.snippet.thumbnails.medium.url;
                    vidThumb = '<a><figure class="vidresult"><img src="' + vidThumburl + '" alt="No  Image  Available."><figcaption id="' + vidId + '" onclick="clickvid(this);"><span>' + vidTitle + '</span></figcaption></figure>';
                    $('.results').append(vidThumb);
                })
            })
        });
    }

    function toprequest() {
        gapi.client.setApiKey('AIzaSyDJgFr0e-Z5UF28f-klWqhPgS-k0efBFtU');
        gapi.client.load('youtube', 'v3', function () {
            var q = '24/7|radio';
            console.log(q, jQuery.type(q));
            var request = gapi.client.youtube.search.list({
                q: q,
                part: 'snippet',
                maxResults: 20,
                type: 'video',
                eventType: 'live',
                topicId: '/m/04rlf',
                videoEmbeddable: 'true',
                videoSyndicated: 'true',
                order: 'viewCount'

            });
            request.execute(function (response) {
                $('.results').empty();
                var srchItems = response.result.items;
                $.each(srchItems, function (index, item) {
                    vidId = item.id.videoId;
                    vidUrl = 'https://www.youtube.com/watch?v=' + vidId;
                    vidTitle = item.snippet.title;
                    vidThumburl = item.snippet.thumbnails.medium.url;
                    vidThumb = '<a><figure class="vidresult"><img src="' + vidThumburl + '" alt="No  Image  Available."><figcaption id="' + vidId + '" onclick="clickvid(this);"><span>' + vidTitle + '</span></figcaption></figure>';
                    $('.results').append(vidThumb);
                })
            })
        });
    }

    function clickvid(vidid) {
        window.location = "player.html?vidid=" + vidid.id
    }