
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Bell, Calendar, ChartBar, ChartPie, FileSearch, Home, List, LogOut, Plus, Search, Settings, User, Users } from 'lucide-react';

const Dashboard = () => {
  // Dummy data for demonstration
  const kpiData = [
    { title: 'Chiffre d\'affaires', value: '120 000,00 MAD', change: '+12%', period: 'vs mois précédent' },
    { title: 'Factures émises', value: '45', change: '+5', period: 'vs mois précédent' },
    { title: 'Paiements en attente', value: '35 000,00 MAD', change: '-8%', period: 'vs mois précédent' },
    { title: 'Nouveaux clients', value: '8', change: '+3', period: 'vs mois précédent' },
  ];
  
  const recentInvoices = [
    { id: 'FAC-2023-042', client: 'Société Example SARL', amount: '12 500,00 MAD', date: '15/04/2023', status: 'paid' },
    { id: 'FAC-2023-041', client: 'Client Important SA', amount: '8 340,00 MAD', date: '12/04/2023', status: 'pending' },
    { id: 'FAC-2023-040', client: 'Nouveau Client', amount: '4 200,00 MAD', date: '10/04/2023', status: 'overdue' },
    { id: 'FAC-2023-039', client: 'Fournisseur Regular', amount: '15 750,00 MAD', date: '05/04/2023', status: 'paid' },
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
              
              <Button variant="ghost" className="w-full justify-start" asChild>
                <Link to="/invoices">
                  <FileSearch className="mr-2 h-4 w-4" />
                  Factures
                </Link>
              </Button>
              
              <Button variant="ghost" className="w-full justify-start" asChild>
                <Link to="/calendar">
                  <Calendar className="mr-2 h-4 w-4" />
                  Calendrier
                </Link>
              </Button>
              
              <Button variant="ghost" className="w-full justify-start" asChild>
                <Link to="/reports">
                  <ChartBar className="mr-2 h-4 w-4" />
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
            <h1 className="text-xl font-semibold text-gray-800">Tableau de bord</h1>
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
          {/* KPI cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {kpiData.map((kpi, index) => (
              <Card key={index}>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-gray-500">{kpi.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{kpi.value}</div>
                  <div className="flex items-center mt-1">
                    <span className={`text-xs ${kpi.change.includes('+') ? 'text-green-600' : 'text-red-600'}`}>
                      {kpi.change}
                    </span>
                    <span className="text-xs text-gray-500 ml-1">{kpi.period}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {/* Charts section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            <Card className="col-span-1">
              <CardHeader>
                <CardTitle>Chiffre d'affaires mensuel</CardTitle>
                <CardDescription>Évolution sur les 6 derniers mois</CardDescription>
              </CardHeader>
              <CardContent className="h-80 flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <ChartBar className="h-16 w-16 mx-auto text-gray-400" />
                  <p className="mt-4">Les données du graphique seront affichées ici</p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="col-span-1">
              <CardHeader>
                <CardTitle>Répartition des factures</CardTitle>
                <CardDescription>Par état de paiement</CardDescription>
              </CardHeader>
              <CardContent className="h-80 flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <ChartPie className="h-16 w-16 mx-auto text-gray-400" />
                  <p className="mt-4">Les données du graphique seront affichées ici</p>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Recent invoices */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>Factures récentes</CardTitle>
                <CardDescription>Les dernières factures émises</CardDescription>
              </div>
              <Button asChild>
                <Link to="/invoices/create">
                  <Plus className="mr-2 h-4 w-4" />
                  Nouvelle facture
                </Link>
              </Button>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">Numéro</th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">Client</th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">Montant</th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">Date</th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">Statut</th>
                    </tr>
                  </thead>
                  <tbody>
                    {recentInvoices.map((invoice, index) => (
                      <tr key={index} className="border-b hover:bg-gray-50">
                        <td className="px-4 py-3 text-sm text-blue-600 hover:underline">
                          <Link to={`/invoices/${invoice.id}`}>{invoice.id}</Link>
                        </td>
                        <td className="px-4 py-3 text-sm">{invoice.client}</td>
                        <td className="px-4 py-3 text-sm">{invoice.amount}</td>
                        <td className="px-4 py-3 text-sm">{invoice.date}</td>
                        <td className="px-4 py-3 text-sm">
                          <span className={`px-2 py-1 rounded-full text-xs ${getStatusColor(invoice.status)}`}>
                            {getStatusText(invoice.status)}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="mt-4 text-center">
                <Button variant="outline" asChild>
                  <Link to="/invoices">Voir toutes les factures</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
