
  $(document).ready(function(){
    $('.modal').modal();
  });

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