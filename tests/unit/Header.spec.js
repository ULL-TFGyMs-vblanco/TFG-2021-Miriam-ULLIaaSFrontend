import { shallowMount, createLocalVue } from '@vue/test-utils'
import * as All from 'quasar'

import Header from '@/components/Header'
import RightMenu from '@/components/RightMenu'

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

describe('Header', () => {
  const wrapper = shallowMount(Header, {
    localVue
  })

  it('mounts without errors', async () => {
    expect(wrapper).toBeTruthy()
  })

  it('correct div-1 classes', async () => {
    expect(wrapper.find('#div-1').classes()).toEqual(['header'])
  })

  it('correct q-header attributes - heighthint', async () => {
    expect(wrapper.find('#q-header').attributes().heighthint).toBe('98')
  })

  it('correct q-toolbar-1 classes', async () => {
    expect(wrapper.find('#q-toolbar-1').classes()).toEqual(['bg-primary', 'text-white'])
  })

  it('correct q-toolbar-title classes', async () => {
    expect(wrapper.find('#q-toolbar-title').classes()).toEqual(['flex', 'center'])
  })

  it('correct img-1 attributes - src', async () => {
    expect(wrapper.find('#img-1').attributes().src).toBe('../assets/marca-ull-positivo.svg')
  })

  it('correct img-1 attributes - alt', async () => {
    expect(wrapper.find('#img-1').attributes().alt).toBe('Logo ULL')
  })

  it('correct img-1 attributes - width', async () => {
    expect(wrapper.find('#img-1').attributes().width).toBe('110')
  })

  it('correct q-btn-1 attributes - dense', async () => {
    expect(wrapper.find('#q-btn-1').attributes().dense).toBe('true')
  })

  it('correct q-btn-1 attributes - flat', async () => {
    expect(wrapper.find('#q-btn-1').attributes().flat).toBe('true')
  })

  it('correct q-btn-1 attributes - round', async () => {
    expect(wrapper.find('#q-btn-1').attributes().round).toBe('true')
  })

  it('correct q-btn-1 attributes - icon', async () => {
    expect(wrapper.find('#q-btn-1').attributes().icon).toBe('menu')
  })

  it('correct q-toolbar-2 classes', async () => {
    expect(wrapper.find('#q-toolbar-2').classes()).toEqual(['bg-blue-grey-2', 'text-black'])
  })

  it('correct div-2 classes', async () => {
    expect(wrapper.find('#div-2').classes()).toEqual(['text-caption', 'text-weight-medium'])
  })

  it('correct div-2 text', async () => {
    expect(wrapper.find('#div-2').text()).toBe('Panel de máquinas virtuales en el IaaS')
  })

  it('correct q-btn-2 classes', async () => {
    expect(wrapper.find('#q-btn-2').classes()).toEqual(['bg-white'])
  })

  it('correct q-btn-2 attributes - type', async () => {
    expect(wrapper.find('#q-btn-2').attributes().type).toBe('a')
  })

  it('correct q-btn-2 attributes - target', async () => {
    expect(wrapper.find('#q-btn-2').attributes().target).toBe('_blank')
  })

  it('correct q-btn-2 attributes - href', async () => {
    expect(wrapper.find('#q-btn-2').attributes().href).toBe('https://iaas.ull.es/')
  })

  it('correct q-btn-2 attributes - flat', async () => {
    expect(wrapper.find('#q-btn-2').attributes().flat).toBe('true')
  })

  it('correct img-2 attributes - src', async () => {
    expect(wrapper.find('#img-2').attributes().src).toBe('../assets/ovirt.png')
  })

  it('correct img-2 attributes - alt', async () => {
    expect(wrapper.find('#img-2').attributes().alt).toBe('Plataforma oVirt')
  })

  it('correct img-2 attributes - width', async () => {
    expect(wrapper.find('#img-2').attributes().width).toBe('50')
  })

  it('correct q-drawer attributes - showifabove', async () => {
    expect(wrapper.find('#q-drawer').attributes().showifabove).toBe('true')
  })

  it('correct q-drawer attributes - side', async () => {
    expect(wrapper.find('#q-drawer').attributes().side).toBe('right')
  })

  it('correct q-drawer attributes - elevated', async () => {
    expect(wrapper.find('#q-drawer').attributes().elevated).toBe('true')
  })

  it('contains RightMenu component', async () => {
    expect(wrapper.findComponent(RightMenu).exists()).toBe(true)
  })
})
