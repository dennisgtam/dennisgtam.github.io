 // U3.W7: Design Basic Game Solo Challenge

// This is a solo challenge

// Your mission description: This is
// Overall mission: Simon!
// Goals: To copy the pattern simon plays.
// Characters: Simon, the player
// Objects: Simon, 
// Functions: generate_pattern, display_pattern, get_attempt, same, start

// Pseudocode
// Attempt to use jQuery for this.
// The board is made up of 4 buttons as colored divs.
// At beginning of each round, Simon will generate a pattern that is as long as the current round. (Pattern in round 4 will contain 4 button presses)
// Board will display the pattern.
// Board will ask for the player to recreate the pattern.
// If the pattern matches, go to next round.
// Otherwise, display to the player what round they made it to.

// Initial Code



// Refactored Code
$(document).ready(function(){
var colors = ['R','B','Y','G'];
    
function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
};


var Simon = {
	generate_pattern : function (nth_turn){
		var pattern = [];
		for (var counter =  0; counter < nth_turn; counter++){
			pattern.push(colors[Math.floor(Math.random()*4)]);
			}
		return pattern;
		}
};
    
var Display = {
	display_pattern : function(pattern){
        alert(pattern);
		for (var counter =  0; counter < pattern.length;  counter++){
			$("#"+pattern[counter]).fadeOut('slow').fadeIn('slow');
			//Could not figure out why this is only executed after the  game is over.
			//Not pushing to DOM until after exectuion of JS for some reason
		}
	},
	get_attempt : function(){
		var attempt = [];
		var answer = prompt("Type the pattern you just saw, use GRBY with no spaces.");
		//Wanted answer to be input from clicking on the divs but couldn't figure out how to make program wait until player clicks.
        var answer_array = answer.split('');
		for (var index =0; index < answer_array.length; index++){
			attempt.push(answer[index]);
		}
        alert("Got it!");
		return attempt;
		}
};
    
var Game = {
	nth_turn : 1,
	lose : false,
	simon : Simon,
	display : Display,
    
	same : function(pattern, attempt){
		for (var index = 0;  index < pattern.length;  index++){
			if  (pattern[index]  !=  attempt[index]) return false;
		}
		return true;
	},
    	start : function(){
        alert("Are you ready?");
		while (this.lose == false){
			var pattern = this.simon.generate_pattern(this.nth_turn);
			this.display.display_pattern(pattern);
			var attempt = this.display.get_attempt();
			if (this.same(pattern,attempt) == false) this.lose = true;
			this.nth_turn = this.nth_turn +1;
		}
		alert("GAME OVER. You made it to round " + this.nth_turn);
	}
};
    
Game.start();
});

 // Reflection

 /* I was initially very ambitious with this game. I knew I didn't want to do a console based dungeon crawler. Instead I wanted
 to try my hand at something visual. I was looking around and found the jQuery library and Simon seemed like a basic enough
 game to make with it.

 I spent many hours learning about jQuery before starting to tackle the problem. The basic logic of the game was not too 
 hard to write. Generating the pattern and checking the pattern against input were pretty easy. I had to think more on how 
 I wanted the game to run and I spent a fair amount of time on the start function.

 But the biggest problems were getting the input and getting the jQuery to display the pattern properly. As you can see, I coudln't
 figure it out. The first road block was trying to figure out how to make the program wait for user input. In the Rubuy, gets.chomp()
 works perfectly well as the program will not continue until the user enters something. I could not figure out how to make the program
 wait for mouse clicks and it's something I spent many hours on. Eventually I just gave up and decided to come back to it later. For now,
 the input is entered into a prompt box.

 The second problem was getting the display pattern function to manipulate the div elements. I spent a lot of time debugging, inserting
 alert statements to figure out where the issue was coming from. Again, I couldn't figure it out. For some reason, the div elements
 are not manipulated until the very end of the program when we quit and lose. I have no idea why and my research efforts haven't 
 worked either.

 Still, the game is playable, but not fun. 

 I did learn a lot about JS and jQuery in this exercise but I really wished I could of figured out how to do it better. Right now,
 I feel really stuck on why these things aren't  working properly.
 

 */
