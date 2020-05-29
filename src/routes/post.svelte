<script>
let data = 'yum'
function postSomething() {
  fetch('postapi', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({data})
  })
}
</script>

<h1>Post Foo</h1>
<input bind:value={data}>
<button class="btn btn-warning" on:click={postSomething}>Post!</button>