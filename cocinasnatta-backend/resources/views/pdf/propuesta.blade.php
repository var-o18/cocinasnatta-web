<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8">
    <title>Propuesta Cocinas Natta</title>
    <style>
        body {
            font-family: DejaVu Sans, sans-serif;
            margin: 0;
            color: #0a0a0a;
            background: #ffffff;
        }

        .header {
            background: #0a0a0a;
            color: white;
            text-align: center;
            padding: 40px 30px 35px 30px;
            border-bottom: 8px solid #c99a6b;
        }

        .header-line {
            width: 120px;
            height: 2px;
            background: #c99a6b;
            margin: 0 auto 18px auto;
        }

        .company-name {
            color: #ffffff;
            font-size: 32px;
            font-weight: bold;
            letter-spacing: 6px;
        }

        .company-subtitle {
            margin-top: 12px;
            color: #c99a6b;
            font-size: 14px;
            letter-spacing: 1px;
        }

        .document-type {
            margin-top: 20px;
            display: inline-block;
            border: 1px solid #c99a6b;
            color: white;
            padding: 8px 18px;
            font-size: 11px;
            letter-spacing: 2px;
        }

        .container {
            padding: 30px;
        }

        .intro-box {
            background: #f8f8f8;
            border-left: 5px solid #c99a6b;
            padding: 15px;
            margin-bottom: 30px;
            font-size: 13px;
            line-height: 1.6;
        }

        .section-title {
            color: #0a0a0a;
            font-size: 18px;
            font-weight: bold;
            margin-bottom: 15px;
            border-bottom: 2px solid #c99a6b;
            padding-bottom: 8px;
        }

        .info-card {
            border: 1px solid #dddddd;
            background: #ffffff;
            margin-bottom: 25px;
        }

        .info-header {
            background: #c99a6b;
            color: white;
            padding: 10px 15px;
            font-weight: bold;
            font-size: 14px;
        }

        .info-content {
            padding: 15px;
        }

        .row {
            margin-bottom: 10px;
        }

        .label {
            font-weight: bold;
            color: #c99a6b;
        }

        .value {
            color: #0a0a0a;
        }

        .description-box {
            background: #fafafa;
            border: 1px solid #e5e5e5;
            padding: 20px;
            line-height: 1.7;
            margin-bottom: 25px;
        }

        table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 10px;
        }

        th {
            background: #0a0a0a;
            color: white;
            padding: 12px;
            text-align: left;
            font-size: 13px;
        }

        td {
            padding: 10px;
            border: 1px solid #e5e5e5;
            font-size: 12px;
        }

        tr:nth-child(even) {
            background: #f7f7f7;
        }

        .summary-box {
            margin-top: 25px;
            border: 1px solid #c99a6b;
            background: #fffaf5;
            padding: 15px;
        }

        .summary-title {
            color: #c99a6b;
            font-weight: bold;
            margin-bottom: 8px;
        }

        .footer {
            margin-top: 40px;
            background: #0a0a0a;
            color: white;
            text-align: center;
            padding: 18px;
            font-size: 11px;
            border-top: 4px solid #c99a6b;
        }
    </style>
</head>

<body>
    <div class="header">
        <div class="header-line"></div>
        <div class="company-name">
            COCINAS NATTA
        </div>
        <div class="company-subtitle">
            Diseño de cocinas a medida · Calidad · Elegancia · Funcionalidad
        </div>
        <div class="document-type">
            PROPUESTA PERSONALIZADA
        </div>
    </div>

    <div class="container">

        <div class="intro-box">
            Gracias por confiar en Cocinas Natta.
            Este documento recoge la información inicial de su proyecto para que nuestro equipo pueda elaborar una propuesta personalizada.
        </div>

        <div class="section-title">
            Información de la empresa
        </div>

        <div class="info-card">
            <div class="info-header">
                Cocinas Natta
            </div>

            <div class="info-content">

                <div class="row">
                    <span class="label">Teléfono:</span>
                    <span class="value">966 75 21 39</span>
                </div>

                <div class="row">
                    <span class="label">Correo:</span>
                    <span class="value">info@cocinasnatta.com</span>
                </div>

                <div class="row">
                    <span class="label">Dirección:</span>
                    <span class="value">C/ Casas Nuevas, 03369 El Badén, Alicante</span>
                </div>

            </div>
        </div>

        <div class="section-title">
            Información del cliente
        </div>

        <div class="info-card">
            <div class="info-header">
                Datos de contacto
            </div>

            <div class="info-content">
                <div class="row">
                    <span class="label">Nombre:</span>
                    <span class="value">{{ $nombre }}</span>
                </div>

                <div class="row">
                    <span class="label">Correo:</span>
                    <span class="value">{{ $email }}</span>
                </div>

                <div class="row">
                    <span class="label">Teléfono:</span>
                    <span class="value">{{ $telefono }}</span>
                </div>
            </div>
        </div>

        <div class="section-title">
            Descripción del proyecto
        </div>
        <div class="description-box">
            {{ $descripcion }}
        </div>

        <div class="section-title">
            Elementos incluidos
        </div>

        <table>
            <thead>
                <tr>
                    <th>Elemento</th>
                    <th>Cantidad</th>
                </tr>
            </thead>    

            <tbody>
                @forelse(($elementos ?? []) as $item)
                    <tr>
                        <td>{{ $item['nombre'] }}</td>
                        <td>{{ $item['cantidad'] }}</td>
                    </tr>
                    @empty
                    <tr>
                        <td colspan="2">No hay elementos seleccionados</td>
                    </tr>
                @endforelse
            </tbody>
        </table>

        <!-- TODO: Aqui debe de ir la imagen del diseño -->

        <div class="summary-box">
            <div class="summary-title">
                Resumen
            </div>
            Esta propuesta ha sido registrada correctamente y será revisada por nuestro equipo comercial.
            Nos pondremos en contacto con usted para continuar con el desarrollo de su proyecto.
        </div>
    </div>

    <div class="footer">
        Cocinas Natta · Diseño y calidad en cada detalle
    </div>

</body>

</html>