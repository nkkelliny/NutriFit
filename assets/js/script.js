
  $(document).ready(function(){
    $('.modal').modal();
  });

  $('.dropdown-trigger').dropdown();

  $("#password1").on("focusout", function (e) {
    if ($(this).val() != $("#passwordConfirm1").val()) {
        $("#passwordConfirm1").removeClass("valid").addClass("invalid");
    } else {
        $("#passwordConfirm1").removeClass("invalid").addClass("valid");
    }
});

$("#passwordConfirm1").on("keyup", function (e) {
    if ($("#password1").val() != $(this).val()) {
        $(this).removeClass("valid").addClass("invalid");
    } else {
        $(this).removeClass("invalid").addClass("valid");
    }
});

var auth =  [
    { email: "email@email.com" , password: "Hello"},
]

function loginVerification(){
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
}

var meal = "bread";
var mealImg = '';
var mealText = '';
$.ajax({
    type: "GET",
    url: "https://trackapi.nutritionix.com/v2/search/instant?query=" + meal + "&self=true&branded=true&common=true&common_general=true&common_grocery=true&common_restaurant=true&detailed=false&claims=false",
  headers: {
          'x-app-id': '17b9542d',   //If your header name has spaces or any other char not appropriate
          'x-app-key': 'baf2162fd62075e1574fc8922466bac9'  //for object property name, use quoted notation shown in second
      },
      dataType: 'json',
      success: function (data) {
          console.info(data);
          mealImg = data.common[0].photo.thumb;
          mealText = data.common[0].food_name;
          console.log(mealImg);
          $('#mealImg').attr("src",mealImg);
          $('#mealText').attr("value", mealText);
      }
  });



$('#nlabel').nutritionLabel({
	showServingUnitQuantity : false,
	itemName : 'Bleu Cheese Dressing',
	ingredientList : 'Bleu Cheese Dressing',

	showPolyFat : false,
	showMonoFat : false,

	valueCalories : 450,
	valueFatCalories : 430,
	valueTotalFat : 48,
	valueSatFat : 6,
	valueTransFat : 0,
	valueCholesterol : 30,
	valueSodium : 780,
	valueTotalCarb : 3,
	valueFibers : 0,
	valueSugars : 3,
	valueProteins : 3,
	valueVitaminD : 12.22,
	valuePotassium_2018 : 4.22,
	valueCalcium : 7.22,
	valueIron : 11.22,
	valueCaffeine : 15.63,
	showLegacyVersion : false
});

setTimeout(function(){
    $('#pac-input').text(mealText + " healthy");
          var e = jQuery.Event("keypress");
            e.which = 13; //choose the one you want
            e.keyCode = 13;
          $('#pac-input').trigger(e);
}, 3000);

