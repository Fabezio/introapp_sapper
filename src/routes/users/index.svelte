<script>
import {users} from './_id.js'

</script>

<ul>
  {#each users as user, i}
  <li>{user.name}</li>
  {/each}
</ul>