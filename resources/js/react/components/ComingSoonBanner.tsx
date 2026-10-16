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
            className="fixed bottom-0 left-1/2 z-50 flex w-max max-w-[calc(100%-2rem)] -translate-x-1/2 flex-wrap items-center justify-center gap-x-4 gap-y-1 rounded-t-3xl bg-rose-500/20 px-6 py-4 text-center text-sm font-medium text-rose-950 shadow-[0_-12px_48px_-12px_rgb(0_0_0/0.4)] sm:px-8 dark:text-rose-100"
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
