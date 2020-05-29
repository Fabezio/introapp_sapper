<script>
// import { get } from './getapi.js'
function getSomething() {
  fetch ('getapi')
}
</script>

<h1>Get something here!</h1>
<button class="btn btn-primary" on:click={getSomething}>Get!</button>