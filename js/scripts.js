$(document).ready(function () {
  new fullpage("#fullpage", {
    //options here
    autoScrolling: true,
    scrollHorizontally: true,
  });

  // Handler for .ready() called.

  // gsap.to("#mqscript", { duration: 5, opacity: 1, y: 200, rotationX: 0 });
  // gsap.to(".ring", { duration: 4, opacity: 0.5, y: 400, rotationX: 0 });
  gsap.from("#logo", { duration: 5, opacity: 0, y: -600 });
  // gsap.from(".m", { duration: 5, opacity: 0, y: -600, rotationX: -180 });
  // gsap.from(".ring", { duration: 5, opacity: 0, y: -600, rotationX: -180 });

  var tl = new TimelineMax({
    paused: false,
    repeatDelay: 1,
    repeat: -1,
    yoyo: true,
  });

  tl

    // move the linearGradient tag
    .to(".ring", 1, { x: 200 }, 0)

    // animate the linear gradient
    .staggerTo(
      ".ring",
      1,
      {
        stopColor: "rgba(0, 0, 0, 0)",
        opacity: 1,
        cycle: {
          stopColor: [
            // "#ff9999",
            // "#ff7777",
            // "#ff5555",
            // "#ff3333",
            // "#ff1111",
            // "#ff8888",
            "#ffffff",
            "#ffffff",
            "#ffffff",
            "#000000",
            "#000000",
            "#000000",
          ],
        },
      },
      0.1,
      0
    )

    // pre-record GSAP properties and values
    .progress(0)
    .progress(1)

    // hammer time
    .play();

  // gsap.to("#mqscript", { duration: 5, opacity: 1, rotationX: 0 });
  // gsap.fromTo(
  //   "#mqscript",
  //   { opacity: 1 },
  //   { duration: 5, opacity: 0, rotationX: 0, delay: 6, scaleX: 15, scaleY: 15 }
  // );

  // TweenMax.to(".ring", 2, { attr: { "stop-color": "red" } });

  // gsap.to(".m", { duration: 4, opacity: 1, y: 200, rotationX: 0 });
});
