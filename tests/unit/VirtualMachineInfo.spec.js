import { shallowMount, createLocalVue } from '@vue/test-utils'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import * as All from 'quasar'

import VirtualMachineInfo from '@/components/VirtualMachineInfo'
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

describe('VirtualMachineInfo', () => {
  store.dispatch('setVirtualMachineAction', {
    id: '4328',
    name: 'SyTW-BackEND4',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit nihil praesentium molestias a adipisci, dolore vitae odit, quidem consequatur optio voluptates asperiores pariatur eos numquam rerum delectus commodi perferendis voluptate?',
    status: 'SUSPEND',
    os: 'linux',
    ram: '4 GiB',
    memory: '20 GiB',
    template: 'ubuntu-1804',
    ips: ['173.16.116.2', '172.16.117.2'],
    created: 'YYYY-MM-DD'
  })

  const router = new VueRouter({ routes })
  const wrapper = shallowMount(VirtualMachineInfo, {
    localVue,
    router,
    store
  })

  it('mounts without errors', async () => {
    expect(wrapper).toBeTruthy()
  })

  it('correct div-1 classes', async () => {
    expect(wrapper.find('#div-1').classes()).toEqual(['row', 'justify-center', 'q-pt-lg'])
  })

  it('correct div-2 classes', async () => {
    expect(wrapper.find('#div-2').classes()).toEqual(['q-pa-sm', 'row', 'items-center', 'q-gutter-md', 'justify-end'])
  })

  it('correct div-3 classes', async () => {
    expect(wrapper.find('#div-3').classes()).toEqual(['row', 'justify-around', 'buttons'])
  })

  it('correct q-btn-1 attributes - size', async () => {
    expect(wrapper.find('#q-btn-1').attributes().size).toBe('sm')
  })

  it('correct q-btn-1 attributes - title', async () => {
    expect(wrapper.find('#q-btn-1').attributes().title).toBe('Encender')
  })

  it('correct q-icon-1 attributes - name', async () => {
    expect(wrapper.find('#q-icon-1').attributes().name).toBe('power_settings_new')
  })

  it('correct q-icon-1 attributes - color', async () => {
    expect(wrapper.find('#q-icon-1').attributes().color).toBe('green')
  })

  it('correct span-1 classes', async () => {
    expect(wrapper.find('#span-1').classes()).toEqual(['gt-md', 'q-pl-sm'])
  })

  it('correct span-1 text', async () => {
    expect(wrapper.find('#span-1').text()).toBe('Encender')
  })

  it('correct q-btn-2 attributes - size', async () => {
    expect(wrapper.find('#q-btn-2').attributes().size).toBe('sm')
  })

  it('correct q-btn-2 attributes - title', async () => {
    expect(wrapper.find('#q-btn-2').attributes().title).toBe('Consola')
  })

  it('correct q-icon-2 attributes - color', async () => {
    expect(wrapper.find('#q-icon-2').attributes().color).toBe('grey')
  })

  it('correct q-icon-2 text', async () => {
    expect(wrapper.find('#q-icon-2').text()).toBe('>_')
  })

  it('correct span-2 classes', async () => {
    expect(wrapper.find('#span-2').classes()).toEqual(['gt-md', 'q-pl-sm'])
  })

  it('correct span-2 text', async () => {
    expect(wrapper.find('#span-2').text()).toBe('Consola')
  })

  it('correct q-btn-3 attributes - size', async () => {
    expect(wrapper.find('#q-btn-3').attributes().size).toBe('sm')
  })

  it('correct q-btn-3 attributes - title', async () => {
    expect(wrapper.find('#q-btn-3').attributes().title).toBe('Suspender')
  })

  it('correct q-icon-3 attributes - name', async () => {
    expect(wrapper.find('#q-icon-3').attributes().name).toBe('battery_alert')
  })

  it('correct q-icon-3 attributes - color', async () => {
    expect(wrapper.find('#q-icon-3').attributes().color).toBe('orange')
  })

  it('correct span-3 classes', async () => {
    expect(wrapper.find('#span-3').classes()).toEqual(['gt-md', 'q-pl-sm'])
  })

  it('correct span-3 text', async () => {
    expect(wrapper.find('#span-3').text()).toBe('Suspender')
  })

  it('correct q-btn-4 attributes - size', async () => {
    expect(wrapper.find('#q-btn-4').attributes().size).toBe('sm')
  })

  it('correct q-btn-4 attributes - title', async () => {
    expect(wrapper.find('#q-btn-4').attributes().title).toBe('Reiniciar')
  })

  it('correct q-icon-4 attributes - name', async () => {
    expect(wrapper.find('#q-icon-4').attributes().name).toBe('restart_alt')
  })

  it('correct q-icon-4 attributes - color', async () => {
    expect(wrapper.find('#q-icon-4').attributes().color).toBe('teal')
  })

  it('correct span-4 classes', async () => {
    expect(wrapper.find('#span-4').classes()).toEqual(['gt-md', 'q-pl-sm'])
  })

  it('correct span-4 text', async () => {
    expect(wrapper.find('#span-4').text()).toBe('Reiniciar')
  })

  it('correct q-btn-5 attributes - size', async () => {
    expect(wrapper.find('#q-btn-5').attributes().size).toBe('sm')
  })

  it('correct q-btn-5 attributes - title', async () => {
    expect(wrapper.find('#q-btn-5').attributes().title).toBe('Apagar')
  })

  it('correct q-icon-5 attributes - name', async () => {
    expect(wrapper.find('#q-icon-5').attributes().name).toBe('power_off')
  })

  it('correct q-icon-5 attributes - color', async () => {
    expect(wrapper.find('#q-icon-5').attributes().color).toBe('red')
  })

  it('correct span-5 classes', async () => {
    expect(wrapper.find('#span-5').classes()).toEqual(['gt-md', 'q-pl-sm'])
  })

  it('correct span-5 text', async () => {
    expect(wrapper.find('#span-5').text()).toBe('Apagar')
  })

  it('correct div-4 classes', async () => {
    expect(wrapper.find('#div-4').classes()).toEqual(['q-pa-md', 'row', 'justify-center'])
  })

  it('correct q-card-section-1 classes', async () => {
    expect(wrapper.find('#q-card-section-1').classes()).toEqual(['q-pb-sm', 'row', 'justify-center'])
  })

  it('correct img-1 attributes - src', async () => {
    await wrapper.setData({
      image: '../assets/os/linux.jpg'
    })
    expect(wrapper.find('#img-1').attributes().src).toBe('../assets/os/linux.jpg')
  })

  it('correct img-1 attributes - alt', async () => {
    expect(wrapper.find('#img-1').attributes().alt).toBe('linux')
  })

  it('correct img-1 attributes - width', async () => {
    expect(wrapper.find('#img-1').attributes().width).toBe('90%')
  })

  it('correct q-card-section-2 classes', async () => {
    expect(wrapper.find('#q-card-section-2').classes()).toEqual(['row', 'items-center', 'justify-around'])
  })

  it('correct div-5 classes', async () => {
    expect(wrapper.find('#div-5').classes()).toEqual(['text-h5', 'q-mt-sm', 'q-mb-xs'])
  })

  it('correct div-5 text', async () => {
    expect(wrapper.find('#div-5').text()).toBe('SyTW-BackEND4')
  })

  it('correct div-6 classes', async () => {
    expect(wrapper.find('#div-6').classes()).toEqual(['text-overline', 'text-orange-9', 'column'])
  })

  it('correct div-6 text', async () => {
    expect(wrapper.find('#div-6').text()).toBe('ID#4328')
  })

  it('correct q-badge text', async () => {
    expect(wrapper.find('#q-badge').text()).toBe('SUSPEND')
  })

  it('correct div-7 classes', async () => {
    expect(wrapper.find('#div-7').classes()).toEqual(['text-caption'])
  })

  it('correct div-7 text', async () => {
    expect(wrapper.find('#div-7').text()).toBe('Descripción')
  })

  it('correct q-field attributes - filled', async () => {
    expect(wrapper.find('.q-field').attributes().filled).toBe('true')
  })

  it('correct q-field attributes - dense', async () => {
    expect(wrapper.find('.q-field').attributes().dense).toBe('true')
  })

  it('correct q-field attributes - color', async () => {
    expect(wrapper.find('.q-field').attributes().color).toBe('black')
  })

  it('correct span-6 classes', async () => {
    expect(wrapper.find('#span-6').classes()).toEqual(['q-py-sm', 'row', 'items-center'])
  })

  it('correct span-6 text', async () => {
    expect(wrapper.find('#span-6').text()).toBe('Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit nihil praesentium molestias a adipisci, dolore vitae odit, quidem consequatur optio voluptates asperiores pariatur eos numquam rerum delectus commodi perferendis voluptate?')
  })

  it('correct div-8 text', async () => {
    expect(wrapper.find('#div-8').text()).toBe('Plantilla')
  })

  it('correct span-7 text', async () => {
    expect(wrapper.find('#span-7').text()).toBe('ubuntu-1804')
  })

  it('correct div-9 text', async () => {
    expect(wrapper.find('#div-9').text()).toBe('Sistema operativo')
  })

  it('correct span-8 text', async () => {
    expect(wrapper.find('#span-8').text()).toBe('Linux')
  })

  it('correct div-10 text', async () => {
    expect(wrapper.find('#div-10').text()).toBe('RAM')
  })

  it('correct span-9 text', async () => {
    expect(wrapper.find('#span-9').text()).toBe('4 GiB')
  })

  it('correct div-11 text', async () => {
    expect(wrapper.find('#div-11').text()).toBe('Almacenamiento')
  })

  it('correct span-10 text', async () => {
    expect(wrapper.find('#span-10').text()).toBe('20 GiB')
  })

  it('correct div-12 text', async () => {
    expect(wrapper.find('#div-12').text()).toBe('IPs')
  })

  it('correct span-11 text', async () => {
    expect(wrapper.find('#span-11').text()).toBe('173.16.116.2')
  })

  it('correct div-13 text', async () => {
    expect(wrapper.find('#div-13').text()).toBe('Fecha de creación')
  })

  it('correct span-12 text', async () => {
    expect(wrapper.find('#span-12').text()).toBe('YYYY-MM-DD')
  })

  it('correct router-link attributes - to', async () => {
    expect(wrapper.find('#router-link').attributes().to).toBe('/form')
  })

  it('correct q-btn-6 attributes - size', async () => {
    expect(wrapper.find('#q-btn-6').attributes().size).toBe('sm')
  })

  it('correct q-btn-6 attributes - title', async () => {
    expect(wrapper.find('#q-btn-6').attributes().title).toBe('Editar')
  })

  it('correct q-icon-6 attributes - name', async () => {
    expect(wrapper.find('#q-icon-6').attributes().name).toBe('edit')
  })

  it('correct q-icon-6 attributes - color', async () => {
    expect(wrapper.find('#q-icon-6').attributes().color).toBe('blue')
  })

  it('correct span-13 classes', async () => {
    expect(wrapper.find('#span-13').classes()).toEqual(['gt-md', 'q-pl-sm'])
  })

  it('correct span-13 text', async () => {
    expect(wrapper.find('#span-13').text()).toBe('Editar')
  })

  it('correct q-btn-7 attributes - size', async () => {
    expect(wrapper.find('#q-btn-7').attributes().size).toBe('sm')
  })

  it('correct q-btn-7 attributes - title', async () => {
    expect(wrapper.find('#q-btn-7').attributes().title).toBe('Compartir')
  })

  it('correct q-icon-7 attributes - name', async () => {
    expect(wrapper.find('#q-icon-7').attributes().name).toBe('share')
  })

  it('correct q-icon-7 attributes - color', async () => {
    expect(wrapper.find('#q-icon-7').attributes().color).toBe('grey')
  })

  it('correct span-14 classes', async () => {
    expect(wrapper.find('#span-14').classes()).toEqual(['gt-md', 'q-pl-sm'])
  })

  it('correct span-14 text', async () => {
    expect(wrapper.find('#span-14').text()).toBe('Compartir')
  })

  it('correct q-btn-8 attributes - size', async () => {
    expect(wrapper.find('#q-btn-8').attributes().size).toBe('sm')
  })

  it('correct q-btn-8 attributes - title', async () => {
    expect(wrapper.find('#q-btn-8').attributes().title).toBe('Eliminar')
  })

  it('correct q-icon-8 attributes - name', async () => {
    expect(wrapper.find('#q-icon-8').attributes().name).toBe('delete')
  })

  it('correct q-icon-8 attributes - color', async () => {
    expect(wrapper.find('#q-icon-8').attributes().color).toBe('red')
  })

  it('correct span-15 classes', async () => {
    expect(wrapper.find('#span-15').classes()).toEqual(['gt-md', 'q-pl-sm'])
  })

  it('correct span-15 text', async () => {
    expect(wrapper.find('#span-15').text()).toBe('Eliminar')
  })
})