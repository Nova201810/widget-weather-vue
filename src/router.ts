import { createRouter, createWebHistory } from 'vue-router';

import { PERIOD_TABS } from './constants/periodTabs';
import Now from './components/Periods/Now.vue';
import OneDay from './components/Periods/OneDay.vue';
import SeveralDays from './components/Periods/SeveralDays.vue';
import { getRoutePathByTab } from './helpers/route';

const TABS_COMPONENTS = {
  [PERIOD_TABS.NOW]: Now,
  [PERIOD_TABS.TODAY]: OneDay,
  [PERIOD_TABS.TOMORROW]: OneDay,
  [PERIOD_TABS.THREE_DAYS]: SeveralDays,
  [PERIOD_TABS.TEN_DAYS]: SeveralDays,
};

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    ...Object.values(PERIOD_TABS).map(tab => ({
      path: getRoutePathByTab(tab),
      component: TABS_COMPONENTS[tab],
    })),
    // Все несовпадающие с табами маршруты редиректим на дефолтный таб
    { path: '/:pathMatch(.*)*',  redirect: getRoutePathByTab(PERIOD_TABS.NOW) },
  ],
})