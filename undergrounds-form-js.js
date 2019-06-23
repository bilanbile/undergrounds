$("#submitButton").click(function(event)        {
var text1=$("#CoffeeShopName").val();
var text2=$("#coffeeURL").val();
var text3=$("#coffeeAddress").val();
$("#list").append('<li><a href=\"'+ text2+'\" target=\"_blank\">'+text1+'</a>'+', '+text3+'</li>');
});
