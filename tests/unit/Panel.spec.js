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

const vms = [
  {
    id: '4328',
    name: 'SyTW-BackEND4',
    description: 'Lorem ipsum dolor sit amet',
    status: 'SUSPEND',
    os: 'linux',
    ram: '4 GiB',
    memory: '20 GiB',
    template: 'ubuntu-1804',
    ips: ['173.16.116.2', '172.16.117.2'],
    created: 'YYYY-MM-DD'
  },
  {
    id: '1100',
    name: 'SyTW-FrontEND',
    description: 'Lorem ipsum dolor si',
    status: 'ON',
    os: 'linux',
    ram: '4 GiB',
    memory: '20 GiB',
    template: 'ubuntu-1804',
    ips: ['173.16.113.3', '172.16.114.2'],
    created: 'YYYY-MM-DD'
  }
]

describe('Panel', () => {
  store.dispatch('setVirtualMachinesAction', vms)

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

  it('correct data value', async () => {
    const url = require(`@/assets/os/linux.jpg`)

    expect(wrapper.vm.virtualMachines).toEqual(vms)
    expect(wrapper.vm.images).toEqual([{ url: url }, { url: url }])
    expect(wrapper.vm.data[0].name).toBe('SyTW-BackEND4')
    expect(wrapper.vm.toggleValue[0]).toBe(false)
  })

  it('mount without virtualMachines value', async () => {
    store.dispatch('setVirtualMachinesAction', null)
    const wrapper1 = shallowMount(Panel, {
      localVue,
      store
    })
    await wrapper1.setData({
      virtualMachines: vms
    })

    expect(wrapper.vm.virtualMachines).toEqual(vms)
  })
})
