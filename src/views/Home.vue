<template>
  <q-page-container>
    <q-toolbar>
      <q-btn class="bg-white"
             icon="r_table_rows"
             @click="content = 'table'"
             dense
             flat
      ></q-btn>
      <q-separator vertical inset class="q-mx-md"></q-separator>
      <q-btn class="bg-white"
             icon="r_auto_awesome_mosaic"
             @click="content = 'mosaic'"
             dense
             flat
      ></q-btn>
      <q-space></q-space>

      <q-btn flat
             class="bg-brown-2 text-overline"
             size="sm"
      >Nueva máquina virtual</q-btn>
    </q-toolbar>

    <Panel :content="content"></Panel>
  </q-page-container>
</template>

<script>
import Panel from '@/components/Panel'

export default {
  name: 'Home',

  components: {
    Panel
  },

  data () {
    return {
      content: 'table'
    }
  }
}
</script>

<style lang="sass" scoped>
</style>
