<script>
import {links} from '../store/portfolio.js'
//  
</script>
<h1>portfolio</h1>
<div class="card-deck">
{#each links as link,i}
<div class="card">
   <!-- content here -->
   <div class="card-body">
    <h4 class="card-title">{link.name}</h4>
    <img class="card-img-top mb-2 border" src={link.img} alt={link.name}>
    <a class="btn btn-outline-info btn-block" href={link.url} target="_blank">Visiter</a>
   </div>

</div>
{/each}
</div>