
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Bell, FileSearch, Home, List, LogOut, Plus, Search, Settings, User, Users } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';

const Clients = () => {
  // Dummy data for demonstration
  const clients = [
    { id: 1, name: 'Société Example SARL', ice: '001234567891234', email: 'contact@example.ma', phone: '+212 5 22 123 456', status: 'active', invoicesCount: 12, totalAmount: '145 000,00 MAD' },
    { id: 2, name: 'Client Important SA', ice: '002345678912345', email: 'direction@clientimportant.ma', phone: '+212 5 37 234 567', status: 'active', invoicesCount: 8, totalAmount: '98 500,00 MAD' },
    { id: 3, name: 'Nouveau Client', ice: '003456789123456', email: 'service@nouveauclient.ma', phone: '+212 6 61 345 678', status: 'pending', invoicesCount: 2, totalAmount: '24 200,00 MAD' },
    { id: 4, name: 'Fournisseur Regular', ice: '004567891234567', email: 'info@fournisseur.ma', phone: '+212 5 28 456 789', status: 'inactive', invoicesCount: 5, totalAmount: '67 750,00 MAD' },
  ];

  const getStatusBadge = (status) => {
    switch (status) {
      case 'active':
        return <Badge className="bg-green-100 text-green-800 hover:bg-green-200">Actif</Badge>;
      case 'pending':
        return <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-200">En attente</Badge>;
      case 'inactive':
        return <Badge className="bg-gray-100 text-gray-800 hover:bg-gray-200">Inactif</Badge>;
      default:
        return <Badge>{status}</Badge>;
    }
  };

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="hidden md:flex flex-col w-64 bg-white border-r border-gray-200">
        <div className="px-6 py-4 border-b border-gray-200">
          <div className="font-bold text-xl text-morocco-red">
            efacture<span className="text-morocco-green">maroc</span>
          </div>
        </div>
        
        <div className="flex flex-col justify-between flex-1 overflow-y-auto">
          <nav className="px-4 pt-4">
            <div className="space-y-1">
              <Button variant="ghost" className="w-full justify-start" asChild>
                <Link to="/dashboard">
                  <Home className="mr-2 h-4 w-4" />
                  Tableau de bord
                </Link>
              </Button>
              
              <Button variant="secondary" className="w-full justify-start" asChild>
                <Link to="/clients">
                  <Users className="mr-2 h-4 w-4" />
                  Clients
                </Link>
              </Button>
              
              <Button variant="ghost" className="w-full justify-start" asChild>
                <Link to="/invoices">
                  <FileSearch className="mr-2 h-4 w-4" />
                  Factures
                </Link>
              </Button>
              
              <Button variant="ghost" className="w-full justify-start" asChild>
                <Link to="/calendar">
                  <Home className="mr-2 h-4 w-4" />
                  Calendrier
                </Link>
              </Button>
              
              <Button variant="ghost" className="w-full justify-start" asChild>
                <Link to="/reports">
                  <Home className="mr-2 h-4 w-4" />
                  Rapports
                </Link>
              </Button>
              
              <Button variant="ghost" className="w-full justify-start" asChild>
                <Link to="/settings">
                  <Settings className="mr-2 h-4 w-4" />
                  Paramètres
                </Link>
              </Button>
            </div>
          </nav>
          
          <div className="px-4 py-4">
            <Button variant="ghost" className="w-full justify-start text-red-600 hover:text-red-700 hover:bg-red-50">
              <LogOut className="mr-2 h-4 w-4" />
              Déconnexion
            </Button>
          </div>
        </div>
      </div>
      
      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top navigation */}
        <header className="bg-white border-b border-gray-200 flex items-center justify-between p-4">
          <div className="flex items-center">
            <Button variant="ghost" size="icon" className="md:hidden mr-2">
              <List />
            </Button>
            <h1 className="text-xl font-semibold text-gray-800">Gestion des Clients</h1>
          </div>
          
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon">
              <Search />
            </Button>
            <Button variant="ghost" size="icon">
              <Bell />
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full">
              <User />
            </Button>
          </div>
        </header>
        
        {/* Content area */}
        <main className="flex-1 overflow-y-auto bg-gray-50 p-6">
          <div className="flex justify-between items-center mb-6">
            <div className="w-1/3">
              <Input placeholder="Rechercher un client..." className="max-w-sm" />
            </div>
            <Button asChild>
              <Link to="/clients/create">
                <Plus className="mr-2 h-4 w-4" />
                Ajouter un client
              </Link>
            </Button>
          </div>
          
          <Card>
            <CardHeader>
              <CardTitle>Liste des clients</CardTitle>
              <CardDescription>Gérez vos clients et leurs informations</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">Nom</th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">ICE</th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">Email</th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">Téléphone</th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">Statut</th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">Factures</th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">Total</th>
                      <th className="px-4 py-3 text-right text-sm font-medium text-gray-500">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {clients.map((client) => (
                      <tr key={client.id} className="border-b hover:bg-gray-50">
                        <td className="px-4 py-3 text-sm font-medium text-blue-600 hover:underline">
                          <Link to={`/clients/${client.id}`}>{client.name}</Link>
                        </td>
                        <td className="px-4 py-3 text-sm">{client.ice}</td>
                        <td className="px-4 py-3 text-sm">{client.email}</td>
                        <td className="px-4 py-3 text-sm">{client.phone}</td>
                        <td className="px-4 py-3 text-sm">{getStatusBadge(client.status)}</td>
                        <td className="px-4 py-3 text-sm">{client.invoicesCount}</td>
                        <td className="px-4 py-3 text-sm">{client.totalAmount}</td>
                        <td className="px-4 py-3 text-sm text-right">
                          <div className="flex justify-end gap-2">
                            <Button variant="outline" size="sm" asChild>
                              <Link to={`/clients/${client.id}`}>Voir</Link>
                            </Button>
                            <Button variant="outline" size="sm" asChild>
                              <Link to={`/clients/${client.id}/edit`}>Modifier</Link>
                            </Button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  );
};

export default Clients;
