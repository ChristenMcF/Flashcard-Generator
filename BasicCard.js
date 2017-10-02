var inquirer = require("inquirer");
var cards = []
var cardNumber = 0

function BasicCard(front, back) {
    if (this instanceof BasicCard) {
        this.front = front;
        this.back = back
    }
    else {
        return new BasicCard(front, back);
    }
  }  

var card1 = BasicCard("What is the sum of all the numbers on a Roulette wheel?", "666");
var card2 = BasicCard("In Ireland, what are you given to help replace lost iron after donating blood?", "pint of Guiness"); 
var card3 = BasicCard("Doctors' sloppy handwriting kills how many people annually in the United States?", "7000");
var card4 = BasicCard("How much does an average cloud weigh?", "1.1 million pounds");
var card5 = BasicCard("What is the national animal of Scotland?", "unicorn");

cards.push(card1);
cards.push(card2);
cards.push(card3);
cards.push(card4);
cards.push(card5);

function nextCard() {
	
	if(cardNumber < cards.length) {
				inquirer.prompt([
					{
						name: "question",
						message: cards[cardNumber].front
					}
				]).then(function(answer) {

					if((answer.question) === cards[cardNumber].back) {
						console.log("Correct!!");
							cardNumber ++ 
						nextCard();
					} 
					else {
						console.log("Incorrect");
						console.log("Correct answer is " + cards[cardNumber].back);
							cardNumber ++
	
						nextCard();
					}
		});
	}
}

nextCard();