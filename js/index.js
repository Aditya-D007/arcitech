$(".otp-input").keyup(function () {
    if (this.value.length == this.maxLength) {
        $(this).next('.otp-input').focus();
    }
});

// Carousel
$('.carousel').carousel({
    interval: 4000, //changes the speed
    pause: "false"
})

// Tooltip
$(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })

