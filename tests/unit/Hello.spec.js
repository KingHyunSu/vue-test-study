import { shallowMount, mount } from '@vue/test-utils'
import HelloJest from '@/components/HelloJest'

describe('HelloJest.vue', () => {
  it('HelloJset.vue를 렌더한다', () => {
    const wrapper = mount(HelloJest)

    expect(wrapper.html().includes('Hello Jest~')).toBe(true)
  })
  let wrapper
  beforeEach(() => {
    wrapper = shallowMount(HelloJest)
  })
  test('1', () => {
    expect(wrapper.vm.msg).toBe('Hello Jest~')
  })
})

