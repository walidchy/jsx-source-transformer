
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Bell, Calendar, FileSearch, Home, List, LogOut, Search, Settings as SettingsIcon, User, Users } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Switch } from '@/components/ui/switch';

const Settings = () => {
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
                  <Home className="mr-2 h-4 w-4" />
                  Rapports
                </Link>
              </Button>
              
              <Button variant="secondary" className="w-full justify-start" asChild>
                <Link to="/settings">
                  <SettingsIcon className="mr-2 h-4 w-4" />
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
          <Tabs defaultValue="company">
            <TabsList className="mb-6">
              <TabsTrigger value="company">Entreprise</TabsTrigger>
              <TabsTrigger value="invoice">Factures</TabsTrigger>
              <TabsTrigger value="account">Compte</TabsTrigger>
              <TabsTrigger value="notifications">Notifications</TabsTrigger>
            </TabsList>
            
            <TabsContent value="company">
              <Card>
                <CardHeader>
                  <CardTitle>Informations de l'entreprise</CardTitle>
                  <CardDescription>Ces informations apparaîtront sur vos factures et autres documents.</CardDescription>
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
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" defaultValue="contact@example.ma" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Téléphone</Label>
                        <Input id="phone" defaultValue="+212 5 22 123 456" />
                      </div>
                      <div className="space-y-2 md:col-span-2">
                        <Label htmlFor="address">Adresse</Label>
                        <Textarea id="address" defaultValue="123 Rue de l'Example, 20000 Casablanca, Maroc" />
                      </div>
                    </div>
                    <Button>Enregistrer les modifications</Button>
                  </form>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="invoice">
              <Card>
                <CardHeader>
                  <CardTitle>Paramètres de facturation</CardTitle>
                  <CardDescription>Personnalisez vos factures et leur comportement</CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="invoice-prefix">Préfixe des numéros de facture</Label>
                        <Input id="invoice-prefix" defaultValue="FAC-2023-" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="next-invoice">Prochain numéro de facture</Label>
                        <Input id="next-invoice" defaultValue="043" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="currency">Devise</Label>
                        <Input id="currency" defaultValue="MAD" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="payment-terms">Délai de paiement (jours)</Label>
                        <Input id="payment-terms" type="number" defaultValue="30" />
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <h3 className="text-lg font-medium">Options de factures</h3>
                      <div className="flex items-center justify-between">
                        <div>
                          <Label htmlFor="auto-send">Envoi automatique des factures</Label>
                          <p className="text-sm text-gray-500">Envoyer automatiquement les factures par email après création</p>
                        </div>
                        <Switch id="auto-send" />
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div>
                          <Label htmlFor="auto-reminder">Rappels de paiement automatiques</Label>
                          <p className="text-sm text-gray-500">Envoyer automatiquement des rappels pour les factures en retard</p>
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
                    
                    <Button>Enregistrer les modifications</Button>
                  </form>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="account">
              <Card>
                <CardHeader>
                  <CardTitle>Compte utilisateur</CardTitle>
                  <CardDescription>Gérez vos informations personnelles et vos préférences de compte</CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="user-name">Nom complet</Label>
                        <Input id="user-name" defaultValue="Mohamed El Alaoui" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="user-email">Email</Label>
                        <Input id="user-email" type="email" defaultValue="mohamed@example.ma" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="user-password">Mot de passe</Label>
                        <Input id="user-password" type="password" defaultValue="********" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="user-language">Langue</Label>
                        <select id="user-language" className="w-full px-3 py-2 border border-gray-300 rounded-md">
                          <option value="fr">Français</option>
                          <option value="ar">العربية</option>
                          <option value="en">English</option>
                        </select>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <h3 className="text-lg font-medium">Options du compte</h3>
                      <div className="flex items-center justify-between">
                        <div>
                          <Label htmlFor="two-factor">Authentification à deux facteurs</Label>
                          <p className="text-sm text-gray-500">Ajouter une couche de sécurité supplémentaire à votre compte</p>
                        </div>
                        <Switch id="two-factor" />
                      </div>
                    </div>
                    
                    <Button>Mettre à jour le compte</Button>
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
                          <Label htmlFor="email-clients">Clients</Label>
                          <p className="text-sm text-gray-500">Recevoir des notifications pour les nouveaux clients</p>
                        </div>
                        <Switch id="email-clients" defaultChecked />
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

export default Settings;
