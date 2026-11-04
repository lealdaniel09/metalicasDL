export type CategoriaProyecto = 'todos' | 'portones' | 'estructuras' | 'ornamentacion' | 'cubiertas';

export interface EspecificacionTecnica {
    calibre?: string;          // Ej: "Calibre 18"
    perfiles?: string;         // Ej: "Ángulo 3/4 x 1/8", "Tubo estructural 2x1"
    soldadura?: string;        // Ej: "Electrodo 6013", "7018"
    acabado?: string;          // Ej: "Fondo anticorrosivo + esmalte sintético"
}

export interface ProyectoMetalico {
    id: string;
    titulo: string;
    categoria: CategoriaProyecto;
    descripcionCorta: string;
    descripcionDetallada: string;
    imagenPrincipal: string;
    galeria?: string[];
    especificaciones: EspecificacionTecnica;
    destacado: boolean;
}