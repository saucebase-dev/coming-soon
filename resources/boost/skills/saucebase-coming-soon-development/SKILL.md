---
name: saucebase-coming-soon-development
description: Work on Coming Soon redirects, page content, admin settings, or the administrator banner in modules/coming-soon.
---

# Coming Soon development

Paths below are relative to the module root; commands run from the application root.

## Backend

`Settings/ComingSoonSettings` stores enabled, title, and message using Spatie settings.
The Filament settings page inherits core's `manage settings` permission. No module
permission or seeder is needed.

`RedirectToComingSoon` runs in the web group after sessions and before authentication
and binding. It redirects only HTML GET/HEAD requests and Inertia visits; do not
redirect APIs, scripts, submissions, or unknown URLs. Always exempt the module's
own route. Users with `manage settings` bypass redirects.

`config/config.php` supplies `path` and `except_routes` defaults. Applications
supply their own login/panel exceptions in `config/coming-soon.php`; never put
other modules' route names in this module, its config or its docs. Links opened from
emails are page visits too, redirected like any other; the README's "Links in emails"
leaves their exceptions to the application. A changed path requires rebuilding a
cached route table. When disabled, the public route redirects to `/`.

The Filament plugin registers its one page explicitly: core 1.13's discovery trait
lowercases `ComingSoon` to `comingsoon`, which is not this module's directory.

## Frontend

The installed frontend lives in `resources/js/`. The page renders escaped plain
text with SSR and no site navigation. `ComingSoonBannerSlot` registers in core's
`app::page.after` slot and reads the page: it shows `ComingSoonBanner` while
`comingSoon.showBanner` is on. `comingSoon.settingsUrl` links to the admin settings only
for users with both `manage settings` and `access admin panel`. The banner takes the link as
a prop (`settingsUrl`), so its stories need no page; E2E covers the slot. It stays fixed at
the bottom so it does not cover the navbar, is persistent, and has no announcement dependency.
Keep Vue and React contributor sources in step.

## Verification

Write failing feature tests first. Run:

```bash
php -d memory_limit=2048M artisan test --compact modules/coming-soon/tests/Feature
npx playwright test --project="@coming-soon*"
```

The browser test restores settings in `finally`. Shared database setup resets the
test application's database; use `--no-deps` when exercising an already migrated
and seeded local application without resetting it.
