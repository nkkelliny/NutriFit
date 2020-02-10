
  $(document).ready(function(){
    $('.modal').modal();
    $('select').formSelect();
  });

  $('.dropdown-trigger').dropdown();

  var userName = document.getElementById('email1');
  var pw = document.getElementById('password1');
  
  function store() {
      localStorage.setItem('name', userName.value);
      localStorage.setItem('pw', pw.value);
      window.location.href = 'https://nkelliny1.github.io/NutriFit/map.html';
  }
  
  function check() {
  
      var storedName = localStorage.getItem('name');
      var storedPw = localStorage.getItem('pw');
  
      var userName = document.getElementById('email');
      var userPw = document.getElementById('password');
  
      if(userName.value !== storedName || userPw.value !== storedPw) {
          console.log('ERROR');
          $('#errorMsg').show();
      }else {
          console.log('You are loged in.');
          window.location.href = 'https://nkelliny1.github.io/NutriFit/map.html';
      }
  }

  function settings() {
  
    var storedName = localStorage.getItem('name');
    var storedPw = localStorage.getItem('pw');

    var userName = document.getElementById('email2');
    var userPw = document.getElementById('oldPassword');
    var newPw = document.getElementById('newPassword');

    if(userName.value !== storedName || userPw.value !== storedPw) {
        console.log('ERROR');
        $('#errorMsg').show();
    }else {
        if(userName != ''){
            localStorage.setItem('name', userName.value);
        }
        localStorage.setItem('pw', newPw.value);
        window.location.href = 'https://nkelliny1.github.io/NutriFit/map.html';
    }
}

if(localStorage.getItem('name')){
    document.getElementById("userName").innerHTML = localStorage.getItem('name');
}
function logout(){
    window.location.href = 'https://nkelliny1.github.io/NutriFit/index.html';
}


var recipes = ['2 granola bars', 'whole grain cereal', '2 eggs', '1 bagel with 1 tbsp cream cheese']

$( "select" )
  .change(function () {
    var str = "";
    $( "select option:selected" ).each(function() {
      str = $( this ).val();
    });
    console.log(str);

    document.getElementById('mealText').value = recipes[str];

    var meal = "bread";
    var mealImg = '';
    var mealText = '';
    $.ajax({
        type: "GET",
        url: "https://trackapi.nutritionix.com/v2/search/instant?query=" + recipes[str] + " healthy" + "&self=true&branded=true&common=true&common_general=true&common_grocery=true&common_restaurant=true&detailed=false&claims=false",
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

            $('#nlabel').nutritionLabel({
                showServingUnitQuantity : false,
                itemName : str,
                ingredientList : str,
            
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
        }
    });
  })
  .change();

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
