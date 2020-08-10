function booWho(bool) {
	if (typeof bool === 'boolean') {
		//if bool is a boolean (true/false) return true
		return true;
	} else if (typeof bool !== 'boolean') {
		//if not boolean return false
		return false;
	}
}

booWho(null);
