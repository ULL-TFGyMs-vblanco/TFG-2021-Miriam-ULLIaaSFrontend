<template>
  <q-page-container>
    <q-toolbar>
      <q-btn class="bg-white"
             icon="table_rows"
      ></q-btn>
      <q-separator vertical inset class="q-mx-lg" />
      <q-btn class="bg-white"
             icon="auto_awesome_mosaic"
      ></q-btn>
    </q-toolbar>
    <Panel></Panel>
  </q-page-container>
</template>

<script>
import Panel from '@/components/Panel'

export default {
  name: 'Home',
  components: {
    Panel
  }
}
</script>
