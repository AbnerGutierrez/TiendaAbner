<?php

namespace App\Services;

use Illuminate\Support\Facades\Http;

class PayPalService
{
    private function getAccessToken()
    {
        $response = Http::withBasicAuth(
            config('services.paypal.client_id'),
            config('services.paypal.secret')
        )->asForm()->post(
            config('services.paypal.base_url') . '/v1/oauth2/token',
            ['grant_type' => 'client_credentials']
        );

        return $response->json()['access_token'];
    }

    public function createOrder($amount)
    {
        $token = $this->getAccessToken();
        // dd($token);
        return Http::withToken($token)->post(
            config('services.paypal.base_url') . '/v2/checkout/orders',
            [
                'intent' => 'CAPTURE',
                'purchase_units' => [[
                    'amount' => [
                        'currency_code' => 'MXN',
                        'value' => $amount
                    ]
                ]]
            ]
        )->json();
    }

    public function captureOrder($orderId)
    {
        $token = $this->getAccessToken();

        return Http::withToken($token)->post(
            config('services.paypal.base_url') . "/v2/checkout/orders/{$orderId}/capture"
        )->json();
    }
}
