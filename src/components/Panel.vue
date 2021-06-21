<template>
  <div v-if="virtualMachines"
       class="q-pa-md row items-start q-gutter-md justify-center"
  >
    <VirtualMachineCard v-for="(vm, index) in virtualMachines.allVirtualMachines"
                        :key="index"
                        :vm="vm"
    ></VirtualMachineCard>
  </div>
</template>

<script>
import VirtualMachineCard from './VirtualMachineCard'

export default {
  name: 'Panel',

  components: {
    VirtualMachineCard
  },

  data () {
    return {
      virtualMachines: null,
      expanded: false
    }
  },

  async mounted () {
    await fetch('https://tfg-iaas.app.smartmock.io/api/vm/lola')
      .then(res => res.json())
      .then(data => {
        this.virtualMachines = data
      })
  }
}
</script>

<style lang="sass" scoped>
</style>
