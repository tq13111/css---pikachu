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
        document.querySelector(key).onclick = (e)=>{
          player.click(e)
          player[value]()};
      }
    }
  },
  run: () => {
    player.n++;
    if (string[player.n]) {
      player.ui.css.innerHTML = string.substring(0, player.n);
      player.ui.html.innerText = string.substring(0, player.n);
      player.ui.html.scrollTop =  9999;
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
  click:(e)=> {
    const buttonList =e.target.parentElement.children
    for(let i = 0;i<buttonList.length;i++){
      buttonList[i].classList.remove('active')
    }
    e.target.classList.add('active')
  }
};
player.init();
