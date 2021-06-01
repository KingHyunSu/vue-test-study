
import Vue from 'vue'

export const Child = Vue.component('Child', {
  name: 'Child',

  template: '<div>Child component</div>'
})

export const Parent = Vue.component('Parent', {
  name: 'Parent',

  template: '<div><child /></div>'
})
