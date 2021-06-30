<template>
  <router-link to="/vm"
               style="text-decoration: none; color: black"
  >
    <q-card class="my-card row justify-center"
            flat
            bordered
            @click="saveVirtualMachine (virtualMachines[props.row.index])"
    >
      <img :src="images[props.row.index].url"
           :alt="props.row.os"
      >
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
                    @input="turnVirtualMachine (virtualMachines[props.row.index], toggleValue[props.row.index])"
          ></q-toggle>
        </div>
      </q-card-section>
    </q-card>
  </router-link>
</template>

<script>
import axios from 'axios'

export default {
  name: 'VirtualMachineCard',

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
    },

    turnVirtualMachine (vm, toggleValue) {
      if (toggleValue) {
        axios.put(`https://tfg-iaas-vm.app.smartmock.io/api/vm/${vm.name}`, {
          action: 'turn on',
          virtualMachine: {
            id: vm.id,
            name: vm.name,
            description: vm.description,
            status: 'ON',
            template: vm.template,
            os: vm.os,
            ram: vm.ram,
            memory: vm.memory,
            created: vm.created
          }
        })
          .then(res => {
            if (res.status === 200) {
              return res.data
            }
          })
          .then(data => {
            const object = JSON.parse(data.replace(/'/g, '"'))
            window.alert(object.response)

            for (var i = 0; i < this.virtualMachines.length; i++) {
              if (this.virtualMachines[i].id === vm.id) {
                this.virtualMachines.splice(i, 1, object.virtualMachine)
              }
            }
          })
          .catch(error => {
            if (error.status === 400) {
              window.alert('invalid input, object invalid')
            } else if (error.status === 404) {
              window.alert('page not found')
            } else {
              window.alert(`error: ${error}`)
            }
          })
      } else {
        axios.put(`https://tfg-iaas-vm.app.smartmock.io/api/vm/${vm.name}`, {
          action: 'turn off',
          virtualMachine: {
            id: vm.id,
            name: vm.name,
            description: vm.description,
            status: 'OFF',
            template: vm.template,
            os: vm.os,
            ram: vm.ram,
            memory: vm.memory,
            created: vm.created
          }
        })
          .then(res => {
            if (res.status === 200) {
              return res.data
            }
          })
          .then(data => {
            const object = JSON.parse(data.replace(/'/g, '"'))
            window.alert(object.response)

            for (var i = 0; i < this.virtualMachines.length; i++) {
              if (this.virtualMachines[i].id === vm.id) {
                this.virtualMachines.splice(i, 1, object.virtualMachine)
              }
            }
          })
          .catch(error => {
            if (error.status === 400) {
              window.alert('invalid input, object invalid')
            } else if (error.status === 404) {
              window.alert('page not found')
            } else {
              window.alert(`error: ${error}`)
            }
          })
      }
    }
  }
}
</script>

<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 250px
</style>
