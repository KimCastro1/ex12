var tag = document.createElement("script");

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

function onYouTubeIframeAPIReady() {
  new YT.Player("player", {
    videoId: "Nu8kIIL-CDA",
    playerVars: {
      autoplay: true,
      loop: true,
      playlist: "Nu8kIIL-CDA",
    },
    events: {
      onReady: function (e) {
        e.target.mute();
      },
    },
  });
}
