var inquirer = require("inquirer");
var cards = []
var cardNumber = 0

function ClozeCard(text, cloze) {
    if (this instanceof ClozeCard) {
        this.text = text;
        this.cloze = cloze
    }
    else {
        return new ClozeCard(text, cloze);
    }
  } 

 ClozeCard.prototype.full = function () {
 	clozeBlank = this.cloze
 	clozeText = this.text

 	clozeText = clozeText.replace('_____', clozeBlank);
 	console.log(clozeText);
 }

var card1 = ClozeCard("The sum of all the numbers on a Roulette wheel is _____.", "666");
var card2 = ClozeCard("In Ireland, you are given a _____ to help replace lost iron after donating blood.", "pint of Guiness"); 
var card3 = ClozeCard("Doctors' sloppy handwriting kills _____ people annually in the United States.", "7000");
var card4 = ClozeCard("An average cloud weighs _____.", "1.1 million pounds");
var card5 = ClozeCard("The _____ is the national animal of Scotland?", "unicorn");

cards.push(card1);
cards.push(card2);
cards.push(card3);
cards.push(card4);
cards.push(card5);

function nextCard() {
	
	if(cardNumber < cards.length) {
				inquirer.prompt([
					{
						name: "text",
						message: cards[cardNumber].text
					}
				]).then(function(answer) {

					if((answer.text) === cards[cardNumber].cloze) {
						console.log("Correct!!");
							cardNumber ++ 
						nextCard();
					} 
					else {
						console.log("Incorrect");
						console.log(cards[cardNumber].cloze);
							cardNumber ++
	
						nextCard();
					}

		});
	}
}

nextCard();