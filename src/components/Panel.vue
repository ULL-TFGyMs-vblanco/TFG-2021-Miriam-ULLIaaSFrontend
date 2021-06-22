<template>
  <div v-if="virtualMachines && content === 'mosaic'"
       class="q-pa-md row q-gutter-md justify-center"
       id="cards"
  >
    <VirtualMachineCard v-for="(vm, index) in virtualMachines.allVirtualMachines"
                        :key="index"
                        :vm="vm"
    ></VirtualMachineCard>
  </div>
  <div v-else-if="virtualMachines && content === 'table'"
       id="table"
  >
    <VirtualMachineTable :virtualMachines="virtualMachines.allVirtualMachines"></VirtualMachineTable>
  </div>
</template>

<script>
import VirtualMachineCard from './VirtualMachineCard'
import VirtualMachineTable from './VirtualMachineTable'

export default {
  name: 'Panel',

  props: {
    content: String
  },

  components: {
    VirtualMachineCard,
    VirtualMachineTable
  },

  data () {
    return {
      virtualMachines: null,
      expanded: false
    }
  },

  async beforeMount () {
    await fetch('https://tfg-iaas.app.smartmock.io/api/vm/lola')
      .then(res => res.json())
      .then(data => {
        this.virtualMachines = data
      })
  }
}
</script>

<style lang="sass" scoped>
$desktop-width: 1024px
$tablet-width: 768px

#table
  width: 100%

@media (min-width: #{$desktop-width})
  #cards
    width: 75%

  #table
    width: 75%
</style>
