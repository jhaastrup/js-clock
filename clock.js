//declear varaibles we will need
var noon = 12
var evening = 18

//write a function to show the current time

showCurrentTime = () =>{
    var clock = document.getElementById(`clock`)

    var currentTime = new Date();

    //get hours, miniutes and seconds 

    var hours = currentTime.getHours();
    var miniutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    var merdian = "AM"  

    //set hours 
    if(hours >= noon){
        merdian = "PM"
    } 

    if(hours > noon){
        hours = hours -12
    } 

    //set minuties
    if(miniutes <10){
        miniutes = "0" + miniutes
    } 

    //set seconds
    if(seconds < 10){
        seconds = "0" + seconds;
    }

    var showTime = hours +  ":" + miniutes + ":" + seconds + ":" + merdian + "!"

    clock.innerText = showTime;
}

//write a function to increment the clock and change pictures and images


updateClock = () =>{
var time = new Date().getHours();
var textMessages;
var image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/normalTime.jpg"

var timeEventJS = document.getElementById(`timeEvent`)
var lolcatImageJS = document.getElementById(`lolcatImage`) 

if(time < noon){
    image = "https://pbs.twimg.com/profile_images/378800000532546226/dbe5f0727b69487016ffd67a6689e75a.jpeg";
    textMessages = "Good Morning"
}

else if (time >= evening)
{
  image = "https://upload.wikimedia.org/wikipedia/commons/8/8c/Cat_sleep.jpg";
  textMessages = "Good evening!";
}

else
{
  image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/normalTime.jpg";
  textMessages = "Good afternoon!";
}
console.log(textMessages)
timeEventJS.innerText = textMessages;
lolcatImageJS.src = image


showCurrentTime();
};
updateClock();

//increment clock every one second
var oneSecond = 1000;
setInterval(updateClock, oneSecond)


