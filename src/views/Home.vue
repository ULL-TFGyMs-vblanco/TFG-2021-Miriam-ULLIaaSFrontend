<template>
  <q-page-container class="q-pa-md row q-gutter-md justify-center">
    <q-toolbar>
      <q-btn class="bg-white"
             icon="r_table_rows"
             @click="content = 'table'"
             dense
             flat
      ></q-btn>
      <q-separator vertical inset class="q-mx-md" />
      <q-btn class="bg-white"
             icon="r_auto_awesome_mosaic"
             @click="content = 'mosaic'"
             dense
             flat
      ></q-btn>
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
