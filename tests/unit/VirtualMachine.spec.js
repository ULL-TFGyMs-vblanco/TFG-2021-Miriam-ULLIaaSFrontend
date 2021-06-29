import { shallowMount, createLocalVue } from '@vue/test-utils'
import * as All from 'quasar'

import VirtualMachine from '@/views/VirtualMachine'
import VirtualMachineInfo from '@/components/VirtualMachineInfo'

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

describe('VirtualMachine', () => {
  const wrapper = shallowMount(VirtualMachine, {
    localVue
  })

  it('mounts without errors', async () => {
    expect(wrapper).toBeTruthy()
  })

  it('contains q-page-container component', async () => {
    expect(wrapper.find('q-page-container')).toBeTruthy()
  })

  it('contains VirtualMachineInfo component', async () => {
    expect(wrapper.findComponent(VirtualMachineInfo).exists()).toBe(true)
  })
})