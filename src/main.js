import "./reset.css";
import string from "./css";

const player = {
  n: 1,
  id: undefined,
  delay: 60,
  ui: {
    html: document.querySelector("#html"),
    css: document.querySelector("#css"),
  },
  events: {
    "#pauseBtn": "pause",
    "#playBtn": "play",
    "#slowBtn": "slow",
    "#normalBtn": "normal",
    "#quickBtn": "quick",
  },
  init: () => {
    player.ui.css.innerHTML = string.substring(0, player.n);
    player.ui.html.innerText = string.substring(0, player.n);
    player.play();
    player.bindEvents();
  },
  bindEvents: () => {
    for (let key in player.events) {
      if (player.events.hasOwnProperty(key)) {
        const value = player.events[key];
        document.querySelector(key).onclick = player[value];
      }
    }
  },
  run: () => {
    player.n++;
    if (string[player.n]) {
      player.ui.css.innerHTML = string.substring(0, player.n);
      player.ui.html.innerText = string.substring(0, player.n);
      player.ui.html.scrollTop =  player.ui.html.scrollHeight;
      player.play();
    }
  },
  play: () => {
    player.id = setTimeout(player.run, player.delay);
  },
  pause: () => {
    clearTimeout(player.id);
  },
  slow: () => {
    player.pause();
    player.delay = 150;
    player.play();
  },
  normal: () => {
    player.pause();
    player.delay = 60;
    player.play();
  },
  quick: () => {
    player.pause();
    player.delay = 0;
    player.play();
  },
};
player.init();
