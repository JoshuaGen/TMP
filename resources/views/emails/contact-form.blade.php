<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>New {{ ucfirst($formType) }} Form Submission</title>
    <style>
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
            background-color: #f5f5f5;
        }
        .container {
            background-color: #ffffff;
            border-radius: 8px;
            padding: 30px;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }
        .header {
            border-bottom: 3px solid #111;
            padding-bottom: 15px;
            margin-bottom: 25px;
        }
        h1 {
            color: #111;
            font-size: 24px;
            margin: 0;
        }
        .field {
            margin-bottom: 20px;
        }
        .field-label {
            font-weight: 600;
            color: #666;
            font-size: 12px;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            margin-bottom: 5px;
        }
        .field-value {
            color: #111;
            font-size: 15px;
            padding: 10px;
            background-color: #f9f9f9;
            border-radius: 4px;
            border-left: 3px solid #111;
        }
        .footer {
            margin-top: 30px;
            padding-top: 20px;
            border-top: 1px solid #eee;
            font-size: 13px;
            color: #999;
            text-align: center;
        }
        .inquiry-list {
            list-style: none;
            padding: 0;
            margin: 0;
        }
        .inquiry-list li {
            display: inline-block;
            background-color: #111;
            color: #fff;
            padding: 5px 12px;
            border-radius: 4px;
            margin: 3px;
            font-size: 13px;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>New {{ ucfirst($formType) }} Form Submission</h1>
        </div>

        @if(isset($formData['name']))
        <div class="field">
            <div class="field-label">Name</div>
            <div class="field-value">{{ $formData['name'] }}</div>
        </div>
        @endif

        @if(isset($formData['email']))
        <div class="field">
            <div class="field-label">Email</div>
            <div class="field-value">
                <a href="mailto:{{ $formData['email'] }}" style="color: #111; text-decoration: none;">
                    {{ $formData['email'] }}
                </a>
            </div>
        </div>
        @endif

        @if(isset($formData['phone']))
        <div class="field">
            <div class="field-label">Phone</div>
            <div class="field-value">{{ $formData['phone'] }}</div>
        </div>
        @endif

        @if(isset($formData['inquiry']) && is_array($formData['inquiry']) && count($formData['inquiry']) > 0)
        <div class="field">
            <div class="field-label">Services Interested In</div>
            <div class="field-value">
                <ul class="inquiry-list">
                    @foreach($formData['inquiry'] as $item)
                        <li>{{ $item }}</li>
                    @endforeach
                </ul>
            </div>
        </div>
        @endif

        @if(isset($formData['message']) && !empty($formData['message']))
        <div class="field">
            <div class="field-label">Message</div>
            <div class="field-value">{{ $formData['message'] }}</div>
        </div>
        @endif

        @if(isset($formData['newsletter']) && $formData['newsletter'])
        <div class="field">
            <div class="field-label">Newsletter</div>
            <div class="field-value">✓ Customer opted in to newsletter</div>
        </div>
        @endif

        <div class="footer">
            This email was sent from the Temple Electrical website contact form.<br>
            Received at {{ now()->format('d M Y, H:i:s') }}
        </div>
    </div>
</body>
</html>
