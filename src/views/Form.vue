<template>
  <q-page-container>
    <CreateForm v-if="formType === 'create'"></CreateForm>
  </q-page-container>
</template>

<script>
import CreateForm from '../components/CreateForm'

export default {
  name: 'Form',

  components: {
    CreateForm
  },

  data () {
    return {
      formType: this.$store.getters.formType
    }
  }
}
</script>

<style lang="sass" scoped>
</style>
