<template>
  <div class="header"
       id="div-1"
  >
    <q-header height-hint="98"
              id="q-header"
    >
      <q-toolbar class="bg-primary text-white"
                 id="q-toolbar-1"
      >
        <q-toolbar-title class="flex center"
                         id="q-toolbar-title"
        >
          <img src="../assets/marca-ull-positivo.svg"
               alt="Logo ULL"
               width="110"
               id="img-1"
          >
        </q-toolbar-title>
        <q-btn dense
               flat
               round
               icon="menu"
               @click="right = !right"
               id="q-btn-1"
        ></q-btn>
      </q-toolbar>

      <q-toolbar class="bg-blue-grey-2 text-black"
                 id="q-toolbar-2"
      >
        <div class="text-caption text-weight-medium"
             id="div-2"
        >Panel de máquinas virtuales en el IaaS</div>
        <q-space id="q-space"></q-space>
        <q-btn type="a"
               target="_blank"
               href="https://iaas.ull.es/"
               class="bg-white"
               flat
               id="q-btn-2"
        >
          <img src="../assets/ovirt.png"
               alt="Plataforma oVirt"
               width="50"
               id="img-2"
          >
        </q-btn>
      </q-toolbar>
    </q-header>

    <q-drawer show-if-above
              v-model="right"
              side="right"
              elevated
              id="q-drawer"
    >
      <RightMenu></RightMenu>
    </q-drawer>
  </div>
</template>

<script>
import RightMenu from './RightMenu'

export default {
  name: 'Header',

  components: {
    RightMenu
  },

  data () {
    return {
      right: false
    }
  }
}
</script>

<style lang="sass" scoped>
</style>
