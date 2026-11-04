import { ProyectoMetalico } from '../../models/project.model';

export const PROYECTOS_INICIALES: ProyectoMetalico[] = [
    {
        id: 'porton-diamantado-01',
        titulo: 'Portón Diamantado Residencial',
        categoria: 'portones',
        descripcionCorta: 'Portón de seguridad con tableros diamantados a mano y anticorrosivo.',
        descripcionDetallada: 'Fabricación de 20 m² en lámina con formación de diamante a golpe y plegado, perfilería reforzada y cerradura de seguridad integrada.',
        imagenPrincipal: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80',
        especificaciones: {
            calibre: 'Lámina Calibre 18',
            perfiles: 'Tubo 2x1 chapa y marco en cajón 3x1 1/2',
            soldadura: 'Electrodo 6013 cordón continuo',
            acabado: 'Doble capa anticorrosivo automotriz negro mate'
        },
        destacado: true
    },
    {
        id: 'cerchas-estructurales-02',
        titulo: 'Cerchas Estructurales para Cubierta',
        categoria: 'estructuras',
        descripcionCorta: 'Juego de 12 cerchas de alta resistencia para bodega/galpón.',
        descripcionDetallada: 'Estructuras triangulares armadas con cordón superior e inferior en ángulo rígido, celosía en varilla corrugada para soportar teja de zinc y cargas de viento.',
        imagenPrincipal: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80',
        especificaciones: {
            perfiles: 'Ángulo estructural de 3/4 x 1/8',
            soldadura: 'Electrodo 7018 estructural en uniones de carga',
            acabado: 'Fondo de cromato de zinc'
        },
        destacado: true
    },
    {
        id: 'rejas-ornamentales-03',
        titulo: 'Rejas de Ventana y Pasamanos',
        categoria: 'ornamentacion',
        descripcionCorta: 'Ornamentación tradicional con diseño geométrico y alta seguridad.',
        descripcionDetallada: 'Protecciones exteriores para ventanas y pasamanos de escalera con remates pulidos sin rebaba.',
        imagenPrincipal: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80',
        especificaciones: {
            perfiles: 'Cuadrado macizo 1/2" y platinas de anclaje',
            soldadura: '6013 pulido fino',
            acabado: 'Pintura electrostática negra'
        },
        destacado: false
    },
    {
        id: 'ventana-corredera-campo-04',
        titulo: 'Ventana Estructural con Fijo y Corredera',
        categoria: 'ornamentacion',
        descripcionCorta: 'Estructura robusta en marco doble con panel fijo y sistema de corredera para máxima ventilación.',
        descripcionDetallada: 'Diseño de alta seguridad fabricado a medida para casa de campo. Integra un marco doble reforzado y un sistema híbrido con perfil en T que permite alojar un paño de vidrio fijo y una hoja basculante de corredera, optimizando la entrada de luz y el flujo de aire sin comprometer la protección.',
        imagenPrincipal: 'trabajos/ventana-campo.jpg',
        especificaciones: {
            calibre: 'Calibre 18 estructural en toda la pieza',
            perfiles: 'Tubo rectangular 2" x 1 1/2", tubo cuadrado 1" x 1" y perfil T económica',
            soldadura: 'Aplicación de alta penetración para marco doble',
            acabado: 'Esmalte negro de alta protección e intemperie'
        },
        destacado: true
    },
    {
        id: 'reforma-porton-cnc',
        titulo: 'Reforma de Portón con Tableros CNC',
        categoria: 'portones',
        descripcionCorta: 'Modernización de portón existente adaptando paneles decorativos de corte láser.',
        descripcionDetallada: 'Exigente trabajo de reforma estructural. Se tomaron medidas exactas para cortar y adaptar un portón existente en calibre 18, logrando encajar a la perfección tableros troquelados CNC con diseño de rosas. El proceso incluyó escuadres precisos, dobleces a medida y un masillado automotriz impecable para entregarlo listo para la pintura del cliente.',
        imagenPrincipal: 'trabajos/antes-despues-cnc.jpg',
        especificaciones: {
            calibre: 'Calibre 18 en estructura y tableros',
            perfiles: 'Adaptación sobre marco existente',
            soldadura: '6013 con pulido fino de uniones',
            acabado: 'Masillado automotriz nivelado (listo para pintar)'
        },
        destacado: true
    }, {
        id: 'proceso-fabricacion-tableros',
        titulo: 'Fabricación Manual de Tableros a Medida',
        categoria: 'portones',
        descripcionCorta: 'Proceso técnico y artesanal de armado, soldado y preparación de tableros troquelados.',
        descripcionDetallada: 'En Metálicas DL la calidad comienza desde cero. Esta pieza demuestra nuestro proceso de fabricación manual de tableros empotrados a medida. Realizamos cortes precisos, soldadura de alta resistencia y una aplicación detallada de masilla automotriz en cada unión para garantizar una superficie perfectamente nivelada y lisa antes de aplicar el fondo anticorrosivo.',
        imagenPrincipal: 'trabajos/proceso-tableros.jpg',
        especificaciones: {
            calibre: 'Lámina lisa y perfilería Calibre 18',
            perfiles: 'Armado de bastidor interno a medida',
            soldadura: 'Puntos de anclaje y cordones de fijación 6013',
            acabado: 'Masillado automotriz y pulido manual (Fase de preparación)'
        },
        destacado: false
    },
    {
        id: 'puerta-lujo-escala-proceso',
        titulo: 'Puerta de Lujo con Tableros en Escala',
        categoria: 'portones',
        descripcionCorta: 'Puerta residencial fabricada a mano desde cero con múltiples tableros y re-enmarcados en escala.',
        descripcionDetallada: 'Un completo trabajo que demuestra el proceso artesanal y técnico de nuestro taller. Desde la fabricación manual de cada tablero en calibre 18, el detallado masillado automotriz en las uniones para garantizar una superficie lisa, hasta el acabado final con esmalte negro brillante. La estructura cuenta con tubo rectangular de 3" x 1 1/2" y re-enmarcados en escala con tubo de 3/4" que le otorgan un relieve único.',
        imagenPrincipal: 'trabajos/puerta-lujo-final.jpg',
        galeria: [
            'trabajos/puerta-lujo-final.jpg',     // Foto final terminada
            'trabajos/proceso-tableros.jpg',       // El detrás de escena en los burros (image_26.png)
            'trabajos/puertas-lujo-habitacion.jpg' // Variación o perspectiva del taller (image_24.png)
        ],
        especificaciones: {
            calibre: 'Calibre 18 de alta resistencia (armado y chapa)',
            perfiles: 'Tubo rectangular 3" x 1 1/2" y re-enmarcado 3/4"',
            soldadura: 'Armado técnico con pulido invisible',
            acabado: 'Masillado automotriz de uniones y esmalte negro brillante premium'
        },
        destacado: true
    }
];