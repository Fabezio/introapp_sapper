<style>
	h1, figure, p {
		text-align: center;
		margin: 0 auto;
	}

	h1 {
		font-size: 2.8em;
		text-transform: uppercase;
		font-weight: 700;
		margin: 0 0 0.5em 0;
	}

	figure {
		margin: 0 0 1em 0;
	}

	img {
		width: 100%;
		max-width: 400px;
		margin: 0 0 1em 0;
	}

	p {
		margin: 1em auto;
	}

	@media (min-width: 480px) {
		h1 {
			font-size: 4em;
		}
	}
</style>

<svelte:head>
	<title>Bienvenue</title>
</svelte:head>

<h1>Bienvenue!</h1>

<figure>
	<img alt='mon avatar' src='img/face_co-svelte.png'>
	<figcaption>Bonjour tout le monde!</figcaption>
</figure>

<p><strong>Pas trop dur à trouver?</strong></p>
