setInterval(function(){
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let session = document.getElementById('session');

    if(hours >= 12){
        session.innerHTML = 'PM';
    }else{
        session.innerHTML = 'AM';
    }
    if(hours > 12){
        hours = hours - 12;
    }


    document.getElementById('hours').innerHTML = hours;
    document.getElementById('minutes').innerHTML = minutes;    
    document.getElementById('seconds').innerHTML = seconds;   

})