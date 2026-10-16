<script setup lang="ts">
import { usePage } from '@inertiajs/vue3';

const page = usePage();
</script>

<template>
    <output
        v-if="page.props.comingSoon?.showBanner"
        class="fixed inset-x-0 bottom-0 z-50 flex flex-wrap items-center justify-center gap-x-4 gap-y-1 bg-rose-500/20 px-6 py-3 text-center text-sm font-medium text-rose-950 dark:text-rose-100"
        :aria-label="$t('Coming Soon')"
        data-testid="coming-soon-banner"
    >
        <span>{{ $t('Coming Soon is active for non-admin users.') }}</span>
        <a
            v-if="page.props.comingSoon.settingsUrl"
            :href="page.props.comingSoon.settingsUrl"
            class="underline underline-offset-4"
            data-testid="coming-soon-settings-link"
        >
            {{ $t('Settings') }}
        </a>
    </output>
</template>
