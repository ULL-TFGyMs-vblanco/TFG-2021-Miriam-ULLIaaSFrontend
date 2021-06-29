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
             id="div-2"
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
    this.virtualMachines = {
      method: 'GET',
      description: 'get the inventory of an user',
      allVirtualMachines: [
        {
          id: '4328',
          name: 'SyTW-BackEND',
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit nihil praesentium molestias a adipisci, dolore vitae odit, quidem consequatur optio voluptates asperiores pariatur eos numquam rerum delectus commodi perferendis voluptate?',
          status: 'ON',
          os: 'linux',
          ram: '4 GiB',
          memory: '20 GiB',
          template: 'ubuntu-1804',
          ips: ['173.16.116.2', '172.16.117.2'],
          created: 'YYYY-MM-DD'
        },
        {
          id: '4312',
          name: 'SyTW-BackEND2',
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit nihil praesentium molestias a adipisci, dolore vitae odit, quidem consequatur optio voluptates asperiores pariatur eos numquam rerum delectus commodi perferendis voluptate?',
          status: 'OFF',
          os: 'windows',
          ram: '4 GiB',
          memory: '20 GiB',
          template: 'ubuntu-1804',
          ips: ['173.16.116.2', '172.16.117.2'],
          created: 'YYYY-MM-DD'
        },
        {
          id: '4321',
          name: 'SyTW-BackEND3',
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit nihil praesentium molestias a adipisci, dolore vitae odit, quidem consequatur optio voluptates asperiores pariatur eos numquam rerum delectus commodi perferendis voluptate?',
          status: 'ON',
          os: 'macOS',
          ram: '4 GiB',
          memory: '20 GiB',
          template: 'ubuntu-1804',
          ips: ['173.16.116.2', '172.16.117.1'],
          created: 'YYYY-MM-DD'
        },
        {
          id: '4328',
          name: 'SyTW-BackEND4',
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit nihil praesentium molestias a adipisci, dolore vitae odit, quidem consequatur optio voluptates asperiores pariatur eos numquam rerum delectus commodi perferendis voluptate?',
          status: 'SUSPEND',
          os: 'linux',
          ram: '4 GiB',
          memory: '20 GiB',
          template: 'ubuntu-1804',
          ips: ['173.16.116.2', '172.16.117.2'],
          created: 'YYYY-MM-DD'
        },
        {
          id: '4312',
          name: 'SyTW-BackEND5',
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit nihil praesentium molestias a adipisci, dolore vitae odit, quidem consequatur optio voluptates asperiores pariatur eos numquam rerum delectus commodi perferendis voluptate?',
          status: 'ON',
          os: 'windows',
          ram: '4 GiB',
          memory: '20 GiB',
          template: 'ubuntu-1804',
          ips: ['173.16.116.2', '172.16.117.2'],
          created: 'YYYY-MM-DD'
        },
        {
          id: '4321',
          name: 'SyTW-BackEND6',
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit nihil praesentium molestias a adipisci, dolore vitae odit, quidem consequatur optio voluptates asperiores pariatur eos numquam rerum delectus commodi perferendis voluptate?',
          status: 'OFF',
          os: 'macOS',
          ram: '4 GiB',
          memory: '20 GiB',
          template: 'ubuntu-1804',
          ips: ['173.16.116.2', '172.16.117.2'],
          created: 'YYYY-MM-DD'
        },
        {
          id: '4328',
          name: 'SyTW-BackEND7',
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit nihil praesentium molestias a adipisci, dolore vitae odit, quidem consequatur optio voluptates asperiores pariatur eos numquam rerum delectus commodi perferendis voluptate?',
          status: 'OFF',
          os: 'linux',
          ram: '4 GiB',
          memory: '20 GiB',
          template: 'ubuntu-1804',
          ips: ['173.16.116.2', '172.16.117.2'],
          created: 'YYYY-MM-DD'
        },
        {
          id: '4312',
          name: 'SyTW-BackEND8',
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit nihil praesentium molestias a adipisci, dolore vitae odit, quidem consequatur optio voluptates asperiores pariatur eos numquam rerum delectus commodi perferendis voluptate?',
          status: 'OFF',
          os: 'windows',
          ram: '4 GiB',
          memory: '20 GiB',
          template: 'ubuntu-1804',
          ips: ['173.16.116.2', '172.16.117.2'],
          created: 'YYYY-MM-DD'
        },
        {
          id: '4321',
          name: 'SyTW-BackEND9',
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit nihil praesentium molestias a adipisci, dolore vitae odit, quidem consequatur optio voluptates asperiores pariatur eos numquam rerum delectus commodi perferendis voluptate?',
          status: 'SUSPEND',
          os: 'macOS',
          ram: '4 GiB',
          memory: '20 GiB',
          template: 'ubuntu-1804',
          ips: ['173.16.116.2', '172.16.117.2'],
          created: 'YYYY-MM-DD'
        }
      ]
    }

    // await fetch('https://tfg-iaas-vm.app.smartmock.io/api/inventory')
    //   .then(res => res.json())
    //   .then(data => {
    //     this.virtualMachines = data
    //   })

    if (this.$store.getters.virtualMachines === null) {
      this.$store.dispatch('setVirtualMachinesAction', this.virtualMachines.allVirtualMachines)
      console.log('hola')
    }

    var index = 0
    this.virtualMachines.allVirtualMachines.forEach(vm => {
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
