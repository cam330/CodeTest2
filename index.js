//Question 1
var weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";

var date = new Date();
// var formatDate = t.format("dd.mm.yyyy hh:MM:ss");
var dateNumber = date.getDay();
var hours = date.getHours();
var ampm = hours >= 12? ' PM ' : ' AM ';
hours = hours % 12;
hours = hours ? hours : 12;

document.getElementById('labelTitle').innerHTML = "Today is "+ weekday[dateNumber]+"." + " The current time is "+ hours + ampm + ": " + date.getMinutes() + " : " + date.getSeconds();

//Question 2
var i = 1;
function name() {
	var stepTwo =  document.getElementById('stepTwo').innerHTML;
	setTimeout(function(){
		var firstLetter = stepTwo.charAt(0);
		var removeFirst = stepTwo.slice(1);
		var result = removeFirst+firstLetter;
		// console.log(result);
		document.getElementById('stepTwo').innerHTML = result;
		i++
		if (i>0) 
		{
			name();
		}
	}, 100)
}

name(); 

//Question 3
var stepThreeArray = [12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213];
function compareNumbers(a, b)
{
	return a - b;
}
stepThreeArray.sort(compareNumbers);
console.log(stepThreeArray);

//JQuery
$(document).ready(function(){

//Question 4
	for (var i = 0; i < $("p").length; i++)
	{
		var original = $("p")[i].innerHTML;
		var firstWord = ($("p")[i].innerHTML.split(' ')[0]);
		var result = original.substr(original.indexOf(" ") + 1);

		$("p")[i].innerHTML = firstWord.bold()+ " " +result;

	}
//Question 5
	$("#clickMe").dblclick( function(){
		$("#stepFour").append("<p>This is a double-click event</p>");
	});
	$("#clickMe").click( function(){
		$("#stepFour").append("<p>This is a click event</p>");
	});
//Question 6
	$("#button").click(function(){
		$("#background").css({"background-color" : randomColor});
	});

	function randomColor(color) {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
});





























