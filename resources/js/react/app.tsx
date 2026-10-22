import { registerGlobalComponent } from '@saucebase/react/lib/globalComponents';
import ComingSoonBanner from './components/ComingSoonBanner';

export function setup() {
    registerGlobalComponent('app::page.after', ComingSoonBanner);
}
