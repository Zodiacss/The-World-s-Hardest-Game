var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["a8fe19e2-354c-49fc-aa44-9e996fbca12d"],"propsByKey":{"a8fe19e2-354c-49fc-aa44-9e996fbca12d":{"name":"blue_shirt2_1","sourceUrl":"assets/api/v1/animation-library/gamelab/ZU9n84i5bHGhnk4Ft2idQyV9REOHhz0I/category_people/blue_shirt2.png","frameSize":{"x":136,"y":399},"frameCount":1,"looping":true,"frameDelay":20,"version":"ZU9n84i5bHGhnk4Ft2idQyV9REOHhz0I","categories":["people"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":136,"y":399},"rootRelativePath":"assets/api/v1/animation-library/gamelab/ZU9n84i5bHGhnk4Ft2idQyV9REOHhz0I/category_people/blue_shirt2.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

 var Deaths = 0;
var car1, car2, car3,car4;
var boundary1, boundary2;
var sam;

  boundary1 = createSprite(190,120,420,3);
  boundary1.shapeColor="white"
  boundary2 = createSprite(190,260,420,3);
  boundary2.shapeColor="white"
  
  sam = createSprite(20,190,13,13);
  sam.shapeColor = "teal";
  
  
  
  car1 = createSprite(100,130,10,10);
  car1.shapeColor = "turquoise";
  car2 = createSprite(215,130,10,10);
  car2.shapeColor = "turquoise";
  car3 = createSprite(165,250,10,10);
  car3.shapeColor = "pink";
  car4 = createSprite(270,250,10,10);
  car4.shapeColor = "pink";
  
 
//add the velocity to make the car move.

car1.velocityY= 8;
car2.velocityY=8
car3.velocityY=-8;
car4.velocityY=-8;

 
function draw() {
   background("grey");
   fill("pink");
   textSize("18");
  textFont("Georgia SemiBold");
  
   
  text("Deaths: " + Deaths,155,75);
  strokeWeight(0);
  fill("lightblue");
  rect(0,120,52,140);
  fill("white");
  rect(345,120,52,140);
  
// create bounceoff function to make the car bounceoff the boundaries
car1.bounceOff(boundary1);
car1.bounceOff(boundary2);
car2.bounceOff(boundary1);
car2.bounceOff(boundary2);
car3.bounceOff(boundary1);
car3.bounceOff(boundary2);
car4.bounceOff(boundary1);
car4.bounceOff(boundary2);

//Add the condition to make the sam move left and right
if (keyDown("right")){
  sam.x= sam.x+2;
}
if (keyDown("left")){
  sam.x=sam.x-2;
}

//Add the condition to reduce the life of sam if it touches the car.
if(sam.isTouching(car1)|| sam.isTouching(car2)|| sam.isTouching(car3)|| sam.isTouching(car4)){
sam.x=20;
sam.y=190;
Deaths=Deaths+1;
}
  
 drawSprites();
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
