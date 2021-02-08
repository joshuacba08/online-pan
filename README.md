# Online Pan
Online Pan es un ecommerce para la marca de panadería Melon Pan (ficticia). La propuesta busca desarrollar una plataforma ecommerce con todas las herramientas necesarias para que un negocio pueda promocionar y vender sus productos a través de internet. 

#### Ver página en http://melonpan.andersonoroya.tech/
## Para el desarrollo de la página se usó

| Dependencias | Documentación |
| ------ | ------ |
| React JS | https://reactjs.org/ |
| React Router DOM | https://reactrouter.com/web/guides/quick-start|
| react-modal | https://www.npmjs.com/package/react-modal |
| validator | https://www.npmjs.com/package/validator |

#### React Modal:
Quize implementar un paquete que agilice el desarrollo de modales para solo ocuparme del contenido. Fue una buena experiencia ya que aprendí a como instalarlos, leer la documentación y a usarlos.

#### Validator:
Respecto a react validator, lo implementé porque solucionó la forma de validar los campos del formulario sin necesidad de añadir expresiones regulares, ya que las dos variables que manejaba eran: colocar una expresión regular dentro del componente(lo cual ensuciaba mucho la lectura), o crear una función a parte para validar el form y luego exportarla e importarla.

*Para los estilos de la página no se incluyeron otras dependencias ya que consideré que con CSS3 era suficiente, también se hizo responsive.*

#### Enfoque:
- Se busca que los componentes sean completamente funcionales y que puedan ser versátiles para que se reutilicen lo más que puedan, evitando así crear muchos.
- Se trata siempre de dejar el código lo más limpio posible colocando las funciones en una carpeta llamada *helpers*.



##### Se finaliza el proyecto para el curso de React JS en CoderHouse