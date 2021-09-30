
document.onload = function() {
	const canvas = document.querySelector('canvas');
	const c = canvas.getContext('2d');
	c.fillStyle = 'rgba(255, 0, 0, 0.5)';
	c.fillRect(0, 0, canvas.width * 0.15 / 2, canvas.height);
	c.fillRect(canvas.width * (0.85 + 0.15 / 2), 0, canvas.width * 0.15 / 2, canvas.height);
};