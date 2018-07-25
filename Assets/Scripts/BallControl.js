#pragma strict

var rotationSpeed = 200;
var jumpHeight = 8;
var distToGround : float;

var Hit01 : AudioClip;
var Hit02 : AudioClip;
var Hit03 : AudioClip;

function Start ()
{
	distToGround = GetComponent.<Collider>().bounds.extents.y;
}

function Update () 
{
	//Handle ball rotation
	var rotation : float = Input.GetAxis ("Horizontal") * rotationSpeed;
	rotation *= Time.deltaTime;
	GetComponent.<Rigidbody>().AddRelativeTorque (Vector3.back * rotation);
	
	if (Input.GetKey(KeyCode.UpArrow) && IsGrounded ())
	{
		GetComponent.<Rigidbody>().velocity.y = jumpHeight;
	}
}

function IsGrounded (): boolean 
{
	return Physics.Raycast(transform.position, -Vector3.up, distToGround + 0.1);
}

function OnCollisionEnter ()
{
	var hit = Random.Range(0, 3);
	if (hit == 0)
	{
		GetComponent.<AudioSource>().clip = Hit01;
	}
	else if (hit == 1)
	{
		GetComponent.<AudioSource>().clip = Hit02;
	}
	else
	{
		GetComponent.<AudioSource>().clip = Hit03;
	}
	GetComponent.<AudioSource>().Play();
}