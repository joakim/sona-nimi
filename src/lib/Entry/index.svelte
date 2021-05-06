<script>
  import { goto } from '$app/navigation';

  let text = ''

  function translate() {
    goto('/t/?q=' + encodeURIComponent(text))
  }
</script>

<textarea class="input" bind:value={text} autofocus></textarea>
<button class="btn" on:click={translate} disabled={text.length === 0}>oko</button>

<style>
.input {
  width: 30vw;
  height: 30vh;
  padding: 1em;
  font-size: 1em;
  border: 1px solid var(--primary-color);
  border-radius: 4px;
}

.btn {
  background: #3498db;
  background-image: -webkit-linear-gradient(top, #3498db, #2980b9);
  background-image: -moz-linear-gradient(top, #3498db, #2980b9);
  background-image: -ms-linear-gradient(top, #3498db, #2980b9);
  background-image: -o-linear-gradient(top, #3498db, #2980b9);
  background-image: linear-gradient(to bottom, #3498db, #2980b9);
  -webkit-border-radius: 4;
  -moz-border-radius: 4;
  border-radius: 4px;
  font-size: 1.1em;
  text-shadow: 1px 1px 0px #666666;
  color: #ffffff;
  padding: 0.75em 2em 0.75em 2em;
  text-decoration: none;
  border: none;
  cursor: pointer;
  margin-top: 2em;
}

.btn:hover {
  background: #3cb0fd;
  background-image: -webkit-linear-gradient(top, #3cb0fd, #3498db);
  background-image: -moz-linear-gradient(top, #3cb0fd, #3498db);
  background-image: -ms-linear-gradient(top, #3cb0fd, #3498db);
  background-image: -o-linear-gradient(top, #3cb0fd, #3498db);
  background-image: linear-gradient(to bottom, #3cb0fd, #3498db);
  text-decoration: none;
}

.btn:disabled {
  background: #3498db;
  opacity: 0.6;
  cursor: inherit;
}
</style>
