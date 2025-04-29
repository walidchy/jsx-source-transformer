
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ArrowLeft, Calendar, FileSearch, Plus, Trash, User } from 'lucide-react';

const InvoiceCreate = () => {
  const [client, setClient] = useState("");
  const [date, setDate] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [items, setItems] = useState([
    { id: 1, description: "", quantity: 1, price: 0, tax: 20, total: 0 }
  ]);

  const calculateTotal = (item: any) => {
    const subtotal = item.quantity * item.price;
    const tax = subtotal * (item.tax / 100);
    return subtotal + tax;
  };

  const handleItemChange = (id: number, field: string, value: any) => {
    const newItems = items.map(item => {
      if (item.id === id) {
        const updatedItem = { ...item, [field]: value };
        if (field === 'quantity' || field === 'price' || field === 'tax') {
          updatedItem.total = calculateTotal(updatedItem);
        }
        return updatedItem;
      }
      return item;
    });
    setItems(newItems);
  };

  const addItem = () => {
    const newId = items.length > 0 ? Math.max(...items.map(item => item.id)) + 1 : 1;
    setItems([...items, { id: newId, description: "", quantity: 1, price: 0, tax: 20, total: 0 }]);
  };

  const removeItem = (id: number) => {
    if (items.length > 1) {
      setItems(items.filter(item => item.id !== id));
    }
  };

  const calculateSubtotal = () => {
    return items.reduce((sum, item) => sum + (item.quantity * item.price), 0);
  };

  const calculateTaxTotal = () => {
    return items.reduce((sum, item) => {
      const subtotal = item.quantity * item.price;
      return sum + (subtotal * (item.tax / 100));
    }, 0);
  };

  const calculateGrandTotal = () => {
    return calculateSubtotal() + calculateTaxTotal();
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-6 lg:p-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center mb-6">
          <Button variant="ghost" className="mr-2" asChild>
            <Link to="/client">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Retour
            </Link>
          </Button>
          <h1 className="text-2xl font-bold">Créer une nouvelle facture</h1>
        </div>
        
        <Tabs defaultValue="edit" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-6">
            <TabsTrigger value="edit">Éditer</TabsTrigger>
            <TabsTrigger value="preview">Aperçu</TabsTrigger>
          </TabsList>
          
          <TabsContent value="edit" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Informations générales</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="invoice-number">Numéro de facture</Label>
                    <Input id="invoice-number" value="FAC-2023-043" readOnly />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="date">Date d'émission</Label>
                    <div className="relative">
                      <Input 
                        id="date" 
                        type="date" 
                        value={date}
                        onChange={e => setDate(e.target.value)}
                      />
                      <Calendar className="absolute right-3 top-3 h-4 w-4 text-gray-400" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="due-date">Date d'échéance</Label>
                    <div className="relative">
                      <Input 
                        id="due-date" 
                        type="date" 
                        value={dueDate}
                        onChange={e => setDueDate(e.target.value)}
                      />
                      <Calendar className="absolute right-3 top-3 h-4 w-4 text-gray-400" />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <User className="h-5 w-5 mr-2" />
                    Client
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="client">Sélectionner un client</Label>
                    <Select value={client} onValueChange={setClient}>
                      <SelectTrigger>
                        <SelectValue placeholder="Sélectionner un client" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="client1">Client Example SARL</SelectItem>
                        <SelectItem value="client2">Fournisseur Regular</SelectItem>
                        <SelectItem value="client3">Nouveau Client</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <Button variant="outline" size="sm" className="flex items-center">
                    <Plus className="h-4 w-4 mr-2" />
                    Ajouter un nouveau client
                  </Button>
                  
                  {client && (
                    <div className="border rounded-md p-3 mt-2 bg-gray-50">
                      <h3 className="font-medium">Client Example SARL</h3>
                      <p className="text-sm text-gray-500">ICE: 001234567891234</p>
                      <p className="text-sm text-gray-500">123 Rue Mohammed V, Casablanca</p>
                      <p className="text-sm text-gray-500">contact@example.ma</p>
                    </div>
                  )}
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Paramètres</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="payment-method">Mode de paiement</Label>
                    <Select defaultValue="bank">
                      <SelectTrigger>
                        <SelectValue placeholder="Sélectionner un mode de paiement" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="cash">Espèces</SelectItem>
                        <SelectItem value="bank">Virement bancaire</SelectItem>
                        <SelectItem value="check">Chèque</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="currency">Devise</Label>
                    <Select defaultValue="mad">
                      <SelectTrigger>
                        <SelectValue placeholder="Sélectionner une devise" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="mad">MAD - Dirham marocain</SelectItem>
                        <SelectItem value="eur">EUR - Euro</SelectItem>
                        <SelectItem value="usd">USD - Dollar américain</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="language">Langue</Label>
                    <Select defaultValue="fr">
                      <SelectTrigger>
                        <SelectValue placeholder="Sélectionner une langue" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="fr">Français</SelectItem>
                        <SelectItem value="ar">العربية (Arabe)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <Card>
              <CardHeader>
                <CardTitle>Articles et services</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-3">Description</th>
                        <th className="text-right py-3 px-2 w-24">Quantité</th>
                        <th className="text-right py-3 px-2 w-32">Prix unitaire</th>
                        <th className="text-right py-3 px-2 w-24">TVA (%)</th>
                        <th className="text-right py-3 px-2 w-32">Total</th>
                        <th className="w-10"></th>
                      </tr>
                    </thead>
                    <tbody>
                      {items.map(item => (
                        <tr key={item.id} className="border-b">
                          <td className="py-2">
                            <Input 
                              placeholder="Description de l'article"
                              value={item.description}
                              onChange={(e) => handleItemChange(item.id, 'description', e.target.value)}
                            />
                          </td>
                          <td className="py-2 px-2">
                            <Input 
                              type="number" 
                              min="1"
                              value={item.quantity}
                              onChange={(e) => handleItemChange(item.id, 'quantity', Number(e.target.value))}
                              className="text-right"
                            />
                          </td>
                          <td className="py-2 px-2">
                            <Input 
                              type="number" 
                              min="0" 
                              step="0.01"
                              value={item.price}
                              onChange={(e) => handleItemChange(item.id, 'price', Number(e.target.value))}
                              className="text-right"
                            />
                          </td>
                          <td className="py-2 px-2">
                            <Select 
                              value={item.tax.toString()} 
                              onValueChange={(value) => handleItemChange(item.id, 'tax', Number(value))}
                            >
                              <SelectTrigger>
                                <SelectValue />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="0">0%</SelectItem>
                                <SelectItem value="7">7%</SelectItem>
                                <SelectItem value="10">10%</SelectItem>
                                <SelectItem value="20">20%</SelectItem>
                              </SelectContent>
                            </Select>
                          </td>
                          <td className="py-2 px-2 text-right">
                            {item.total.toFixed(2)} MAD
                          </td>
                          <td className="py-2 px-2">
                            <Button 
                              variant="ghost" 
                              size="icon"
                              onClick={() => removeItem(item.id)}
                              disabled={items.length === 1}
                            >
                              <Trash className="h-4 w-4 text-red-500" />
                            </Button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                
                <Button variant="outline" className="mt-4" onClick={addItem}>
                  <Plus className="h-4 w-4 mr-2" />
                  Ajouter un article
                </Button>
                
                <div className="border-t mt-6 pt-4 flex flex-col items-end">
                  <div className="space-y-2 w-full max-w-xs">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Sous-total:</span>
                      <span>{calculateSubtotal().toFixed(2)} MAD</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Total TVA:</span>
                      <span>{calculateTaxTotal().toFixed(2)} MAD</span>
                    </div>
                    <div className="flex justify-between font-bold border-t pt-2">
                      <span>Total:</span>
                      <span>{calculateGrandTotal().toFixed(2)} MAD</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Notes et conditions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="notes">Notes</Label>
                  <textarea 
                    id="notes" 
                    rows={3}
                    placeholder="Notes pour le client..."
                    className="w-full p-2 border rounded-md"
                  ></textarea>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="payment-conditions">Conditions de paiement</Label>
                  <textarea 
                    id="payment-conditions" 
                    rows={2}
                    placeholder="Conditions de paiement..."
                    className="w-full p-2 border rounded-md"
                    defaultValue="Paiement à 30 jours à compter de la date d'émission de la facture."
                  ></textarea>
                </div>
              </CardContent>
            </Card>
            
            <div className="flex justify-end space-x-4">
              <Button variant="outline">Enregistrer comme brouillon</Button>
              <Button>
                <FileSearch className="mr-2 h-4 w-4" />
                Finaliser la facture
              </Button>
            </div>
          </TabsContent>
          
          <TabsContent value="preview" className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <div className="border rounded-md p-8 bg-white">
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="font-bold text-xl text-morocco-red mb-1">
                        efacture<span className="text-morocco-green">maroc</span>
                        <span className="text-gray-600 text-sm">.com</span>
                      </div>
                      <p className="text-gray-500 text-sm">Votre adresse complète</p>
                      <p className="text-gray-500 text-sm">Ville, Maroc</p>
                      <p className="text-gray-500 text-sm">ICE: 000000000000000</p>
                    </div>
                    <div className="text-right">
                      <h1 className="text-2xl font-bold mb-1">FACTURE</h1>
                      <p className="text-gray-700 font-medium">FAC-2023-043</p>
                      <p className="text-gray-500 text-sm">Date: {date || "JJ/MM/AAAA"}</p>
                      <p className="text-gray-500 text-sm">Échéance: {dueDate || "JJ/MM/AAAA"}</p>
                    </div>
                  </div>
                  
                  <div className="border-t border-b my-8 py-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h2 className="font-semibold text-gray-700 mb-2">Facturé à:</h2>
                        {client ? (
                          <>
                            <p className="font-medium">Client Example SARL</p>
                            <p className="text-sm text-gray-600">ICE: 001234567891234</p>
                            <p className="text-sm text-gray-600">123 Rue Mohammed V, Casablanca</p>
                            <p className="text-sm text-gray-600">contact@example.ma</p>
                          </>
                        ) : (
                          <p className="text-gray-500 italic">Aucun client sélectionné</p>
                        )}
                      </div>
                      <div>
                        <h2 className="font-semibold text-gray-700 mb-2">Détails du paiement:</h2>
                        <p className="text-sm">
                          <span className="font-medium">Mode de paiement:</span> Virement bancaire
                        </p>
                        <p className="text-sm">
                          <span className="font-medium">Banque:</span> Banque Exemple
                        </p>
                        <p className="text-sm">
                          <span className="font-medium">IBAN:</span> MA00 1234 5678 9012 3456 7890
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <table className="w-full mb-8">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-2 text-gray-700">Description</th>
                        <th className="text-right py-2 text-gray-700">Qté</th>
                        <th className="text-right py-2 text-gray-700">Prix unitaire</th>
                        <th className="text-right py-2 text-gray-700">TVA</th>
                        <th className="text-right py-2 text-gray-700">Total</th>
                      </tr>
                    </thead>
                    <tbody>
                      {items.length > 0 ? (
                        items.map(item => (
                          <tr key={item.id} className="border-b">
                            <td className="py-3">{item.description || "Description de l'article"}</td>
                            <td className="py-3 text-right">{item.quantity}</td>
                            <td className="py-3 text-right">{item.price.toFixed(2)} MAD</td>
                            <td className="py-3 text-right">{item.tax}%</td>
                            <td className="py-3 text-right font-medium">{item.total.toFixed(2)} MAD</td>
                          </tr>
                        ))
                      ) : (
                        <tr className="border-b">
                          <td colSpan={5} className="py-4 text-center text-gray-500 italic">
                            Aucun article ajouté
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                  
                  <div className="flex justify-end mb-8">
                    <div className="w-full max-w-xs">
                      <div className="flex justify-between border-b pb-2">
                        <span className="font-medium">Sous-total:</span>
                        <span>{calculateSubtotal().toFixed(2)} MAD</span>
                      </div>
                      <div className="flex justify-between border-b py-2">
                        <span className="font-medium">Total TVA:</span>
                        <span>{calculateTaxTotal().toFixed(2)} MAD</span>
                      </div>
                      <div className="flex justify-between pt-2 text-lg font-bold">
                        <span>Total:</span>
                        <span>{calculateGrandTotal().toFixed(2)} MAD</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="border-t pt-6">
                    <h3 className="font-semibold mb-2">Notes:</h3>
                    <p className="text-gray-700 text-sm mb-4">
                      Notes pour le client...
                    </p>
                    
                    <h3 className="font-semibold mb-2">Conditions de paiement:</h3>
                    <p className="text-gray-700 text-sm">
                      Paiement à 30 jours à compter de la date d'émission de la facture.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <div className="flex justify-end space-x-4">
              <Button variant="outline" onClick={() => document.getElementById('edit')?.click()}>
                Retour à l'édition
              </Button>
              <Button>
                Télécharger le PDF
              </Button>
              <Button variant="secondary">
                Envoyer au client
              </Button>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default InvoiceCreate;
