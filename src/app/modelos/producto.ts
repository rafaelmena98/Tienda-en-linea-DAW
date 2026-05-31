import { Injectable } from '@angular/core';
import { producto } from '../modelos/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  private productos: producto[] = [
    {
      id: 1,
      nombre: 'Laptop',
      precio: 850,
      descripcion: 'Laptop para trabajo y estudio',
      imagen: 'https://via.placeholder.com/300x200'
    },
    {
      id: 2,
      nombre: 'Audífonos',
      precio: 45,
      descripcion: 'Audífonos inalámbricos',
      imagen: 'https://via.placeholder.com/300x200'
    },
    {
      id: 3,
      nombre: 'Mouse',
      precio: 20,
      descripcion: 'Mouse ergonómico',
      imagen: 'https://via.placeholder.com/300x200'
    }
  ];

  obtenerProductos(): Producto[] {
    return this.productos;
  }
}

export { producto };
