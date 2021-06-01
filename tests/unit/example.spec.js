import { shallowMount, mount } from '@vue/test-utils'
import { Child, Parent } from '@/components/testComp'

describe('mount shallowMount 차이', () => {
  it('child', () => {
    const shallowWrapper = shallowMount(Child)
    const mountWrapper = mount(Child)
    console.log(shallowWrapper.html())
    console.log(mountWrapper.html())
  })

  it('Parent', () => {
    const shallowWrapper = shallowMount(Parent)
    const mountWrapper = mount(Parent)
    console.log(shallowWrapper.html())
    console.log(mountWrapper.html())
  })
})
