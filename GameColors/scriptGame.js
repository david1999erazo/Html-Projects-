

correct = 0;
correctColor = "white";
squares = document.querySelectorAll(".square");
level = squares.length;

function randomColor(X)
{
    return Math.floor((Math.random()*X));
}

function rgbText()
{
	var x = randomColor(255);
    var y = randomColor(255);
    var z = randomColor(255);
	return "rgb("+x+", "+y+", "+z+")";
}

function paint()
{
    correctColor = rgbText();
    correct = randomColor(level);
    squares[correct].style.backgroundColor = correctColor;
	document.getElementById("rgb").innerHTML  = correctColor;

	for (var i = 0; i < level; i++) {
        if(i!==correct)
        {
            squares[i].style.backgroundColor = rgbText();
        }
    }
}

function winnerPaint()
{
    for (let index = 0; index < squares.length; index++) {
        if(squares[index].style.backgroundColor !== "rgb(35, 35, 35)" ){
            squares[index].style.backgroundColor = correctColor;
        }
        
    }
}


function addListener()
{
	squares[correct].addEventListener("click",function()
    {
		document.getElementById("title").style.background = correctColor;
    });
	
	for (var i = 0; i < level; i++) {
        if(i!==correct)
        {
            squares[i].addEventListener("click",function()
            {
                document.getElementById("message").innerHTML="intente de nuevo";
            });
        }
    }
}

function selectLevel(count)
{
    level = count;
    for (var i = level; i < 9; i++) {
        squares[i].style.background = "#232323";
    }
    initialize();
}

function initialize()
{

	paint();
	addListener();
}