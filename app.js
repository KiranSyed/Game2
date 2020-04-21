generateGrid(12);
function generateGrid(length){
    for (let i=1; i<=length;i++){
        $(".row").append('<div class="card" id="'+i+'"><img class="hidden" src="images/mole.png"></div>');
    }
}

let countDown = 30;
let now = 0;
let score=0;
// Update the count down every 1 second
let x = setInterval(function() {
  
displayMole();

  // Find the distance between now and the count down 
  let distance = countDown - now;

  now++;
 $("#timer").html('Time left '+(distance));
 $("#score").html('Score '+score);
  // If the count down is finished, display final score 
  if (distance <= 0) {
    clearInterval(x);
    // clearInterval(intervalId);
    $("#timer").html("Game Over");
    $("#score").html('Final Score '+score);
  }
}, 1000);


function displayMole(){
    let i= generateRandomNumber(12);
    $('#'+i+' img').removeClass("hidden");
    $('#'+i+' img').addClass("peek");
    $(".card").click(function(){

        if (this.id == i){
            score++;
        }

    });
    setTimeout(function(){
        $('#'+i+' img').removeClass("peek");
        $('#'+i+' img').addClass("sneak");
    },1000)
}

function generateRandomNumber(num){
    return (Math.ceil(Math.random()*num));
}
