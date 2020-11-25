var dog,happyDog,database,foodS,foodStock;
//Create variables here

function preload()
{
dog.addimage=("dog.png");
}

function setup() {
	createCanvas(500, 500);
  foodstock=database.ref('Food');
  foodstock.on("value",readStock);
  if(keyWentdown(UP_ARROW)){
  writeStock(foodS);
  dog.addimage("happydog.png");
  }
}


function draw() {  

  drawSprites();
  fill()
  stroke()


  //Function to read values from DB
  function readStock(data){
  foodS=data.val();
  }

  //Function to write values in DB
  function writeStock(x){
  
    database.ref('/').update({
      Food:x
    })
  }
}



