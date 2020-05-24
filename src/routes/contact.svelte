<script>
let name = null
let email = null
let phone = null
let message= null
let subject=null
let errors= []
$: console.log(errors)
const gatherErrors = (e) =>  {
  let msg = ''
  if (!e) return (msg = `${e} is empty`,
  errors.push[e])

}

</script>

<form
  action="https://formspree.io/xzbjebjr"
  method="POST"
>
  <input type="text" bind:value={name} name="name" placeholder="nom:" ><br>
  <input type="email" bind:value={email} name="_replyto" placeholder="email:" ><br>
  <input type="tel" bind:value={phone} name="phone" placeholder="n° de téléphone" ><br>
  <input type="text" bind:value={subject} name="_subject"  placeholder="objet:" /><br>
  <textarea bind:value={message} rows="2" name="message"></textarea><br>
<!-- <p>{name || gatherErrors(name) }, {email}, {phone}</p> -->
<input on:click={gatherErrors}  type="submit" value="valider">
<!-- <p>{errors}</p> -->
</form>