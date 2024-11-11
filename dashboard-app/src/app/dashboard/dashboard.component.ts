import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatBadgeModule } from '@angular/material/badge';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatFormFieldModule } from '@angular/material/form-field';

interface NavItem {
  id: string;
  label: string;
  icon: string;
  hasIndicator?: boolean;
}

interface Product {
  name: string;
  category: string;
  image: string;
  stock: number;
  price: number;
}

interface Order {
  id: string;
  client: string;
  date: string;
  amount: number;
  status: string;
}

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    MatIconModule,
    MatButtonModule,
    MatBadgeModule,
    MatCardModule,
    MatTableModule,
    MatMenuModule,
    MatPaginatorModule,
    MatSelectModule,
    MatButtonToggleModule,
    MatFormFieldModule
  ],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  navItems: NavItem[] = [
    { id: 'overview', label: 'Overview', icon: 'insights' },
    { id: 'products', label: 'Products', icon: 'inventory' },
    { id: 'users', label: 'Users', icon: 'group' },
    { id: 'orders', label: 'Orders', icon: 'local_shipping', hasIndicator: true }
  ];

  activeItem = 'overview';
  currentDate = new Date();
  monthlySales = 125000;
  websiteTraffic = 45678;
  
  products: Product[] = [
    {
      name: 'Product A',
      category: 'Electronics',
      image: '/assets/images/product-a.jpg',
      stock: 8,
      price: 299.99
    },
    {
      name: 'Product B',
      category: 'Accessories',
      image: '/assets/images/product-b.jpg',
      stock: 15,
      price: 149.99
    }
  ];

  orders: Order[] = [
    {
      id: 'ORD-2024-001',
      client: 'Acme Corporation',
      date: '2024-03-15',
      status: 'Processing',
      amount: 1250.00
    },
    {
      id: 'ORD-2024-002',
      client: 'TechStart Inc',
      date: '2024-03-14',
      status: 'Shipped',
      amount: 850.00
    }
  ];

  orderColumns = ['id', 'client', 'date', 'amount', 'status', 'actions'];

  constructor() {}

  ngOnInit(): void {
    // Initialize any necessary data or make API calls
  }

  setActiveItem(itemId: string): void {
    this.activeItem = itemId;
  }
}
