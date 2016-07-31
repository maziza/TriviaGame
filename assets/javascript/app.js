// puesdo code

// 1. start the game
// 2. display the question with timer at 15 seconds
// 3. user chooses one of the four choices, keep track of right/wrong answers
// 4.the questions should go through the loop till the last question in the arrary and then ask the user to restart



	var timervalue = 15;
	var numbercorrect = 0;
	var numberincorrect = 0;
	var numberunanswered = 0;
	var iscorrect = 0;

	var triviaQuestions = ["insert questions here"]


//timer function
function runtimer() {

		
		if (timervalue > 0)
			document.getElementById("Timer").innerHTML = Math.floor(timervalue);

//if answer choice is correct, pause the timer till next question
		if (timervalue > 0 && iscorrect == true){
			var timerPause = timervalue;
			document.getElementById("Timer").innerHTML = Math.floor(timerPause);
			timervalue = -1;
			numbercorrect++;
		}

//if answer choice is false, pause the timer till next question
		if (timervalue > 0 && iscorrect == false){
			var timerPause = timervalue;
			document.getElementById("Timer").innerHTML = Math.floor(timerPause);
			timervalue = -1;
			iscorrect = null;
			numberincorrect++;
		}
//if timer runs out of time and unanswered

		if (timervalue == 0){			
			document.getElementById("Timer").innerHTML = 0;
			numberunanswered++;

		}

//Finish running through questions in the array with timer at 0 and restart, if not then continue to next question in the array
	
	function stopTimer() {

	}

	function NextQuestion() {
		//need to somehow keep track of questions and display them from the array
	}

		if (timervalue == -5)
			{
				stopTimer();
			else{
				NextQuestion();
				timervalue = 15;
				}
			}
		}





// display the Trivia question with the four choices to choose from
	function Triviaquestion(question, choice1,choice2,choice3,choice4) {

		document.getElementById("questions").innerHTML = question;
//		
//
//


//make the trivia restart with all counters at 0 and back to first question in array


	};
