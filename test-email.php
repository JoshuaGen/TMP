<?php

require __DIR__.'/vendor/autoload.php';

$app = require_once __DIR__.'/bootstrap/app.php';
$app->make('Illuminate\Contracts\Console\Kernel')->bootstrap();

use App\Mail\ContactFormMail;
use Illuminate\Support\Facades\Mail;

try {
    $testData = [
        'name' => 'Test User',
        'email' => 'test@example.com',
        'message' => 'This is a test email from the contact form system.',
        'inquiry' => ['Rewire', 'LED lighting'],
        'newsletter' => true,
    ];

    echo "Sending test email...\n";
    
    Mail::to('templeelectricalleeds@gmail.com')
        ->cc('john@martialmarketing.org')
        ->send(new ContactFormMail($testData, 'test'));
    
    echo "✓ Test email sent successfully!\n";
    echo "Check both email addresses:\n";
    echo "  - templeelectricalleeds@gmail.com\n";
    echo "  - john@martialmarketing.org\n";
    
} catch (Exception $e) {
    echo "✗ Error sending email:\n";
    echo $e->getMessage() . "\n";
    echo "\nStack trace:\n";
    echo $e->getTraceAsString() . "\n";
}
