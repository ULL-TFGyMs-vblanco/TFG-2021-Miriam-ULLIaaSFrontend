<template>
  <div>
    <q-card class="my-card row justify-center"
            flat
            bordered
    >
      <img :src="images[props.row.index].url" :alt="props.so">
      <q-card-section class="column">
        <div class="text-h5 q-mt-sm q-mb-xs">{{ props.row.name }}</div>
        <div class="text-caption text-orange-9 column">
          <span v-for="(ip, index) in props.row.ips"
                :key="index"
                :ip="ip"
          >{{ ip }}</span>
        </div>
        <div class="text-overline row justify-center"
             style="color: #ec899a"
        >
          <q-toggle v-model="toggleValue[props.row.index]"
                    color="secondary"
                    icon="power_settings_new"
          ></q-toggle>
        </div>
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
export default {
  name: 'VirtualMachineCard',

  props: {
    props: Object,
    images: Array,
    toggleValue: Array
  }
}
</script>

<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 250px
</style>

<!--<template>-->
<!--  <q-table class="my-table"-->
<!--           :data="data"-->
<!--           :columns="columns"-->
<!--           row-key="name"-->
<!--           :filter="filter"-->
<!--           grid-->
<!--  >-->
<!--    <template v-slot:top>-->
<!--      <q-input filled dense debounce="300" color="primary" v-model="filter" placeholder="Buscar ..." style="width: 100%">-->
<!--        <template v-slot:append>-->
<!--          <q-icon name="search"></q-icon>-->
<!--        </template>-->
<!--      </q-input>-->
<!--    </template>-->

<!--    <template v-slot:item="props">-->
<!--      <div class="q-pa-md q-gutter-md">-->
<!--        <q-card class="my-card"-->
<!--                flat-->
<!--                bordered-->
<!--        >-->
<!--          <img :src="images[props.row.index].url" :alt="props.so">-->
<!--          <q-card-section class="column">-->
<!--            <div class="text-h5 q-mt-sm q-mb-xs">{{ props.row.name }}</div>-->
<!--            <div class="text-caption text-orange-9 column">-->
<!--              <span v-for="(ip, index) in props.row.ips"-->
<!--                    :key="index"-->
<!--                    :ip="ip"-->
<!--              >{{ ip }}</span>-->
<!--            </div>-->
<!--            <div class="text-overline row justify-center"-->
<!--                 style="color: #ec899a"-->
<!--            >-->
<!--              <q-toggle v-model="toggleValue[props.row.index]"-->
<!--                        color="secondary"-->
<!--                        icon="power_settings_new"-->
<!--              ></q-toggle>-->
<!--            </div>-->
<!--          </q-card-section>-->
<!--        </q-card>-->
<!--      </div>-->
<!--    </template>-->
<!--  </q-table>-->
<!--</template>-->

<!--<script>-->
<!--export default {-->
<!--  name: 'VirtualMachineTable',-->

<!--  props: {-->
<!--    virtualMachines: Array-->
<!--  },-->

<!--  data () {-->
<!--    return {-->
<!--      images: [],-->
<!--      columns: [-->
<!--        {-->
<!--          name: 'name',-->
<!--          required: true,-->
<!--          label: 'NOMBRE',-->
<!--          align: 'center',-->
<!--          field: (row) => row.name,-->
<!--          format: (val) => `${val}`,-->
<!--          sortable: true-->
<!--        },-->
<!--        {-->
<!--          name: 'ips',-->
<!--          label: 'IPS',-->
<!--          field: 'ips',-->
<!--          align: 'center',-->
<!--          sortable: true-->
<!--        },-->
<!--        {-->
<!--          name: 'status',-->
<!--          label: 'ESTADO',-->
<!--          field: 'status',-->
<!--          align: 'center',-->
<!--          sortable: true-->
<!--        }-->
<!--      ],-->
<!--      data: [],-->
<!--      toggleValue: [],-->
<!--      filter: ''-->
<!--    }-->
<!--  },-->

<!--  beforeMount () {-->
<!--    var index = 0-->
<!--    this.virtualMachines.forEach(vm => {-->
<!--      this.images.push({ url: require(`../assets/os/${vm.so}.jpg`) })-->
<!--      this.data.push({-->
<!--        name: vm.name,-->
<!--        status: vm.status,-->
<!--        ips: vm.ips,-->
<!--        index: index-->
<!--      })-->
<!--      this.toggleValue.push(vm.status === 'ON')-->
<!--      index++-->
<!--    })-->
<!--  }-->
<!--}-->
<!--</script>-->

<!--<style lang="sass" scoped>-->
<!--.my-card-->
<!--  width: 100%-->
<!--  max-width: 250px-->
<!--</style>-->
