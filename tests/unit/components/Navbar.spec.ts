import { shallowMount } from '@vue/test-utils'
import MNavBar from '@/components/ui/NavBar.vue'

describe('Component: NavBar', () => {
  it('Should mount the component with no params', () => {
    const wrapper = shallowMount(MNavBar, {
      propsData: {}
    })
    expect(wrapper.text()).not.toBeUndefined()
  })
})