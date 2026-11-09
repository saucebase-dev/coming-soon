<?php

namespace Modules\ComingSoon\Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Modules\ComingSoon\Settings\ComingSoonSettings;
use Tests\TestCase;

class ComingSoonSettingsMigrationTest extends TestCase
{
    use RefreshDatabase;

    /**
     * Renamed from its dated name, so sites that ran the old one run it again.
     * It must leave their settings as they are.
     */
    public function test_rerunning_keeps_existing_settings(): void
    {
        app(ComingSoonSettings::class)->fill(['enabled' => true, 'title' => 'Ours'])->save();

        (require __DIR__.'/../../database/settings/0001_01_01_000018_create_coming_soon_settings.php')->up();

        $settings = new ComingSoonSettings;
        $this->assertTrue($settings->enabled);
        $this->assertSame('Ours', $settings->title);
    }
}
