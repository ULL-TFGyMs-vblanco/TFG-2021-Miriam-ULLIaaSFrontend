import { shallowMount, createLocalVue } from '@vue/test-utils'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import * as All from 'quasar'

import EditForm from '@/components/EditForm'
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

const mockPut = jest.fn().mockImplementation(() => Promise.resolve({ status: 200 }))

jest.mock('axios', () => ({
  put: () => mockPut()
}))

describe('EditForm', () => {
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
  const wrapper = shallowMount(EditForm, {
    localVue,
    router,
    store
  })

  it('mounts without errors', async () => {
    expect(wrapper).toBeTruthy()
  })

  it('correct q-form classes', async () => {
    expect(wrapper.find('#q-form').classes()).toEqual(['q-pa-md', 'column', 'items-center', 'justify-center', 'q-pt-lg'])
  })

  it('correct div-1 classes', async () => {
    expect(wrapper.find('#div-1').classes()).toEqual(['text-h5', 'q-py-lg', 'text-center', 'text-size'])
  })

  it('correct div-1 text', async () => {
    expect(wrapper.find('#div-1').text()).toBe('Editar una máquina virtual')
  })

  it('correct q-card classes', async () => {
    expect(wrapper.find('#q-card').classes()).toEqual(['card', 'bg-grey-4'])
  })

  it('correct q-card-section classes', async () => {
    expect(wrapper.find('#q-card-section').classes()).toEqual(['row', 'items-center', 'justify-center'])
  })

  it('correct div-2 classes', async () => {
    expect(wrapper.find('#div-2').classes()).toEqual(['column', 'card-section'])
  })

  it('correct div-3 classes', async () => {
    expect(wrapper.find('#div-3').classes()).toEqual(['column'])
  })

  it('correct div-4 classes', async () => {
    expect(wrapper.find('#div-4').classes()).toEqual(['text-caption'])
  })

  it('correct div-4 text', async () => {
    expect(wrapper.find('#div-4').text()).toBe('Nombre *')
  })

  it('correct q-input classes', async () => {
    expect(wrapper.find('.q-input').classes()).toEqual(['bg-white', 'q-pl-sm', 'q-input'])
  })

  it('correct q-input attributes', async () => {
    expect(wrapper.find('.q-input').attributes().borderless).toBe('true')
    expect(wrapper.find('.q-input').attributes().dense).toBe('true')
  })

  it('correct q-input-1 attributes', async () => {
    expect(wrapper.find('#q-input-1').attributes().type).toBe('text')
    expect(wrapper.find('#q-input-1').attributes().hint).toBe('Modifica el nombre')
  })

  it('correct div-5 classes', async () => {
    expect(wrapper.find('#div-5').classes()).toEqual(['column', 'q-pt-lg'])
  })

  it('correct div-6 classes', async () => {
    expect(wrapper.find('#div-6').classes()).toEqual(['text-caption'])
  })

  it('correct div-6 text', async () => {
    expect(wrapper.find('#div-6').text()).toBe('Descripción *')
  })

  it('correct q-input-2 attributes', async () => {
    expect(wrapper.find('#q-input-2').attributes().type).toBe('text')
    expect(wrapper.find('#q-input-2').attributes().hint).toBe('Modifica la descripción')
  })

  it('correct div-7 classes', async () => {
    expect(wrapper.find('#div-7').classes()).toEqual(['column', 'q-pt-lg'])
  })

  it('correct div-8 classes', async () => {
    expect(wrapper.find('#div-8').classes()).toEqual(['text-caption'])
  })

  it('correct div-8 text', async () => {
    expect(wrapper.find('#div-8').text()).toBe('Plantilla')
  })

  it('correct q-select-1 attributes', async () => {
    expect(wrapper.find('#q-select-1').attributes().hint).toBe('No se puede modificar la plantilla')
    expect(wrapper.find('#q-select-1').attributes().readonly).toBe('true')
  })

  it('correct div-9 classes', async () => {
    expect(wrapper.find('#div-9').classes()).toEqual(['column', 'q-pt-lg'])
  })

  it('correct div-10 classes', async () => {
    expect(wrapper.find('#div-10').classes()).toEqual(['text-caption'])
  })

  it('correct div-10 text', async () => {
    expect(wrapper.find('#div-10').text()).toBe('Sistema operativo *')
  })

  it('correct q-select-2 attributes', async () => {
    expect(wrapper.find('#q-select-2').attributes().hint).toBe('No se puede modificar el sistema operativo')
    expect(wrapper.find('#q-select-2').attributes().readonly).toBe('true')
  })

  it('correct div-11 classes', async () => {
    expect(wrapper.find('#div-11').classes()).toEqual(['row', 'justify-between'])
  })

  it('correct div-12 classes', async () => {
    expect(wrapper.find('#div-12').classes()).toEqual(['column', 'q-pt-lg', 'inputs'])
  })

  it('correct div-13 classes', async () => {
    expect(wrapper.find('#div-13').classes()).toEqual(['text-caption'])
  })

  it('correct div-13 text', async () => {
    expect(wrapper.find('#div-13').text()).toBe('RAM *')
  })

  it('correct q-input-3 attributes', async () => {
    expect(wrapper.find('#q-input-3').attributes().type).toBe('number')
    expect(wrapper.find('#q-input-3').attributes().hint).toBe('Modifica la RAM')
  })

  it('correct div-14 classes', async () => {
    expect(wrapper.find('#div-14').classes()).toEqual(['column', 'q-pt-lg', 'inputs'])
  })

  it('correct div-15 classes', async () => {
    expect(wrapper.find('#div-15').classes()).toEqual(['text-caption'])
  })

  it('correct div-15 text', async () => {
    expect(wrapper.find('#div-15').text()).toBe('Almacenamiento *')
  })

  it('correct q-input-4 attributes', async () => {
    expect(wrapper.find('#q-input-4').attributes().type).toBe('number')
    expect(wrapper.find('#q-input-4').attributes().hint).toBe('Modifica el almacenamiento')
  })

  it('correct div-16 classes', async () => {
    expect(wrapper.find('#div-16').classes()).toEqual(['row', 'justify-around', 'buttons', 'q-py-lg'])
  })

  it('correct router-link attributes', async () => {
    expect(wrapper.find('#router-link').attributes().to).toBe('/')
  })

  it('correct q-btn-1 attributes', async () => {
    expect(wrapper.find('#q-btn-1').attributes().size).toBe('sm')
    expect(wrapper.find('#q-btn-1').attributes().title).toBe('Cancelar')
  })

  it('correct q-icon-1 attributes', async () => {
    expect(wrapper.find('#q-icon-1').attributes().name).toBe('close')
    expect(wrapper.find('#q-icon-1').attributes().color).toBe('grey')
  })

  it('correct span-1 classes', async () => {
    expect(wrapper.find('#span-1').classes()).toEqual(['gt-md', 'q-pl-sm'])
  })

  it('correct span-1 text', async () => {
    expect(wrapper.find('#span-1').text()).toBe('Cancelar')
  })

  it('correct q-btn-2 attributes', async () => {
    expect(wrapper.find('#q-btn-2').attributes().size).toBe('sm')
    expect(wrapper.find('#q-btn-2').attributes().title).toBe('Reiniciar')
  })

  it('correct q-icon-2 attributes', async () => {
    expect(wrapper.find('#q-icon-2').attributes().name).toBe('restart_alt')
    expect(wrapper.find('#q-icon-2').attributes().color).toBe('orange')
  })

  it('correct span-2 classes', async () => {
    expect(wrapper.find('#span-2').classes()).toEqual(['gt-md', 'q-pl-sm'])
  })

  it('correct span-2 text', async () => {
    expect(wrapper.find('#span-2').text()).toBe('Reiniciar')
  })

  it('correct q-btn-3 attributes', async () => {
    expect(wrapper.find('#q-btn-3').attributes().size).toBe('sm')
    expect(wrapper.find('#q-btn-3').attributes().title).toBe('Guardar')
  })

  it('correct q-icon-3 attributes', async () => {
    expect(wrapper.find('#q-icon-3').attributes().name).toBe('save')
    expect(wrapper.find('#q-icon-3').attributes().color).toBe('blue')
  })

  it('correct span-2 classes', async () => {
    expect(wrapper.find('#span-2').classes()).toEqual(['gt-md', 'q-pl-sm'])
  })

  it('correct span-3 text', async () => {
    expect(wrapper.find('#span-3').text()).toBe('Guardar')
  })

  it('submit inputs', async () => {
    const nameInput = wrapper.find('#q-input-1')
    const descriptionInput = wrapper.find('#q-input-2')

    nameInput.setValue = "prueba nombre"
    descriptionInput.setValue = "prueba descripción"

    jest.spyOn(window, 'alert').mockImplementation(() => {})
    await wrapper.vm.onSubmit()

    expect(wrapper.vm.name).toBe('SyTW-BackEND4')
    expect(wrapper.vm.description).toBe('Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit nihil praesentium molestias a adipisci, dolore vitae odit, quidem consequatur optio voluptates asperiores pariatur eos numquam rerum delectus commodi perferendis voluptate?')
    expect(mockPut).toHaveBeenCalledTimes(1)
  })

  it('reset inputs', async () => {
    const nameInput = wrapper.find('#q-input-1')
    const descriptionInput = wrapper.find('#q-input-2')

    nameInput.setValue = "prueba nombre"
    descriptionInput.setValue = "prueba descripción"

    await wrapper.vm.onReset()

    expect(wrapper.vm.name).toBe('SyTW-BackEND4')
    expect(wrapper.vm.description).toBe('Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit nihil praesentium molestias a adipisci, dolore vitae odit, quidem consequatur optio voluptates asperiores pariatur eos numquam rerum delectus commodi perferendis voluptate?')
  })
})
