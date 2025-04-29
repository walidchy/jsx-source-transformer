
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Bell, ChartBar, FileSearch, Home, List, LogOut, Search, Settings, User } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Switch } from '@/components/ui/switch';

const ClientSettings = () => {
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
              
              <Button variant="secondary" className="w-full justify-start" asChild>
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
            <h1 className="text-xl font-semibold text-gray-800">Paramètres</h1>
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
          <Tabs defaultValue="profile">
            <TabsList className="mb-6">
              <TabsTrigger value="profile">Mon profil</TabsTrigger>
              <TabsTrigger value="company">Entreprise</TabsTrigger>
              <TabsTrigger value="billing">Facturation</TabsTrigger>
              <TabsTrigger value="notifications">Notifications</TabsTrigger>
            </TabsList>
            
            <TabsContent value="profile">
              <Card>
                <CardHeader>
                  <CardTitle>Informations personnelles</CardTitle>
                  <CardDescription>Gérez les informations de votre compte</CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">Nom complet</Label>
                        <Input id="name" defaultValue="Mohamed El Alaoui" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" defaultValue="mohamed@example.ma" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Téléphone</Label>
                        <Input id="phone" defaultValue="+212 6 61 123 456" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="position">Fonction</Label>
                        <Input id="position" defaultValue="Directeur Général" />
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-medium mb-4">Sécurité</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="current-password">Mot de passe actuel</Label>
                          <Input id="current-password" type="password" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="new-password">Nouveau mot de passe</Label>
                          <Input id="new-password" type="password" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="confirm-password">Confirmer le mot de passe</Label>
                          <Input id="confirm-password" type="password" />
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="two-factor">Authentification à deux facteurs</Label>
                        <p className="text-sm text-gray-500">Ajouter une couche de sécurité supplémentaire à votre compte</p>
                      </div>
                      <Switch id="two-factor" />
                    </div>
                    
                    <Button>Enregistrer les modifications</Button>
                  </form>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="company">
              <Card>
                <CardHeader>
                  <CardTitle>Informations de l'entreprise</CardTitle>
                  <CardDescription>Ces informations apparaîtront sur vos factures</CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="company-name">Nom de l'entreprise</Label>
                        <Input id="company-name" defaultValue="Société Example SARL" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="ice">ICE (Identifiant Commun de l'Entreprise)</Label>
                        <Input id="ice" defaultValue="001234567891234" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="company-email">Email de contact</Label>
                        <Input id="company-email" type="email" defaultValue="contact@example.ma" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="company-phone">Téléphone</Label>
                        <Input id="company-phone" defaultValue="+212 5 22 123 456" />
                      </div>
                      <div className="space-y-2 md:col-span-2">
                        <Label htmlFor="address">Adresse</Label>
                        <Textarea id="address" defaultValue="123 Rue de l'Example, 20000 Casablanca, Maroc" />
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <h3 className="text-lg font-medium">Informations légales supplémentaires</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="rc">Registre de Commerce</Label>
                          <Input id="rc" defaultValue="123456" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="patente">Patente</Label>
                          <Input id="patente" defaultValue="78910" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="cnss">CNSS</Label>
                          <Input id="cnss" defaultValue="1234567" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="if">Identifiant Fiscal</Label>
                          <Input id="if" defaultValue="12345678" />
                        </div>
                      </div>
                    </div>
                    
                    <Button>Enregistrer les modifications</Button>
                  </form>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="billing">
              <Card>
                <CardHeader>
                  <CardTitle>Paramètres de facturation</CardTitle>
                  <CardDescription>Configurez vos préférences de facturation</CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="default-payment-terms">Conditions de paiement par défaut (jours)</Label>
                        <Input id="default-payment-terms" type="number" defaultValue="30" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="default-currency">Devise par défaut</Label>
                        <select id="default-currency" className="w-full px-3 py-2 border border-gray-300 rounded-md">
                          <option value="MAD">MAD (Dirham marocain)</option>
                          <option value="EUR">EUR (Euro)</option>
                          <option value="USD">USD (Dollar américain)</option>
                        </select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="invoice-prefix">Préfixe des numéros de facture</Label>
                        <Input id="invoice-prefix" defaultValue="FAC-2023-" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="quote-prefix">Préfixe des numéros de devis</Label>
                        <Input id="quote-prefix" defaultValue="DEV-2023-" />
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <h3 className="text-lg font-medium">TVA</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="vat-number">Numéro de TVA</Label>
                          <Input id="vat-number" defaultValue="MA12345678" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="default-vat-rate">Taux de TVA par défaut</Label>
                          <Input id="default-vat-rate" type="number" defaultValue="20" />
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <h3 className="text-lg font-medium">Options de factures</h3>
                      <div className="flex items-center justify-between">
                        <div>
                          <Label htmlFor="auto-reminder">Rappels automatiques</Label>
                          <p className="text-sm text-gray-500">Envoyer des rappels pour les factures impayées</p>
                        </div>
                        <Switch id="auto-reminder" defaultChecked />
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div>
                          <Label htmlFor="bilingual">Factures bilingues (français/arabe)</Label>
                          <p className="text-sm text-gray-500">Ajouter la traduction arabe sur les factures</p>
                        </div>
                        <Switch id="bilingual" defaultChecked />
                      </div>
                    </div>
                    
                    <Button>Enregistrer les préférences</Button>
                  </form>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="notifications">
              <Card>
                <CardHeader>
                  <CardTitle>Paramètres de notifications</CardTitle>
                  <CardDescription>Configurez comment vous souhaitez être notifié</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <h3 className="text-lg font-medium">Notifications par email</h3>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <Label htmlFor="email-invoices">Factures</Label>
                          <p className="text-sm text-gray-500">Recevoir des notifications pour les nouvelles factures</p>
                        </div>
                        <Switch id="email-invoices" defaultChecked />
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div>
                          <Label htmlFor="email-payments">Paiements</Label>
                          <p className="text-sm text-gray-500">Recevoir des notifications pour les nouveaux paiements</p>
                        </div>
                        <Switch id="email-payments" defaultChecked />
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div>
                          <Label htmlFor="email-quotes">Devis</Label>
                          <p className="text-sm text-gray-500">Recevoir des notifications pour les nouveaux devis</p>
                        </div>
                        <Switch id="email-quotes" defaultChecked />
                      </div>
                    </div>
                    
                    <h3 className="text-lg font-medium pt-4">Notifications dans l'application</h3>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <Label htmlFor="app-invoices">Factures</Label>
                          <p className="text-sm text-gray-500">Afficher les notifications pour les nouvelles factures</p>
                        </div>
                        <Switch id="app-invoices" defaultChecked />
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div>
                          <Label htmlFor="app-payments">Paiements</Label>
                          <p className="text-sm text-gray-500">Afficher les notifications pour les nouveaux paiements</p>
                        </div>
                        <Switch id="app-payments" defaultChecked />
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div>
                          <Label htmlFor="app-reminders">Rappels d'échéance</Label>
                          <p className="text-sm text-gray-500">Afficher des rappels pour les factures à échéance proche</p>
                        </div>
                        <Switch id="app-reminders" defaultChecked />
                      </div>
                    </div>
                    
                    <Button>Enregistrer les préférences</Button>
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

export default ClientSettings;
