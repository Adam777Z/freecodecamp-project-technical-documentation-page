const projectName = 'technical-docs-page';
localStorage.setItem('example_project', 'Technical Docs Page');

document.addEventListener('DOMContentLoaded', (event) => {
	const ScrollSpy = new bootstrap.ScrollSpy(document.body, {
		target: '#navbar'
	});
});