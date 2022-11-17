// Nav-bar
// const leftMenu = document.querySelector(".nav-icon");
// const navcontent = document.querySelector("#nav-content");
// const closebtn = document.querySelector(".close-btn");
// const links = document.querySelectorAll("#nav-content a");

// leftMenu.addEventListener("click", () => {
//   navcontent.classList.add("show");
//   document.body.style.overflow = "hidden";
// });
// closebtn.addEventListener("click", () => {
//   navcontent.classList.remove("show");
//   document.body.style.overflow = "initial";
// });
// links.forEach((link) => {
//   link.addEventListener("click", () => {
//     navcontent.classList.remove("show");
//     document.body.style.overflow = "initial";
//   });
// });

// End NAv
// NOW I CLICK album-poster TO GET CURRENT SONG ID
$(".audio").on("click", function (e) {
  var dataSwitchId = $(this).attr("data-switch");
  //console.log(dataSwitchId);

  // and now i use aplayer switch function see
  ap.list.switch(dataSwitchId); //this is static id but i use dynamic

  // aplayer play function
  // when i click any song to play
  ap.play();

  // click to slideUp player see
  $("#aplayer").addClass("showPlayer");
});

const ap = new APlayer({
  container: document.getElementById("aplayer"),
  listFolded: true,
  
  audio: [
    {
      name: "Another Love",
      artist: "Acqire",
      url: "source/Another Love (slowed reverb).webm",
      cover: "img/6695034.jpg",
    },
    {
      name: "After Dark", // SONG NAME
      artist: "cole Russo", //ARTIST NAME
      url: "source/After Dark x Sweater Weather.webm", // PATH NAME AND SONG URL
      cover: "img/download (1).jpg", // COVER IMAGE
    },
    {
      name: "All girls are the same",
      artist: "Ronin",
      url: "source/RØNIN - ALL GIRLS ARE THE SAME AMV.webm",
      cover: "img/download (2).jpg",
    },
    {
      name: "Blame",
      artist: "Tim Gutter",
      url: "source/yt1s.com - Blame Tim Gunter Remix.mp3",
      cover: "img/anime-wallpaper-7.jpg",
    },
    {
      name: "Under the influence",
      artist: "Chris Brown",
      url: "source/Under The Influence.webm",
      cover: "img/download (3).jpg",
    },
    {
      name: "Middle of the Night",
      artist: "Elley",
      url: "source/Y2Mate.is - Middle Of The Night - Elley Duhé Song ( Slowed+Reverb+Lyrics )-YMQeFK4R3U4-160k-1660370543969.mp3",
      cover: "img/download (4).jpg",
    },
    {
      name: "Unconditionaly",
      artist: "Katy perry",
      url: "source/katy perry - unconditionally (slowed reverb) lyrics.webm",
      cover: "img/download.jpg",
    },
    {
      name: "Royalty",
      artist: "EgZod",
      url:"source/yt1s.com - Royalty.mp3",
      cover: "img/5.jpg",
    },
  ],
});
// ---End Music--


