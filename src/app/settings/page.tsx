'use client';

import { useState } from 'react';
import { DashboardLayout } from '@/components/navigation/dashboard-layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Separator } from '@/components/ui/separator';
import { toast } from 'sonner';

export default function SettingsPage() {
  const [companySettings, setCompanySettings] = useState({
    companyName: 'Airex Technology',
    email: 'info@airextech.in',
    phone: '+91 98765 43210',
    address: '123 Tech Park, Mumbai - 400001',
    website: 'https://airextech.in',
    taxId: 'GST123456789',
  });

  const [notifications, setNotifications] = useState({
    emailNotifications: true,
    lowStockAlerts: true,
    orderUpdates: true,
    systemUpdates: false,
    marketingEmails: false,
  });

  const [systemPreferences, setSystemPreferences] = useState({
    darkMode: false,
    autoLogout: true,
    logoutTime: '30',
    defaultCurrency: 'INR',
    dateFormat: 'DD/MM/YYYY',
  });

  const handleCompanySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Company settings updated successfully');
  };

  const handleNotificationChange = (key: string, value: boolean) => {
    setNotifications(prev => ({ ...prev, [key]: value }));
    toast.success('Notification preferences updated');
  };

  const handleSystemPreferenceChange = (key: string, value: boolean | string) => {
    setSystemPreferences(prev => ({ ...prev, [key]: value }));
    toast.success('System preferences updated');
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Settings</h1>
          <p className="text-gray-600 mt-1">
            Manage your system preferences and company information
          </p>
        </div>

        {/* Company Information */}
        <Card>
          <CardHeader>
            <CardTitle>Company Information</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleCompanySubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="companyName">Company Name</Label>
                  <Input
                    id="companyName"
                    value={companySettings.companyName}
                    onChange={(e) => setCompanySettings(prev => ({ 
                      ...prev, 
                      companyName: e.target.value 
                    }))}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={companySettings.email}
                    onChange={(e) => setCompanySettings(prev => ({ 
                      ...prev, 
                      email: e.target.value 
                    }))}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone</Label>
                  <Input
                    id="phone"
                    value={companySettings.phone}
                    onChange={(e) => setCompanySettings(prev => ({ 
                      ...prev, 
                      phone: e.target.value 
                    }))}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="website">Website</Label>
                  <Input
                    id="website"
                    value={companySettings.website}
                    onChange={(e) => setCompanySettings(prev => ({ 
                      ...prev, 
                      website: e.target.value 
                    }))}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="taxId">Tax ID / GST Number</Label>
                  <Input
                    id="taxId"
                    value={companySettings.taxId}
                    onChange={(e) => setCompanySettings(prev => ({ 
                      ...prev, 
                      taxId: e.target.value 
                    }))}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="address">Address</Label>
                <Input
                  id="address"
                  value={companySettings.address}
                  onChange={(e) => setCompanySettings(prev => ({ 
                    ...prev, 
                    address: e.target.value 
                  }))}
                />
              </div>
              <Button type="submit">Save Company Settings</Button>
            </form>
          </CardContent>
        </Card>

        {/* Notification Preferences */}
        <Card>
          <CardHeader>
            <CardTitle>Notification Preferences</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="emailNotifications" className="text-sm font-medium">
                    Email Notifications
                  </Label>
                  <p className="text-sm text-gray-500">
                    Receive notifications via email
                  </p>
                </div>
                <Switch
                  id="emailNotifications"
                  checked={notifications.emailNotifications}
                  onCheckedChange={(value) => handleNotificationChange('emailNotifications', value)}
                />
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="lowStockAlerts" className="text-sm font-medium">
                    Low Stock Alerts
                  </Label>
                  <p className="text-sm text-gray-500">
                    Get notified when products are running low
                  </p>
                </div>
                <Switch
                  id="lowStockAlerts"
                  checked={notifications.lowStockAlerts}
                  onCheckedChange={(value) => handleNotificationChange('lowStockAlerts', value)}
                />
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="orderUpdates" className="text-sm font-medium">
                    Order Updates
                  </Label>
                  <p className="text-sm text-gray-500">
                    Notifications about order status changes
                  </p>
                </div>
                <Switch
                  id="orderUpdates"
                  checked={notifications.orderUpdates}
                  onCheckedChange={(value) => handleNotificationChange('orderUpdates', value)}
                />
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="systemUpdates" className="text-sm font-medium">
                    System Updates
                  </Label>
                  <p className="text-sm text-gray-500">
                    Notifications about system maintenance and updates
                  </p>
                </div>
                <Switch
                  id="systemUpdates"
                  checked={notifications.systemUpdates}
                  onCheckedChange={(value) => handleNotificationChange('systemUpdates', value)}
                />
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="marketingEmails" className="text-sm font-medium">
                    Marketing Emails
                  </Label>
                  <p className="text-sm text-gray-500">
                    Receive promotional offers and news
                  </p>
                </div>
                <Switch
                  id="marketingEmails"
                  checked={notifications.marketingEmails}
                  onCheckedChange={(value) => handleNotificationChange('marketingEmails', value)}
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* System Preferences */}
        <Card>
          <CardHeader>
            <CardTitle>System Preferences</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="darkMode" className="text-sm font-medium">
                    Dark Mode
                  </Label>
                  <p className="text-sm text-gray-500">
                    Toggle dark theme
                  </p>
                </div>
                <Switch
                  id="darkMode"
                  checked={systemPreferences.darkMode}
                  onCheckedChange={(value) => handleSystemPreferenceChange('darkMode', value)}
                />
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="autoLogout" className="text-sm font-medium">
                    Auto Logout
                  </Label>
                  <p className="text-sm text-gray-500">
                    Automatically logout after inactivity
                  </p>
                </div>
                <Switch
                  id="autoLogout"
                  checked={systemPreferences.autoLogout}
                  onCheckedChange={(value) => handleSystemPreferenceChange('autoLogout', value)}
                />
              </div>
              <Separator />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="logoutTime">Auto Logout Time (minutes)</Label>
                  <Input
                    id="logoutTime"
                    type="number"
                    value={systemPreferences.logoutTime}
                    onChange={(e) => handleSystemPreferenceChange('logoutTime', e.target.value)}
                    disabled={!systemPreferences.autoLogout}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="currency">Default Currency</Label>
                  <select
                    id="currency"
                    value={systemPreferences.defaultCurrency}
                    onChange={(e) => handleSystemPreferenceChange('defaultCurrency', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="INR">Indian Rupee (₹)</option>
                    <option value="USD">US Dollar ($)</option>
                    <option value="EUR">Euro (€)</option>
                  </select>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Danger Zone */}
        <Card className="border-red-200">
          <CardHeader>
            <CardTitle className="text-red-600">Danger Zone</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium text-gray-900 mb-2">Reset All Settings</h4>
                <p className="text-sm text-gray-600 mb-4">
                  This will reset all settings to their default values. This action cannot be undone.
                </p>
                <Button variant="destructive" size="sm">
                  Reset Settings
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}