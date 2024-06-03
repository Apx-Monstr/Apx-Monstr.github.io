$(document).ready(
    function (){
        console.log("I am Readyy Lets Roooollllllllll");
        var modal = $('#modal-container');
        modal.hide();
        var contactUs = $('#contact-us');
        contactUs.click(function() {
            modal.show();
        });
        $('.readmore').click(function(){
            window.open("https://www.fylehq.com", "_blank");
        })
        $(window).click(function(event) {
            if ($(event.target).is(modal)) {
            modal.hide();
            }
        });
        $('#contactus-form').on('submit', function(event) {
            event.preventDefault(); // Prevent the default form submission
        
            var formData = $(this).serialize(); // Serialize form data
            console.log(formData)
            $.ajax({
              type: 'POST',
              url: 'https://getform.io/f/eapdozda', // Replace with your Getform endpoint
              data: formData,
              success: function(response) {
                alert('Form submitted successfully!');
                modal.hide(); // Hide the modal
              },
              error: function(error) {
                alert('An error occurred. Please try again.');
              }
            });
        });
        $('.project-button').click(function() {
            var imageUrl = $(this).data('image');
            console.log(imageUrl)
            $('#projects div.clickables div.imagearea').css('background-image', 'url(' + imageUrl + ')');
            $('.project-button').removeClass('active');
            $(this).addClass('active');
        });
    }
)