import { mount, createLocalVue } from '@vue/test-utils'
import VueRouter from 'vue-router'
import * as All from 'quasar'

import App from '@/App'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Home from '@/views/Home'
import VirtualMachine from '@/views/VirtualMachine'
import Form from '@/views/Form'
import routes from '@/router/routes'

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

jest.mock('@/views/Home', () => ({
  name: 'Home',
  render: h => h('div')
}))

jest.mock('@/views/VirtualMachine', () => ({
  name: 'VirtualMachine',
  render: h => h('div')
}))

jest.mock('@/views/Form', () => ({
  name: 'Form',
  render: h => h('div')
}))

describe('App', () => {
  const router = new VueRouter({ routes })
  const wrapper = mount(App, {
    localVue,
    router
  })

  it('mounts without errors', async () => {
    expect(wrapper).toBeTruthy()
  })

  it('contains Header component', async () => {
    expect(wrapper.findComponent(Header).exists()).toBe(true)
  })

  it('contains Footer component', async () => {
    expect(wrapper.findComponent(Footer).exists()).toBe(true)
  })

  it('renders view Home via routing', async () => {
    expect(wrapper.findComponent(Home).exists()).toBe(true)
  })

  it('renders view VirtualMachine via routing', async () => {
    router.push('/vm')
    await wrapper.vm.$nextTick()

    expect(wrapper.find('VirtualMachine')).toBeTruthy()
  })

  it('renders view Form via routing', async () => {
    router.push('/form')
    await wrapper.vm.$nextTick()

    expect(wrapper.find('Form')).toBeTruthy()
  })
})
