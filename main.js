var pacman, lowerWall, upperWall, leftWall, walls, wall
var allWalls, sugarDots
var score = 0

function setup() {
  createCanvas(1200, 550);
  
  pacman= createSprite(50,50);
  //lowerWall= createSprite(550,450,1200,40);
  //upperWall= createSprite(550,20,1200,40);
  //leftWall= createSprite(15,235,40,390);

  walls = [
    {x:550,y:450,w:1200,h:40},
    {x:550,y:20,w:1200,h:40},
    {x:10,y:20,w:40,h:1200},
    {x:700,y:70,w:40,h:1200},
    
    {x:100, y:90,w:70,h:40},
    {x:210,y:90,w:70, h:40},
    {x:310,y:90,w:70, h:40},
    {x:410,y:90,w:70, h:40},
    {x:510,y:90,w:70, h:40},
    {x:610,y:90,w:70, h:40},
    //line 2
    {x:150,y:170,w:90,h:50},
    {x:300,y:170,w:90,h:50},
    {x:450,y:170,w:90,h:50},
    {x:600,y:170,w:90,h:50},
//box
    {x:435,y:250,w:90,h:20},
    {x:465,y:300,w:30,h:80},
    {x:370,y:325,w:200,h:30},
    {x:290,y:250,w:90,h:20},
    {x:260,y:300,w:30,h:80},
    
    {x:130,y:270,w:90,h:40},
    {x:130,y:360,w:90,h:40},
    {x:590,y:270,w:90,h:40},
    {x:590,y:360,w:90,h:40},
    {x:355,y:365,w:90,h:50}
]
  for(var i in walls){
    var wall = 
    createSprite(walls[i].x,walls[i].y,walls[i].w,walls[i].h)
    allWalls.push(wall)
  }

  for(var i in sugarDots){
    var Dots =
    createSprite(sugarDots[i].x,sugarDots[i].y,sugarDots[i].w,sugarDots[i].h)
    allsugar.push (Dots)
  }

  allWalls = [

  ]

  sugarDots = [
    {x:100,y:50,w:10,h:10},
    {x:200,y:50,w:10,h:10},
    {x:300,y:50,w:10,h:10},
    {x:400,y:50,w:10,h:10},
    {x:500,y:50,w:10,h:10},
    {x:600,y:50,w:10,h:10},
   
    //second line
    {x:100,y:130,w:10,h:10},
    {x:200,y:130,w:10,h:10},
    {x:300,y:130,w:10,h:10},
    {x:400,y:130,w:10,h:10},
    {x:500,y:130,w:10,h:10},
    {x:600,y:130,w:10,h:10},
   
    //third line
    {x:100,y:210,w:10,h:10},
    {x:200,y:210,w:10,h:10},
    {x:300,y:210,w:10,h:10},
    {x:400,y:210,w:10,h:10},
    {x:500,y:210,w:10,h:10},
    {x:600,y:210,w:10,h:10},
    
    //fourth line
    
    {x:100,y:310,w:10,h:10},
    {x:200,y:290,w:10,h:10},
    {x:300,y:290,w:10,h:10},
    {x:400,y:290,w:10,h:10},
    {x:500,y:290,w:10,h:10},
    {x:600,y:310,w:10,h:10},
    
    //fifth line 
    {x:100,y:410,w:10,h:10},
    {x:200,y:410,w:10,h:10},
    {x:300,y:410,w:10,h:10},
    {x:400,y:410,w:10,h:10},
    {x:500,y:410,w:10,h:10},
    {x:600,y:410,w:10,h:10},
]

allwalls=[]
allsugar=[]
}

function draw() {
  // Fill the canvas with light gray, covering up previous images
  background(220);
  text(score, 53, 60);

  // Set the fill color to dark gray
  fill(50);
  // Draws a circle that follows the mouse
  if (keyDown("right")){
    pacman.x +=5
  }

  if (keyDown("left")){
    pacman.x -=5
  }

  if (keyDown("up")){
    pacman.y -=5
  }

  if (keyDown("down")){
    pacman.y +=5
  }
   
  for(var j in allsugar){
    if (pacman.collide(allsugar[j])){
      allsugar[j].destroy()
      allsugar[j].visible = false
      score+= 1
    }
  }

  drawSprites();
}