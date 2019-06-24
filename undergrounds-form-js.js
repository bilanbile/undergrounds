// general thing: indent your code properly and add an empty line
// after logical blocks to make reading your own code better!
// I also prefer to use 4 spaces indentation rather than 2
// since it makes things more readable



// $("#submitButton").click(function(event) {
    // the code here was moved to the submitHandler method of the validation - we want
    // it to run when the form validates only
// });

// $(document).ready(function() explained
// this is a jQuery function and is needed to run the code only when the
// whole html "document" has loaded. If you look at the html, you will see
// that this file is loaded in the <head> and it will be executed immediately,
// before the rest of the html(the "document") can be "loaded" - this will cause
// issues because the form will not be found etc.
// So, the function below, "ready()", basically holds fire until
// the document is ready (as the name says!)
$(document).ready(function() {
    // this is a custom validator rule that we add to check for big chain names
    // see https://jqueryvalidation.org/jQuery.validator.addMethod/
    $.validator.addMethod(
        "checkChain",
        function (value, element) {
            if (value.includes('costa') || value.includes('starbucks') || value.includes('caffenero') || value.includes('pret.com') || value.includes('pret.co.uk') || value.includes('eat.co.uk') || value.includes('amtcoffee') ||  value.includes('cafferitazza')) {
                return false;
            }
            return true;
        },
        "Please don't add a coffee chain" // default message if not specified below
    );

    $("#coffeeShopAdd").validate({ // I've changed this in the html too, check the html file for a matching tag
        rules: {
            coffeeShopName: {
                required: true
            }, // comma was needed here
            coffeeAddress: {
                required: true
            }, // comma was needed here
            coffeeURL: {
                required: true,
                checkChain: true // here I've added the custom validator we created above
            }
        },
        messages: {
            coffeeShopName: "Please enter the coffee shop name",
            coffeeAddress: "Please enter an address",
            coffeeURL: {
                required: "Please enter a URL",
                checkChain: "Hi! We are keen to promote independent coffee shops here, so please do not add chain coffee shops to our list!"
            }
        },
        // this function is called when the form validates, so we add here
        // things we want to happen only in this situation
        submitHandler: function(form) {
            var text1 = $("#coffeeShopName").val();
            var text2 = $("#coffeeURL").val();
            var text3 = $("#coffeeAddress").val();

            $("#CoffeeList").append('<li><a href="' + text2 + '" target="_blank">' + text1 + '</a>' + ', ' + text3 + '</li>');

            // this can be removed - it's needed only when we really want to submit the form
            // which is not the case since we don't have a backend to deal with it
            // form.submit();
            alert('thank you! your entry has been added')
        }
    });
});
