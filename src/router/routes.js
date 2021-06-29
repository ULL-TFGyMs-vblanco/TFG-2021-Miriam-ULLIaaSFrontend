const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home')
  },
  {
    path: '/vm',
    name: 'VirtualMachine',
    component: () => import('../views/VirtualMachine')
  },
  {
    path: '/form',
    name: 'Form',
    component: () => import('../views/Form')
  }
]

export default routes
