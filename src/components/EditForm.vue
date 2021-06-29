<template>
  <q-form @submit="onSubmit"
          @reset="onReset"
          class="q-pa-md column items-center justify-center q-pt-lg"
          id="q-form"
  >
    <div class="text-h5 q-py-lg text-center text-size"
         id="div-1"
    >Editar una máquina virtual</div>
    <q-card class="card bg-grey-4"
            id="q-card"
    >
      <q-card-section class="row items-center justify-center"
                      id="q-card-section"
      >
        <div class="column card-section"
             id="div-2"
        >
          <div class="column"
               id="div-3"
          >
            <div class="text-caption"
                 id="div-4"
            >Nombre *</div>
            <q-input borderless
                     dense
                     class="bg-white q-pl-sm q-input"
                     v-model="name"
                     hint="Modifica el nombre"
                     :rules="[ val => val && val.length > 0 || 'Por favor, rellena el nombre' ]"
                     id="q-input-1"
            >
              <template v-slot:prepend>
                <q-icon name="badge"
                        color="teal"
                ></q-icon>
              </template>
            </q-input>
          </div>
          <div class="column q-pt-lg"
               id="div-5"
          >
            <div class="text-caption"
                 id="div-6"
            >Descripción *</div>
            <q-input borderless
                     dense
                     class="bg-white q-pl-sm q-input"
                     v-model="description"
                     hint="Modifica la descripción"
                     :rules="[ val => val && val.length > 0 || 'Por favor, rellena la descripción' ]"
                     id="q-input-2"
            >
              <template v-slot:prepend>
                <q-icon name="description"
                        color="teal"
                ></q-icon>
              </template>
            </q-input>
          </div>
          <div class="column q-pt-lg"
               id="div-7"
          >
            <div class="text-caption"
                 id="div-8"
            >Plantilla</div>
            <q-input borderless
                     dense
                     class="bg-white q-pl-sm q-input"
                     v-model="template"
                     hint="No se puede modificar la plantilla"
                     readonly
                     id="q-select-1"
            >
              <template v-slot:prepend>
                <q-icon name="content_copy"
                        color="teal"
                ></q-icon>
              </template>
            </q-input>
          </div>
          <div class="column q-pt-lg"
               id="div-9"
          >
            <div class="text-caption"
                 id="div-10"
            >Sistema operativo *</div>
            <q-input borderless
                     dense
                     class="bg-white q-pl-sm q-input"
                     v-model="os"
                     hint="No se puede modificar el sistema operativo"
                     readonly
                     id="q-select-2"
            >
              <template v-slot:prepend>
                <q-icon name="settings_suggest"
                        color="teal"
                ></q-icon>
              </template>
            </q-input>
          </div>

          <div class="row justify-between"
               id="div-11"
          >
            <div class="column q-pt-lg inputs"
                 id="div-12"
            >
              <div class="text-caption"
                   id="div-13"
              >RAM *</div>
              <q-input borderless
                       dense
                       class="bg-white q-pl-sm q-input"
                       type="number"
                       v-model="ram"
                       hint="Modifica la RAM"
                       :rules="[ val => val && val.length > 0 || 'Por favor, rellena la RAM' ]"
                       id="q-input-3"
              >
                <template v-slot:prepend>
                  <q-icon name="memory"
                          color="teal"
                  ></q-icon>
                </template>
              </q-input>
            </div>
            <div class="column q-pt-lg inputs"
                 id="div-14"
            >
              <div class="text-caption"
                   id="div-15"
              >Almacenamiento *</div>
              <q-input borderless
                       dense
                       class="bg-white q-pl-sm q-input"
                       type="number"
                       v-model="memory"
                       hint="Modifica el almacenamiento"
                       :rules="[ val => val && val.length > 0 || 'Por favor, rellena el almacenamiento' ]"
                       id="q-input-4"
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

    <div class="row justify-around buttons q-py-lg"
         id="div-16"
    >
      <router-link to="/"
                   style="text-decoration: none; color: black"
                   id="router-link"
      >
        <q-btn size="sm"
               title="Cancelar"
               id="q-btn-1"
        >
          <q-icon name="close"
                  color="grey"
                  id="q-icon-1"
          ></q-icon>
          <span class="gt-md q-pl-sm"
                id="span-1"
          >Cancelar</span>
        </q-btn>
      </router-link>
      <q-btn size="sm"
             title="Reiniciar"
             type="reset"
             id="q-btn-2"
      >
        <q-icon name="restart_alt"
                color="orange"
                id="q-icon-2"
        ></q-icon>
        <span class="gt-md q-pl-sm"
              id="span-2"
        >Reiniciar</span>
      </q-btn>
      <q-btn size="sm"
             title="Guardar"
             type="submit"
             id="q-btn-3"
      >
        <q-icon name="save"
                color="blue"
                id="q-icon-3"
        ></q-icon>
        <span class="gt-md q-pl-sm"
              id="span-3"
        >Guardar</span>
      </q-btn>
    </div>
  </q-form>
</template>

<script>
export default {
  name: 'EditForm',

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
