// horrible ahh code

import { addToCash, getCash } from "./utils.js";

// module aliases
var Engine = Matter.Engine,
    Render = Matter.Render,
    Runner = Matter.Runner,
    Bodies = Matter.Bodies,
    Composite = Matter.Composite,
    Events = Matter.Events;

// create an engine
var engine = Engine.create();

// the code is horribly readable brah

const gameBoard = document.getElementById("plinko");
const playButton = document.querySelector("#play-btn");
const circleRadius = 7;
const betInput = document.querySelector("#bet-amount");
const rows = 16;
const plinkoRadius = 3;
const plinkoSpacing = circleRadius*2+plinkoRadius*2+8;
const multiplyRandom = circleRadius*2+plinkoRadius*2;

// collision filtering stuff
let ballsCategory = 0x0001,
    wallsCategory = 0x0010,
    multCategory = 0x0100;


playButton.addEventListener("click", () => {
  if (betInput.value >= 10 && betInput.value <= getCash()) {
    let circle = Bodies.circle(gameBoard.width/2+Math.random()*plinkoSpacing*2-plinkoSpacing, -circleRadius+50, circleRadius, {
      render: {
        fillStyle: "#2b48ff",
      },
      collisionFilter: {
        category: ballsCategory,
        mask: wallsCategory | multCategory,
      }
    });
    circle.bet = betInput.value;
    Composite.add(engine.world, circle);
    addToCash(-betInput.value);
  }
})




gameBoard.width = 600;
gameBoard.height = $("#right").innerHeight();

// create a renderer
var render = Render.create({
    canvas: gameBoard,
    engine: engine,
    options: {
      width: gameBoard.width,
      height: gameBoard.height,
      background: "transparent",
      wireframeBackground: "transparent",
      wireframes: false,
    }
});

let rowSize = 3;

for (let i = 0; i < rows; i++) {
  for (let j = 0; j < rowSize; j++) {
    let wallPiece = Bodies.circle(gameBoard.width/2-plinkoSpacing*(j-1)+((rowSize-3)/2)*plinkoSpacing, i*20+50, plinkoRadius, {
      render: {
        fillStyle: "white",
      },
      collisionFilter: {
        category: wallsCategory,
        mask: ballsCategory,
      },
      isStatic: true,
    });
    Composite.add(engine.world,wallPiece);
  }
  rowSize++;
}

// all this stuff below could definitely be shortened lol

let sixteenBox1 = Bodies.rectangle(gameBoard.width/2-plinkoSpacing*8,370,plinkoSpacing-plinkoRadius*2,20,{
  render: {
    fillStyle: "red",
  },
  isStatic: true,
  collisionFilter: {
    category: multCategory,
    mask: ballsCategory,
  },
});

let sixteenBox2 = Bodies.rectangle(gameBoard.width/2+plinkoSpacing*8,370,plinkoSpacing-plinkoRadius*2,20,{
  render: {
    fillStyle: "red",
  },
  isStatic: true,
  collisionFilter: {
    category: multCategory,
    mask: ballsCategory,
  },
});

let nineBox1 = Bodies.rectangle(gameBoard.width/2-plinkoSpacing*7,370,plinkoSpacing-plinkoRadius*2,20,{
  render: {
    fillStyle: "#ff3c00",
  },
  isStatic: true,
  collisionFilter: {
    category: multCategory,
    mask: ballsCategory,
  },
});

let nineBox2 = Bodies.rectangle(gameBoard.width/2+plinkoSpacing*7,370,plinkoSpacing-plinkoRadius*2,20,{
  render: {
    fillStyle: "#ff3c00",
  },
  isStatic: true,
  collisionFilter: {
    category: multCategory,
    mask: ballsCategory,
  },
});

let twoBox1 = Bodies.rectangle(gameBoard.width/2-plinkoSpacing*6,370,plinkoSpacing-plinkoRadius*2,20,{
  render: {
    fillStyle: "#ff6333",
  },
  isStatic: true,
  collisionFilter: {
    category: multCategory,
    mask: ballsCategory,
  },
});

let twoBox2 = Bodies.rectangle(gameBoard.width/2+plinkoSpacing*6,370,plinkoSpacing-plinkoRadius*2,20,{
  render: {
    fillStyle: "#ff6333",
  },
  isStatic: true,
  collisionFilter: {
    category: multCategory,
    mask: ballsCategory,
  },
});


let oneFourBox1 = Bodies.rectangle(gameBoard.width/2-plinkoSpacing*5,370,plinkoSpacing-plinkoRadius*2,20,{
  render: {
    fillStyle: "#ff954f",
  },
  isStatic: true,
  collisionFilter: {
    category: multCategory,
    mask: ballsCategory,
  },
});

let oneFourBox2 = Bodies.rectangle(gameBoard.width/2+plinkoSpacing*5,370,plinkoSpacing-plinkoRadius*2,20,{
  render: {
    fillStyle: "#ff954f",
  },
  isStatic: true,
  collisionFilter: {
    category: multCategory,
    mask: ballsCategory,
  },
});

