<?php

namespace App\Services;

use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Log;

class PayPalService
{
    private function getAccessToken(): string
    {
        $response = Http::withBasicAuth(
            config('services.paypal.client_id'),
            config('services.paypal.secret')
        )
            ->asForm()
            ->post(config('services.paypal.base_url') . '/v1/oauth2/token', [
                'grant_type' => 'client_credentials',
            ]);

        if ($response->failed()) {
            Log::error('PayPal Token Error', $response->json());
            abort(500, 'Error al conectar con PayPal');
        }

        return $response->json('access_token');
    }

    public function createOrder(float $amount): array
    {
        $token = $this->getAccessToken();

        $response = Http::withToken($token)
            ->withHeaders([
                'Content-Type' => 'application/json',
                'Prefer' => 'return=representation',
            ])
            ->post(config('services.paypal.base_url') . '/v2/checkout/orders', [
                'intent' => 'CAPTURE',
                'purchase_units' => [[
                    'amount' => [
                        'currency_code' => 'MXN',
                        'value' => number_format($amount, 2, '.', ''),
                    ],
                ]],
            ]);

        if ($response->failed()) {
            Log::error('PayPal Create Order Error', $response->json());
            abort(500, 'Error al crear orden PayPal');
        }

        return $response->json();
    }

    public function captureOrder(string $paypalOrderId): array
    {
        $token = $this->getAccessToken();

        $response = Http::withToken($token)
            ->withHeaders([
                'Content-Type' => 'application/json',
                'Accept' => 'application/json', // Añadimos este por seguridad
                'Prefer' => 'return=representation',
            ])
            // En lugar de [], enviamos la cadena JSON directamente
            ->withBody('{}', 'application/json')
            ->post(config('services.paypal.base_url') . "/v2/checkout/orders/{$paypalOrderId}/capture");

        if ($response->failed()) {
            dd($response->json());
        }

        return $response->json();
    }
}
