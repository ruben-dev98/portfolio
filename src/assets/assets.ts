export const projects = [
    {
        title: 'Galería Imágenes API Unplash',
        desc: `Proyecto realizado con React y Redux para mostrar fotos con la Api de Unplash.
        En esta aplicación se pueden guardar las fotos que tu quieras en favoritos, 
        buscar con el buscador en la propia Api de Unplash o por descripción en tus fotos guardadas.
        Cuando se encuentre en sus fotos guardadas podrá ordenarlas por diferentes categorías como los likes o su tamaño, tanto horizontal como vetical.
        Se incluye paginación a la hora de buscar en la Api o en la página para las fotos guardadas.`,
        links: {
            github: 'https://github.com/ruben-dev98/My-Gallery-React',
            deploy: 'http://alphotogallery.s3-website.eu-west-3.amazonaws.com/'
        }
    },
    {
        title: 'Dashboard Hotel Miranda',
        desc: `Proyecto realizado con React y Redux con Api propia, realizado para la gestión de un hotel.
        Consta de un sistema de autentificación por medio de un JWT (Json Web Token)
        que solo le será concedido a los empleados que estén registrados en la base de datos, realizada con MongoDB.
        En esta aplicación se puede realizar la alta de Habitaciones, Empleados o Reservas,
        como su posterior edición o eliminación si fuese necesario, con su correspondiente feedback al usuario.
        Todo esto controlado por la Api que fue realizada con Express y Node.`,
        links: {
            github: 'https://github.com/ruben-dev98/Hotel-Miranda-Dashboard',
            deploy: 'http://dashboard-miranda-hotel.s3-website.eu-west-3.amazonaws.com/'
        }
    },
    {
        title: 'Website Miranda Hotel',
        desc: `Web para una cadena de hoteles realizado con HTML, CSS y JS.
        Se utilizaron librerías como SwiperJS para realizar carruseles de imágenes para poder visualizar diferentes habitaciones del hotel.
        Consta de diferentes páginas estáticas que muestran curiosidades e información del hotel, que fueron cambiados a dinámicos en la siguiente implementación.`,
        links: {
            github: 'https://github.com/ruben-dev98/Hotel-Miranda-Website',
            deploy: 'https://ruben-dev98.github.io/Hotel-Miranda-Website/'
        }
    },
    {
        title: 'Website Miranda Hotel Laravel',
        desc: `Web para una cadena de hoteles realizada con Laravel y CSS.
        Se utilizaron librerías como SwiperJS para realizar carruseles de imágenes para poder visualizar diferentes habitaciones del hotel.
        Consta de diferentes páginas dinámicas que muestran curiosidades e información del hotel,`,
        links: {
            github: 'https://github.com/ruben-dev98/miranda-web-laravel',
            deploy: 'http://13.36.173.2/'
        }
    },
    {
        title: 'API Dashboard Hotel Miranda',
        desc: `API para la gestión de la aplicación de Dashboard Miranda Hotel realizada con Node, Express y MongoDB.
        En esta aplicación se realizaron endpoints para poder visualizar, editar, añadir y borrar los diferentes modelos de la base de datos.
        Como por ejemplo los empleados o las habitaciones de dicho hotel.`,
        links: {
            github: 'https://github.com/ruben-dev98/Node-Express',
            deploy: 'https://9fa3bmerkd.execute-api.eu-west-3.amazonaws.com/dev/'
        }
    },
]

export const aboutMe = `Soy un Desarrollador Web Fullstack Junior y actualmente estoy desarrollando proyectos web trabajando a diario con programadores senior. 
Me gusta desarrollar código tanto en front end como en back end aunque tiendo a aportar más en desarrollos que impliquen utilizar lógica de programación.
El stack tecnológico que utilizo es JS con React, PHP con Laravel y Java.
También trabajo con Typescript y Testing (Unitario y Cypress). Puedo maquetar sitios web totalmente responsive (FlexBox, SaaS, …) 
y he desarrollado proyectos con bases de datos relacionales (SQL) y no relacionales (Mongo). Para el despliegue de mis proyectos utilizo AWS.
Tengo experiencia desarrollando proyectos para turismo, ocio…`;

export const contact = {
    email: 'ruben.dopico.dev@gmail.com',
    tlfo: '620734859'
}

export const moreAboutMe = {
    linkedin: 'https://www.linkedin.com/in/rub%C3%A9n-dopico-novo/',
    github: 'https://github.com/ruben-dev98'
}