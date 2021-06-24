<template>
  <router-link to="/vm"
               style="text-decoration: none; color: black"
  >
    <q-card class="my-card row justify-center"
            flat
            bordered
            @click="saveVirtualMachine (virtualMachines[props.row.index])"
    >
      <img :src="images[props.row.index].url" :alt="props.row.so">
      <q-card-section class="column">
        <div class="text-h5 q-mt-sm q-mb-xs">{{ props.row.name }}</div>
        <div class="text-caption text-orange-9 column">
          <span v-for="(ip, index) in props.row.ips"
                :key="index"
                :ip="ip"
          >{{ ip }}</span>
        </div>
        <div class="row justify-center"
             style="color: #ec899a"
        >
          <q-toggle v-model="toggleValue[props.row.index]"
                    color="secondary"
                    icon="power_settings_new"
          ></q-toggle>
        </div>
      </q-card-section>
    </q-card>
  </router-link>
</template>

<script>
export default {
  name: 'VirtualMachineCard',

  props: {
    props: Object,
    images: Array,
    toggleValue: Array,
    virtualMachines: Array
  },

  methods: {
    saveVirtualMachine (vm) {
      this.$store.dispatch('setVirtualMachineAction', vm)
    }
  }
}
</script>

<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 250px
</style>
