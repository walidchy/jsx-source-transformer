
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Bell, ChartBar, FileSearch, Home, List, LogOut, Plus, Search, Settings, User, Users } from 'lucide-react';

const ClientSpace = () => {
  // Dummy data for demonstration
  const recentInvoices = [
    { id: 'FAC-2023-042', amount: '12 500,00 MAD', date: '15/04/2023', status: 'paid' },
    { id: 'FAC-2023-041', amount: '8 340,00 MAD', date: '12/04/2023', status: 'pending' },
    { id: 'FAC-2023-040', amount: '4 200,00 MAD', date: '10/04/2023', status: 'overdue' },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'paid':
        return 'bg-green-100 text-green-800';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'overdue':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };
  
  const getStatusText = (status: string) => {
    switch (status) {
      case 'paid':
        return 'Payée';
      case 'pending':
        return 'En attente';
      case 'overdue':
        return 'En retard';
      default:
        return status;
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
                <Link to="/client">
                  <Home className="mr-2 h-4 w-4" />
                  Tableau de bord
                </Link>
              </Button>
              
              <Button variant="ghost" className="w-full justify-start" asChild>
                <Link to="/client/invoices">
                  <FileSearch className="mr-2 h-4 w-4" />
                  Mes factures
                </Link>
              </Button>
              
              <Button variant="ghost" className="w-full justify-start" asChild>
                <Link to="/client/products">
                  <List className="mr-2 h-4 w-4" />
                  Produits & Services
                </Link>
              </Button>
              
              <Button variant="ghost" className="w-full justify-start" asChild>
                <Link to="/client/quotations">
                  <FileSearch className="mr-2 h-4 w-4" />
                  Devis
                </Link>
              </Button>
              
              <Button variant="ghost" className="w-full justify-start" asChild>
                <Link to="/client/reports">
                  <ChartBar className="mr-2 h-4 w-4" />
                  Rapports
                </Link>
              </Button>
              
              <Button variant="ghost" className="w-full justify-start" asChild>
                <Link to="/client/settings">
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
            <h1 className="text-xl font-semibold text-gray-800">Espace Client</h1>
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
          {/* Welcome card */}
          <Card className="mb-6">
            <CardContent className="flex flex-col md:flex-row items-center justify-between pt-6">
              <div>
                <h2 className="text-2xl font-bold text-gray-800">Bienvenue, Société Example SARL</h2>
                <p className="text-gray-600 mt-1">Voici un aperçu de votre activité récente</p>
              </div>
              <div className="mt-4 md:mt-0">
                <Button asChild>
                  <Link to="/client/invoices/create">
                    <Plus className="mr-2 h-4 w-4" />
                    Créer une facture
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
          
          {/* Summary cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-gray-500">Chiffre d'affaires du mois</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">24 500,00 MAD</div>
                <div className="flex items-center mt-1">
                  <span className="text-xs text-green-600">+15% </span>
                  <span className="text-xs text-gray-500 ml-1">vs mois précédent</span>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-gray-500">Factures en attente</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">8 340,00 MAD</div>
                <div className="flex items-center mt-1">
                  <span className="text-xs text-gray-500">2 factures</span>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-gray-500">Clients actifs</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">12</div>
                <div className="flex items-center mt-1">
                  <span className="text-xs text-green-600">+2 </span>
                  <span className="text-xs text-gray-500 ml-1">ce mois</span>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Recent invoices */}
          <Card>
            <CardHeader>
              <CardTitle>Factures récentes</CardTitle>
              <CardDescription>Les dernières factures émises</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">Numéro</th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">Montant</th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">Date</th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">Statut</th>
                      <th className="px-4 py-3 text-right text-sm font-medium text-gray-500">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {recentInvoices.map((invoice, index) => (
                      <tr key={index} className="border-b hover:bg-gray-50">
                        <td className="px-4 py-3 text-sm text-blue-600 hover:underline">
                          <Link to={`/client/invoices/${invoice.id}`}>{invoice.id}</Link>
                        </td>
                        <td className="px-4 py-3 text-sm">{invoice.amount}</td>
                        <td className="px-4 py-3 text-sm">{invoice.date}</td>
                        <td className="px-4 py-3 text-sm">
                          <span className={`px-2 py-1 rounded-full text-xs ${getStatusColor(invoice.status)}`}>
                            {getStatusText(invoice.status)}
                          </span>
                        </td>
                        <td className="px-4 py-3 text-sm text-right">
                          <Button variant="ghost" size="sm" asChild>
                            <Link to={`/client/invoices/${invoice.id}`}>
                              Voir détails
                            </Link>
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="mt-4 text-center">
                <Button variant="outline" asChild>
                  <Link to="/client/invoices">Voir toutes les factures</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
          
          {/* Quick actions */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            <Card>
              <CardHeader>
                <CardTitle>Actions rapides</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <Button variant="outline" className="w-full justify-start" asChild>
                    <Link to="/client/invoices/create">
                      <Plus className="mr-2 h-4 w-4" />
                      Créer une facture
                    </Link>
                  </Button>
                  <Button variant="outline" className="w-full justify-start" asChild>
                    <Link to="/client/clients/create">
                      <Users className="mr-2 h-4 w-4" />
                      Ajouter un client
                    </Link>
                  </Button>
                  <Button variant="outline" className="w-full justify-start" asChild>
                    <Link to="/client/products/create">
                      <Plus className="mr-2 h-4 w-4" />
                      Ajouter un produit
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
            
            <Card className="md:col-span-2 lg:col-span-2">
              <CardHeader>
                <CardTitle>Clients récents</CardTitle>
                <CardDescription>Vos derniers clients ajoutés</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">Nom</th>
                        <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">ICE</th>
                        <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">Email</th>
                        <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">Total facturé</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b hover:bg-gray-50">
                        <td className="px-4 py-3 text-sm">Client Example SARL</td>
                        <td className="px-4 py-3 text-sm">001234567891234</td>
                        <td className="px-4 py-3 text-sm">contact@example.ma</td>
                        <td className="px-4 py-3 text-sm">25 000,00 MAD</td>
                      </tr>
                      <tr className="border-b hover:bg-gray-50">
                        <td className="px-4 py-3 text-sm">Fournisseur Regular</td>
                        <td className="px-4 py-3 text-sm">002345678912345</td>
                        <td className="px-4 py-3 text-sm">info@fournisseur.ma</td>
                        <td className="px-4 py-3 text-sm">42 750,00 MAD</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
};

export default ClientSpace;
