
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Bell, ChartBar, CreditCard, FileSearch, Home, List, LogOut, Package, Search, Settings, User } from 'lucide-react';

const ClientSpace = () => {
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
              <Button variant="secondary" className="w-full justify-start" asChild>
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
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-800">Bonjour, Mohammed</h2>
              <p className="text-gray-600">Bienvenue dans votre espace client</p>
            </div>
            <div className="mt-4 md:mt-0 flex gap-3">
              <Button asChild>
                <Link to="/client/invoices/create">
                  Créer une facture
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link to="/client/quotations/create">
                  Créer un devis
                </Link>
              </Button>
            </div>
          </div>
          
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center">
                  <div className="bg-morocco-red/10 p-2 rounded-full mr-4">
                    <FileSearch className="h-8 w-8 text-morocco-red" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500">Factures ouvertes</p>
                    <h3 className="text-2xl font-bold">8</h3>
                    <p className="text-xs text-gray-500">Valeur: 54 320,00 MAD</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center">
                  <div className="bg-green-100 p-2 rounded-full mr-4">
                    <CreditCard className="h-8 w-8 text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500">Paiements récents</p>
                    <h3 className="text-2xl font-bold">12 500,00 MAD</h3>
                    <p className="text-xs text-gray-500">3 paiements ce mois</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center">
                  <div className="bg-yellow-100 p-2 rounded-full mr-4">
                    <FileSearch className="h-8 w-8 text-yellow-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500">Devis en attente</p>
                    <h3 className="text-2xl font-bold">3</h3>
                    <p className="text-xs text-gray-500">Valeur: 28 750,00 MAD</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center">
                  <div className="bg-blue-100 p-2 rounded-full mr-4">
                    <Package className="h-8 w-8 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500">Produits actifs</p>
                    <h3 className="text-2xl font-bold">24</h3>
                    <p className="text-xs text-gray-500">4 ajoutés récemment</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Recent activities */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <Card className="lg:col-span-2">
              <CardHeader>
                <CardTitle>Factures récentes</CardTitle>
                <CardDescription>Vos dernières factures émises</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-4 bg-white border rounded-lg">
                    <div>
                      <h3 className="font-medium">FAC-2023-042</h3>
                      <p className="text-sm text-gray-500">15/04/2023</p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold">12 500,00 MAD</p>
                      <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        Payée
                      </span>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center p-4 bg-white border rounded-lg">
                    <div>
                      <h3 className="font-medium">FAC-2023-041</h3>
                      <p className="text-sm text-gray-500">12/04/2023</p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold">8 340,00 MAD</p>
                      <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                        En attente
                      </span>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center p-4 bg-white border rounded-lg">
                    <div>
                      <h3 className="font-medium">FAC-2023-040</h3>
                      <p className="text-sm text-gray-500">10/04/2023</p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold">4 200,00 MAD</p>
                      <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800">
                        En retard
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className="mt-4 text-center">
                  <Button variant="link" asChild className="text-morocco-red">
                    <Link to="/client/invoices">Voir toutes les factures</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Actions rapides</CardTitle>
                <CardDescription>Effectuez des actions courantes</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <Button className="w-full" asChild>
                    <Link to="/client/invoices/create">Nouvelle facture</Link>
                  </Button>
                  
                  <Button variant="outline" className="w-full" asChild>
                    <Link to="/client/quotations/create">Nouveau devis</Link>
                  </Button>
                  
                  <Button variant="outline" className="w-full" asChild>
                    <Link to="/client/products/create">Ajouter un produit</Link>
                  </Button>
                  
                  <Button variant="outline" className="w-full" asChild>
                    <Link to="/client/reports">Voir les rapports</Link>
                  </Button>
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
