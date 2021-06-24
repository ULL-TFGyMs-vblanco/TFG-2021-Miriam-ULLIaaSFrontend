<template>
  <q-page-container>
    <q-toolbar>
      <q-btn-group outline>
<!--        <q-btn outline color="brown" label="First" />-->
<!--        <q-btn outline color="brown" label="Second" icon-right="watch_later" />-->
<!--        <q-btn outline color="brown" label="Third" />-->
        <q-btn class="bg-white"
               icon="r_table_rows"
               outline
               color="grey-8"
               @click="content = 'table'"
        ></q-btn>
        <q-separator vertical inset class="q-mx-md"></q-separator>
        <q-btn class="bg-white"
               icon="r_auto_awesome_mosaic"
               outline
               color="grey-8"
               @click="content = 'mosaic'"
        ></q-btn>
      </q-btn-group>
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
