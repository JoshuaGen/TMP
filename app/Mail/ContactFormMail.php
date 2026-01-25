<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;
use Illuminate\Mail\Mailables\Address;

class ContactFormMail extends Mailable
{
    use Queueable, SerializesModels;

    public $formData;
    public $formType;

    /**
     * Create a new message instance.
     */
    public function __construct(array $formData, string $formType = 'contact')
    {
        $this->formData = $formData;
        $this->formType = $formType;
    }

    /**
     * Get the message envelope.
     */
    public function envelope(): Envelope
    {
        return new Envelope(
            from: new Address('templeelectricalleeds@gmail.com', 'Temple Electrical'),
            replyTo: [
                new Address($this->formData['email'] ?? 'templeelectricalleeds@gmail.com', $this->formData['name'] ?? 'Customer'),
            ],
            subject: 'New ' . ucfirst($this->formType) . ' Form Submission - Temple Electrical',
        );
    }

    /**
     * Get the message content definition.
     */
    public function content(): Content
    {
        return new Content(
            view: 'emails.contact-form',
        );
    }

    /**
     * Get the attachments for the message.
     *
     * @return array<int, \Illuminate\Mail\Mailables\Attachment>
     */
    public function attachments(): array
    {
        return [];
    }
}
