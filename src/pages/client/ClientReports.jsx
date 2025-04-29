
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { AreaChart, Bar, BarChart, ChartBar, FileSearch, Home, List, LogOut, Package, PieChart, Plus, Search, Settings, User } from 'lucide-react';
import { Bell } from 'lucide-react';

const ClientReports = () => {
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
                  <Package className="mr-2 h-4 w-4" />
                  Produits & Services
                </Link>
              </Button>
              
              <Button variant="ghost" className="w-full justify-start" asChild>
                <Link to="/client/quotations">
                  <FileSearch className="mr-2 h-4 w-4" />
                  Devis
                </Link>
              </Button>
              
              <Button variant="secondary" className="w-full justify-start" asChild>
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
            <h1 className="text-xl font-semibold text-gray-800">Rapports & Analyses</h1>
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
            <Card>
              <CardHeader>
                <CardTitle>Chiffre d'affaires</CardTitle>
                <CardDescription>Les 12 derniers mois</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-64 flex items-center justify-center">
                  <div className="text-center">
                    <AreaChart className="h-12 w-12 text-morocco-red mx-auto mb-4" />
                    <p>Total: 145 630,00 MAD</p>
                    <p className="text-sm text-green-600">+12% par rapport à l'année dernière</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Factures par statut</CardTitle>
                <CardDescription>Répartition actuelle</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-64 flex items-center justify-center">
                  <div className="text-center">
                    <PieChart className="h-12 w-12 text-morocco-green mx-auto mb-4" />
                    <ul className="space-y-2 text-sm text-left">
                      <li className="flex justify-between"><span>Payées</span><span className="font-medium">32</span></li>
                      <li className="flex justify-between"><span>En attente</span><span className="font-medium">8</span></li>
                      <li className="flex justify-between"><span>En retard</span><span className="font-medium">3</span></li>
                      <li className="flex justify-between"><span>Total</span><span className="font-medium">43</span></li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Top produits</CardTitle>
                <CardDescription>Les plus vendus</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-64 flex items-center justify-center">
                  <div className="text-center">
                    <Bar className="h-12 w-12 text-morocco-red mx-auto mb-4" />
                    <ul className="space-y-2 text-sm text-left">
                      <li className="flex justify-between"><span>Consultation</span><span className="font-medium">45 unités</span></li>
                      <li className="flex justify-between"><span>Développement</span><span className="font-medium">32 unités</span></li>
                      <li className="flex justify-between"><span>Maintenance</span><span className="font-medium">28 unités</span></li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="grid grid-cols-1 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Rapports disponibles</CardTitle>
                <CardDescription>Téléchargez vos rapports en PDF</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-4 bg-white border rounded-lg">
                    <div>
                      <h3 className="font-medium">Rapport des ventes</h3>
                      <p className="text-sm text-gray-500">Données des 12 derniers mois</p>
                    </div>
                    <Button variant="outline">Télécharger</Button>
                  </div>
                  
                  <div className="flex justify-between items-center p-4 bg-white border rounded-lg">
                    <div>
                      <h3 className="font-medium">Rapport clients</h3>
                      <p className="text-sm text-gray-500">Analyse de votre clientèle</p>
                    </div>
                    <Button variant="outline">Télécharger</Button>
                  </div>
                  
                  <div className="flex justify-between items-center p-4 bg-white border rounded-lg">
                    <div>
                      <h3 className="font-medium">Rapport d'impayés</h3>
                      <p className="text-sm text-gray-500">Liste des factures non réglées</p>
                    </div>
                    <Button variant="outline">Télécharger</Button>
                  </div>
                  
                  <div className="flex justify-between items-center p-4 bg-white border rounded-lg">
                    <div>
                      <h3 className="font-medium">Rapport fiscal annuel</h3>
                      <p className="text-sm text-gray-500">Pour votre déclaration fiscale</p>
                    </div>
                    <Button variant="outline">Télécharger</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
};

export default ClientReports;
