import { shallowMount, createLocalVue } from '@vue/test-utils'
import * as All from 'quasar'

import Footer from '@/components/Footer'

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

describe('Footer', () => {
  const wrapper = shallowMount(Footer, {
    localVue
  })

  it('mounts without errors', async () => {
    expect(wrapper).toBeTruthy()
  })

  it('correct footer text', async () => {
    const footer = new Date().getFullYear() + ' © ULL'
    expect(wrapper.text()).toBe(footer)
  })
})
