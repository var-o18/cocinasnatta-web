<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Propuesta Natta Cocinas</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            margin: 0;
            padding: 0;
        }

        .container {
            max-width: 600px;
            margin: 0 auto;
            background: #ffffff;
        }

        .header {
            background: #111827;
            color: #ffffff;
            padding: 20px;
            text-align: center;
        }

        .header h1 {
            margin: 0;
            font-size: 22px;
        }

        .content {
            padding: 30px;
            color: #333333;
        }

        .content h2 {
            color: #111827;
        }

        .box {
            background: #f9fafb;
            padding: 15px;
            border-left: 4px solid #111827;
            margin: 20px 0;
        }

        .button {
            display: inline-block;
            background: #111827;
            color: #ffffff;
            padding: 12px 20px;
            text-decoration: none;
            border-radius: 6px;
            margin-top: 20px;
        }

        .footer {
            text-align: center;
            font-size: 12px;
            color: #888;
            padding: 20px;
            border-top: 1px solid #eee;
        }
    </style>
</head>

<body>

<div class="container">

    <!-- HEADER -->
    <div class="header">
        <h1>Natta Cocinas</h1>
        <p>Diseño de cocinas personalizadas</p>
    </div>

    <!-- CONTENT -->
    <div class="content">

        <h2>Hola {{ $nombre }},</h2>

        <p>Gracias por confiar en nosotros. Hemos preparado tu propuesta personalizada según las indicaciones que nos has enviado.</p>

        <div class="box">
            <strong>Descripción del proyecto:</strong><br>
            {{ $descripcion }}
        </div>

        <p>Adjuntamos el PDF con todos los detalles de tu diseño.</p>
        <p>El equipo de Natta Cocinas revisará tu propuesta y se pondrá en breve en contacto contigo.</p>

        <p style="margin-top: 30px;">
            Si tienes cualquier duda, puedes responder a este correo.
        </p>

        <p>
            Un saludo,<br>
            <strong>Equipo Natta Cocinas</strong>
        </p>

    </div>

    <!-- FOOTER -->
    <div class="footer">
        © {{ date('Y') }} Natta Cocinas · Todos los derechos reservados<br>
        Este correo ha sido generado automáticamente.
    </div>

</div>

</body>
</html>