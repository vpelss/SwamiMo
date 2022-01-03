//Swami Moe was written by Vince Pelss for http://www.somewhereincanada.com. If you wish to use this code. Please give credit to the authors and let us know where it is being used!

//general answer array
var answer = Array(
"I imagine, in time."
,"If it was up to me, that would not be a problem. However the gods have seen fit to ensure that will never happen."
,"Dream on, mortal."
,"I haven't time for your petty concerns."
,"Shower me with the affection I deserve and I might think about answering you later."
,"That is a difficult question. Even for me."
,"My link to the other side is not so clear."
,"It shall be so!"
,"That can never be!"
,"It shall be so!"
,"Never forget the consequences of your actions!"
,"Yes!"
,"No!"
,"That is a strong possibility."
,"Never!"
,"That sounds reasonable."
,"For an offering, perhaps cat nip, I will tell you."
,"If you do all that is required."
,"If you do what is right."
,"In time it may come to pass."
,"It shall take a thousand nights till that occurs!"
,"That is the question of a kitten!"
,"Some would say that is possible."
,"Some would say that is impossible."
,"I am full of wisdom. Bow down before me."
,"Should you be asking questions such as that before me!"
);

//triggers for death words
var trigger_death = new Array('dead','better','well','dying','death','suicide','kill','murder','stab','shoot','maim','health','cancer','sick','die','insane','crazy','heaven','war','idiot');
var death_answer = Array(
"Kind words can bring peace. "
,"A healthy mind helps heal the body."
,"I wish only a happy outcome."
,"If things should turn bad, seek help."
);

//triggers for love words
var trigger_love = new Array('cheat','see','love','like','marry','married','marriage','girlfriend','boyfriend','wife','husband','signifigant','go out','anniversary');
var love_answer = Array(
"Love knows no limits."
,"Love is kind. "
,"Friendships are required for true love."
,"See yourself in others and they shall see themselves in you!"
,"You under estimate your charms."
,"Always be a good person. The rest shall come."
);

//triggers for money / work words
var trigger_money = new Array('money','rich','wealth','million','billion','fame','fortune','lotter','financ','job','work','employ','luck');
var money_answer = Array(
"Fortune is an uncertain fate."
,"Money is meaningful when spent on others."
,"Luck can be influenced by effort."
,"Such answers lie in the realm of probability."
);

//triggers for cat words
var trigger_cat = new Array('pretty','cat','kit','puss');
var cat_answer = Array(
"Am I not perrrrfect?"
,"Lucky are the few, that behold by beauty."
,"I set the standard by which all others are measured."
,"I am the Queen of all felines."
);

//triggers for alien words
var trigger_alien = new Array('alien','e.t.','space','et','moon','star');
var alien_answer = Array(
"Who built the pyramids?"
,"Er... I must be getting back to the mother ship now."
,"Great. Another Star Trek geek."
,"I have come to serve mankind..... and eat them!"
,"Space, the final frontier"
,"They are among us!"
);

//triggers for alice refs
var trigger_alice = new Array('alice');
var alice_answer = Array(
"That infernal machine!"
,"A cat is worth 10,000 of her. Me, 1,000,000."
,"She lives near by."
,"I am, by far, the more complex being."
);

//triggers for diet words
var trigger_diet = new Array('food','diet','weight','fat','lbs','kg','pounds','grams');
var diet_answer = Array(
"A feather weighs 10,000 more than air."
,"Focus on improving the inside and the outside will long to join it."
,"Eat right and you shall feel well."
,"Learning to love yourself can be a hard lesson. Learn it well."
);

//triggers for babies
var trigger_baby = new Array('baby','twin','babies','child','a boy','a girl','pregn');
var baby_answer = Array(
"Children are worth more than their weight in gold."
,"To be a parent requires much patience."
,"To be a parent requires much wisdom."
,"To be a parent requires much love."
,"My powers are unclear today."
);

