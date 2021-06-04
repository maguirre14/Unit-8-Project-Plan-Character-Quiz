$("button").click(function() {
    let number = $(".number").val();
    let feeling = $(".feeling").val();
    
if (feeling === "happiness" && number >3){
    $(".todd").show();
    $(".result").text("You got Todd Chavez !!");
    $(".result").show();
     }
    
else if (feeling === "happiness" && number <=3){
    $(".result").text("You got Bojack Horseman!!");
    $(".result").show();
    $(".bojack").show();
      }
    
else if (feeling === "love" && number >3){
    $(".result").text("You got Princess Carolyn!!");
    $(".result").show();
    $(".carolyn").show();
      }
    
else if (feeling === "love" && number <=3){
    $(".result").text("You got Diane Nguyen!!");
    $(".result").show();
    $(".diane").show(); 
      }
});
