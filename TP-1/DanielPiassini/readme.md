En PHP se resuelve la autenticación de la APP con facebook.
El archivo "fbsession.php" contiene los datos de la APP para conseguir el access_token del usuario.

Dentro del archivo PHP es necesario que se complete $url con la url del sitio, ya que la misma se le pasará
a facebook como callback para la autenticación.

La APP de facebook se encuentra en modo desarollo por lo que la autenticación sólo funcionará en localhost.
 