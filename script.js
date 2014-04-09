/*jshint browser:true, devel:true*/
(function () {
    console.log("Hello!");

    //initialize variables for audio players
    var sounds = document.getElementsByTagName("audio");
    var boxes = document.getElementsByClassName("box");

    function attatchClickEvent(box, sound) {
        box.onclick = function () {
            sounds[sound].play();
        };
    }



    //set click handlers for all boxesa
    for (var i = 0; i < boxes.length; i++) {
        var box = boxes.item(i);
        attatchClickEvent(box, i);
    }
    console.log(boxes);


}());
