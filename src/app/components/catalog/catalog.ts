import { Component, HostListener, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectService } from '../../core/services/project.service';
import { CategoriaProyecto, ProyectoMetalico } from '../../models/project.model';

@Component({
  selector: 'app-catalog',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './catalog.html',
  styleUrl: './catalog.scss'
})
export class CatalogComponent {
  private readonly projectService = inject(ProjectService);

  // Exponer Signals reactivos a la plantilla
  readonly proyectos = this.projectService.proyectosFiltrados;
  readonly categoriaActiva = this.projectService.categoriaSeleccionada;

  // Estado local para el modal de detalle del trabajo
  readonly proyectoSeleccionado = signal<ProyectoMetalico | null>(null);

  // Estado local para el visor Lightbox (pantalla completa)
  readonly visorImagenes = signal<string[]>([]);
  readonly indiceVisor = signal<number>(0);

  // Lista de categorías para los botones de filtrado
  readonly categorias: { id: CategoriaProyecto; label: string }[] = [
    { id: 'todos', label: 'Todos los Trabajos' },
    { id: 'portones', label: 'Portones & Puertas' },
    { id: 'estructuras', label: 'Estructuras & Cerchas' },
    { id: 'ornamentacion', label: 'Ornamentación & Rejas' }
  ];

  cambiarCategoria(cat: CategoriaProyecto): void {
    this.projectService.setCategoria(cat);
  }

  abrirDetalle(proyecto: ProyectoMetalico): void {
    this.proyectoSeleccionado.set(proyecto);
  }

  cerrarDetalle(): void {
    this.proyectoSeleccionado.set(null);
  }

  // Abre el visor en pantalla completa desde la tarjeta o desde el modal
  abrirVisor(proyecto: ProyectoMetalico, indiceInicial = 0): void {
    const imagenes = (proyecto.galeria && proyecto.galeria.length > 0)
      ? proyecto.galeria
      : [proyecto.imagenPrincipal];

    this.visorImagenes.set(imagenes);
    this.indiceVisor.set(indiceInicial);
  }

  cerrarVisor(): void {
    this.visorImagenes.set([]);
    this.indiceVisor.set(0);
  }

  anteriorFotoVisor(event: Event): void {
    event.stopPropagation();
    const total = this.visorImagenes().length;
    if (total > 1) {
      this.indiceVisor.update(i => (i - 1 + total) % total);
    }
  }

  siguienteFotoVisor(event: Event): void {
    event.stopPropagation();
    const total = this.visorImagenes().length;
    if (total > 1) {
      this.indiceVisor.update(i => (i + 1) % total);
    }
  }

  // Permite cerrar con Escape o navegar con flechas en PC
  @HostListener('window:keydown', ['$event'])
  manejarTeclado(event: KeyboardEvent): void {
    if (this.visorImagenes().length > 0) {
      if (event.key === 'Escape') {
        this.cerrarVisor();
      } else if (event.key === 'ArrowLeft') {
        this.anteriorFotoVisor(event);
      } else if (event.key === 'ArrowRight') {
        this.siguienteFotoVisor(event);
      }
      return;
    }

    if (this.proyectoSeleccionado() && event.key === 'Escape') {
      this.cerrarDetalle();
    }
  }

  generarMensajeWhatsApp(titulo: string): string {
    const texto = `Hola, vi el proyecto "${titulo}" en la página web de Metálicas DL y quiero cotizar algo similar.`;
    return `https://wa.me/573219313559?text=${encodeURIComponent(texto)}`;
  }
}