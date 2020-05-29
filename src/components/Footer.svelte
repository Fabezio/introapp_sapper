<script>
const date = new Date().getFullYear()
</script>

<style>
footer {
  position: relative;
  bottom: 0;
  width: 100%;
  /* text-align: center; */
  border-top: 1px solid rgba(21, 151, 148, .1 );
  background: rgba(21, 151, 148, .025);
  margin-top: 1em;

}
a:hover {
  text-decoration: none;
}
#gh-link {
  font-size: 1.25em;

}
</style>

<footer class="">
<div class="mt-3 mb-2 ml-4 align-items-start">
<p>fabezio 
  <span>&copy; tous droits réservés </span>
  <span>{date}</span>
  <span id="gh-link" class="text-muted">
    <a href="https://github.com/Fabezio/introapp_sapper.git" class="align-items-center float-right mr-4" target='_blank'>
      <i class="fab fa-github-square"></i>
      code source
    </a>
  </span>
</p>

</div>

</footer>