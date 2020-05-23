<script>
  import Button from "../components/Button.svelte";
</script>

<style>
  h1,
  figure,
  p {
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
    max-width: 250px;
    margin: 0 0 1em 0;
    border-radius: 33%;
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
  <title>Accueil</title>
</svelte:head>

<h1>Accueil</h1>

<figure>
  <img alt="Success Kid" src="img/face_co-svelte.png" />
  <figcaption>Salut à tous!</figcaption>
</figure>

<p>
  <strong>Pas trop dur pour trouver?</strong>
</p>
<!-- <Button>
<i class='fas fa-home'></i>
Et si on cliquait?
</Button> -->
