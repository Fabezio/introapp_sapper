<style>
button {
  border-radius: 0.5em;
  padding: 0.5em 1em;
  margin: 0.5em;
  font-size: 1em;
  background: teal;
  color: whitesmoke;
  border: 1px teal solid;
}

button :hover {
  border: 1px orange solid;
  background: lime;
}
  

  
</style>

<button>
  <slot></slot>
</button>