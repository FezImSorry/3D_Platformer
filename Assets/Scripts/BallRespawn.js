#pragma strict

var maxFallDistance = -10;
var DeathSound : AudioClip;
private var isRestarting = false;

function Update () 
{
	if (transform.position.y <= maxFallDistance)
	{
		if (isRestarting == false)
		{
			RestartLevel ();
		}
	}
}

function RestartLevel ()
{
	isRestarting = true;
	GetComponent.<AudioSource>().clip = DeathSound;
	GetComponent.<AudioSource>().Play();
	yield WaitForSeconds (GetComponent.<AudioSource>().clip.length);
	Application.LoadLevel("Level1");
}