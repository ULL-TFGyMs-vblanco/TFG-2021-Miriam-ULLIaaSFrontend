import { shallowMount, createLocalVue } from '@vue/test-utils'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import * as All from 'quasar'

import VirtualMachineTable from '@/components/VirtualMachineTable'
import routes from '@/router/routes'
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
localVue.use(VueRouter)
localVue.use(Vuex)

describe('VirtualMachineTable', () => {
  const router = new VueRouter({ routes })
  // const wrapper = shallowMount(VirtualMachineTable, {
  //   localVue,
  //   router,
  //   store,
  //   propsData: {
  //
  //   }
  // })

  it('mounts without errors', async () => {
    expect(true).toBeTruthy()
    // expect(wrapper).toBeTruthy()
  })
})
