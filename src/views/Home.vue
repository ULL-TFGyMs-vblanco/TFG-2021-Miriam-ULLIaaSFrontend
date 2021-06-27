<template>
  <q-page-container>
    <q-toolbar class="q-pt-md">
      <q-btn-group outline>
        <q-btn icon="r_table_rows"
               outline
               color="grey-8"
               @click="content = 'table'"
        ></q-btn>

        <q-separator vertical
                     inset
                     class="q-mx-md"
        ></q-separator>

        <q-btn icon="r_auto_awesome_mosaic"
               outline
               color="grey-8"
               @click="content = 'mosaic'"
        ></q-btn>
      </q-btn-group>
      <q-space></q-space>

      <router-link to="/form"
                   style="text-decoration: none; color: black"
      >
        <q-btn flat
               class="bg-brown-2 text-overline"
               size="sm"
               @click="saveFormType"
        >Nueva máquina virtual</q-btn>
      </router-link>
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
  },

  methods: {
    saveFormType () {
      this.$store.dispatch('setFormTypeAction', 'create')
    }
  }
}
</script>

<style lang="sass" scoped>
</style>
