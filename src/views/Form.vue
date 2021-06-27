<template>
  <q-page-container>
    <CreateForm v-if="formType === 'create'"></CreateForm>
    <EditForm v-if="formType === 'edit'"></EditForm>
  </q-page-container>
</template>

<script>
import CreateForm from '../components/CreateForm'
import EditForm from '../components/EditForm'

export default {
  name: 'Form',

  components: {
    CreateForm,
    EditForm
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
