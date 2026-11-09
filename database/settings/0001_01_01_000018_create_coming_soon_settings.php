<?php

use Spatie\LaravelSettings\Migrations\SettingsMigration;

/**
 * Renamed from 2026_10_16_081340_create_coming_soon_settings, so sites that ran
 * that one run this again: add only what's missing.
 */
return new class extends SettingsMigration
{
    public function up(): void
    {
        $defaults = [
            'coming_soon.enabled' => false,
            'coming_soon.title' => 'Coming soon',
            'coming_soon.message' => 'Our site is under construction. Please check back soon.',
        ];

        foreach ($defaults as $name => $value) {
            if (! $this->migrator->exists($name)) {
                $this->migrator->add($name, $value);
            }
        }
    }
};
