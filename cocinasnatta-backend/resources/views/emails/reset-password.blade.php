<!doctype html>
<html lang="es">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <title>Recuperar contraseña</title>
</head>
<body style="margin:0;padding:0;background:#0a0a0a;color:#ffffff;font-family:Montserrat,Segoe UI,Roboto,Arial,sans-serif;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#0a0a0a;padding:48px 16px;">
        <tr>
            <td align="center">
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:660px;border-radius:18px;overflow:hidden;border:1px solid rgba(255,255,255,0.10);background:#111111;">
                    <tr>
                        <td style="padding:22px;border-bottom:1px solid rgba(255,255,255,0.10);">
                            <span style="display:inline-block;padding:8px 12px;border-radius:999px;background:rgba(212,163,115,0.12);border:1px solid rgba(212,163,115,0.25);color:#d4a373;font-size:12px;font-weight:700;letter-spacing:0.12em;text-transform:uppercase;">
                                NATTA ADMIN
                            </span>
                        </td>
                    </tr>
                    <tr>
                        <td style="padding:22px;">
                            <div style="font-size:18px;font-weight:800;margin:0 0 10px 0;">Recuperar contraseña</div>
                            <div style="font-size:14px;line-height:1.65;color:rgba(255,255,255,0.78);">
                                Hola {{ $userName }},<br><br>
                                Hemos recibido una solicitud para restablecer la contraseña de tu cuenta de administración.
                                Pulsa el botón para elegir una nueva contraseña. El enlace caduca en 60 minutos.
                            </div>
                            <div style="margin-top:22px;">
                                <a href="{{ $resetUrl }}"
                                   style="display:inline-block;background:#d4a373;color:#000000;text-decoration:none;font-weight:800;font-size:12px;letter-spacing:0.14em;text-transform:uppercase;padding:14px 20px;border-radius:12px;">
                                    Restablecer contraseña
                                </a>
                            </div>
                            <div style="margin-top:18px;padding:14px;border-radius:14px;border:1px solid rgba(255,255,255,0.08);background:rgba(255,255,255,0.03);color:rgba(255,255,255,0.60);font-size:12px;line-height:1.6;">
                                Si no solicitaste este cambio, ignora este correo. Tu contraseña no se modificará.
                            </div>
                            <div style="margin-top:16px;color:rgba(255,255,255,0.35);font-size:11px;word-break:break-all;">
                                Enlace directo: {{ $resetUrl }}
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td style="padding:16px 22px;border-top:1px solid rgba(255,255,255,0.10);color:rgba(255,255,255,0.35);font-size:11px;">
                            Natta Cocinas · Panel de administración
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
</body>
</html>
