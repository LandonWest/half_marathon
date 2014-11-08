var clock;

$(document).ready(function() {
  var clock;

  clock = $('.clock').FlipClock({
        clockFace: 'DailyCounter',
        autoStart: false,
        callbacks: {
          stop: function() {
            $('.message').html('Race Time!')
          }
        }
    });

    clock.setTime(4122300);
    clock.setCountdown(true);
    clock.start();

});


// var clock = $('.clock').FlipClock(3600 * 24 * 47, {
//   clockFace: 'DailyCounter',
//   countdown: true
// });
