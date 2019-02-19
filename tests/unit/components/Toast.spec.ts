import { shallowMount, mount } from '@vue/test-utils'
import MToast from '@/components/ui/Toast.vue'

describe('Component: Toast.vue', () => {
  it('renders without props', () => {
    const wrapper = shallowMount(MToast, {})
    expect(wrapper.text()).not.toBeNull()
  })

  it('destroys itself after 2000ms', () => {
    const stud = jest.fn();
    const wrapper = mount(MToast, {
      destroyed: stud
    })
    setTimeout(() => {
      expect(stud).toHaveBeenCalled()
      expect(wrapper.emitted('destroy')).toBeTruthy();
    }, 2000)
  })
})
