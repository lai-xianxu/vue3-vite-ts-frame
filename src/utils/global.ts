import { App } from 'vue';

import Demo from '@/components/Demo.vue';
import * as directives from '@/utils/directives';

export default {
  install(Vue: App<Element>) {
    Vue.component('Demo', Demo);
    const directivesCopy: any = directives;
    Object.keys(directivesCopy).forEach((key: string) => {
      Vue.directive(key, directivesCopy[key]);
    });
  },
};

export function globalMount(app: App) {
  app.config.globalProperties.$demo = 'demo';
}
