<?php

namespace App\Http\Controllers;

use App\Mail\ContactFormMail;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Inertia\Inertia;

class ContactController extends Controller
{
    /**
     * Handle the contact form submission
     */
    public function submit(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'phone' => 'nullable|string|max:20',
            'message' => 'nullable|string|max:5000',
            'inquiry' => 'nullable|array',
            'inquiry.*' => 'string',
            'newsletter' => 'nullable|boolean',
        ]);

        // Send email to main address with CC
        Mail::to('templeelectricalleeds@gmail.com')
            ->cc('john@martialmarketing.org')
            ->send(new ContactFormMail($validated, $request->input('formType', 'contact')));

        return back()->with('success', 'Thank you for your message! We\'ll get back to you within 24 hours.');
    }

    /**
     * Handle the quick quote form submission (from hero or other sections)
     */
    public function quickQuote(Request $request)
    {
        $validated = $request->validate([
            'firstName' => 'nullable|string|max:255',
            'lastName' => 'nullable|string|max:255',
            'name' => 'nullable|string|max:255',
            'email' => 'required|email|max:255',
            'message' => 'nullable|string|max:5000',
        ]);

        // Combine firstName and lastName if provided
        if (isset($validated['firstName']) || isset($validated['lastName'])) {
            $validated['name'] = trim(($validated['firstName'] ?? '') . ' ' . ($validated['lastName'] ?? ''));
            unset($validated['firstName'], $validated['lastName']);
        }

        // Send email to main address with CC
        Mail::to('templeelectricalleeds@gmail.com')
            ->cc('john@martialmarketing.org')
            ->send(new ContactFormMail($validated, 'quote'));

        return back()->with('success', 'Thank you! We\'ll send you a quote within 24 hours.');
    }
}
