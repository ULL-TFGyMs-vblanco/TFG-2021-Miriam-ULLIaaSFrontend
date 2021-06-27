<template>
  <q-form @submit="onSubmit"
          @reset="onReset"
          class="q-pa-md column items-center justify-center q-pt-lg"
  >
    <div class="text-h5 q-py-lg text-center text-size">Editar una máquina virtual</div>
    <q-card class="card bg-grey-4">
      <q-card-section class="row items-center justify-center">
        <div class="column card-section">
          <div class="column">
            <div class="text-caption">Nombre *</div>
            <q-input borderless
                     dense
                     class="bg-white q-pl-sm"
                     v-model="name"
                     hint="Modifica el nombre"
                     :rules="[ val => val && val.length > 0 || 'Por favor, rellena el nombre' ]"
            >
              <template v-slot:prepend>
                <q-icon name="badge"
                        color="teal"
                ></q-icon>
              </template>
            </q-input>
          </div>
          <div class="column q-pt-lg">
            <div class="text-caption">Descripción *</div>
            <q-input borderless
                     dense
                     class="bg-white q-pl-sm"
                     v-model="description"
                     hint="Modifica la descripción"
                     :rules="[ val => val && val.length > 0 || 'Por favor, rellena la descripción' ]"
            >
              <template v-slot:prepend>
                <q-icon name="description"
                        color="teal"
                ></q-icon>
              </template>
            </q-input>
          </div>
          <div class="column q-pt-lg">
            <div class="text-caption">Plantilla</div>
            <q-input borderless
                     dense
                     class="bg-white q-pl-sm"
                     v-model="template"
                     hint="No se puede modificar la plantilla"
                     readonly
            >
              <template v-slot:prepend>
                <q-icon name="content_copy"
                        color="teal"
                ></q-icon>
              </template>
            </q-input>
          </div>
          <div class="column q-pt-lg">
            <div class="text-caption">Sistema operativo *</div>
            <q-input borderless
                     dense
                     class="bg-white q-pl-sm"
                     v-model="os"
                     hint="No se puede modificar el sistema operativo"
                     readonly
            >
              <template v-slot:prepend>
                <q-icon name="settings_suggest"
                        color="teal"
                ></q-icon>
              </template>
            </q-input>
          </div>

          <div class="row justify-between">
            <div class="column q-pt-lg inputs">
              <div class="text-caption">RAM *</div>
              <q-input borderless
                       dense
                       class="bg-white q-pl-sm"
                       type="number"
                       v-model="ram"
                       hint="Modifica la RAM"
                       :rules="[ val => val && val.length > 0 || 'Por favor, rellena la RAM' ]"
              >
                <template v-slot:prepend>
                  <q-icon name="memory"
                          color="teal"
                  ></q-icon>
                </template>
              </q-input>
            </div>
            <div class="column q-pt-lg inputs">
              <div class="text-caption">Almacenamiento *</div>
              <q-input borderless
                       dense
                       class="bg-white q-pl-sm"
                       type="number"
                       v-model="memory"
                       hint="Modifica el almacenamiento"
                       :rules="[ val => val && val.length > 0 || 'Por favor, rellena el almacenamiento' ]"
              >
                <template v-slot:prepend>
                  <q-icon name="storage"
                          color="teal"
                  ></q-icon>
                </template>
              </q-input>
            </div>
          </div>
        </div>
      </q-card-section>
    </q-card>

    <div class="row justify-around buttons q-py-lg">
      <router-link to="/"
                   style="text-decoration: none; color: black"
      >
        <q-btn size="sm"
               title="Cancelar"
        >
          <q-icon name="close"
                  color="grey"
          ></q-icon>
          <span class="gt-md q-pl-sm">Cancelar</span>
        </q-btn>
      </router-link>
      <q-btn size="sm"
             title="Reiniciar"
             type="reset"
      >
        <q-icon name="restart_alt" color="orange"></q-icon>
        <span class="gt-md q-pl-sm">Reiniciar</span>
      </q-btn>
      <q-btn size="sm"
             title="Guardar"
             type="submit"
      >
        <q-icon name="save"
                color="blue"
        ></q-icon>
        <span class="gt-md q-pl-sm">Guardar</span>
      </q-btn>
    </div>
  </q-form>
</template>

<script>
export default {
  name: 'CreateForm',

  data () {
    return {
      virtualMachines: this.$store.getters.virtualMachines,
      virtualMachine: this.$store.getters.virtualMachine,
      name: '',
      description: '',
      template: '',
      os: '',
      ram: '',
      memory: ''
    }
  },

  mounted () {
    this.name = this.virtualMachine.name
    this.description = this.virtualMachine.description
    this.template = this.virtualMachine.template
    this.os = this.virtualMachine.os
    this.ram = this.virtualMachine.ram.split(' ')[0]
    this.memory = this.virtualMachine.memory.split(' ')[0]
  },

  methods: {
    onSubmit () {
      // fetch('https://tfg-iaas-vm.app.smartmock.io/vm/{vmName}', {
      //   method: 'PUT',
      //   body: {
      //     name: this.name,
      //     description: this.description,
      //     os: this.os,
      //     ram: this.ram + ' GiB',
      //     memory: this.memory + ' GiB',
      //     template: this.template,
      //     created: date
      //   },
      //   headers: {
      //     'Content-type': 'application/json'
      //   }
      // })
      //   .then(res => {
      //     if (res.status === 200) {
      //       return res.data
      //     }
      //   })
      //   .then(data => {
      //     console.log(data)
      //     window.alert('action performed')
      //     this.$router.push('/')
      //   })
      //   .catch(err => {
      //     if (err.response.status === 400) {
      //       window.alert('invalid input, object invalid')
      //     } else if (err.response.status === 404) {
      //       window.alert('page not found')
      //     } else {
      //       window.alert('error')
      //     }
      //   })
    },

    onReset () {
      this.name = this.virtualMachine.name
      this.description = this.virtualMachine.description
      this.ram = this.virtualMachine.ram.split(' ')[0]
      this.memory = this.virtualMachine.memory.split(' ')[0]
    }
  }
}
</script>

<style lang="sass" scoped>
$desktop-width: 1024px
$tablet-width: 768px

.buttons
  width: 40%

.inputs
  width: 100%

@media (min-width: #{$tablet-width})
  .buttons
    width: 35%

  .card
    width: 65%

  .card-section
    width: 80%

  .inputs
    width: 45%
</style>
