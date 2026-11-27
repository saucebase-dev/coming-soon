import { registerGlobalComponent } from '@saucebase/vue/lib/globalComponents';
import ComingSoonBannerSlot from './components/ComingSoonBannerSlot.vue';

export function setup() {
    registerGlobalComponent('app::page.after', ComingSoonBannerSlot);
}
