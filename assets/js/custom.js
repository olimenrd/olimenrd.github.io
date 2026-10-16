(function () {
	var btn = document.getElementById('theme-toggle');
	if (!btn) return;
	var root = document.documentElement;

	function updateIcon() {
		btn.textContent = root.classList.contains('dark') ? '☀︎' : '☾';
	}
	updateIcon();

	btn.addEventListener('click', function () {
		root.classList.toggle('dark');
		try {
			localStorage.setItem('theme', root.classList.contains('dark') ? 'dark' : 'light');
		} catch (e) {}
		updateIcon();
	});
})();