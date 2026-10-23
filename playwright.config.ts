import type { ModuleTests } from '@saucebase/core/modules';

export const tests = {
    // Coming-soon mode is one site-wide setting: while these tests turn it on,
    // every guest page redirects, so nothing may run beside them.
    runAlone: true,
} satisfies ModuleTests;
