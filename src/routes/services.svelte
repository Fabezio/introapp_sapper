<script>
  const cards = [
    { title: "Création", content: "Pour avoir un site tout beau et réactif" },
    {
      title: "Amélioration",
      content: "Offrez un lifting à votre site avec bootstrap"
    },
    {
      title: "Optimisation",
      content: "Un site web à jour est toujours plus attirant."
    }
  ];
</script>

<style>
  .card:hover,
  .btn:hover,
  a:hover {
    transition: all 0.2s ease;
  }
  .card:hover {
    cursor: not-allowed;
    transform: scale(105%);
  }

  a:hover {
    color: white;
    text-decoration: none;
  }
</style>

<h1>Services</h1>
<div class="card-deck mb-4">
  {#each cards as card}
    <div class="card border-info rounded-lg shadow">
      <div class="card-header py-0">
        <h4 class="card-title">{card.title}</h4>
      </div>
      <div class="card-body">
        <p class="card_text">{card.content}</p>
      </div>
    </div>
  {/each}

</div>
<p>
  Si vous avez besoin de construire, améliorer ou mettre à jour votre site,
  contactez-moi en cliquant ci-dessous
</p>

<a href="contact" class="btn btn-info btn-block">
  Oui, je veux un site optimal
</a>
