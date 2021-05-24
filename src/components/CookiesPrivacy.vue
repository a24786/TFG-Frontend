<template>
  <div class="cookiesPrivacy">
        <h1>Política de privacidad</h1>
        <p>Esta política de privacidad establece cómo Local Website Design Inc. usa y protege cualquier información que usted proporcione a Local Website Design Inc. cuando utiliza este sitio web.</p>

        <p>Local Website Design Inc. se compromete a garantizar que su privacidad esté protegida. Si le solicitamos que proporcione cierta información mediante la cual pueda ser identificado al utilizar este sitio web, puede estar seguro de que solo se utilizará de acuerdo con esta declaración de privacidad.</p>

        <p>Local Website Design Inc. puede cambiar esta política de vez en cuando al actualizar esta página. Debe consultar esta página de vez en cuando para asegurarse de que está satisfecho con los cambios. Esta política es efectiva a partir del 1 de enero de 2014.</p>

        <h2>Lo que recolectamos</h2>
        <p>Podemos recopilar la siguiente información:</p>
        <ul>
            <li>Nombre y cargo.</li>
            <li>Información de contacto, incluida la dirección de correo electrónico.</li>
            <li>Información demográfica como código postal, preferencias e intereses.</li>
            <li>Otra información relevante para encuestas de clientes y/u ofertas.</li>
        </ul>

        <h2>Qué hacemos con la información que recopilamos</h2>
        <p>Requerimos esta información para comprender sus necesidades y brindarle un mejor servicio, y en particular por las siguientes razones:</p>
        <ul>
            <li>Mantenimiento de registros internos.</li>
            <li>Podemos utilizar la información para mejorar nuestros productos y servicios.</li>
            <li>Es posible que enviemos periódicamente correos electrónicos promocionales sobre nuevos productos, ofertas especiales u otra información que creemos que puede resultarle interesante utilizando la dirección de correo electrónico que nos ha proporcionado.</li>
            <li>De vez en cuando, también podemos utilizar su información para comunicarnos con usted con fines de investigación de mercado. Podemos comunicarnos con usted por correo electrónico, teléfono, fax o correo. Podemos utilizar la información para personalizar el sitio web de acuerdo con sus intereses.</li>
        </ul>

        <h2>Seguridad</h2>
        <p>Estamos comprometidos a garantizar que su información esté segura. Para evitar el acceso o la divulgación no autorizados, hemos implementado procedimientos físicos, electrónicos y administrativos adecuados para salvaguardar y asegurar la información que recopilamos en línea.</p>

        <h2>Como usamos las cookies</h2>
        <p>Una cookie es un pequeño archivo que solicita permiso para colocarse en el disco duro de su computadora. Una vez que acepta, se agrega el archivo y la cookie ayuda a analizar el tráfico web o le permite saber cuándo visita un sitio en particular. Las cookies permiten que las aplicaciones web le respondan como un individuo. La aplicación web puede adaptar sus operaciones a sus necesidades, gustos y disgustos al recopilar y recordar información sobre sus preferencias.</p>
        <p>Usamos cookies de registro de tráfico para identificar qué páginas se están utilizando. Esto nos ayuda a analizar datos sobre el tráfico de la página web y mejorar nuestro sitio web para adaptarlo a las necesidades del cliente. Solo usamos esta información con fines de análisis estadístico y luego los datos se eliminan del sistema.</p>
        <p>En general, las cookies nos ayudan a brindarle un mejor sitio web, al permitirnos monitorear qué páginas encuentra útiles y cuáles no. Una cookie de ninguna manera nos da acceso a su computadora ni a ninguna información sobre usted, aparte de los datos que elija compartir con nosotros.</p>
        <p>Puede optar por aceptar o rechazar las cookies. La mayoría de los navegadores web aceptan automáticamente las cookies, pero normalmente puede modificar la configuración de su navegador para rechazar las cookies si lo prefiere. Esto puede impedir que aproveche al máximo el sitio web.</p>

        <h2>Enlaces a otros sitios web</h2>
        <p>Nuestro sitio web puede contener enlaces a otros sitios web de interés. Sin embargo, una vez que haya utilizado estos enlaces para salir de nuestro sitio, debe tener en cuenta que no tenemos ningún control sobre ese otro sitio web. Por lo tanto, no podemos ser responsables de la protección y privacidad de cualquier información que usted proporcione mientras visita dichos sitios y dichos sitios no se rigen por esta declaración de privacidad. Debe tener cuidado y consultar la declaración de privacidad aplicable al sitio web en cuestión.</p>

        <h2>Controlando su información personal</h2>
        <p>Puede optar por restringir la recopilación o el uso de su información personal de las siguientes maneras:</p>
        <ul>
            <li>Siempre que se le solicite que complete un formulario en el sitio web, busque la casilla en la que puede hacer clic para indicar que no desea que nadie utilice la información con fines de marketing directo.</li>
            <li>Si previamente ha aceptado que usemos su información personal para fines de marketing directo, puede cambiar de opinión en cualquier momento escribiéndonos o enviándonos un correo electrónico a <a>info@localwebsitedesign.com</a>.</li>
        </ul>
        <p>No venderemos, distribuiremos ni cederemos su información personal a terceros a menos que tengamos su permiso o la ley nos exija hacerlo. Podemos utilizar su información personal para enviarle información promocional sobre terceros que creemos que puede resultarle interesante si nos dice que desea que esto suceda.</p>
        <p>Puede solicitar detalles de la información personal que tenemos sobre usted en virtud de la Ley de Protección de Datos de 1998. Se pagará una pequeña tarifa. Si desea una copia de la información que tenemos sobre usted, envíe un correo electrónico a <a>info@localwebsitedesign.com</a>.</p>
        <p>Si cree que la información que tenemos sobre usted es incorrecta o está incompleta, escríbanos o envíenos un correo electrónico lo antes posible a la dirección anterior. Corregiremos de inmediato cualquier información que resulte incorrecta.</p>
  </div>
</template>
<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Pattaya&family=Roboto:wght@300;400;500&display=swap');
</style>
<script>
export default {
  name: 'cookiesPrivacy',
  props: {
    msg: String
  },
  data() {
    return{
    }
  },
  methods : {
    submit(){   
      }
    },
    
}
</script>
<style> 
body {
  width: 100%;
  height: 100vh;
  margin: 0px;
  font-family: Roboto;
}

.cookiesPrivacy {
    width: 80%;
    text-align: justify;
    margin-left: 10%;
    line-height: 140%;
    font-family: Roboto;
    color: black;
}

a {
    color: deepskyblue;
}

p{
  color:black;
}

a:hover {
    text-decoration: underline;
    cursor: pointer;
}

</style>