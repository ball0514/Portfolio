let img = document.querySelector("img");
let video = document.querySelector("video");

let animation;

document
  .querySelectorAll(".box")[0]
  .addEventListener("mouseenter", function () {
    // 播放正向動畫

    animation = img.animate(
      [{ objectPosition: "top" }, { objectPosition: "bottom" }],
      {
        duration: 5000,
        easing: "ease-in-out",
        fill: "forwards",
      }
    );
  });

document
  .querySelectorAll(".box")[0]
  .addEventListener("mouseleave", function () {
    // 播放倒轉動畫
    if (animation) {
      animation.reverse();
    }
  });

document.querySelectorAll(".box")[1].addEventListener("mouseover", function () {
  video.play();
  video.addEventListener("ended", () => {
    video.currentTime = 0;
    video.play();
  });
});

document.querySelectorAll(".box")[1].addEventListener("mouseout", function () {
  video.pause();
});
