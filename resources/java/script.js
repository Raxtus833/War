var firstPlayer = [];
var secondPlayer = [];
var playedCards = [];
var cards = [];
var $draw = $("#draw");
var $firstPlayer = $("#firstPlayer")
var $secondPlayer = $("#secondPlayer")
var $firstPlayerNumber = $("#firstPlayerNumber");
var $secondPlayerNumber = $("#secondPlayerNumber");
var $firstPlayerSuit = $("#firstPlayerSuit");
var $secondPlayerSuit = $("#secondPlayerSuit");
var $winner = $("#winner");
var $player1Count = $("#player1Count");
var $player2Count = $("#player2Count");

for (i=1; i<14; i++){
    for (k=1; k<5; k++){
        var j = [i,k]
        cards.push(j);
    }
}

cards.shuffle = function() {
    console.log("shuffle");
    var input = this;
    for (var i = cards.length-1; i >=0; i--) {
        var randomIndex = Math.floor(Math.random()*(i+1));
        var itemAtIndex = cards[randomIndex][0];
        var itemAtSecond = cards[randomIndex][1];
        input[randomIndex][0] = input[i][0];
        input[randomIndex][1] = input[i][0];
        input[i][0] = itemAtIndex;
        input[i][1] = itemAtSecond;
    }
    return input;
}

cards.shuffle();

var half = cards.length/2;
for (i=0; i<half; i++) {
    firstPlayer.push(cards[i]);
}

cards.splice(0, half);

secondPlayer = cards;
$player1Count.html(firstPlayer.length);
$player2Count.html(secondPlayer.length);

$draw.on('click', function() {
    $firstPlayerSuit.empty();
    $secondplayersuit.empty();
    var number1=firstplayer[0][0];
    var number2=secondplayer[0][0];
    //need to put in jack, queen and king
    $firstPlayerNumber.html(number1);
    $secondPlayerNumber.html(number2);
    suit1 = firstplayer[0][1];
    suit2 = secondplayer[0][1];
})

if (suit1==1) {
    suit1 = "<img src='.images/hearts.png'/>"}
    if (suit1==2) {
    suit1 = "<img src='.images/diamonds.png'/>"}
    if (suit1==3) {
    suit1 = "<img src='.images/clubs.png'/>"}
    if (suit1==4) {
    suit1 = "<img src='.images/spades.png'/>"}
    if (suit2==1) {
    suit2 = "<img src='.images/hearts.png'/>"}
    if (suit2==2) {
    suit2 = "<img src='.images/diamonds.png'/>"}
    if (suit2==3) {
    suit2 = "<img src='.images/clubs.png'/>"}
    if (suit2==4) {
    suit2 = "<img src='.images/spades.png'/>"}

    for (i=0; i<number1; i++) {
        $firstPlayerSuit.append(suit1);
    };

    for (i=0; i<number2; i++) {
        $secondplayersuit.append(suit2)
    };

    playedCards.push(firstplayer[0]);
    playedCards.push(secondplayer[0]);

    firstPlayer.splice(0,1);
    secondplayer.splice(0,1);
    
    if (number1 > number2) {
        $winner.html("Player 1 Wins!")
        for (i=0; i<playedCards.length; i++) {
            firstplayer.push(playedcards[i])
        }
    } else {
        $winner.html("Player 2 Wins")
        for (i=0; i<playedcards.length; i++) {
            secondplayer.push(playedcards[i]);
        }
    }

    playedcards = [];
    $player1Count.html(firstplayerlength);
    $player2Count.html(secondplayer.length);