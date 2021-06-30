<template>
  <q-tr :props="props">
    <q-td key="name" :props="props">
      <router-link to="/vm"
                   style="text-decoration: none; color: black"
      >
        <div class="q-pa-sm column items-center q-gutter-md justify-center"
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
                @input="turnVirtualMachine (virtualMachines[props.row.index], toggleValue[props.row.index])"
      ></q-toggle>
    </q-td>
  </q-tr>
</template>

<script>
import axios from 'axios'

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
    },

    async turnVirtualMachine (vm, toggleValue) {
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
td:first-child
  background-color: #f5f5f5
</style>
