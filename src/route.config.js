import guestGuide from './page/guestGuide.vue'
import voteGuide from './page/voteGuide.vue'
import showResult from './page/showResult.vue'

export default [
  {
    path: '/',
    component: guestGuide
  },
  {
    path: '/guestGuide',
    component: guestGuide
  },
  {
    path: '/voteGuide',
    component: voteGuide
  },
  {
    path: '/showResult',
    component: showResult
  }
]