import { shallowMount, createLocalVue } from '@vue/test-utils'
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

describe('Panel', () => {
  const wrapper = shallowMount(Panel, {
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

  it('contains VirtualMachineTable component', async () => {
    expect(wrapper.findComponent(VirtualMachineTable).selector.name).toBe('VirtualMachineTable')
  })

  it('correct VirtualMachineTable component props', async () => {
    expect(wrapper.findComponent(VirtualMachineTable).selector.props.props).toBeTruthy()
    expect(wrapper.findComponent(VirtualMachineTable).selector.props.images).toBeTruthy()
    expect(wrapper.findComponent(VirtualMachineTable).selector.props.toggleValue).toBeTruthy()
  })

  it('contains VirtualMachineCard component', async () => {
    expect(wrapper.findComponent(VirtualMachineCard).selector.name).toBe('VirtualMachineCard')
  })

  it('correct VirtualMachineTable component props', async () => {
    expect(wrapper.findComponent(VirtualMachineTable).selector.props.props).toBeTruthy()
    expect(wrapper.findComponent(VirtualMachineTable).selector.props.images).toBeTruthy()
    expect(wrapper.findComponent(VirtualMachineTable).selector.props.toggleValue).toBeTruthy()
  })
})
