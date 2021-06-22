<template>
  <q-card class="my-card"
          flat
          bordered
  >
    <img :src="image" :alt="vm.so">
    <q-card-section>
      <div class="text-overline text-orange-9">{{ vm.status }}</div>
      <div class="text-h5 q-mt-sm q-mb-xs">{{ vm.name }}</div>
      <div class="text-caption text-grey">{{ vm.ip }}</div>
    </q-card-section>
  </q-card>
</template>

<script>
export default {
  name: 'VirtualMachineCard',

  props: {
    vm: Object
  },

  data () {
    return {
      image: require(`../assets/os/${this.vm.so}.jpg`)
    }
  }
}
</script>

<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 250px
</style>
