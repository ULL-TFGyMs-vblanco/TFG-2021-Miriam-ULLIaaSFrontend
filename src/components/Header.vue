<template>
  <div class="header">
    <q-header height-hint="98">
      <q-toolbar class="bg-primary text-white">
        <q-toolbar-title class="flex center">
          <img src="../assets/marca-ull-positivo.svg"
               alt="Logo ULL"
               width="110"
          >
        </q-toolbar-title>
        <q-btn dense
               flat
               round
               icon="menu"
               @click="right = !right"
        ></q-btn>
      </q-toolbar>

      <q-toolbar class="bg-blue-grey-2 text-black">
        <div class="text-caption text-weight-medium">Panel de máquinas virtuales en el IaaS</div>
        <q-space></q-space>
        <q-btn type="a"
               target="_blank"
               href="https://iaas.ull.es/"
               class="bg-white"
               flat
        >
          <img src="../assets/ovirt.png"
               width="50"
          >
        </q-btn>
      </q-toolbar>
    </q-header>

    <q-drawer show-if-above
              v-model="right"
              side="right"
              elevated
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