let oneFourBox3 = Bodies.rectangle(gameBoard.width/2-plinkoSpacing*4,370,plinkoSpacing-plinkoRadius*2,20,{
  render: {
    fillStyle: "#ff954f",
  },
  isStatic: true,
  collisionFilter: {
    category: multCategory,
    mask: ballsCategory,
  },
});

let oneFourBox4 = Bodies.rectangle(gameBoard.width/2+plinkoSpacing*4,370,plinkoSpacing-plinkoRadius*2,20,{
  render: {
    fillStyle: "#ff954f",
  },
  isStatic: true,
  collisionFilter: {
    category: multCategory,
    mask: ballsCategory,
  },
});

let oneTwoBox1 = Bodies.rectangle(gameBoard.width/2-plinkoSpacing*3,370,plinkoSpacing-plinkoRadius*2,20,{
  render: {
    fillStyle: "#ff9f45",
  },
  isStatic: true,
  collisionFilter: {
    category: multCategory,
    mask: ballsCategory,
  },
});

let oneTwoBox2 = Bodies.rectangle(gameBoard.width/2+plinkoSpacing*3,370,plinkoSpacing-plinkoRadius*2,20,{
  render: {
    fillStyle: "#ff9f45",
  },
  isStatic: true,
  collisionFilter: {
    category: multCategory,
    mask: ballsCategory,
  },
});

let oneOneBox1 = Bodies.rectangle(gameBoard.width/2-plinkoSpacing*2,370,plinkoSpacing-plinkoRadius*2,20,{
  render: {
    fillStyle: "#ffb85c",
  },
  isStatic: true,
  collisionFilter: {
    category: multCategory,
    mask: ballsCategory,
  },
});

let oneOneBox2 = Bodies.rectangle(gameBoard.width/2+plinkoSpacing*2,370,plinkoSpacing-plinkoRadius*2,20,{
  render: {
    fillStyle: "#ffb85c",
  },
  isStatic: true,
  collisionFilter: {
    category: multCategory,
    mask: ballsCategory,
  },
});

let oneBox1 = Bodies.rectangle(gameBoard.width/2-plinkoSpacing,370,plinkoSpacing-plinkoRadius*2,20,{
  render: {
    fillStyle: "#ffe8bd",
  },
  isStatic: true,
  collisionFilter: {
    category: multCategory,
    mask: ballsCategory,
  },
});

let oneBox2 = Bodies.rectangle(gameBoard.width/2+plinkoSpacing,370,plinkoSpacing-plinkoRadius*2,20,{
  render: {
    fillStyle: "#ffe8bd",
  },
  isStatic: true,
  collisionFilter: {
    category: multCategory,
    mask: ballsCategory,
  },
});

let zeroBox1 = Bodies.rectangle(gameBoard.width/2,370,plinkoSpacing-plinkoRadius*2,20,{
  render: {
    fillStyle: "#fffcf7",
  },
  isStatic: true,
  collisionFilter: {
    category: multCategory,
    mask: ballsCategory,
  },
});


Composite.add(engine.world, [sixteenBox1,sixteenBox2,
                            nineBox1,nineBox2,
                            twoBox1,twoBox2,
                            oneFourBox1,oneFourBox2,oneFourBox3,oneFourBox4,
                            oneTwoBox1,oneTwoBox2,
                            oneOneBox1,oneOneBox2,
                            oneBox1,oneBox2,
                          zeroBox1]);

engine.world.gravity.y = 0.75;


// im sorry
sixteenBox1.multiplier = 16
sixteenBox2.multiplier = 16
nineBox1.multiplier = 9
nineBox2.multiplier = 9
twoBox1.multiplier = 2
twoBox2.multiplier = 2
oneFourBox1.multiplier = 1.4
oneFourBox2.multiplier = 1.4
oneFourBox3.multiplier = 1.4
oneFourBox4.multiplier = 1.4
oneTwoBox1.multiplier = 1.2
oneTwoBox2.multiplier = 1.2
oneOneBox1.multiplier = 1.1
oneOneBox2.multiplier = 1.1
oneBox1.multiplier = 1
oneBox2.multiplier = 1
zeroBox1.multiplier = 0

Events.on(engine,"collisionStart",(event)=>{
  event.pairs.forEach(pair => {
    // how tf does this engine work brah
    if (pair.bodyA.multiplier) {
      if (true) {
        console.log("cash?");
        addToCash(pair.bodyB.bet*pair.bodyA.multiplier);
        Composite.remove(engine.world,pair.bodyB)
      }
    } else if (pair.bodyA.multiplier=="0") {
      if (true) {
        console.log("cash?");
        addToCash(pair.bodyB.bet*pair.bodyA.multiplier);
        Composite.remove(engine.world,pair.bodyB)
      }
    }
  })
});


// run the renderer
Render.run(render);

// create runner
var runner = Runner.create();

// run the engine
Runner.run(runner, engine);