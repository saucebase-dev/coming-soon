import { usePage } from '@inertiajs/react';
import { ComingSoonBanner } from './ComingSoonBanner';

/** Reads the page; the banner itself takes props, so its stories need no page. */
export function ComingSoonBannerSlot() {
    const { comingSoon } = usePage().props;

    if (!comingSoon?.showBanner) {
        return null;
    }

    return <ComingSoonBanner settingsUrl={comingSoon.settingsUrl} />;
}
