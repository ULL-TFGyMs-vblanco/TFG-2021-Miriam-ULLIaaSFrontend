import { shallowMount, createLocalVue } from '@vue/test-utils'
import * as All from 'quasar'

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

describe('RightMenu', () => {
  const wrapper = shallowMount(RightMenu, {
    localVue
  })

  it('mounts without errors', async () => {
    expect(wrapper).toBeTruthy()
  })

  it('correct side-menu-header classes', async () => {
    expect(wrapper.find('#side-menu-header').classes()).toEqual(['column'])
  })

  it('correct side-menu-header attributes - header', async () => {
    expect(wrapper.find('#side-menu-header').attributes().header).toBe('true')
  })

  it('correct div-2 classes', async () => {
    expect(wrapper.find('#div-2').classes()).toEqual(['my-q-py', 'row'])
  })

  it('correct q-item-section-1 classes', async () => {
    expect(wrapper.find('#q-item-section-1').classes()).toEqual(['text-black'])
  })

  it('correct strong text', async () => {
    expect(wrapper.find('strong').text()).toBe('Míriam Núñez García')
  })

  it('correct small text', async () => {
    expect(wrapper.find('small').text()).toBe('alu0100XXXXXX')
  })

  it('correct q-btn attributes - color', async () => {
    expect(wrapper.find('#q-btn').attributes().color).toBe('primary')
  })

  it('correct q-btn attributes - label', async () => {
    expect(wrapper.find('#q-btn').attributes().label).toBe('Cerrar sesión')
  })

  it('correct q-btn attributes - push', async () => {
    expect(wrapper.find('#q-btn').attributes().push).toBe('true')
  })

  it('correct q-btn attributes - size', async () => {
    expect(wrapper.find('#q-btn').attributes().size).toBe('sm')
  })

  it('correct q-item attributes - clickable', async () => {
    expect(wrapper.find('.q-item').attributes().clickable).toBe('true')
  })

  it('correct q-item attributes - tag', async () => {
    expect(wrapper.find('.q-item').attributes().tag).toBe('a')
  })

  it('correct q-item attributes - target', async () => {
    expect(wrapper.find('.q-item').attributes().target).toBe('_blank')
  })

  it('correct q-item-1 attributes - href', async () => {
    expect(wrapper.find('#q-item-1').attributes().href).toBe('https://www.ull.es/')
  })

  it('correct q-item-section attributes - avatar', async () => {
    expect(wrapper.find('.q-item-section').attributes().avatar).toBe('true')
  })

  it('correct q-icon-1 attributes - name', async () => {
    expect(wrapper.find('#q-icon-1').attributes().name).toBe('public')
  })

  it('correct q-item-label-1 text', async () => {
    expect(wrapper.find('#q-item-label-1').text()).toBe('Página Web ULL')
  })

  it('correct q-expansion-item-1 attributes - label', async () => {
    expect(wrapper.find('#q-expansion-item-1').attributes().label).toBe('Servicios telemáticos')
  })

  it('correct q-item-2 attributes - href', async () => {
    expect(wrapper.find('#q-item-2').attributes().href).toBe('https://usuarios.ull.es/')
  })

  it('correct q-icon-2 attributes - name', async () => {
    expect(wrapper.find('#q-icon-2').attributes().name).toBe('account_box')
  })

  it('correct q-item-label-2 text', async () => {
    expect(wrapper.find('#q-item-label-2').text()).toBe('Gestión de perfil de usuario')
  })

  it('correct q-item-3 attributes - href', async () => {
    expect(wrapper.find('#q-item-3').attributes().href).toBe('http://portal.ull.es/')
  })

  it('correct q-icon-3 attributes - name', async () => {
    expect(wrapper.find('#q-icon-3').attributes().name).toBe('folder_shared')
  })

  it('correct q-item-label-3 text', async () => {
    expect(wrapper.find('#q-item-label-3').text()).toBe('Portal')
  })

  it('correct q-item-4 attributes - href', async () => {
    expect(wrapper.find('#q-item-4').attributes().href).toBe('http://sede.ull.es/')
  })

  it('correct q-icon-4 attributes - name', async () => {
    expect(wrapper.find('#q-icon-4').attributes().name).toBe('settings')
  })

  it('correct q-item-label-4 text', async () => {
    expect(wrapper.find('#q-item-label-4').text()).toBe('Sede electrónica')
  })

  it('correct q-item-5 attributes - href', async () => {
    expect(wrapper.find('#q-item-5').attributes().href).toBe('http://www.campusvirtual.ull.es/')
  })

  it('correct q-icon-5 attributes - name', async () => {
    expect(wrapper.find('#q-icon-5').attributes().name).toBe('school')
  })

  it('correct q-item-label-5 text', async () => {
    expect(wrapper.find('#q-item-label-5').text()).toBe('Campus virtual')
  })

  it('correct q-item-6 attributes - href', async () => {
    expect(wrapper.find('#q-item-6').attributes().href).toBe('http://mail.ull.edu.es/')
  })

  it('correct q-icon-6 attributes - name', async () => {
    expect(wrapper.find('#q-icon-6').attributes().name).toBe('mail_outline')
  })

  it('correct q-item-label-6 text', async () => {
    expect(wrapper.find('#q-item-label-6').text()).toBe('Correo electrónico')
  })

  it('correct q-item-7 attributes - href', async () => {
    expect(wrapper.find('#q-item-7').attributes().href).toBe('http://ddv.stic.ull.es')
  })

  it('correct q-icon-7 attributes - name', async () => {
    expect(wrapper.find('#q-icon-7').attributes().name).toBe('memory')
  })

  it('correct q-item-label-7 text', async () => {
    expect(wrapper.find('#q-item-label-7').text()).toBe('Disco duro virtual')
  })

  it('correct q-item-8 attributes - href', async () => {
    expect(wrapper.find('#q-item-8').attributes().href).toBe('https://www.ull.es/servicios/biblioteca/')
  })

  it('correct q-icon-8 attributes - name', async () => {
    expect(wrapper.find('#q-icon-8').attributes().name).toBe('menu_book')
  })

  it('correct q-item-label-8 text', async () => {
    expect(wrapper.find('#q-item-label-8').text()).toBe('Biblioteca general')
  })

  it('correct q-item-9 attributes - href', async () => {
    expect(wrapper.find('#q-item-9').attributes().href).toBe('http://eventos.ull.es')
  })

  it('correct q-icon-9 attributes - name', async () => {
    expect(wrapper.find('#q-icon-9').attributes().name).toBe('today')
  })

  it('correct q-item-label-9 text', async () => {
    expect(wrapper.find('#q-item-label-9').text()).toBe('Eventos')
  })

  it('correct q-item-10 attributes - href', async () => {
    expect(wrapper.find('#q-item-10').attributes().href).toBe('http://www.stic.ull.es/info/servicios/servicios/index.asp')
  })

  it('correct q-icon-10 attributes - name', async () => {
    expect(wrapper.find('#q-icon-10').attributes().name).toBe('public')
  })

  it('correct q-item-label-10 text', async () => {
    expect(wrapper.find('#q-item-label-10').text()).toBe('Portal de servicio')
  })

  it('correct q-item-11 attributes - href', async () => {
    expect(wrapper.find('#q-item-11').attributes().href).toBe('https://www.ull.es/directorio/')
  })

  it('correct q-icon-11 attributes - name', async () => {
    expect(wrapper.find('#q-icon-11').attributes().name).toBe('phone')
  })

  it('correct q-item-label-11 text', async () => {
    expect(wrapper.find('#q-item-label-11').text()).toBe('Directorio telefónico')
  })

  it('correct q-item-11 attributes - href', async () => {
    expect(wrapper.find('#q-item-12').attributes().href).toBe('mailto:stic@ull.es')
  })

  it('correct q-icon-12 attributes - name', async () => {
    expect(wrapper.find('#q-icon-12').attributes().name).toBe('alternate_email')
  })

  it('correct q-item-label-12 text', async () => {
    expect(wrapper.find('#q-item-label-12').text()).toBe('stic@ull.es')
  })

  it('correct q-item-13 attributes - href', async () => {
    expect(wrapper.find('#q-item-13').attributes().href).toBe('tel:+34922319180')
  })

  it('correct q-icon-13 attributes - name', async () => {
    expect(wrapper.find('#q-icon-13').attributes().name).toBe('phone_in_talk')
  })

  it('correct q-item-label-13 text', async () => {
    expect(wrapper.find('#q-item-label-13').text()).toBe('(+34) 922 31 91 80')
  })

  it('correct q-item-14 attributes - href', async () => {
    expect(wrapper.find('#q-item-14').attributes().href).toBe('https://goo.gl/maps/3BjBb4qtP1GLd1qCA/')
  })

  it('correct q-icon-14 attributes - name', async () => {
    expect(wrapper.find('#q-icon-14').attributes().name).toBe('home')
  })

  it('correct q-item-label-14 text', async () => {
    expect(wrapper.find('#q-item-label-14').text()).toBe('Edificio Central  C/ Delgado Barreto s/n. 38207  San Cristóbal de La Laguna')
  })

  it('correct q-footer classes', async () => {
    expect(wrapper.find('#q-footer').classes()).toEqual(['flex', 'justify-center', 'bg-grey-2'])
  })

  it('correct a-1 classes', async () => {
    expect(wrapper.find('#a-1').classes()).toEqual(['q-pa-md'])
  })

  it('correct a-1 attributes - title', async () => {
    expect(wrapper.find('#a-1').attributes().title).toBe('Facebook ULL')
  })

  it('correct a-1 attributes - target', async () => {
    expect(wrapper.find('#a-1').attributes().target).toBe('_blank')
  })

  it('correct a-1 attributes - href', async () => {
    expect(wrapper.find('#a-1').attributes().href).toBe('https://www.facebook.com/universidaddelalaguna')
  })

  it('correct q-icon-15 attributes - name', async () => {
    expect(wrapper.find('#q-icon-15').attributes().name).toBe('fab fa-facebook')
  })

  it('correct q-icon-15 attributes - size', async () => {
    expect(wrapper.find('#q-icon-15').attributes().size).toBe('sm')
  })

  it('correct a-2 classes', async () => {
    expect(wrapper.find('#a-2').classes()).toEqual(['q-pa-md'])
  })

  it('correct a-2 attributes - title', async () => {
    expect(wrapper.find('#a-2').attributes().title).toBe('Twitter ULL')
  })

  it('correct a-2 attributes - target', async () => {
    expect(wrapper.find('#a-2').attributes().target).toBe('_blank')
  })

  it('correct a-2 attributes - href', async () => {
    expect(wrapper.find('#a-2').attributes().href).toBe('https://twitter.com/ull')
  })

  it('correct q-icon-16 attributes - name', async () => {
    expect(wrapper.find('#q-icon-16').attributes().name).toBe('fab fa-twitter')
  })

  it('correct q-icon-16 attributes - size', async () => {
    expect(wrapper.find('#q-icon-16').attributes().size).toBe('sm')
  })

  it('correct a-3 classes', async () => {
    expect(wrapper.find('#a-3').classes()).toEqual(['q-pa-md'])
  })

  it('correct a-3 attributes - title', async () => {
    expect(wrapper.find('#a-3').attributes().title).toBe('Youtube ULL')
  })

  it('correct a-3 attributes - target', async () => {
    expect(wrapper.find('#a-3').attributes().target).toBe('_blank')
  })

  it('correct a-3 attributes - href', async () => {
    expect(wrapper.find('#a-3').attributes().href).toBe('https://www.youtube.com/canalULL')
  })

  it('correct q-icon-17 attributes - name', async () => {
    expect(wrapper.find('#q-icon-17').attributes().name).toBe('fab fa-youtube')
  })

  it('correct q-icon-17 attributes - size', async () => {
    expect(wrapper.find('#q-icon-17').attributes().size).toBe('sm')
  })

  it('correct q-icon-17 attributes - color', async () => {
    expect(wrapper.find('#q-icon-17').attributes().color).toBe('red')
  })

  it('correct a-4 classes', async () => {
    expect(wrapper.find('#a-4').classes()).toEqual(['q-pa-md'])
  })

  it('correct a-4 attributes - title', async () => {
    expect(wrapper.find('#a-4').attributes().title).toBe('Linkedin ULL')
  })

  it('correct a-4 attributes - target', async () => {
    expect(wrapper.find('#a-4').attributes().target).toBe('_blank')
  })

  it('correct a-4 attributes - href', async () => {
    expect(wrapper.find('#a-4').attributes().href).toBe('https://www.linkedin.com/groups/Universidad-Laguna-2656178')
  })

  it('correct q-icon-18 attributes - name', async () => {
    expect(wrapper.find('#q-icon-18').attributes().name).toBe('fab fa-linkedin-in')
  })

  it('correct q-icon-18 attributes - size', async () => {
    expect(wrapper.find('#q-icon-18').attributes().size).toBe('sm')
  })
})
