<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8">
    <title>Tu pedido ha sido enviado - Nebluzo</title>
</head>

<body style="font-family: Arial, Helvetica, sans-serif; background-color:#f5f5f5; padding:20px;">

    <table width="100%" cellspacing="0" cellpadding="0">
        <tr>
            <td align="center">

                <table width="600" cellspacing="0" cellpadding="0" style="background:#ffffff; padding:30px; border-radius:8px;">

                    <!-- Logo -->
                    <tr>
                        <td align="center" style="padding-bottom:20px;">
                            <img src="{{ url('images/LogoVertical.png') }}"
                                alt="Nebluzo"
                                width="120"
                                style="display:block; border:none;">
                        </td>
                    </tr>

                    <!-- Título -->
                    <tr>
                        <td align="center">
                            <h1 style="color:#111;">¡Tu pedido ya fue enviado! 📦</h1>
                            <p style="font-size:16px; color:#555;">
                                Buenas noticias, tu paquete ya va en camino.
                            </p>
                        </td>
                    </tr>

                    <!-- Mensaje -->
                    <tr>
                        <td style="padding-top:15px; color:#444;">
                            <p>Hola <strong>{{ $order->name ?? 'neblozo bro' }}</strong>,</p>

                            <p>
                                Tu pedido <strong>#{{ $order->id }}</strong> ya fue enviado desde
                                <strong>nebluzo.com</strong>.
                            </p>

                            <p>
                                A continuación encontrarás la información de envío para que puedas
                                rastrear tu paquete.
                            </p>
                        </td>
                    </tr>

                    <!-- Información de envío -->
                    <tr>
                        <td style="padding-top:20px;">
                            <h3>Información de envío</h3>

                            <table width="100%" style="border-collapse: collapse; font-size:14px;">
                                <tr>
                                    <td style="padding:8px; border-bottom:1px solid #eee;">Número de orden</td>
                                    <td style="padding:8px; border-bottom:1px solid #eee;">
                                        #{{ $order->id }}
                                    </td>
                                </tr>

                                <tr>
                                    <td style="padding:8px; border-bottom:1px solid #eee;">Empresa de envío</td>
                                    <td style="padding:8px; border-bottom:1px solid #eee;">
                                        {{ $order->infoTracking->company ?? 'Paquetería' }}
                                    </td>
                                </tr>

                                <tr>
                                    <td style="padding:8px; border-bottom:1px solid #eee;">Número de seguimiento</td>
                                    <td style="padding:8px; border-bottom:1px solid #eee;">
                                        {{ $order->infoTracking->number_r ?? 'Pendiente' }}
                                    </td>
                                </tr>

                                <tr>
                                    <td style="padding:8px;">Total del pedido</td>
                                    <td style="padding:8px;">
                                        <strong>${{ $order->amount }}</strong>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>

                    <!-- Botón de seguimiento -->
                    <tr>
                        <td align="center" style="padding-top:30px;">
                            <a href="192.168.0.36:8000/rastrear_pedido"
                                style="background:#111; color:#ffffff; padding:12px 25px; text-decoration:none; border-radius:6px; font-size:14px; display:inline-block;">
                                Rastrear pedido
                            </a>
                        </td>
                    </tr>

                    <!-- Texto extra -->
                    <tr>
                        <td style="padding-top:30px; color:#555; font-size:14px;">
                            <p>
                                El tiempo de entrega puede variar dependiendo de la paquetería y tu ubicación.
                                Te recomendamos revisar el estado del envío usando el número de seguimiento.
                            </p>

                            <p>
                                Si tienes alguna duda sobre tu pedido, puedes responder a este correo
                                o contactarnos desde nuestro sitio web.
                            </p>

                            <p style="margin-top:20px;">
                                Gracias por comprar en <strong>Nebluzo</strong>.
                            </p>
                        </td>
                    </tr>

                    <!-- Footer -->
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