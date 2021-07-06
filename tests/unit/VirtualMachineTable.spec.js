import { shallowMount, createLocalVue } from '@vue/test-utils'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import * as All from 'quasar'

import VirtualMachineTable from '@/components/VirtualMachineTable'
import routes from '@/router/routes'
import store from '@/store/index'
import axios from "axios";

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

describe('VirtualMachineTable', () => {
  store.dispatch('setVirtualMachinesAction', vms)

  const router = new VueRouter({ routes })
  const wrapper = shallowMount(VirtualMachineTable, {
    localVue,
    router,
    store,
    propsData: {
      props: {
        row:
          {
            name: 'SyTW-BackEND4',
            status: 'SUSPEND',
            ips: ['173.16.116.2', '172.16.117.2'],
            index: 0
          }
      },
      images: [{ url: require(`@/assets/os/linux.jpg`)}, { url: require(`@/assets/os/linux.jpg`)}],
      toggleValue: [false, true]
    },
    data () {
      return {
        virtualMachines: store.getters.virtualMachines
      }
    }
  })

  it('mounts without errors', async () => {
    expect(wrapper).toBeTruthy()
  })

  it('saveVirtualMachine method', async () => {
    await wrapper.vm.saveVirtualMachine(vms[0])
    expect(store.getters.virtualMachine).toBe(vms[0])
  })

  it('turnVirtualMachine method', async () => {
    await wrapper.vm.turnVirtualMachine(vms[0], true)
    await wrapper.vm.turnVirtualMachine(vms[0], false)

    expect(wrapper.vm.toggleValue[0]).toBe(false)
  })

  it('turnVirtualMachine status 200', async () => {
    axios.put(`https://tfg-iaas-vm.app.smartmock.io/api/vm/${vms[0].name}`, {
      action: 'turn on',
      virtualMachine: {
        id: vms[0].id,
        name: vms[0].name,
        description: vms[0].description,
        status: 'ON',
        template: vms[0].template,
        os: vms[0].os,
        ram: vms[0].ram,
        memory: vms[0].memory,
        created: vms[0].created
      }
    })
      .then(res => {
        expect(res.status).toBe(200)
      })
  })
})
