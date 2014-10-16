'use strict';

// Conditionally set getUserMedia depending on which browser you're in.
navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia;

(function(){
    var constraints = {audio: false, video: true};
    var video = $('#main-video')[0];

    function successCallback(stream) {
        window.stream = stream; // stream available to console
        if (window.URL) {
            video.src = window.URL.createObjectURL(stream);
        } else {
            video.src = stream;
        }
    }

    function errorCallback(error){
        console.log('navigator.getUserMedia error: ', error);
    }

    navigator.getUserMedia(constraints, successCallback, errorCallback);

})();
