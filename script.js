//Press a button to choose your path
//See the README file for more information

/* VARIABLES */
let enterButton;
let a1Button;
let a2Button;
let b1Button;
let b2Button;
let screen = 0;

/* SETUP RUNS ONCE */
function setup() {
  createCanvas(600, 400);
  textAlign(CENTER);
  textSize(20);
  noStroke();

  // Set up the home screen
  background("pink");
  text(
    "Welcome to barbie world! \n\n\n Press enter to enter this world!\n \n\n ↓",
    width / 2,
    height / 2 - 100
  );

  // Create buttons for all screens
  enterButton = new Sprite(width/2, height/2 + 100);
  a1Button = new Sprite(-200,-200);
  a2Button = new Sprite(-50,-50);

   // New spritres created here
  b1Button = new Sprite (-100, -100 );
  b2Button = new Sprite (-150, -150);
}

/* DRAW LOOP REPEATS */
function draw() {
  // Display enter button
  enterButton.w = 100;
  enterButton.h = 50;
  enterButton.collider = "k";
  enterButton.color = "plum";
  enterButton.text = "Enter";


  // Check enter button
  if (enterButton.mouse.presses()){
    print("pressed");
    showScreen1();
    
    screen = 1;   
  }
  
  if (screen== 1){
    if (a1Button.mouse.presses()){
      print("Display screen 2");
      showScreen2();
      
      screen = 2;
    }else if (a2Button.mouse.presses()){
      print ("Display screem 5");
      showScreen5();
     
      screen = 5;
    }
  } else if (screen ==2) {
    if (b1Button.mouse.presses()){
      showScreen3();
      screen = 3;
    } else if (b2Button.mouse.presses()){
      showScreen4();
      screen = 4;
    }
  }
  
  print (screen);

}

/* FUNCTIONS TO DISPLAY SCREENS */
function showScreen1(){
      background("darkseagreen");
    text(
        "Congratulations, you've entered the barbie world! \n Oh No!  Raquelle is approaching you! What wil you do? ",
         width/2,
         height/2 - 100);
    enterButton.pos = {x: -100, y: -100};

    
     // Add A1 button
    a1Button.pos = {x: width / 2 - 50, y: height / 2 + 100};
    a1Button.w = 70;
    a1Button.h=50;
    a1Button.collider="k";
    a1Button.color = "ivory";
    a1Button.text = "Be kind";
    
    // Add A2 button
    a2Button.pos = { x: width / 2 +50, y: height / 2 + 100 };
    a2Button.w= 70;
    a2Button.h = 50;
    a2Button.collider = "k";
    a2Button.color = "ivory";
    a2Button.text = "Ignore";  
}
function showScreen2(){
   background ("lavenderblush");
      text(
        "Barbie noticed you and thought you seemed kind! \n She came over to talk to you and invited you to a party at \n the dream house! What will you do??",
        width / 2,
        height / 2 - 100
      );
      
      //Move extra buttons off screen
      a1Button.pos = {x: -200, y:-200};
      a2Button.pos = {x:-50, y: -50};

      // Add b1 Button
      b1Button.pos = {x: width / 2 - 50, y: height / 2 +100 };
      b1Button.w = 50;
      b1Button.h = 50;
      b1Button.collider = "k";
      b1Button.color = "ivory"
      b1Button.text = "Go";

      //Add b2 Button
      b2Button.pos = {x: width / 2 + 50, y: height / 2 + 100 };
      b2Button.w = 95;
      b2Button.h = 50;
      b2Button.collider = "k";
      b2Button.color = "ivory";
      b2Button.text = "stay home";
}
function showScreen3(){
  background("deeppink");
  text("Everyone loved your outfit and thought you \n were so cool and pretty!  You bonded with barbie a lot and \n even became one of Barbie's bestfriends!", width / 2, height / 2 - 100);
  //Move extra buttons off screen
  b1Button.pos = {x:-100, y: -100};
  b2Button.pos = {x:-150,y:-150};
}
function showScreen4() {
  background("lightblue");
  text("You missed out on the party and \n didn't meet any new friends...", width / 2, height / 2 -100);
  //Move extra buttons off screen
  b1Button.pos = { x: -100, y: -100};
  b2Button.pos = {x: -150, y: -150};
}


function showScreen5(){
   background("lavender")
      text ("Everyone thought you were rude and didn't approach you...", width / 2, height / 2 -100);

      // Move extra buttons off screen
      a1Button.pos = {x: -200, y:-200};
      a2Button.pos = {x: -500,y: -50};
}