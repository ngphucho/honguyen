let pos, moving, frame;
let smooth = 12,
  speed = 120,
  target =
    document.scrollingElement ||
    document.documentElement ||
    document.body.parentNode ||
    document.body; // cross browser support for document scrolling;
var timer = null;

function init() {
  new SmoothScroll();
}

function SmoothScroll() {
  // if (target === document)
  //   target =
  //     document.scrollingElement ||
  //     document.documentElement ||
  //     document.body.parentNode ||
  //     document.body; // cross browser support for document scrolling

  moving = false;
  pos = target.scrollTop;
  frame =
    target === document.body && document.documentElement
      ? document.documentElement
      : target; // safari is the new IE

  target.addEventListener("wheel", scrolled, { passive: false });
  target.addEventListener("DOMMouseScroll", scrolled, { passive: false });
  window.addEventListener(
    "scroll",
    function () {
      if (timer !== null) {
        clearTimeout(timer);
      }
      timer = setTimeout(function () {
        pos = target.scrollTop;
        update();
      }, 150);
    },
    false
  );
}

function scrolled(e) {
  e.preventDefault(); // disable default scrolling

  var delta = normalizeWheelDelta(e);

  pos += -delta * speed;
  pos = Math.max(0, Math.min(pos, target.scrollHeight - frame.clientHeight)); // limit scrolling
  if (!moving) update();
}

function normalizeWheelDelta(e) {
  if (e.detail) {
    if (e.wheelDelta)
      return (e.wheelDelta / e.detail / 40) * (e.detail > 0 ? 1 : -1);
    // Opera
    else return -e.detail / 3; // Firefox
  } else return e.wheelDelta / 120; // IE,Safari,Chrome
}

function update() {
  moving = true;
  let scrollTop = target.scrollTop;
  var delta = (pos - target.scrollTop) / smooth;
  if (delta !== 0) {
    if (delta > 0 && delta < 1) delta = 1;
    else if (delta < 0 && delta > -1) delta = -1;
  }
  target.scrollTop += delta;
  if (Math.abs(delta) > 0.5 && scrollTop !== target.scrollTop)
    requestFrame(update);
  else {
    moving = false;
  }

  // moving = true;
  // if (pos !== target.scrollTop) {
  //   const sign = pos > target.scrollTop ? 1 : -1;
  //   const spann =
  //     Math.abs(pos - target.scrollTop) >= smooth
  //       ? smooth
  //       : Math.abs(pos - target.scrollTop);
  //   target.scrollTop += (smooth / 4) * sign;
  //   requestFrame(update);
  // } else moving = false;
}
// function update() {
//   moving = true;
//   var delta = (pos - target.scrollTop) / smooth;
//   target.scrollTop += delta;
//   console.log("pos:", pos, " scrollTop:", target.scrollTop, " delta:", delta);
//   if (Math.abs(delta) > 0.5) requestFrame(update);
//   else moving = false;
// }

var requestFrame = (function () {
  // requestAnimationFrame cross browser
  return (
    window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.oRequestAnimationFrame ||
    window.msRequestAnimationFrame ||
    function (func) {
      window.setTimeout(func, 1000 / 50);
    }
  );
})();

const smoothScroll = {
  init: () => {
    init();
  },
  setPos: (value) => {
    pos = value;
  },
  update: () => {
    update();
  },
};

export default smoothScroll;
