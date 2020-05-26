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

<style>
  nav {
    border-bottom: 1px solid rgba(255, 62, 0, 0.1);
    font-weight: 300;
    padding: 0 1em;
  }

  ul {
    margin: 0;
    padding: 0;
  }

  /* clearfix */
  ul::after {
    content: "";
    display: block;
    clear: both;
  }

  li {
    display: block;
    float: left;
  }
  .inter {
		border-right: solid 0.5px rgba(255, 62, 0, 0.25);
		/* height: 75%; */
  }

  [aria-current] {
    position: relative;
    display: inline-block;
  }

  [aria-current]::after {
    position: absolute;
    content: "";
    width: calc(100% - 1em);
    height: 2px;
    background-color: #159794;
    display: block;
    bottom: -1px;
  }

  a {
    text-decoration: none;
    padding: 0.5em 0.5em;
    display: block;
  }
</style>

<nav>
  <ul>

    <li class="inter">
      <a aria-current={segment === undefined ? 'page' : undefined} href=".">
        Accueil
      </a>
    </li>
    {#each links as link, i}
    <li class="inter">
      <a aria-current={segment === link.id ? 'page' : undefined} href={link.url}>
        {link.label}
      </a>
    </li>
    {/each}
    <!-- <li class="inter">
      <a aria-current={segment === 'about' ? 'page' : undefined} href="about">
        A propos
      </a>
    </li>
    <li class="inter">
      <a aria-current={segment === 'contact' ? 'page' : undefined} href="contact">
        Contactez-nous!
      </a>
    </li> -->

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
  </ul>
</nav>
