$(document).ready(function() {
  $("#things").submit(function(event) {
    event.preventDefault();
    $("#things").toggle();
    $(".results").toggle();

    var foodInput = $("input#fav1").val();
    var animalInput = $("input#fav2").val();
    var stateInput = $("input#fav3").val();
    var bandInput = $("input#fav4").val();


var array1 = [foodInput, animalInput, stateInput, bandInput];

var array2 = array1 [1];
array2.push(foodInput, stateInput);


alert(array2);

  });
});
