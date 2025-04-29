
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Bell, FileSearch, Home, List, LogOut, Plus, Search, Settings, User, Users } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';

const Invoices = () => {
  // Dummy data for invoices
  const invoices = [
    { id: 'FAC-2023-042', client: 'Société Example SARL', amount: '12 500,00 MAD', date: '15/04/2023', dueDate: '15/05/2023', status: 'paid' },
    { id: 'FAC-2023-041', client: 'Client Important SA', amount: '8 340,00 MAD', date: '12/04/2023', dueDate: '12/05/2023', status: 'pending' },
    { id: 'FAC-2023-040', client: 'Nouveau Client', amount: '4 200,00 MAD', date: '10/04/2023', dueDate: '10/05/2023', status: 'overdue' },
    { id: 'FAC-2023-039', client: 'Fournisseur Regular', amount: '15 750,00 MAD', date: '05/04/2023', dueDate: '05/05/2023', status: 'paid' },
    { id: 'FAC-2023-038', client: 'Client Important SA', amount: '6 820,00 MAD', date: '01/04/2023', dueDate: '01/05/2023', status: 'paid' },
    { id: 'FAC-2023-037', client: 'Société Example SARL', amount: '9 300,00 MAD', date: '28/03/2023', dueDate: '28/04/2023', status: 'paid' },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'paid':
        return <Badge className="bg-green-100 text-green-800 hover:bg-green-200">Payée</Badge>;
      case 'pending':
        return <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-200">En attente</Badge>;
      case 'overdue':
        return <Badge className="bg-red-100 text-red-800 hover:bg-red-200">En retard</Badge>;
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
              
              <Button variant="ghost" className="w-full justify-start" asChild>
                <Link to="/clients">
                  <Users className="mr-2 h-4 w-4" />
                  Clients
                </Link>
              </Button>
              
              <Button variant="secondary" className="w-full justify-start" asChild>
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
            <h1 className="text-xl font-semibold text-gray-800">Factures</h1>
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
              <Input placeholder="Rechercher une facture..." className="max-w-sm" />
            </div>
            <Button asChild>
              <Link to="/client/invoices/create">
                <Plus className="mr-2 h-4 w-4" />
                Créer une facture
              </Link>
            </Button>
          </div>
          
          <Card>
            <CardHeader>
              <CardTitle>Toutes les factures</CardTitle>
              <CardDescription>Liste complète des factures émises</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">Numéro</th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">Client</th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">Date</th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">Échéance</th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">Montant</th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">Statut</th>
                      <th className="px-4 py-3 text-right text-sm font-medium text-gray-500">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {invoices.map((invoice) => (
                      <tr key={invoice.id} className="border-b hover:bg-gray-50">
                        <td className="px-4 py-3 text-sm text-blue-600 hover:underline">
                          <Link to={`/invoices/${invoice.id}`}>{invoice.id}</Link>
                        </td>
                        <td className="px-4 py-3 text-sm">{invoice.client}</td>
                        <td className="px-4 py-3 text-sm">{invoice.date}</td>
                        <td className="px-4 py-3 text-sm">{invoice.dueDate}</td>
                        <td className="px-4 py-3 text-sm">{invoice.amount}</td>
                        <td className="px-4 py-3 text-sm">{getStatusColor(invoice.status)}</td>
                        <td className="px-4 py-3 text-sm text-right">
                          <div className="flex justify-end gap-2">
                            <Button variant="outline" size="sm" asChild>
                              <Link to={`/invoices/${invoice.id}`}>Voir</Link>
                            </Button>
                            <Button variant="outline" size="sm" asChild>
                              <Link to={`/invoices/${invoice.id}/edit`}>Modifier</Link>
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

export default Invoices;
