export function onKeyDown(key, player) {
	let x = player.x;
	let y = player.y;
	let velocity = 10;

	//Up Arrow, W
	if (key.keyCode === 87 || key.keyCode === 38) {
		player.position.set(x, y - velocity);
	}

	//Down Arrow, S
	if (key.keyCode === 83 || key.keyCode === 40) {
		player.position.set(x, y + velocity);
	}

	// left Arrow ,A
	if (key.keyCode === 65 || key.keyCode === 37) {
		player.position.set(x - velocity, y);
	}
	// Right arrow, D
	if (key.keyCode === 68 || key.keyCode === 39) {
		player.position.set(x + velocity, y);
	}

	//TODO: check for boundires:  player.position.y != renderer.height - boxHeight)
}
