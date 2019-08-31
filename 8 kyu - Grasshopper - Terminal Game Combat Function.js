function combat(health, damage) {
	var newHealth = health - damage;
	if (health - damage >= 0) {
		return newHealth;
	} else {
		return 0;
	}
}
