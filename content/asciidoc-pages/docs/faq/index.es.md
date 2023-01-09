---
title: 'Frequently Asked Questions'
authors: eddumelendez, czelabueno, jdluna, raulmj, tellison, gdams
---

Hemos reunido unas cuantas preguntas frecuentes (FAQs) en este documento.
Si quieres conversar con nosotros sobre estos tópicos, o realizar preguntas adicionales 
el mejor lugar es vía [Slack](/slack) o levantando un issue en el
[canal de soporte](https://github.com/adoptium/adoptium-support).

## ¿Dónde están los últimos JDK de Adoptium&reg;?

Adoptium JDK se llama Eclipse Temurin, y las versiones que recomendamos para su
uso están disponibles en nuestra [última página de versiones](/temurin/releases/).

También contamos con todos los gestores de instalación más populares de Java, como:
[Homebrew](https://formulae.brew.sh/cask/temurin), [SDKMAN](https://sdkman.io/),
[winget](https://github.com/microsoft/winget-cli), y [Chocolatey](https://chocolatey.org/), nosotros aparecemos en
[Imágenes docker oficiales](https://hub.docker.com/_/eclipse-temurin), y ud puede usar Temurin mediante el Github
["setup-java"](https://github.com/marketplace/actions/setup-java-jdk#basic)
action, y parte del soporte de Java de los proveedores de la nube.

Los instaladores de Linux están disponibles en packages.adoptium.net. Para más
información ver link:/installation/linux[esta guía].

Sí. Los binarios de Eclipse Temurin son proporcionados para su uso sin ningún costo por Adoptium, por siempre, bajo los términos de la "GNU General Public License, version 2 with the
Classpath Exception". Usted puede utilizar, modificar y compartir libremente el código como se describe en las licencias incluidas en la descarga.

## ¿Cómo puedo ayudar en el proyecto?

El equipo de Adoptium ayuda en muchas maneras. Por ejemplo:

* Cualquiera puede contribuir a los fondos que mantienen a la ejecución del proyecto, o
como [única donación](https://www.eclipse.org/donate/adoptium/) o a través de un
link:/sponsors[patrocinio de proyectos] más estructurado.

* Organizaciones que dependen de Adoptium son bienvenidos a unirse
[Adoptium Working Group](/members) y ganar una voz en la dirección del proyecto.

* Recibimos apoyo técnico y creativo en el proyecto para avanzar en nuestras metas
a través de promociones y marketing, escribiendo blogs sobre experiencias con Adoptium,
respondiendo preguntas en nuestro [Comunidad de Slack activa](/slack), ayudando en 
las pruebas de software y diagnosticando problemas, y 
[solucionando algunos issues](/docs/first-timer-support) que han sido reportados.

* Muchas otras formas ya sea como única aventura o miembro de equipo a largo plazo, únete 
y comparte tus ideas!

## ¿Por cuánto tiempo será soportado Eclipse Temurin?

Nuestra frecuencia de release y nuestra declaración de soporte está disponible [aquí](/support).

## ¿Eclipse Temurin ha pasado el JCK?

Sí. Cada release de Temurin ha pasado el relevante Oracle Java Compatibility Kit (JCK)
para demostrar que es una implementación compatible de la especificación Java.
Adicionalmente, los releases de Temurin deben pasar el link:/aqavit[AQAvit quality verification suite]
para asegurarse que estan listos para su uso en producción. Las pruebas AQAvit verifican si el release muestra 
una gran rendimiento, seguridad, resiliencia y resistencia, y la habilidad de pasar una gran variedad de pruebas 
de compatibilidad de aplicaciones.

## ¿Dónde puedo reportar un error o problema con Eclipse Temurin?

Si sospecha que existe una vulnerabilidad de seguridad en cualquier producto del proyecto Adoptium, por favor, envíe un informe a [Equipo de Seguridad de Eclipse](https://www.eclipse.org/security/)
que gestionará y hará un seguimiento privado del problema hasta que se resuelva.

Cuando algo simplemente no se comporta como lo espera o tiene preguntas sobre
cómo configurar Temurin, por favor háganoslo saber públicamente abriendo un
[support issue](https://github.com/adoptium/adoptium-support/issues/new/choose) y trabajaremos con usted para encontrar una solución. Nuestro link de soporte es link:/support["soporte de comunidad"]
y los problemas se abordarán sobre la base del mejor esfuerzo. Debe dirigirse a las organizaciones que ofrecen soporte comercial si necesita un nivel de servicio garantizado para su uso en Java.
Tenemos una lista de variantes en nuestro
[repositorio oficial de Docker](https://hub.docker.com/_/eclipse-temurin) para asegurar que nosotros
respondemos a la entrega de nuevas imágenes que contienen Temurin. Los usuarios
que quieren una distribución de Linux en contenedores que no proporcionamos 
pueden seguir las instrucciones en [esta guia](/blog/2021/08/using-jlink-in-dockerfiles/).

## ¿Soportarán mi arquitectura y sistema operativo favoritos?

Eclipse Temurin tiene la gama más amplia de soporte a plataformas a través de las múltiples versiones de 
la API de Java. Cada nueva plataforma incurre en costos adicionales y de
demanda en los recursos del proyecto, asi que constantemente
revisamos la demanda por descargas y uso para asegurarnos que estamos liberando en plataformas relevantes hacia 
un gran grupo de usuarios. El conjunto actual de plataformas al que nos dirigimos en nuestros procesos de prueba 
y build está listado [aquí](/supported-platforms).

## ¿Puedo automatizar la descarga de los binarios de Temurin?

Sí! Se cuenta con una [API](https://api.adoptium.net/q/swagger-ui/)
que Adoptium provee para la descarga de Eclipse Temurin. Usando la API es posible obtener
información sobre las últimas compilaciones de Temurin, y obtenerlas en tu propia
aplicación.

## ¿Qué significa el nombre de "Eclipse Temurin"?

Este es el nombre del proyecto y la marca para los binarios producidos por la Fundación
de Eclipse.
Mientras apreciamos que la separación del nombre Adoptium/Temurin es más confusa que solamente
"Adoptium", esto es similar a como otros fabricantes nombran sus binarios, por ejemplo, Amazon
tiene Corretto, Azul tiene Zulu (y otros). El proyecto "Adoptium" y grupo de trabajo se
ocupará de más que solo Temurin, asi que la distinción es importante de mencionar.

## ¿Qué pasó con AdoptOpenJDK?

Los desarrollos de AdoptOpenJDK se conocen ahora como "Eclipse Temurin by
Adoptium"([leer el blog post](/blog/2021/08/adoptium-celebrates-first-release/)).
Sin embargo, no te preocupes, a pesar de los cambios de marca, se tratan de los mismos procesos de desarrollo abiertos,
suites de prueba de AQAvit y principalmente el mismo equipo de producción que antes, 
pero hay [compañías mas grandes](/members) que aportan su experiencia
al grupo de trabajo.

Sin embargo, para garantizar una transición fluida, hemos dejado activo el antiguo sitio,
los enlaces a las últimas versiones en el antiguo sitio ahora le llevarán a la de
Temurin. Con el tiempo, el antiguo sitio web se retirará por completo.

Algunos elementos, como [Upstream builds](https://adoptopenjdk.net/upstream.html)
y [IcedTea-WEB](https://adoptopenjdk.net/icedtea-web.html) sólo están disponibles
a través de AdoptOpenJDK.

## ¿Donde están las compilaciones de OpenJ9?

La transición a Adoptiun significa que desafortunadamente no hemos sido capaz de continuar
distribuyendo Eclipse OpenJ9. IBM ahora lo ha tomado y están disponibles como
"[IBM Semeru](https://developer.ibm.com/languages/java/semeru-runtimes/)".
No hay necesidad de preocuparse acerca del cambio - sigue siendo libre.

## ¿Por qué el paquete no incluye IcedTea-Web?

Los acuerdos en los que nos movemos dentro de la Fundaóion Eclipse significan
que ya no podemos incluir IcedTea-Web en nuestros instaladores.
Sin embargo, Ud. todavía puede agregar la funcionalidad si lo necesita usar 
[instrucciones aquí](https://blog.adoptopenjdk.net/2018/10/using-icedtea-web-browser-plug-in-with-adoptopenjdk/).

## ¿Puede dar una charla sobre el proyecto?

Las personas involucradas en el proyecto son apasionados de promover y estamos interesados
de encontrar caminos para promover el trabajo que hacemos en Adoptium y con los binarios de
Temurin, asi que siéntase libre de contactarnos si tienes un público que desees que nosotros participemos y veremos que podemos hacer. En general contactar al equipo via Slack es la mejor forma de acercarse.
