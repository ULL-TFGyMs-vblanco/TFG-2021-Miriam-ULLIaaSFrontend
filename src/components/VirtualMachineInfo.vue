<template>
  <div class="row justify-center q-pt-lg"
       id="div-1"
  >
    <div class="q-pa-sm row items-center q-gutter-md justify-end"
         id="div-2"
    >
      <div class="row justify-around buttons"
           id="div-3"
      >
        <q-btn size="sm"
               title="Encender"
               @click="turnOn"
               id="q-btn-1"
        >
          <q-icon name="power_settings_new"
                  color="green"
                  id="q-icon-1"
          ></q-icon>
          <span class="gt-md q-pl-sm"
                id="span-1"
          >Encender</span>
        </q-btn>
        <q-btn size="sm"
               title="Consola"
               @click="showConsole"
               id="q-btn-2"
        >
          <q-icon color="grey"
                  id="q-icon-2"
          >>_</q-icon>
          <span class="gt-md q-pl-sm"
                id="span-2"
          >Consola</span>
        </q-btn>
        <q-btn size="sm"
               title="Suspender"
               @click="suspend"
               id="q-btn-3"
        >
          <q-icon name="battery_alert"
                  color="orange"
                  id="q-icon-3"
          ></q-icon>
          <span class="gt-md q-pl-sm"
                id="span-3"
          >Suspender</span>
        </q-btn>
        <q-btn size="sm"
               title="Reiniciar"
               @click="reboot"
               id="q-btn-4"
        >
          <q-icon name="restart_alt"
                  color="teal"
                  id="q-icon-4"
          ></q-icon>
          <span class="gt-md q-pl-sm"
                id="span-4"
          >Reiniciar</span>
        </q-btn>
        <q-btn size="sm"
               title="Apagar"
               @click="turnOff"
               id="q-btn-5"
        >
          <q-icon name="power_off"
                  color="red"
                  id="q-icon-5"
          ></q-icon>
          <span class="gt-md q-pl-sm"
                id="span-5"
          >Apagar</span>
        </q-btn>
      </div>

      <div class="q-pa-md row justify-center"
           id="div-4"
      >
        <div class="row-sm col-md-4 col-lg-3 q-pa-sm">
          <q-card class="bg-amber-1">
            <q-card-section class="q-pb-sm row justify-center"
                            id="q-card-section-1"
            >
              <img :src="image"
                   :alt="virtualMachine.os"
                   width="90%"
                   id="img-1"
              >
            </q-card-section>
            <q-card-section class="row items-center justify-around"
                            id="q-card-section-2"
            >
              <div class="column">
                <div class="text-h5 q-mt-sm q-mb-xs"
                     id="div-5"
                >{{ virtualMachine.name }}</div>
                <div class="text-overline text-orange-9 column"
                     id="div-6"
                >ID#{{ virtualMachine.id }}</div>
              </div>
              <q-badge id="q-badge">{{ virtualMachine.status }}</q-badge>
            </q-card-section>
          </q-card>
        </div>

        <div class="row-sm col-md-5 col-lg-6 q-pa-sm">
          <q-card>
            <q-card-section class="row items-center justify-center">
              <div class="column">
                <div class="column">
                  <div class="text-caption"
                       id="div-7"
                  >Descripción</div>
                  <q-field filled
                           dense
                           color="black"
                           class="row justify-center"
                  >
                    <span class="q-py-sm row items-center"
                          id="span-6"
                    >{{ virtualMachine.description }}</span>
                  </q-field>
                </div>
                <div class="column q-pt-lg">
                  <div class="text-caption"
                       id="div-8"
                  >Plantilla</div>
                  <q-field filled
                           dense
                           color="black"
                           class="q-field"
                  >
                    <span class="q-py-sm row items-center"
                          id="span-7"
                    >{{ virtualMachine.template }}</span>
                  </q-field>
                </div>
                <div class="column q-pt-lg">
                  <div class="text-caption"
                       id="div-9"
                  >Sistema operativo</div>
                  <q-field filled
                           dense
                           color="black"
                           class="q-field"
                  >
                    <span class="q-py-sm row items-center"
                          id="span-8"
                    >{{ virtualMachine.os[0].toUpperCase() + virtualMachine.os.slice(1) }}</span>
                  </q-field>
                </div>
                <div class="column q-pt-lg">
                  <div class="text-caption"
                       id="div-10"
                  >RAM</div>
                  <q-field filled
                           dense
                           color="black"
                           class="q-field"
                  >
                    <span class="q-py-sm row items-center"
                          id="span-9"
                    >{{ virtualMachine.ram }}</span>
                  </q-field>
                </div>
                <div class="column q-pt-lg">
                  <div class="text-caption"
                       id="div-11"
                  >Almacenamiento</div>
                  <q-field filled
                           dense
                           color="black"
                           class="q-field"
                  >
                    <span class="q-py-sm row items-center"
                          id="span-10"
                    >{{ virtualMachine.memory }}</span>
                  </q-field>
                </div>
                <div class="column q-pt-lg">
                  <div class="text-caption"
                       id="div-12"
                  >IPs</div>
                  <q-field filled
                           dense
                           color="black"
                           class="q-field"
                  >
                    <div class="q-py-sm column">
                      <span v-for="(ip, index) in virtualMachine.ips"
                            :key="index"
                            :ip="ip"
                            class="items-center"
                            id="span-11"
                      >{{ ip }}</span>
                    </div>
                  </q-field>
                </div>
                <div class="column q-pt-lg">
                  <div class="text-caption"
                       id="div-13"
                  >Fecha de creación</div>
                  <q-field filled
                           dense
                           color="black"
                           class="q-field"
                  >
                    <span class="q-py-sm row items-center"
                          id="span-12"
                    >{{ virtualMachine.created }}</span>
                  </q-field>
                </div>
              </div>
            </q-card-section>
          </q-card>
        </div>
      </div>
    </div>

    <div class="row justify-around buttons q-pb-lg">
      <router-link to="/form"
                   style="text-decoration: none; color: black"
                   id="router-link"
      >
        <q-btn size="sm"
               title="Editar"
               @click="saveFormType"
               id="q-btn-6"
        >
          <q-icon name="edit"
                  color="blue"
                  id="q-icon-6"
          ></q-icon>
          <span class="gt-md q-pl-sm"
                id="span-13"
          >Editar</span>
        </q-btn>
      </router-link>
      <div>
      <q-btn size="sm"
             title="Compartir"
             id="q-btn-7"
      >
        <q-icon name="share"
                color="grey"
                id="q-icon-7"
        ></q-icon>
        <span class="gt-md q-pl-sm"
              id="span-14"
        >Compartir</span>
        <q-popup-edit v-model="sharedTo">
          <q-input v-model="sharedTo"
                   dense
                   autofocus
                   counter
                   @keyup.enter="share"
                   id="q-input"
          ></q-input>
        </q-popup-edit>
      </q-btn>
      </div>
      <q-btn size="sm"
             title="Eliminar"
             @click="deleteVM"
             id="q-btn-8"
      >
        <q-icon name="delete"
                color="red"
                id="q-icon-8"
        ></q-icon>
        <span class="gt-md q-pl-sm"
              id="span-15"
        >Eliminar</span>
      </q-btn>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'VirtualMachineInfo',

  data () {
    return {
      virtualMachines: this.$store.getters.virtualMachines,
      virtualMachine: this.$store.getters.virtualMachine,
      image: require(`../assets/os/${this.$store.getters.virtualMachine.os}.jpg`),
      sharedTo: null
    }
  },

  methods: {
    saveFormType () {
      this.$store.dispatch('setFormTypeAction', 'edit')
    },

    turnOn () {
      axios.put(`https://tfg-iaas-vm.app.smartmock.io/api/vm/${this.virtualMachine.name}`, {
        action: 'turn on',
        virtualMachine: {
          id: this.virtualMachine.id,
          name: this.virtualMachine.name,
          description: this.virtualMachine.description,
          status: 'ON',
          template: this.virtualMachine.template,
          os: this.virtualMachine.os,
          ram: this.virtualMachine.ram,
          memory: this.virtualMachine.memory,
          created: this.virtualMachine.created
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
            if (this.virtualMachines[i].id === this.virtualMachine.id) {
              this.virtualMachines.splice(i, 1, object.virtualMachine)
            }
          }

          this.$router.push('/')
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
    },

    showConsole () {
      window.alert('action performed - show console')
    },

    suspend () {
      axios.put(`https://tfg-iaas-vm.app.smartmock.io/api/vm/${this.virtualMachine.name}`, {
        action: 'suspend',
        virtualMachine: {
          id: this.virtualMachine.id,
          name: this.virtualMachine.name,
          description: this.virtualMachine.description,
          status: 'SUSPEND',
          template: this.virtualMachine.template,
          os: this.virtualMachine.os,
          ram: this.virtualMachine.ram,
          memory: this.virtualMachine.memory,
          created: this.virtualMachine.created
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
            if (this.virtualMachines[i].id === this.virtualMachine.id) {
              this.virtualMachines.splice(i, 1, object.virtualMachine)
            }
          }

          this.$router.push('/')
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
    },

    reboot () {
      axios.put(`https://tfg-iaas-vm.app.smartmock.io/api/vm/${this.virtualMachine.name}`, {
        action: 'reboot',
        virtualMachine: {
          id: this.virtualMachine.id,
          name: this.virtualMachine.name,
          description: this.virtualMachine.description,
          status: 'ON',
          template: this.virtualMachine.template,
          os: this.virtualMachine.os,
          ram: this.virtualMachine.ram,
          memory: this.virtualMachine.memory,
          created: this.virtualMachine.created
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
            if (this.virtualMachines[i].id === this.virtualMachine.id) {
              this.virtualMachines.splice(i, 1, object.virtualMachine)
            }
          }

          this.$router.push('/')
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
    },

    turnOff () {
      axios.put(`https://tfg-iaas-vm.app.smartmock.io/api/vm/${this.virtualMachine.name}`, {
        action: 'turn off',
        virtualMachine: {
          id: this.virtualMachine.id,
          name: this.virtualMachine.name,
          description: this.virtualMachine.description,
          status: 'OFF',
          template: this.virtualMachine.template,
          os: this.virtualMachine.os,
          ram: this.virtualMachine.ram,
          memory: this.virtualMachine.memory,
          created: this.virtualMachine.created
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
            if (this.virtualMachines[i].id === this.virtualMachine.id) {
              this.virtualMachines.splice(i, 1, object.virtualMachine)
            }
          }

          this.$router.push('/')
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
    },

    share () {
      window.alert('shared to ' + this.sharedTo)
    },

    deleteVM () {
      axios.delete(`https://tfg-iaas-vm.app.smartmock.io/api/vm/${this.virtualMachine.name}`)
        .then(res => {
          if (res.status === 200) {
            return res.data
          }
        })
        .then(data => {
          const object = JSON.parse(data.replace(/'/g, '"'))
          window.alert(object.response)

          for (var i = 0; i < this.virtualMachines.length; i++) {
            if (this.virtualMachines[i].id === this.virtualMachine.id) {
              this.virtualMachines.splice(i, 1)
            }
          }

          this.$router.push('/')
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
</script>

<style lang="sass" scoped>
$desktop-width: 1024px
$tablet-width: 768px

.buttons
  width: 100%

@media (min-width: #{$tablet-width})
  .buttons
    width: 50%
</style>
