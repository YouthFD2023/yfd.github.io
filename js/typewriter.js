
var player;
// Set up text to print, each item in the array is a new line
var aText = [
    "A day that all of us will never forget!"
];
var iSpeed = 35; // Time delay of print out
var iIndex = 0; // Start printing array at this position
var iArrLength = aText[0].length; // The length of the text array
var iScrollAt = 20; // Start scrolling up at this many lines

var iTextPos = 0; // Initialise text position
var sContents = ''; // Initialise contents variable
var iRow; // Initialise current row

function typewriter() {
    sContents = ' ';
    iRow = Math.max(0, iIndex - iScrollAt);
    var destination = document.getElementById("typedtext");

    while (iRow < iIndex) {
        sContents += aText[iRow++] + '<br />';
    }
    destination.innerHTML = sContents + aText[iIndex].substring(0, iTextPos) + "_";
    if (iTextPos++ == iArrLength) {
        iTextPos = 0;
        iIndex++;
        if (iIndex != aText.length) {
            iArrLength = aText[iIndex].length;
            setTimeout("typewriter()", 500);
        } else {
            // Typing is finished, pause for 3 seconds and then show the content
            setTimeout(showContent, 2000);
            setTimeout(playVideo, 1500);

        }
    } else {
        setTimeout("typewriter()", iSpeed);
    }
}

function showContent() {
    $("#content").fadeIn();
    document.getElementById("content").style.display = "block";
    document.getElementById("Loading").style.display = "none";
}

// Load the YouTube IFrame API asynchronously
function loadYouTubeAPI() {
    var tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
}

// Function to create and load the YouTube player
function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        height: '360',
        width: '640',
        videoId: 'arfOYk0kjXE', // Replace with your YouTube video ID
        playerVars: {
            autoplay: 0, // Set to 1 for autoplay
            controls: 1, // Show video controls
            modestbranding: 1, // Hide YouTube logo
            rel: 0, // Hide related videos at the end
            showinfo: 0 // Hide video title and uploader information
        },
        events: {
            'onReady': onPlayerReady
        }
    });
}

// Function to play the YouTube video
function playVideo() {
    if (player) {
        player.playVideo();
        document.getElementById("player").style.display = "none";
    } else {
        // If the YouTube IFrame API is not loaded, load it and then play the video
        loadYouTubeAPI();
        setTimeout(playVideo, 1000);
    }
}

// Function to handle when the YouTube player is ready
function onPlayerReady(event) {
    // You can do additional handling here if needed
    // For example, you can set up event listeners or other functionalities
}