<?php
namespace App\Http\Controllers\Productos;

use App\Http\Controllers\Controller;
use App\Services\PayPalService;
use Illuminate\Http\Request;

class PayPalController extends Controller
{
    public function createOrder(Request $request, PayPalService $paypal)
    {
        // dd($request,$paypal);
        return $paypal->createOrder($request->amount);
    }

    public function captureOrder($orderId, PayPalService $paypal)
    {
        return $paypal->captureOrder($orderId);
    }
}
