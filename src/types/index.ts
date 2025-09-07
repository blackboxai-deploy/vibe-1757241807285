export interface User {
  id: string;
  email: string;
  name: string;
  role: 'admin' | 'manager' | 'employee';
  avatar?: string;
  department?: string;
  joinDate?: string;
  phone?: string;
  status: 'active' | 'inactive';
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
}

export interface Product {
  id: string;
  name: string;
  sku: string;
  category: string;
  price: number;
  stock: number;
  minStock: number;
  description?: string;
  image?: string;
  status: 'active' | 'inactive';
  lastUpdated: string;
}

export interface Order {
  id: string;
  customerId: string;
  customerName: string;
  items: OrderItem[];
  total: number;
  status: 'pending' | 'processing' | 'completed' | 'cancelled';
  orderDate: string;
  deliveryDate?: string;
}

export interface OrderItem {
  productId: string;
  productName: string;
  quantity: number;
  price: number;
  total: number;
}

export interface Customer {
  id: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  company?: string;
  totalOrders: number;
  totalSpent: number;
  lastOrderDate?: string;
}

export interface DashboardStats {
  totalSales: number;
  totalOrders: number;
  totalProducts: number;
  totalUsers: number;
  lowStockAlerts: number;
  pendingOrders: number;
  monthlyRevenue: number;
  weeklyGrowth: number;
}

export interface SalesData {
  month: string;
  sales: number;
  orders: number;
}

export interface ActivityLog {
  id: string;
  userId: string;
  userName: string;
  action: string;
  details: string;
  timestamp: string;
  type: 'info' | 'warning' | 'error' | 'success';
}

export interface NavItem {
  name: string;
  href: string;
  icon: string;
  badge?: number;
  children?: NavItem[];
}