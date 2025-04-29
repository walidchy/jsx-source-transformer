
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Bell, ChartBar, FileSearch, Home, List, LogOut, Package, Plus, Search, Settings, User } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';

const ClientProducts = () => {
  // Dummy data for products
  const products = [
    { id: 1, name: 'Développement web', type: 'service', price: '5 000,00 MAD', unit: 'jour', description: 'Services de développement de sites web et applications', status: 'active' },
    { id: 2, name: 'Consultation marketing', type: 'service', price: '1 200,00 MAD', unit: 'heure', description: 'Consultation en stratégie marketing digital', status: 'active' },
    { id: 3, name: 'Ordinateur portable', type: 'product', price: '12 500,00 MAD', unit: 'unité', description: 'Dell XPS 15, i7, 16GB RAM, 512GB SSD', status: 'out-of-stock' },
    { id: 4, name: 'Licence logiciel', type: 'product', price: '3 800,00 MAD', unit: 'licence', description: 'Licence annuelle pour suite de design', status: 'active' },
  ];

  const getStatusBadge = (status) => {
    switch (status) {
      case 'active':
        return <Badge className="bg-green-100 text-green-800 hover:bg-green-200">Actif</Badge>;
      case 'inactive':
        return <Badge className="bg-gray-100 text-gray-800 hover:bg-gray-200">Inactif</Badge>;
      case 'out-of-stock':
        return <Badge className="bg-red-100 text-red-800 hover:bg-red-200">Rupture de stock</Badge>;
      default:
        return <Badge>{status}</Badge>;
    }
  };

  const getTypeBadge = (type) => {
    switch (type) {
      case 'product':
        return <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200">Produit</Badge>;
      case 'service':
        return <Badge className="bg-purple-100 text-purple-800 hover:bg-purple-200">Service</Badge>;
      default:
        return <Badge>{type}</Badge>;
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
              
              <Button variant="secondary" className="w-full justify-start" asChild>
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
            <h1 className="text-xl font-semibold text-gray-800">Produits & Services</h1>
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
              <Input placeholder="Rechercher un produit..." className="max-w-sm" />
            </div>
            <Button asChild>
              <Link to="/client/products/create">
                <Plus className="mr-2 h-4 w-4" />
                Ajouter un produit
              </Link>
            </Button>
          </div>
          
          <Card>
            <CardHeader>
              <CardTitle>Catalogue</CardTitle>
              <CardDescription>Liste de vos produits et services</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">Nom</th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">Type</th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">Prix</th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">Unité</th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">Description</th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">Statut</th>
                      <th className="px-4 py-3 text-right text-sm font-medium text-gray-500">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {products.map((product) => (
                      <tr key={product.id} className="border-b hover:bg-gray-50">
                        <td className="px-4 py-3 text-sm font-medium text-blue-600 hover:underline">
                          <Link to={`/client/products/${product.id}`}>{product.name}</Link>
                        </td>
                        <td className="px-4 py-3 text-sm">{getTypeBadge(product.type)}</td>
                        <td className="px-4 py-3 text-sm">{product.price}</td>
                        <td className="px-4 py-3 text-sm">{product.unit}</td>
                        <td className="px-4 py-3 text-sm max-w-xs truncate">{product.description}</td>
                        <td className="px-4 py-3 text-sm">{getStatusBadge(product.status)}</td>
                        <td className="px-4 py-3 text-sm text-right">
                          <div className="flex justify-end gap-2">
                            <Button variant="outline" size="sm" asChild>
                              <Link to={`/client/products/${product.id}`}>Voir</Link>
                            </Button>
                            <Button variant="outline" size="sm" asChild>
                              <Link to={`/client/products/${product.id}/edit`}>Modifier</Link>
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

export default ClientProducts;
