import { shallowMount, createLocalVue } from '@vue/test-utils'
import VueRouter from 'vue-router'
import * as All from 'quasar'

import Home from '@/views/Home'
import Panel from '@/components/Panel'
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

describe('Home', () => {
  const router = new VueRouter({ routes })
  const wrapper = shallowMount(Home, {
    localVue,
    router,
    store
  })

  it('mounts without errors', async () => {
    expect(wrapper).toBeTruthy()
  })

  it('correct q-toolbar classes', async () => {
    expect(wrapper.find('#q-toolbar').classes()).toEqual(['q-pt-md'])
  })

  it('correct q-btn-group attributes', async () => {
    expect(wrapper.find('#q-btn-group').attributes().outline).toBe('true')
  })

  it('correct q-btn-1 attributes', async () => {
    expect(wrapper.find('#q-btn-1').attributes().icon).toBe('r_table_rows')
    expect(wrapper.find('#q-btn-1').attributes().outline).toBe('true')
    expect(wrapper.find('#q-btn-1').attributes().color).toBe('grey-8')
  })

  it('correct q-separator classes', async () => {
    expect(wrapper.find('#q-separator').classes()).toEqual(['q-mx-md'])
  })

  it('correct q-separator attributes', async () => {
    expect(wrapper.find('#q-separator').attributes().vertical).toBe('true')
    expect(wrapper.find('#q-separator').attributes().inset).toBe('true')
  })

  it('correct q-btn-2 attributes', async () => {
    expect(wrapper.find('#q-btn-2').attributes().icon).toBe('r_auto_awesome_mosaic')
    expect(wrapper.find('#q-btn-2').attributes().outline).toBe('true')
    expect(wrapper.find('#q-btn-2').attributes().color).toBe('grey-8')
  })

  it('correct router-link attributes', async () => {
    expect(wrapper.find('#router-link').attributes().to).toBe('/form')
  })

  it('correct q-btn-3 classes', async () => {
    expect(wrapper.find('#q-btn-3').classes()).toEqual(['bg-brown-2', 'text-overline', 'button-test'])
  })

  it('correct q-btn-3 attributes', async () => {
    expect(wrapper.find('#q-btn-3').attributes().flat).toBe('true')
    expect(wrapper.find('#q-btn-3').attributes().size).toBe('sm')
  })

  it('correct q-btn-3 text', async () => {
    expect(wrapper.find('#q-btn-3').text()).toBe('Nueva máquina virtual')
  })

  it('contains Panel component', async () => {
    expect(wrapper.findComponent(Panel).exists()).toBe(true)
  })

  it('correct Panel component props', async () => {
    const props = {
      'content': 'table'
    }
    expect(wrapper.findComponent(Panel).props()).toEqual(props)
  })

  it('saveFormType method', async () => {
    await wrapper.vm.saveFormType()
    expect(store.getters.formType).toBe('create')
  })
})
