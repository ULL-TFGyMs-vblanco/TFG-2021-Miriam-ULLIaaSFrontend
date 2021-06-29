import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import * as All from 'quasar'

import Form from '@/views/Form'
import CreateForm from '@/components/CreateForm'
import EditForm from '@/components/EditForm'
import store from '@/store/index'

const { Quasar } = All
const components = Object.keys(All).reduce((object, key) => {
  const val = All[key];
  if (val && val.component && val.component.name != null) {
    object[key] = val;
  }
  return object;
}, {});

const localVue = createLocalVue()
localVue.use(Quasar, { components })
localVue.use(Vuex)

describe('Form', () => {
  const wrapper = shallowMount(Form, {
    localVue,
    store
  })

  it('mounts without errors', async () => {
    expect(wrapper).toBeTruthy()
  })

  it('contains CreateForm component', async () => {
    await wrapper.setData({
      formType: 'create'
    })
    expect(wrapper.findComponent(CreateForm).exists()).toBe(true)
  })

  it('contains EditForm component', async () => {
    await wrapper.setData({
      formType: 'edit'
    })
    expect(wrapper.findComponent(EditForm).exists()).toBe(true)
  })
})