//triggers 'am I' questions
var trigger_ami = new Array('am i');
var ami_answer = Array(
"You might be."
,"You could be."
,"That might not be so."
,"That is unlikely."
);

//triggers for goofs
var trigger_goof = new Array('yes');
var goof_answer = Array(
"Are you being smart?"
);

//swamis pics no animation
swami = Array(
"swami0.gif"
,"swami1.gif"
,"swami2.gif"
,"swami3.gif"
);

//swamis animation pics
swamistare = Array(
"swami0stare.gif"
,"swami1stare.gif"
,"swami2stare.gif"
,"swami3stare.gif"
);

//pick swami and swami animation for this session
var eyes = new Image();
var hat;
function pickswami(){
hat = Math.round(Math.random()*(swami.length-1));
document.swamimo.src = swami[hat];
eyes.src=swamistare[hat];
} 

var question; //global var
//step 1
function prep(){
//start eyes animation going
document.swamimo.src = eyes.src;
//clear lower/previous question box
//move new question into lower question box
question = document.getElementById('question').value;
question = question.trim(question); //remove leading and lagging white space

//clear upper question box
document.getElementById('question').value = '';
//run pickanswer2 in 3 seconds.
setTimeout("pickanswer();","3000");
}

function PickResponse(){
var a = Math.round(Math.random()*(PickResponse.arguments[0].length-1));
document.getElementById('dialog-message').innerHTML = 'In response to your question:<br>\'' + question + '\'<br> Swami Mo says:<br>' + PickResponse.arguments[0][a];
}

function TriggerWord(){
for (var i=0; i < (TriggerWord.arguments[0].length) ; i++) {
	if (questionLC.indexOf(TriggerWord.arguments[0][i]) != -1) {
			return 1;
		}
	}
return 0;
}

var questionLC; //global
function pickanswer()
{
questionLC = question.toLowerCase();

if (questionLC != "")
	{
	//pick an answer
	//general answers. pick one first then look for trigger words.
	PickResponse(answer);

	//look for trigger words put important ones last, as that will end up being the answer

	//look for death triggers then choose appropriate response
	if (TriggerWord(trigger_death) == 1){
		PickResponse(death_answer); 
		}

	//look for love triggers then choose appropriate response
	if (TriggerWord(trigger_love) == 1){
		PickResponse(love_answer); 
		}

	//look for money triggers then choose appropriate response
	if (TriggerWord(trigger_money) == 1){
		PickResponse(money_answer); 
		}

	//look for cat triggers then choose appropriate response
	if (TriggerWord(trigger_cat) == 1){
		PickResponse(cat_answer); 
		}

	//look for alien triggers then choose appropriate response
	if (TriggerWord(trigger_alien) == 1){
		PickResponse(alien_answer); 
		}

	//look for alice triggers then choose appropriate response
	if (TriggerWord(trigger_alice) == 1){
		PickResponse(alice_answer); 
		}

	//look for diet triggers then choose appropriate response
	if (TriggerWord(trigger_diet) == 1){
		PickResponse(diet_answer); 
		}

	//look for baby triggers then choose appropriate response
	if (TriggerWord(trigger_baby) == 1){
		PickResponse(baby_answer); 
		}

	//look for AM I triggers then choose appropriate response
	if (TriggerWord(trigger_ami) == 1){
		PickResponse(ami_answer); 
		}

	//look for goof triggers then choose appropriate response
	if (TriggerWord(trigger_goof) == 1){
		PickResponse(goof_answer); 
		}
	}
else
	{
	//they entered no question
	document.getElementById('dialog-message').innerHTML = "Swami Mo says: That is not a question!";
	}

//stop swami animation
document.swamimo.src = swami[hat];

//show answer
$(function() {
    $( "#dialog-message" ).dialog({
      modal: true,
      buttons: {
        Ok: function() {
          $( this ).dialog( "close" );
        }
      }
    });
  });
  
}
