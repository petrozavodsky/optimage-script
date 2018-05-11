##Перед началом3

Необходимо установить nodejs

для Debian это можно сделать так:

`curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -`
`sudo apt-get install -y nodejs`

[Для других дистрибутивов](https://nodejs.org/en/download/package-manager/).

**Установка**

Находим корневой каталог сайта, это то в котором присутствует файл `wp-config.php`
Далее в консоле набираем команду

`git clione git@github.com:petrozavodsky/optimage-script.git`

Клонировать этот репозиторий на сервер.

Далее 

`npm i`

и

`gulp images`        


Спустя какое нежолгое время вывод в консоле будет такой


`Finished 'images' after 6.9 min`

Это будет означать что картинки оптимизированы успешно


### Удаление скриптов с сервера ###

В консоле

`sudo apt-get remove -y nodejs`


из корневого каталога сайта

`rm -rf node_modules gulpfile.js package.json package-lock.json`