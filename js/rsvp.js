
$(document).ready(function() { 

    $("#authform").on("submit", function(e){
        var valid = Validate();
            if(valid){
                $('.auth').css({
                'transform' : 'translate(0px, 400px)'
                });
            }
            else {
                $('#pone').text("Sorry, that is not a valid");
                $('#ptwo').text("code. Please try again.");
                $('#pone').css({
                'color' : 'red'
                });
                $('#ptwo').css({
                'color' : 'red'
                });
            }
        e.preventDefault();
    });

    function Validate() {
    var code = document.getElementById("code").value;
    var secret = 080517;

    if(isNaN(code) || code != secret) {
        return false;
    }

    return true;

    }

 });

/*


 $("#submit").click(function(e){
        $('.authtwo').delay(1500).css({
            'transform' : 'translate(0px, 0px)'
        });
        e.preventDefault();
    });

*/


$(document).ready(function() {

    // process the form
    $('#form').submit(function(event) {

        // get the form data
        // there are many ways to get this data using jQuery (you can use the class or id also)
        var formData = {
            'attend'              : $('input[name=attend]').val(),
            'firstname'             : $('input[name=firstname]').val(),
            'lastname'    : $('input[name=lastname]').val(),
            'email'    : $('input[name=email]').val(),
            'guest'    : $('input[name=guest]').val()
        };

        // process the form
        $.ajax({
            type        : 'POST', // define the type of HTTP verb we want to use (POST for our form)
            url         : 'rsvpupdate.php', // the url where we want to POST
            data        : formData, // our data object
            dataType    : 'json', // what type of data do we expect back from the server
                        encode          : true
        })
            // using the done promise callback
            .done(function(data) {

                // log data to the console so we can see
                console.log(data); 

                // here we will handle errors and validation messages
            });

        // stop the form from submitting the normal way and refreshing the page
        event.preventDefault();
        
    });

});