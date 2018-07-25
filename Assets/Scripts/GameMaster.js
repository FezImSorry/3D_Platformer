#pragma strict

static var currentScore : int = 0;

var offsetX : float = 100;
var offsetY : float = 40;
var sizeX : float = 100;
var sizeY : float = 40;

function Start () 
{
	currentScore = 0;
}

function OnGUI () 
{
	GUI.Box (new Rect (offsetX-sizeX/2, offsetY, sizeX, sizeY), "Score: " + currentScore);
}