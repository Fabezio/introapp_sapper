<script>
  export let segment;
  const links = [
    // {id: 'home', url: '.', title: 'Accueil'},
    {id: 'services', url: 'services', label: 'Services'},
    {id: 'skills', url: 'skills', label: 'Compétences'},
    {id: 'portfolio', url: 'portfolio', label: 'Portfolio'},
    {id: 'about', url: 'about', label: 'A propos'},
    // {id: 'contact', url: 'contact', label: 'Accueil'},
    {id: 'contact', url: 'contact', label: 'Contactez-nous'},
    {id: 'prices', url: 'prices', label: 'Tarifs'},
  ]
</script>

<nav class="navbar navbar-expand-lg navbar-light bg-light sticky-top">
  <a class="navbar-brand" href="#">Fabezio</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent" >
    <ul class="nav nav-pills nav-fill">
      <li class="nav-item ">

        <a class="nav-link" aria-current={segment === undefined ? 'page' : undefined} href=".">
          Accueil
        </a>
      </li>
      {#each links as link, i}
      <li class="nav-item">
        <a class="nav-link" aria-current={segment === link.id ? 'page' : undefined} href={link.url}>
          {link.label}
        </a>
      </li>
      {/each}
    </ul>
      <!-- for the blog link, we're using rel=prefetch so that Sapper prefetches
          the blog data when we hover over the link or tap it on a touchscreen -->
      <!-- <li>
        <a
          rel="prefetch"
          aria-current={segment === 'blog' ? 'page' : undefined}
          href="blog">
          Blog
        </a>
      </li> -->
    
    <form class="form-inline my-2 my-lg-0 ">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
</nav>

