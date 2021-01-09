const string = `body {
  height: 100vh;
}

.skin {
  position: relative;
  top: -90px;
}

.nose {
  position: relative;
  border: 10px solid;
  border-color: black transparent transparent;
  width: 0;
  height: 0;
  top: 260px;
  left: 50%;
  margin-left: -10px;
}

@keyframes wave {
  0% {
    transform: rotate(0deg);
  }
  33% {
    transform: rotate(25deg);
  }
  66% {
    transform: rotate(-25deg);
  }
  100% {
    transform: rotate(0deg);
  }
}

.nose:hover {
  transform-origin: 50% 50%;
  animation: wave 0.3s infinite linear;
}

.wrapper {
  width: 20px;
  height: 5px;
  overflow: hidden;
  position: absolute;
  top: -15px;
  left: -10px;
}

.shan {
  width: 20px;
  height: 10px;
  background-color: black;
  border-radius: 50%;
}

.eye {
  width: 63px;
  height: 63px;
  position: absolute;
  top: 220px;
  border: 3px solid #000;
  left: 50%;
  margin-left: -32px;
  background-color: #2e2e2e;
  border-radius: 50%;
}

.eye:before {
  content: "";
  border: 3px solid black;
  border-radius: 50%;
  background-color: #fff;
  width: 25px;
  height: 25px;
  display: block;
  position: absolute;
  left: 8px;
  top: -2px;
}

@keyframes x {
  0% {
    transform: translateY(-120px);
  }
  100% {
    transform: translateY(-15px);
  }
}

.eye:after {
  content: "";
  display: block;
  width: 70px;
  height: 70px;
  border-radius: 50%;
  position: absolute;
  background: rgb(255, 230, 0);
  top: -4px;
  left: -4px;
  animation: x 2s infinite alternate ease-out;
}

.eye.left {
  transform: translateX(-120px);
}

.eye.right {
  transform: translateX(120px);
}

.mouth {
  width: 200px;
  height: 200px;
  position: relative;
  left: 50%;
  top: 265px;
  margin-left: -100px;
}

.up .lip {
  width: 83px;
  height: 25px;
  border: 3px solid #000;
  background-color: #ffe600;
  position: absolute;
  z-index: 2;
}

.up .lip.left {
  left: 16px;
  border-top: #ffe600;
  border-right: #ffe600;
  border-bottom-left-radius: 60px 30px;
  transform: rotate(-20deg);
}

.up .lip.right {
  right: 16px;
  border-top: #ffe600;
  border-left: #ffe600;
  transform: rotate(20deg);
  border-bottom-right-radius: 60px 30px;
}

.down {
  width: 228px;
  height: 160px;
  position: absolute;
  left: 50%;
  top: 10px;
  margin-left: -114px;
  overflow: hidden;
}

.down .big {
  width: 140px;
  height: 800px;
  border: 4px solid black;
  position: absolute;
  left: 50%;
  bottom: 0;
  margin-left: -70px;
  border-radius: 100px/360px;
  background-color: #ff485f;
  z-index: 1;
  overflow: hidden;
}

.down .big .small {
  width: 130px;
  height: 100px;
  position: absolute;
  left: 50%;
  bottom: 20px;
  margin-left: -65px;
  border-top-left-radius: 50%;
  border-top-right-radius: 50%;
  box-shadow: 0 -50px 0 #9b000a;
  z-index: 2;
}

.face {
  width: 88px;
  height: 88px;
  border: 3px solid black;
  background-color: #f00;
  position: absolute;
  border-radius: 50%;
}

.face.left {
  left: 50%;
  top: 330px;
  margin-left: -44px;
  transform: translateX(-160px);
}

.face > img {
  position: absolute;
  left: 50%;
  top: 50%;
}

.face.left > img {
  transform: rotateY(180deg);
  transform-origin: top left;
}

.face.right {
  left: 50%;
  top: 330px;
  margin-left: -44px;
  transform: translateX(160px);
}

`;
export default string
