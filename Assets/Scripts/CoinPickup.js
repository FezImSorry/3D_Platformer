#pragma strict

var coinParticle : Transform;
var coinValue = 1;

function OnTriggerEnter (info : Collider) 
{
	if (info.tag == "Player")
	{
		GameMaster.currentScore += coinValue;
		var effect = Instantiate(coinParticle, transform.position, transform.rotation);
		Destroy(effect.gameObject, 0.5);
		Destroy(gameObject);
	}
}