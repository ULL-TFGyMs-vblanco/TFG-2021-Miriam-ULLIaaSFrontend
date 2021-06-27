<template>
  <div class="row justify-center q-pt-lg">
    <div class="q-pa-sm row items-center q-gutter-md justify-end">
      <div class="row justify-around buttons">
        <q-btn size="sm"
               title="Encender"
        >
          <q-icon name="power_settings_new" color="green"></q-icon>
          <span class="gt-md q-pl-sm">Encender</span>
        </q-btn>
        <q-btn size="sm"
               title="Consola"
        >
          <q-icon color="grey">>_</q-icon>
          <span class="gt-md q-pl-sm">Consola</span>
        </q-btn>
        <q-btn size="sm"
               title="Suspender"
        >
          <q-icon name="battery_alert" color="orange"></q-icon>
          <span class="gt-md q-pl-sm">Suspender</span>
        </q-btn>
        <q-btn size="sm"
               title="Reiniciar"
        >
          <q-icon name="restart_alt" color="teal"></q-icon>
          <span class="gt-md q-pl-sm">Reiniciar</span>
        </q-btn>
        <q-btn size="sm"
               title="Apagar"
        >
          <q-icon name="power_off" color="red"></q-icon>
          <span class="gt-md q-pl-sm">Apagar</span>
        </q-btn>
      </div>

      <div class="q-pa-md row justify-center">
        <div class="row-sm col-md-4 col-lg-3 q-pa-sm">
          <q-card class="bg-amber-1">
            <q-card-section class="q-pb-sm row justify-center">
              <img :src="image" :alt="virtualMachine.so" width="90%">
            </q-card-section>
            <q-card-section class="row items-center justify-around">
              <div class="column">
                <div class="text-h5 q-mt-sm q-mb-xs">{{ virtualMachine.name }}</div>
                <div class="text-overline text-orange-9 column">ID#{{ virtualMachine.id }}</div>
              </div>
              <q-badge>{{ virtualMachine.status }}</q-badge>
            </q-card-section>
          </q-card>
        </div>

        <div class="row-sm col-md-5 col-lg-6 q-pa-sm">
          <q-card>
            <q-card-section class="row items-center justify-center">
              <div class="column">
                <div class="column">
                  <div class="text-caption">Descripción</div>
                  <q-field filled
                           dense
                           color="black"
                           class="row justify-center"
                  >
                    <span class="q-py-sm row items-center">{{ virtualMachine.description }}</span>
                  </q-field>
                </div>
                <div class="column q-pt-lg">
                  <div class="text-caption">Plantilla</div>
                  <q-field filled
                           dense
                           color="black"
                  >
                    <span class="q-py-sm row items-center">{{ virtualMachine.template }}</span>
                  </q-field>
                </div>
                <div class="column q-pt-lg">
                  <div class="text-caption">Sistema operativo</div>
                  <q-field filled
                           dense
                           color="black"
                  >
                    <span class="q-py-sm row items-center">{{ virtualMachine.so[0].toUpperCase() + virtualMachine.so.slice(1) }}</span>
                  </q-field>
                </div>
                <div class="column q-pt-lg">
                  <div class="text-caption">RAM</div>
                  <q-field filled
                           dense
                           color="black"
                  >
                    <span class="q-py-sm row items-center">{{ virtualMachine.ram }}</span>
                  </q-field>
                </div>
                <div class="column q-pt-lg">
                  <div class="text-caption">Almacenamiento</div>
                  <q-field filled
                           dense
                           color="black"
                  >
                    <span class="q-py-sm row items-center">{{ virtualMachine.memory }}</span>
                  </q-field>
                </div>
                <div class="column q-pt-lg">
                  <div class="text-caption">IPs</div>
                  <q-field filled
                           dense
                           color="black"
                  >
                    <div class="q-py-sm column">
                      <span v-for="(ip, index) in virtualMachine.ips"
                            :key="index"
                            :ip="ip"
                            class="items-center"
                      >{{ ip }}</span>
                    </div>
                  </q-field>
                </div>
                <div class="column q-pt-lg">
                  <div class="text-caption">Fecha de creación</div>
                  <q-field filled
                           dense
                           color="black"
                  >
                    <span class="q-py-sm row items-center">{{ virtualMachine.created }}</span>
                  </q-field>
                </div>
              </div>
            </q-card-section>
          </q-card>
        </div>
      </div>
    </div>

    <div class="row justify-around buttons q-pb-lg">
      <q-btn size="sm"
             title="Editar"
      >
        <q-icon name="edit" color="blue"></q-icon>
        <span class="gt-md q-pl-sm">Editar</span>
      </q-btn>
      <q-btn size="sm"
             title="Compartir"
      >
        <q-icon name="share" color="grey"></q-icon>
        <span class="gt-md q-pl-sm">Compartir</span>
      </q-btn>
      <q-btn size="sm"
             title="Eliminar"
      >
        <q-icon name="delete" color="red"></q-icon>
        <span class="gt-md q-pl-sm">Eliminar</span>
      </q-btn>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VirtualMachineInfo',

  data () {
    return {
      virtualMachine: this.$store.getters.virtualMachine,
      image: require(`../assets/os/${this.$store.getters.virtualMachine.so}.jpg`)
    }
  }
}
</script>

<style lang="sass" scoped>
$desktop-width: 1024px
$tablet-width: 768px

.buttons
  width: 100%

@media (min-width: #{$desktop-width})
  .buttons
    width: 50%

@media (min-width: #{$tablet-width})
  .buttons
    width: 40%
</style>
