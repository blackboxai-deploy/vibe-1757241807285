'use client';

import { DashboardLayout } from '@/components/navigation/dashboard-layout';
import { ProtectedRoute } from '@/components/auth/protected-route';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

// Mock users data
const mockUsers = [
  {
    id: '1',
    email: 'admin@airextech.in',
    name: 'Admin User',
    role: 'admin',
    avatar: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/42506788-7170-444c-9805-2ca9d324e08a.png',
    department: 'Management',
    joinDate: '2020-01-15',
    phone: '+91 98765 43210',
    status: 'active',
    lastLogin: '2024-01-15T10:30:00Z',
  },
  {
    id: '2', 
    email: 'manager@airextech.in',
    name: 'Sales Manager',
    role: 'manager',
    avatar: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/a505cec2-3cde-45d6-83e4-e14159965cc9.png',
    department: 'Sales',
    joinDate: '2021-03-20',
    phone: '+91 98765 43211',
    status: 'active',
    lastLogin: '2024-01-14T16:45:00Z',
  },
  {
    id: '3',
    email: 'employee@airextech.in', 
    name: 'John Employee',
    role: 'employee',
    avatar: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/58857dbf-9dee-4447-8d1e-c26851a8d33f.png',
    department: 'Operations',
    joinDate: '2022-06-10',
    phone: '+91 98765 43212',
    status: 'active',
    lastLogin: '2024-01-15T09:15:00Z',
  },
  {
    id: '4',
    email: 'jane.smith@airextech.in', 
    name: 'Jane Smith',
    role: 'employee',
    avatar: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/8c9cc828-ab72-4f5d-baff-f5c8ddf4fdf3.png',
    department: 'HR',
    joinDate: '2023-02-15',
    phone: '+91 98765 43213',
    status: 'active',
    lastLogin: '2024-01-13T14:20:00Z',
  },
  {
    id: '5',
    email: 'mike.wilson@airextech.in', 
    name: 'Mike Wilson',
    role: 'manager',
    avatar: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/b67595fb-8a58-4a93-80a2-a56e9381f1ac.png',
    department: 'Technical',
    joinDate: '2021-09-05',
    phone: '+91 98765 43214',
    status: 'inactive',
    lastLogin: '2024-01-08T11:30:00Z',
  },
];

export default function UsersPage() {
  const getRoleBadgeVariant = (role: string) => {
    switch (role) {
      case 'admin':
        return 'destructive';
      case 'manager':
        return 'default';
      case 'employee':
        return 'secondary';
      default:
        return 'outline';
    }
  };

  const getStatusBadgeVariant = (status: string) => {
    return status === 'active' ? 'default' : 'secondary';
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-IN');
  };

  const formatLastLogin = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffInHours = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60));
    
    if (diffInHours < 1) return 'Just now';
    if (diffInHours < 24) return `${diffInHours}h ago`;
    if (diffInHours < 48) return 'Yesterday';
    return formatDate(dateString);
  };

  const activeUsers = mockUsers.filter(u => u.status === 'active').length;
  const adminCount = mockUsers.filter(u => u.role === 'admin').length;
  const managerCount = mockUsers.filter(u => u.role === 'manager').length;
  const employeeCount = mockUsers.filter(u => u.role === 'employee').length;

  return (
    <ProtectedRoute requiredRole="manager">
      <DashboardLayout>
        <div className="space-y-6">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">User Management</h1>
              <p className="text-gray-600 mt-1">
                Manage users, roles, and permissions
              </p>
            </div>
            <Button className="mt-4 sm:mt-0">
              Add New User
            </Button>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-gray-600">
                  Total Users
                </CardTitle>
                <span className="text-2xl">👥</span>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-gray-900">
                  {mockUsers.length}
                </div>
                <p className="text-xs text-green-600 mt-1">
                  {activeUsers} active
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-gray-600">
                  Administrators
                </CardTitle>
                <span className="text-2xl">👑</span>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-gray-900">
                  {adminCount}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-gray-600">
                  Managers
                </CardTitle>
                <span className="text-2xl">📋</span>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-gray-900">
                  {managerCount}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-gray-600">
                  Employees
                </CardTitle>
                <span className="text-2xl">👷</span>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-gray-900">
                  {employeeCount}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Users Table */}
          <Card>
            <CardHeader>
              <CardTitle>All Users</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>User</TableHead>
                      <TableHead>Role</TableHead>
                      <TableHead>Department</TableHead>
                      <TableHead>Join Date</TableHead>
                      <TableHead>Last Login</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {mockUsers.map((user) => (
                      <TableRow key={user.id}>
                        <TableCell>
                          <div className="flex items-center space-x-3">
                            <Avatar>
                              <AvatarImage src={user.avatar} alt={user.name} />
                              <AvatarFallback>
                                {user.name.split(' ').map(n => n[0]).join('')}
                              </AvatarFallback>
                            </Avatar>
                            <div>
                              <div className="font-medium text-gray-900">
                                {user.name}
                              </div>
                              <div className="text-sm text-gray-500">
                                {user.email}
                              </div>
                              <div className="text-sm text-gray-500">
                                {user.phone}
                              </div>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <Badge variant={getRoleBadgeVariant(user.role)}>
                            {user.role.toUpperCase()}
                          </Badge>
                        </TableCell>
                        <TableCell>{user.department}</TableCell>
                        <TableCell>{formatDate(user.joinDate)}</TableCell>
                        <TableCell>
                          <div className="text-sm">
                            {formatLastLogin(user.lastLogin)}
                          </div>
                        </TableCell>
                        <TableCell>
                          <Badge variant={getStatusBadgeVariant(user.status)}>
                            {user.status.toUpperCase()}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <div className="flex space-x-2">
                            <Button variant="outline" size="sm">
                              Edit
                            </Button>
                            <Button variant="outline" size="sm">
                              View
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </div>
      </DashboardLayout>
    </ProtectedRoute>
  );
}