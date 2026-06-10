#!/usr/bin/env bash

echo "Instalando dependencias..."
composer install --no-dev --optimize-autoloader

echo "Generando APP_KEY si no existe..."
php artisan key:generate --show

echo "Cacheando configuración..."
php artisan config:cache
php artisan route:cache
php artisan view:cache

echo "Enlazando storage..."
php artisan storage:link

echo "Ejecutando migraciones..."
php artisan migrate --force