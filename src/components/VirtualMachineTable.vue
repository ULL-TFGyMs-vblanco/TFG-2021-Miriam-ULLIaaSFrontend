<template>
  <q-tr :props="props">
    <q-td key="name" :props="props">
      <router-link to="/vm"
                   style="text-decoration: none; color: black"
      >
        <div class="q-pa-sm row items-center q-gutter-md justify-center"
             @click="saveVirtualMachine (virtualMachines[props.row.index])"
        >
          <img :src="images[props.row.index].url"
               :alt="props.row.os"
               width="70"
          >
          <q-badge color="teal"
                   outline
          >{{ props.row.name }}</q-badge>
        </div>
      </router-link>
    </q-td>
    <q-td key="ips"
          :props="props"
    >
      <div class="text-caption text-orange-9 column">
        <span v-for="(ip, index) in props.row.ips"
              :key="index"
              :ip="ip"
        >{{ ip }}</span>
      </div>
    </q-td>
    <q-td key="status"
          :props="props"
    >
      <q-toggle v-model="toggleValue[props.row.index]"
                color="secondary"
                style="color: #ec899a"
                icon="power_settings_new"
      ></q-toggle>
    </q-td>
  </q-tr>
</template>

<script>
export default {
  name: 'VirtualMachineTable',

  props: {
    props: Object,
    images: Array,
    toggleValue: Array
  },

  data () {
    return {
      virtualMachines: this.$store.getters.virtualMachines
    }
  },

  methods: {
    saveVirtualMachine (vm) {
      this.$store.dispatch('setVirtualMachineAction', vm)
    }
  }
}
</script>

<style lang="sass" scoped>
td:first-child
  background-color: #f5f5f5
</style>
