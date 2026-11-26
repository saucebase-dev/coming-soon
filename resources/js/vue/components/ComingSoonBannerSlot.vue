<script setup lang="ts">
import { usePage } from '@inertiajs/vue3';
import ComingSoonBanner from './ComingSoonBanner.vue';

// Reads the page; the banner itself takes props, so its stories need no page.
const page = usePage();
</script>

<template>
    <ComingSoonBanner
        v-if="page.props.comingSoon?.showBanner"
        :settings-url="page.props.comingSoon.settingsUrl"
    />
</template>
