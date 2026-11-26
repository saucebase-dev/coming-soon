import preview from '@/.storybook/preview';
import { expect } from 'storybook/test';
import { ComingSoonBanner } from './ComingSoonBanner';

/**
 * Tells an admin that visitors see the coming-soon page, while the admin sees the site.
 * It sits at the bottom of the window, over the page.
 *
 * `ComingSoonBannerSlot` puts it on every page while coming soon is on, with the link to
 * its settings when the admin may change them.
 */
const meta = preview.meta({
    title: 'ComingSoon/ComingSoonBanner',
    component: ComingSoonBanner,
    args: { settingsUrl: '#' },
    parameters: { layout: 'fullscreen' },
    decorators: [
        // A page under it. `transform` makes the box hold what is fixed inside it, so
        // the banner sits at the bottom of the example, not of the docs page.
        (Story) => (
            <div className="h-48" style={{ transform: 'translateZ(0)' }}>
                <div className="bg-muted m-6 h-32 rounded-xl" />
                <Story />
            </div>
        ),
    ],
});
export default meta;

/** With the link to coming soon's settings. */
export const Default = meta.story({
    play: async ({ canvas }) => {
        await expect(
            canvas.getByRole('status', { name: 'Coming Soon' }),
        ).toHaveTextContent('Coming Soon is active for non-admin users.');
        await expect(
            canvas.getByRole('link', { name: 'Settings' }),
        ).toBeVisible();
    },
});

/** For an admin who may not change the settings: no link. */
export const WithoutSettings = meta.story({
    args: { settingsUrl: null },
    play: async ({ canvas }) => {
        await expect(canvas.queryByRole('link')).toBeNull();
    },
});
