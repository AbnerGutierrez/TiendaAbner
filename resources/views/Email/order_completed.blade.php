<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8">
    <title>Pedido recibido - Nebluzo</title>
</head>

<body style="font-family: Arial, Helvetica, sans-serif; background-color:#f5f5f5; padding:20px;">

    <table width="100%" cellspacing="0" cellpadding="0">
        <tr>
            <td align="center">

                <table width="600" style="background:#ffffff; padding:30px; border-radius:8px;">
                    <tr>
                        <td align="center" style="padding-bottom:20px;">
                            <img src="{{ url('images/LogoVertical.png') }}" alt="Nebluzo" width="120">
                        </td>
                    </tr>
                    <tr>
                        <td align="center">
                            <h1 style="color:#111;">¡Pedido recibido!</h1>
                            <p style="font-size:16px; color:#555;">
                                Gracias por comprar en <strong>nebluzo.com</strong>
                            </p>
                        </td>
                    </tr>

                    <tr>
                        <td style="padding-top:10px;">
                            <p>Hola <strong>{{ $order->customer_name ?? 'nebluzo bro | sis' }}</strong>,</p>

                            <p>
                                Hemos recibido tu pedido correctamente.
                                Actualmente tu orden está <strong>pendiente de procesamiento</strong>.
                            </p>

                            <p>
                                En cuanto tu pedido sea preparado y enviado, recibirás otro correo con
                                <strong>los detalles de envío y seguimiento</strong>.
                            </p>
                        </td>
                    </tr>

                    <tr>
                        <td style="padding-top:20px;">
                            <h3>Detalles del pedido</h3>

                            <table width="100%" style="border-collapse: collapse;">
                                <tr>
                                    <td style="padding:8px; border-bottom:1px solid #eee;">Número de orden</td>
                                    <td style="padding:8px; border-bottom:1px solid #eee;">#{{ $order->id }}</td>
                                </tr>

                                <tr>
                                    <td style="padding:8px; border-bottom:1px solid #eee;">Fecha</td>
                                    <td style="padding:8px; border-bottom:1px solid #eee;">
                                        {{ $order->created_at->format('d/m/Y') }}
                                    </td>
                                </tr>

                                <tr>
                                    <td style="padding:8px;">Total</td>
                                    <td style="padding:8px;">
                                        <strong>${{ $order->amount }}</strong>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>

                    <tr>
                        <td style="padding-top:30px;">
                            <p style="color:#555;">
                                Si tienes alguna pregunta sobre tu pedido, puedes responder a este correo o
                                contactarnos desde nuestro sitio.
                            </p>

                            <p style="margin-top:20px;">
                                Gracias por confiar en <strong>Nebluzo</strong>.
                            </p>
                        </td>
                    </tr>

                    <tr>
                        <td align="center" style="padding-top:30px; font-size:12px; color:#999;">
                            © {{ date('Y') }} nebluzo.com — Todos los derechos reservados
                        </td>
                    </tr>

                </table>

            </td>
        </tr>
    </table>

</body>

</html>