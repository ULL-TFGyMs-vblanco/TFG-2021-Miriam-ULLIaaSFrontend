import { mount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import * as All from 'quasar'

import Panel from '@/components/Panel'
import VirtualMachineTable from '@/components/VirtualMachineTable'
import VirtualMachineCard from '@/components/VirtualMachineCard'
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

jest.mock('@/components/VirtualMachineTable', () => ({
  name: 'VirtualMachineTable',
  render: h => h('div')
}))

jest.mock('@/components/VirtualMachineCard', () => ({
  name: 'VirtualMachineCard',
  render: h => h('div')
}))

describe('Panel', () => {
  const wrapper = mount(Panel, {
    localVue,
    store
  })

  it('mounts without errors', async () => {
    expect(wrapper).toBeTruthy()
  })

  it('correct div-1 classes', async () => {
    expect(wrapper.find('#div-1').classes()).toEqual(['q-pa-md', 'column', 'items-center', 'q-gutter-md', 'justify-center'])
  })

  it('correct q-table classes', async () => {
    expect(wrapper.find('#q-table').classes()).toContain('my-table')
  })

  it('correct div-2 classes', async () => {
    expect(wrapper.find('#div-2').classes()).toEqual(['row', 'justify-end'])
  })

  it('contains VirtualMachineTable component', async () => {
    await wrapper.setProps({
      content: 'table'
    })
    expect(wrapper.findComponent(VirtualMachineTable).exists()).toBe(true)
  })

  it('contains VirtualMachineCard component', async () => {
    await wrapper.setProps({
      content: 'mosaic'
    })

    expect(wrapper.findComponent(VirtualMachineCard).exists()).toBe(true)
  })
})
