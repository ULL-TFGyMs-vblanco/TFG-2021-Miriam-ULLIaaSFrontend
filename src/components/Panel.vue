<template>
  <div class="q-pa-md column items-center q-gutter-md justify-center"
       id="div-1"
  >
    <q-table class="my-table"
             :data="data"
             :columns="columns"
             row-key="name"
             :filter="filter"
             :grid="content === 'mosaic'"
             id="q-table"
    >
      <template v-slot:top>
        <div style="width: 100%"
             class="row justify-end"
        >
          <q-input filled
                   dense
                   debounce="300"
                   color="primary"
                   v-model="filter"
                   placeholder="Buscar ..."
                   class="searchInput"
          >
            <template v-slot:append>
              <q-icon name="search"
              id="search"></q-icon>
            </template>
          </q-input>
        </div>
      </template>

      <template v-if="virtualMachines && content === 'table'"
                v-slot:body="props"
      >
        <VirtualMachineTable :props="props"
                             :images="images"
                             :toggleValue="toggleValue"
        ></VirtualMachineTable>
      </template>

      <template v-else-if="virtualMachines && content === 'mosaic'"
                v-slot:item="props"
                class="row justify-center"
      >
        <VirtualMachineCard :props="props"
                            :images="images"
                            :toggleValue="toggleValue"
                            class="q-pa-sm row justify-center cards"
        ></VirtualMachineCard>
      </template>
    </q-table>
  </div>
</template>

<script>
import VirtualMachineTable from './VirtualMachineTable'
import VirtualMachineCard from './VirtualMachineCard'
import axios from 'axios'

export default {
  name: 'Panel',

  props: {
    content: String
  },

  components: {
    VirtualMachineTable,
    VirtualMachineCard
  },

  data () {
    return {
      virtualMachines: null,
      images: [],
      columns: [
        {
          name: 'name',
          required: true,
          label: 'NOMBRE',
          align: 'center',
          field: (row) => row.name,
          format: (val) => `${val}`,
          sortable: true
        },
        {
          name: 'ips',
          label: 'IPS',
          field: 'ips',
          align: 'center',
          sortable: true
        },
        {
          name: 'status',
          label: 'ESTADO',
          field: 'status',
          align: 'center',
          sortable: true
        }
      ],
      data: [],
      toggleValue: [],
      filter: ''
    }
  },

  async beforeMount () {
    if (this.$store.getters.virtualMachines === null) {
      await axios.get('https://tfg-iaas-vm.app.smartmock.io/api/inventory')
        .then(res => {
          if (res.status === 200) {
            return res.data
          }
        })
        .then(data => {
          this.$store.dispatch('setVirtualMachinesAction', JSON.parse(data.replace(/'/g, '"')).allVirtualMachines)
        })
        .catch(error => {
          if (error.status === 400) {
            window.alert('invalid input, object invalid')
          } else {
            window.alert(`error: ${error}`)
          }
        })
    }

    this.virtualMachines = this.$store.getters.virtualMachines

    var index = 0
    this.virtualMachines.forEach(vm => {
      this.images.push({ url: require(`../assets/os/${vm.os}.jpg`) })
      this.data.push({
        name: vm.name,
        status: vm.status,
        ips: vm.ips,
        index: index
      })
      this.toggleValue.push(vm.status === 'ON')
      index++
    })
  }
}
</script>

<style lang="sass" scoped>
$desktop-width: 1024px
$tablet-width: 768px

.my-table
  width: 95%

.my-table
  td:first-child
    background-color: #f5f5dc

.searchInput
  width: 100%

@media (min-width: #{$desktop-width})
  .my-table
    width: 75%

  .searchInput
    width: 35%

  .cards
    width: 270px

@media (max-width: #{$tablet-width})
  .cards
    width: 100%
</style>
