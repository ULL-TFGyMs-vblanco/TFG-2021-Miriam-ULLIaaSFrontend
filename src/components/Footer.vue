<template>
  <q-footer elevated
            class="bg-grey-8 text-white flex flex-center"
  >
    {{ year }} &copy; ULL
  </q-footer>
</template>

<script>
export default {
  name: 'Footer',

  data () {
    return {
      year: new Date().getFullYear()
    }
  }
}
</script>

<style scoped>
</style>
