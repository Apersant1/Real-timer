// var time = setInterval(function() {
//   var date = new Date();
//   document.getElementById("time").innerHTML = (date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds());
// }, 1000);

var time = setInterval(function () {
    var date = new Date();
    let hours = document.getElementById('hours')
    let hours1 = document.getElementById('hours1')
    let minute = document.getElementById('minute')
    let minute1 = document.getElementById('minute1')
    let seconds = document.getElementById('seconds')
    let seconds1 = document.getElementById('seconds1')

    // console.log(date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds());

    if (date.getHours().toString().length < 2) {
        hours.innerText = '0'
        hours1.innerText = date.getHours().toString()[1]
    } else {
        hours.innerText = date.getHours().toString()[0]
        hours1.innerText = date.getHours().toString()[1]
    }

    if (date.getMinutes().toString().length < 2) {
        minute.innerText = '0'
        minute1.innerText = date.getMinutes().toString()
    } else {
        minute.innerText = date.getMinutes().toString()[0]
        minute1.innerText = date.getMinutes().toString()[1]
    }

    if (date.getSeconds().toString().length < 2) {
        seconds.innerText = '0'
        seconds1.innerText = date.getSeconds().toString()
    } else {
        seconds.innerText = date.getSeconds().toString()[0]
        seconds1.innerText = date.getSeconds().toString()[1]
    }


}, 1000);