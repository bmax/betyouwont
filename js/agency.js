/*!
 * Start Bootstrap - Agency Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

$('#takeModal').on('show.bs.modal', function (e) {
  var button = $(e.relatedTarget); // Button that triggered the modal
  var value = button.data('total_value');
  $('#takeModalValue').html(value);
})

$('#fundModal').on('show.bs.modal', function (e) {
  var button = $(e.relatedTarget); // Button that triggered the modal
  var dare_id = button.data('dare_id');
  var amount = $('#fundModalValue').val();
  console.log(amount)
})