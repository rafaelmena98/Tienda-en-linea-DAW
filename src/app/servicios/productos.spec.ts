import { Injectable } from '@angular/core';
import { Producto } from '../modelos/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  private productos: Producto[] = [
    {
      id: 1,
      nombre: 'Laptop Lenovo IdeaPad',
      descripcion: 'Laptop para estudio, trabajo y navegación diaria.',
      precio: 650,
      imagen: 'https://via.placeholder.com/250',
      stock: 10,
      categoria: 'Tecnología'
    },
    {
      id: 2,
      nombre: 'Mouse Inalámbrico Logitech',
      descripcion: 'Mouse ergonómico inalámbrico con conexión USB.',
      precio: 25,
      imagen: 'https://via.placeholder.com/250',
      stock: 30,
      categoria: 'Accesorios'
    },
    {
      id: 3,
      nombre: 'Audífonos Bluetooth',
      descripcion: 'Audífonos inalámbricos con sonido estéreo.',
      precio: 45,
      imagen: 'https://via.placeholder.com/250',
      stock: 20,
      categoria: 'Audio'
    }
  ];

  obtenerProductos(): Producto[] {
    return this.productos;
  }

  obtenerProductoPorId(id: number): Producto | undefined {
    return this.productos.find(producto => producto.id === id);
  }
}
