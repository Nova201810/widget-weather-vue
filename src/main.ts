import { createApp } from 'vue';
import 'vuetify/styles';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import { aliases, mdi } from 'vuetify/iconsets/mdi-svg'
import dayjs from 'dayjs';
import 'dayjs/locale/ru';

import { router } from './router';
import App from './App.vue';

dayjs.locale('ru');

const vuetify = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: 'mdi',
    aliases: {
      ...aliases,
    },
    sets: {
      mdi,
    }
  },
});

const app = createApp(App);
app.use(vuetify);
app.use(router);
app.mount('#app');