
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Bell, ChartBar, FileSearch, Home, List, LogOut, Plus, Search, Settings, User } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const ClientProducts = () => {
  // Dummy data for products and services
  const products = [
    { id: 1, name: 'Ordinateur portable', description: 'Ordinateur portable haut de gamme', price: '8 500,00', unit: 'pièce', type: 'product' },
    { id: 2, name: 'Imprimante laser', description: 'Imprimante laser couleur', price: '2 300,00', unit: 'pièce', type: 'product' },
    { id: 3, name: 'Disque dur externe', description: '1To de stockage', price: '750,00', unit: 'pièce', type: 'product' },
    { id: 4, name: 'Écran 24 pouces', description: 'Écran Full HD', price: '1 200,00', unit: 'pièce', type: 'product' },
  ];
  
  const services = [
    { id: 5, name: 'Développement web', description: 'Création de site internet', price: '5 000,00', unit: 'jour', type: 'service' },
    { id: 6, name: 'Maintenance informatique', description: 'Service de maintenance informatique', price: '800,00', unit: 'heure', type: 'service' },
    { id: 7, name: 'Formation utilisateurs', description: 'Formation sur les outils bureautiques', price: '1 500,00', unit: 'session', type: 'service' },
    { id: 8, name: 'Support technique', description: 'Assistance technique à distance', price: '300,00', unit: 'heure', type: 'service' },
  ];

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
              
              <Button variant="secondary" className="w-full justify-start" asChild>
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
            <h1 className="text-xl font-semibold text-gray-800">Produits et Services</h1>
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
              <Input placeholder="Rechercher un produit ou service..." className="max-w-sm" />
            </div>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Ajouter un élément
            </Button>
          </div>
          
          <Tabs defaultValue="products">
            <TabsList className="mb-6">
              <TabsTrigger value="products">Produits</TabsTrigger>
              <TabsTrigger value="services">Services</TabsTrigger>
            </TabsList>
            
            <TabsContent value="products">
              <Card>
                <CardHeader>
                  <CardTitle>Mes Produits</CardTitle>
                  <CardDescription>Liste des produits disponibles pour la facturation</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b">
                          <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">Nom</th>
                          <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">Description</th>
                          <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">Prix unitaire (MAD)</th>
                          <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">Unité</th>
                          <th className="px-4 py-3 text-right text-sm font-medium text-gray-500">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {products.map((product) => (
                          <tr key={product.id} className="border-b hover:bg-gray-50">
                            <td className="px-4 py-3 text-sm font-medium">{product.name}</td>
                            <td className="px-4 py-3 text-sm">{product.description}</td>
                            <td className="px-4 py-3 text-sm">{product.price}</td>
                            <td className="px-4 py-3 text-sm">{product.unit}</td>
                            <td className="px-4 py-3 text-sm text-right">
                              <div className="flex justify-end gap-2">
                                <Button variant="outline" size="sm">Modifier</Button>
                                <Button variant="outline" size="sm">Supprimer</Button>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="services">
              <Card>
                <CardHeader>
                  <CardTitle>Mes Services</CardTitle>
                  <CardDescription>Liste des services disponibles pour la facturation</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b">
                          <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">Nom</th>
                          <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">Description</th>
                          <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">Prix unitaire (MAD)</th>
                          <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">Unité</th>
                          <th className="px-4 py-3 text-right text-sm font-medium text-gray-500">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {services.map((service) => (
                          <tr key={service.id} className="border-b hover:bg-gray-50">
                            <td className="px-4 py-3 text-sm font-medium">{service.name}</td>
                            <td className="px-4 py-3 text-sm">{service.description}</td>
                            <td className="px-4 py-3 text-sm">{service.price}</td>
                            <td className="px-4 py-3 text-sm">{service.unit}</td>
                            <td className="px-4 py-3 text-sm text-right">
                              <div className="flex justify-end gap-2">
                                <Button variant="outline" size="sm">Modifier</Button>
                                <Button variant="outline" size="sm">Supprimer</Button>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  );
};

export default ClientProducts;
