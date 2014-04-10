/*jshint browser:true, devel:true*/
(function () {
    console.log("Hello!");

    //initialize variables for audio players
    var sounds = document.getElementsByTagName("audio");
    var boxes = document.getElementsByClassName("box");

    /* defines a function that sets the onClick event of a Specific Box(div) that it is told.
        The event itself is to play or pause a sound when a click occurs
        The sound that gets associated is a number you put in that represents the sound in the list of all sounds in your HTML (remember, it starts at 0)
*/
    function attatchClickEvent(specificBox, soundNumber) {
        specificBox.onclick = function () {
            if (sounds[soundNumber].paused) {
                sounds[soundNumber].play();
            } else {
                sounds[soundNumber].pause();
            }
        };
    }
    /*set click handlers for all boxes
    i represents the current step of the loop
    this loop will run boxes.length times
    i is increased by one each time the loop runs
    So in this example the loop runs 3 times
    (0, 1, 2)
    and the value of i represents what step you are on
    Thus you can use this to step through your whole collection of divs you want to set up
    This is equilivant to the follwing three lines
    attatchClickEvent(boxes[0], 0);
    attatchClickEvent(boxes[1], 1);
    attatchClickEvent(boxes[2], 2);

    This doesn't seem so bad when you only have two or three, but this same three-line
    solution below works for an infinite number of stuff.

    */

    for (var i = 0; i < boxes.length; i++) {
        attatchClickEvent(boxes[i], i);
    }
}());
