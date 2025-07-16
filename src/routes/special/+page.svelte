<script>
  import Carousel from '../../components/Carousel.svelte'

  const images = [
        {path: 'coin-flat-new.svg', id: 'image1' , alt: 'Image 1', href: "https://hackclub.com"
         },
  ]
</script>

<Carousel images={images} />

<style>

</style>