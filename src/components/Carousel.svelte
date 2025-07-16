<script>
    export let images;
</script>

<div id="carousel-container">
  <div id="carousel-images">
  {#each images as image}
    <a href={image.href}><img src={image.path} alt={image.id} id={image.id} /></a>
  {/each}
  </div>
</div>

<style>

</style>