import { User } from '@/types';

// Mock users data
const mockUsers: User[] = [
  {
    id: '1',
    email: 'admin@airextech.in',
    name: 'Admin User',
    role: 'admin',
    avatar: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/4aa07714-e46f-4baa-bc9f-99202f8bb4ed.png',
    department: 'Management',
    joinDate: '2020-01-15',
    phone: '+91 98765 43210',
    status: 'active'
  },
  {
    id: '2', 
    email: 'manager@airextech.in',
    name: 'Sales Manager',
    role: 'manager',
    avatar: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/4efc5cc6-945d-447b-9371-d7fa35a60783.png',
    department: 'Sales',
    joinDate: '2021-03-20',
    phone: '+91 98765 43211',
    status: 'active'
  },
  {
    id: '3',
    email: 'employee@airextech.in', 
    name: 'John Employee',
    role: 'employee',
    avatar: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/66b9b658-3929-47dd-adc8-4011cb9f67ae.png',
    department: 'Operations',
    joinDate: '2022-06-10',
    phone: '+91 98765 43212',
    status: 'active'
  }
];

// Auth utility functions
export const login = async (email: string, password: string): Promise<User> => {
  // Simulate API call delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  // Find user by email
  const user = mockUsers.find(u => u.email === email);
  
  if (!user) {
    throw new Error('User not found');
  }
  
  // Simple password validation (in real app, this would be secure)
  if (password !== 'password123') {
    throw new Error('Invalid password');
  }
  
  // Store auth token in localStorage
  const token = `token_${user.id}_${Date.now()}`;
  localStorage.setItem('auth_token', token);
  localStorage.setItem('user_data', JSON.stringify(user));
  
  return user;
};

export const logout = (): void => {
  localStorage.removeItem('auth_token');
  localStorage.removeItem('user_data');
};

export const getCurrentUser = (): User | null => {
  if (typeof window === 'undefined') return null;
  
  const token = localStorage.getItem('auth_token');
  const userData = localStorage.getItem('user_data');
  
  if (!token || !userData) {
    return null;
  }
  
  try {
    return JSON.parse(userData);
  } catch {
    return null;
  }
};

export const isAuthenticated = (): boolean => {
  if (typeof window === 'undefined') return false;
  return !!localStorage.getItem('auth_token');
};

export const signup = async (userData: {
  name: string;
  email: string;
  password: string;
  role?: 'employee';
}): Promise<User> => {
  // Simulate API call delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  // Check if user already exists
  const existingUser = mockUsers.find(u => u.email === userData.email);
  if (existingUser) {
    throw new Error('User already exists with this email');
  }
  
  // Create new user
  const newUser: User = {
    id: `${Date.now()}`,
    email: userData.email,
    name: userData.name,
    role: userData.role || 'employee',
    department: 'General',
    joinDate: new Date().toISOString().split('T')[0],
    status: 'active'
  };
  
  // Store auth token
  const token = `token_${newUser.id}_${Date.now()}`;
  localStorage.setItem('auth_token', token);
  localStorage.setItem('user_data', JSON.stringify(newUser));
  
  return newUser;
};

export const resetPassword = async (email: string): Promise<void> => {
  // Simulate API call delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  const user = mockUsers.find(u => u.email === email);
  if (!user) {
    throw new Error('No account found with this email address');
  }
  
  // In a real app, this would send an email
  console.log(`Password reset email sent to ${email}`);
};