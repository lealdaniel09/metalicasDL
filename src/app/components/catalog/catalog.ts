import { Component, inject, signal } from '@angular/core';
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
  // Inyección de dependencias moderna
  private readonly projectService = inject(ProjectService);

  // Exponer Signals reactivos a la plantilla
  readonly proyectos = this.projectService.proyectosFiltrados;
  readonly categoriaActiva = this.projectService.categoriaSeleccionada;

  // Estado local para el modal de detalle del trabajo
  readonly proyectoSeleccionado = signal<ProyectoMetalico | null>(null);

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

  generarMensajeWhatsApp(titulo: string): string {
    const texto = `Hola, vi el proyecto "${titulo}" en la página web de Metálicas DL y quiero cotizar algo similar.`;
    return `https://wa.me/573219313559?text=${encodeURIComponent(texto)}`;
  }
}