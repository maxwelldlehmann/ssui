<style>
	:root {
		--text-primary: #ffffff;
		--text-secondary: rgba(255, 255, 255, 0.75);
		--text-error: #ff6767;

		--primary: #4b88d8;
		--border: rgba(255, 255, 255, 0.5);
		--background: #121212;
		--base-font-size: 8px;
		--paper: rgba(255, 255, 255, 0.05);
		--active: rgba(255, 255, 255, 0.16);
		--hover: rgba(255, 255, 255, 0.09);
		--disabled: rgba(128, 128, 128, 0.2);
		--border-radius: 0.5rem;
		font-size: var(--base-font-size);
	}
	:global(body) {
		background-color: var(--background);
		color: var(--text-primary);
		font-family:
			'Roboto',
			'Segoe UI',
			system-ui,
			-apple-system,
			sans-serif;
		font-size: 2rem;
		margin: 0;
		padding: 0;
	}

	/* ^^ Styles ---- CSS RESET vv */

	/* Box sizing rules */
	:global(*, *::before, *::after) {
		box-sizing: border-box;
	}

	/* Prevent font size inflation */
	:global(html) {
		-moz-text-size-adjust: none;
		-webkit-text-size-adjust: none;
		text-size-adjust: none;
	}

	/* Remove default margin in favour of better control in authored CSS */
	:global(body, h1, h2, h3, h4, p, figure, blockquote, dl, dd) {
		margin-block-end: 0;
	}

	/* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */
	:global(ul[role='list'], ol[role='list']) {
		list-style: none;
	}

	/* Set core body defaults */
	:global(body) {
		min-height: 100vh;
		line-height: 1.5;
		margin: 0;
	}

	/* Set shorter line heights on headings and interactive elements */
	:global(h1, h2, h3, h4, button, input, label) {
		line-height: 1.1;
	}

	/* Balance text wrapping on headings */
	:global(h1, h2, h3, h4) {
		text-wrap: balance;
	}

	/* A elements that don't have a class get default styles */
	:global(a:not([class])) {
		text-decoration-skip-ink: auto;
		color: currentColor;
	}

	/* Make images easier to work with */
	:global(img, picture) {
		max-width: 100%;
		display: block;
	}

	/* Inherit fonts for inputs and buttons */
	:global(input, button, textarea, select) {
		font-family: inherit;
		font-size: inherit;
	}

	/* Make sure textareas without a rows attribute are not tiny */
	:global(textarea:not([rows])) {
		min-height: 10em;
	}

	/* Anything that has been anchored to should have extra scroll margin */
	:global(:target) {
		scroll-margin-block: 5ex;
	}
</style>
