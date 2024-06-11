import { BiLogoJavascript } from 'react-icons/bi';
import { FaLaravel, FaGithub, FaLinkedin, FaJava, FaPhp, FaReact } from "react-icons/fa";
import { GrMysql } from 'react-icons/gr';
import { TbBrandTypescript } from 'react-icons/tb';
import { DiMongodb } from "react-icons/di";

export const projects = [

    {
        img: 'https://portfolio-image-s3.s3.eu-west-3.amazonaws.com/website.png',
        title: 'Website Miranda Hotel Laravel',
        desc: `Web para una cadena de hoteles realizada con Laravel y CSS, utilizando MySQL como base de datos.`,
        links: {
            github: 'https://github.com/ruben-dev98/miranda-web-laravel',
            deploy: 'http://13.36.173.2/'
        }
    },
    {
        img: 'https://portfolio-image-s3.s3.eu-west-3.amazonaws.com/dash.png',
        title: 'Dashboard Hotel Miranda',
        desc: `Proyecto realizado con React y Redux con Api propia, realizado para la gestión de un hotel.`,
        links: {
            github: 'https://github.com/ruben-dev98/Hotel-Miranda-Dashboard',
            deploy: 'http://dashboard-miranda-hotel.s3-website.eu-west-3.amazonaws.com/'
        }
    },
    {
        img: 'https://portfolio-image-s3.s3.eu-west-3.amazonaws.com/api.png',
        title: 'API Dashboard Hotel Miranda',
        desc: `API para la gestión de la aplicación de Dashboard Miranda Hotel realizada con Node, Express y MongoDB.`,
        links: {
            github: 'https://github.com/ruben-dev98/Node-Express',
            deploy: 'https://9fa3bmerkd.execute-api.eu-west-3.amazonaws.com/dev/'
        }
    },
    {
        img: 'https://portfolio-image-s3.s3.eu-west-3.amazonaws.com/gallery.png',
        title: 'Galería Imágenes',
        desc: `Proyecto realizado con React y Redux para mostrar fotos con la Api de Unplash.`,
        links: {
            github: 'https://github.com/ruben-dev98/My-Gallery-React',
            deploy: 'http://alphotogallery.s3-website.eu-west-3.amazonaws.com/'
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

export const social = [
    {
        link: 'https://github.com/ruben-dev98',
        icon: FaGithub

    },
    {
        link: 'https://www.linkedin.com/in/rub%C3%A9n-dopico-novo/',
        icon: FaLinkedin
    }

]

export const stack = [
    {
        name: 'PHP',
        icon: FaPhp
    },
    {
        name: 'Laravel',
        icon: FaLaravel
    },
    {
        name: 'JavaScript',
        icon: BiLogoJavascript
    },
    {
        name: 'TypeScript',
        icon: TbBrandTypescript
    },
    {
        name: 'React',
        icon: FaReact
    },
    {
        name: 'Java',
        icon: FaJava
    },
    {
        name: 'MySQL',
        icon: GrMysql
    },
    {
        name: 'MongoDB',
        icon: DiMongodb
    },

]

export const studies = [
    {
        org: 'Oxygen Academy & Recruiting',
        name: 'Training Fullstack Developer',
        date: 'Ene. 2024 - Feb. 2024',
        desc: 'Formación en el desarrollo de proyectos mentorizado por desarrolladores Senior'
    },
    {
        org: 'CIFP Rodolfo Ucha Piñeiro',
        name: 'Desarrollo de Aplicaciones Web',
        date: 'Sept. 2021 - Sept. 2022',
        desc: 'Formación en HTML, CSS, Javascript, PHP con Laravel y MySQL'
    },
    {
        org: 'CIFP Rodolfo Ucha Piñeiro',
        name: 'Desarrollo de Aplicaciones Multiplataforma',
        date: 'Sept. 2016 - Jun. 2020',
        desc: 'Formación en HTML, CSS, Java y MySQL'
    }
];

export const experiencie = [
    {
        org: 'Oxygen Workspace',
        name: 'Fullstack Developer',
        date: 'Feb. 2024 - Actualidad',
        desc: `Desarrollo de aplicación web de gestión hotelera.
        Programada individualmente de principio a fin: sitio web y panel de control (gestión de disponibilidad, reservas, habitaciones y usuarios)
        HTML, CSS Mobile First, JS con React, Typescript, Testing, SQL, PHP con Laravel.`
    },
    {
        org: 'Fundación Exponav',
        name: 'Prácticas Desarrollador Web',
        date: 'Abr. 2022 - Ene. 2023',
        desc: `Maquetación ATOM (Aplicación Web escrita con Symfony y PHP basada en estandares de descripción archivística).
        Refactorización del código de aplicaciones con el lenguaje PHP.
        Desarrollo del front end y back end de una aplicación para visitas al museo con audios, con vistas para administración y usuarios final. HTML, CSS, JS y PHP`
    },
    {
        org: 'MiChollo',
        name: 'Prácticas Desarrollador Web',
        date: 'Ene. 2021 - Abr. 2021',
        desc: 'Refactorización del código de la API, para crear puntos de llamada que son utilizados en la parte cliente.'
    }
];