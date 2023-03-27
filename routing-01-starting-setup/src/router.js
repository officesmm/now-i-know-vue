import { createRouter, createWebHistory } from 'vue-router';

import TeamsList from '@/pages/TeamsList.vue';
import UsersList from '@/pages/UsersList.vue';
import TeamMembers from './components/teams/TeamMembers.vue';
import NotFound from '@/pages/NotFound.vue';
import TeamsFooter from '@/components/teams/TeamsFooter.vue';
import UsersFooter from '@/components/users/UsersFooter.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/teams' },
    {
      name: 'teams',
      path: '/teams',
      neta: { needsAuth: true },
      components: { default: TeamsList, footer: TeamsFooter },
      children: [
        { name: 'team-members', path: ':teamId', component: TeamMembers, props: true }
      ]
    },
    {
      path: '/users',
      components: { default: UsersList, footer: UsersFooter },
      beforeEnter(to, from, next) {
        console.log(to, from);
        next();
      }
    },
    { path: '/:notFound(.*)', component: NotFound }
  ],
  linkActiveClass: 'active',
  scrollBehavior(_to, _from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    return { left: 0, top: 0 };
  }
});
router.beforeEach((to, from, next) => {
  console.log('Glob');
  console.log(to, from);
  if(to.meta.needsAuth){
    console.log("Authed");
  }
  next();
});
router.afterEach(function(to, from) {
  // sending analytics data to server
  console.log('Global afterEach');
  console.log(to, from);
});

export default router;