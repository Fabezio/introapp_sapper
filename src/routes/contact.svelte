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

<h1>Contactez-nous</h1>
<h3>remplissez le formulaire ci-dessous</h3>
<form action="https://formspree.io/xzbjebjr" method="POST">
	<input class="form-control mb-2" type="text" bind:value="{name}" name="name" placeholder="nom:" />
	<input class="form-control mb-2" type="email" bind:value="{email}" name="_replyto" placeholder="email:" />
	<input class="form-control mb-2" type="tel" bind:value="{phone}" name="phone" placeholder="n° de téléphone" />
	<input class="form-control mb-2" type="text" bind:value="{subject}" name="_subject" placeholder="objet:" />
	<textarea class="form-control mb-3" bind:value="{message}" rows="2" name="message"></textarea>
	<!-- <p>{name || gatherErrors(name) }, {email}, {phone}</p>-->
	<div class="btn-group w-25">
		<button class="btn btn-info" on:click="{gatherErrors}" type="submit" value="valider"><i class="fas fa-arrow-circle-right mr-1"></i><span>Envoyer</span></button>
		<button class="btn btn-danger"><i class="fas fa-times-circle mr-1"></i><span>Annuler</span></button>
	</div>
	<!-- <p>{errors}</p>-->
</form>