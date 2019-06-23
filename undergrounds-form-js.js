$(function() {
$("#submitButton").click(function(event)        {
var text1=$("#CoffeeShopName").val();
var text2=$("#coffeeURL").val();
var text3=$("#coffeeAddress").val();
$("#CoffeeList").append('<li><a href=\"'+ text2+'\" target=\"_blank\">'+text1+'</a>'+', '+text3+'</li>');
});
});

$(function() {
      $("form[name='CoffeeShopAdd']").validate({
         rules: {

           CoffeeShopName: {
             required: true,

           }

           coffeeAddress: {
             required: true,
           }

           coffeeURL: {
             required: true,

         }
       },
         messages: {
         coffeeShopName: "Please enter the coffee shop name",
         coffeeAddress: "Please enter an address",
         coffeeURL: "Please enter a URL",

       },
       submitHandler: function(form) {
         form.submit();
       }
     });
   });
