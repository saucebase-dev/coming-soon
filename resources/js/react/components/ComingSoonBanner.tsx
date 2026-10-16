import { usePage } from '@inertiajs/react';
import { useT } from '@saucebase/react/i18n';

export default function ComingSoonBanner() {
    const { comingSoon } = usePage().props;
    const t = useT();

    if (!comingSoon?.showBanner) {
        return null;
    }

    return (
        <output
            className="fixed inset-x-0 bottom-0 z-50 flex flex-wrap items-center justify-center gap-x-4 gap-y-1 bg-rose-500/20 px-6 py-3 text-center text-sm font-medium text-rose-950 dark:text-rose-100"
            aria-label={t('Coming Soon')}
            data-testid="coming-soon-banner"
        >
            <span>{t('Coming Soon is active for non-admin users.')}</span>
            {comingSoon.settingsUrl && (
                <a
                    href={comingSoon.settingsUrl}
                    className="underline underline-offset-4"
                    data-testid="coming-soon-settings-link"
                >
                    {t('Settings')}
                </a>
            )}
        </output>
    );
}
