
require('./bootstrap')

import { createApp, VueElement } from 'vue'
import Welcome from './vue/app'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faPlusSquare, faTrash } from '@fortawesome/free-solid-svg-icons'


library.add(faPlusSquare, faTrash)


const app = createApp({})

app.component('welcome', Welcome)

app.mount('#app')