<template>
  <q-page-container>
    <VirtualMachineInfo></VirtualMachineInfo>
  </q-page-container>
</template>

<script>
import VirtualMachineInfo from '../components/VirtualMachineInfo'

export default {
  name: 'VirtualMachine',

  components: {
    VirtualMachineInfo
  }
}
</script>

<style lang="sass" scoped>
</style>
