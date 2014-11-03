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

    clock.setTime(220880);
    clock.setCountdown(true);
    clock.start();

});


// <script type="text/javascript">
//   var clock = $('.clock').FlipClock(3600 * 24 * 3, {
//     clockFace: 'DailyCounter',
//     countdown: true
//   });
// </script>
