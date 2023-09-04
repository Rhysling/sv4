<script lang="ts">
  let count = 0;

  const increment = () => {
    count += 1
  };

  const decrement = () => {
    count -= 1
  };
</script>

<p>
  <button on:click={increment}>
		Increment
  </button>
  
  <button on:click={decrement}>
    Decrement
  </button>
</p>

<p>
  Count is {count}.
</p>