import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Productos } from '../../servicios/productos';
import { producto } from '../../modelos/producto';

@Component({
  selector: 'app-products',
  imports: [CommonModule],
  templateUrl: './products.html',
  styleUrl: './products.css'
})
export class ProductsComponent {
  productos: producto[] = [];

  constructor(private productosService: Productos) {
    this.productos = this.productosService.obtenerProductos();
  }
}
