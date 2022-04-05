FROM php:8.1.1-fpm
RUN apt-get update

# zip unzip install
RUN apt-get -y update && apt-get --no-install-recommends install -y \
    zip \
    unzip \
    libfreetype6-dev \
    libjpeg62-turbo-dev \
    libpng-dev \
    libwebp-dev \
    libpq-dev \
    libmcrypt-dev \
    libicu-dev \
    libonig-dev \
    curl \
    gnupg

RUN docker-php-ext-configure gd --with-freetype --with-jpeg --with-webp \
&& docker-php-ext-install -j$(nproc) gd intl mbstring exif mysqli pdo_mysql opcache 

# Xdebug install
RUN pecl install xdebug && docker-php-ext-enable xdebug

# composer install
RUN php -r "copy('https://getcomposer.org/installer', 'composer-setup.php');" \
&& php -r "if (hash_file('sha384', 'composer-setup.php') === '906a84df04cea2aa72f40b5f787e49f22d4c2f19492ac310e8cba5b96ac8b64115ac402c8cd292b8a03482574915d1a8') { echo 'Installer verified'; } else { echo 'Installer corrupt'; unlink('composer-setup.php'); } echo PHP_EOL;" \
&& php composer-setup.php \
&& mv composer.phar /usr/local/bin/composer

# npm install
RUN curl -sL https://deb.nodesource.com/setup_16.x | bash -
RUN apt-get install -y nodejs
RUN npm install npm@latest -g