<template>
  <q-table class="my-table"
           :data="data"
           :columns="columns"
           row-key="name"
           virtual-scroll
  >
    <template v-slot:body-cell-name="props">
      <q-td :props="props">
        <div class="q-pa-md row items-center q-gutter-md">
          <img :src="images[props.row.imageIndex].url" width="70">
          <q-badge :label="props.value"
                   outline
                   color="teal"
          ></q-badge>
        </div>
      </q-td>
    </template>
  </q-table>
</template>

<script>
export default {
  name: 'VirtualMachineTable',

  props: {
    virtualMachines: Array
  },

  data () {
    return {
      images: [],
      columns: [
        {
          name: 'name',
          required: true,
          label: 'NOMBRE',
          align: 'left',
          field: (row) => row.name,
          format: (val) => `${val}`,
          sortable: true
        },
        {
          name: 'status',
          label: 'ESTADO',
          field: 'status',
          align: 'left',
          sortable: true
        },
        {
          name: 'ip',
          label: 'IP',
          field: 'ip',
          align: 'left',
          sortable: true
        }
      ],
      data: []
    }
  },

  beforeMount () {
    var index = 0
    this.virtualMachines.forEach(vm => {
      this.images.push({ url: require(`../assets/os/${vm.so}.jpg`) })
      this.data.push({
        name: vm.name,
        status: vm.status,
        ip: vm.ip,
        imageIndex: index
      })
      index++
    })
  }
}
</script>

<style lang="sass" scoped>
$desktop-width: 1024px
$tablet-width: 768px

.my-table
  td:first-child
    background-color: #f5f5dc
</style>
