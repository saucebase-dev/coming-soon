import { registerGlobalComponent } from '@saucebase/react/lib/globalComponents';
import { ComingSoonBannerSlot } from './components/ComingSoonBannerSlot';

export function setup() {
    registerGlobalComponent('app::page.after', ComingSoonBannerSlot);
}
