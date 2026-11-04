import { Injectable, computed, signal } from '@angular/core';
import { CategoriaProyecto, ProyectoMetalico } from '../../models/project.model';
import { PROYECTOS_INICIALES } from '../data/projects.data';

@Injectable({
    providedIn: 'root'
})
export class ProjectService {
    private readonly _proyectos = signal<ProyectoMetalico[]>(PROYECTOS_INICIALES);
    readonly categoriaSeleccionada = signal<CategoriaProyecto>('todos');

    readonly proyectosFiltrados = computed(() => {
        const categoria = this.categoriaSeleccionada();
        const lista = this._proyectos();

        if (categoria === 'todos') {
            return lista;
        }
        return lista.filter(p => p.categoria === categoria);
    });

    setCategoria(categoria: CategoriaProyecto): void {
        this.categoriaSeleccionada.set(categoria);
    }

    obtenerProyectoPorId(id: string): ProyectoMetalico | undefined {
        return this._proyectos().find(p => p.id === id);
    }
}