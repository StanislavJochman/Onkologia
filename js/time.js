const second = 1000,
      minute = second * 60,
      hour = minute * 60,
      day = hour * 24;

let countDown1 = new Date('Sep 29, 2022 09:00:00').getTime();
let countDown2 = new Date('Apr 1, 2022 09:00:00').getTime();
    x = setInterval(function() {

    let now = new Date().getTime();
    distance1 = countDown1 - now;
    distance2 = countDown2 - now;

    document.getElementById('time1').innerText = "O " + Math.floor(distance1 / (day)) + " dní";
    //document.getElementById('time2').innerText = "O " + Math.floor(distance2 / (day)) + " dní";
      
    //if(distance1 < 0) {
    //  clearInterval(x);
    //  document.getElementById("time1").innerHTML = "Prebehlo";
    //}
    if(distance2 < 0) {
        clearInterval(x);
        document.getElementById("time2").innerHTML = "Prebehlo";
      }

    }, second)


    function showTimer() {
          setTimeout(function() {
            document.getElementById('container').style.display = 'block';
          }, 10000);
      }
      
      showTimer();