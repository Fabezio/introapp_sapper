
<script>
// import Paypal from '../components/Paypal.svelte'
  const price = 267

  paypal.Buttons({
    style: {
      shape: 'rect',
          color: 'gold',
          layout: 'vertical',
          label: 'paypal',
          
      },
      createOrder: function(data, actions) {
        return actions.order.create({
          purchase_units: [{
            amount: {
              value: '267'
                  }
              }]
          });
      },
      onApprove: function(data, actions) {
        return actions.order.capture().then(function(details) {
          alert('Transaction completed by ' + details.payer.name.given_name + '!');
          });
      }
  }).render('#paypal-button-container');
</script>

<h1>Tarifs</h1>

<h3>Prix basique</h3>

<p>{price} €</p>
<!-- <Paypal /> -->
<div id="paypal-button-container" class="w-25"></div>