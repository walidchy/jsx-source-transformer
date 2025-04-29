
import { Check, File, User, Wallet } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Features = () => {
  const features = [
    {
      title: "Facturation Marocaine",
      description: "Créez des factures conformes aux exigences de la DGI, avec ICE, TVA et toutes les mentions légales obligatoires.",
      icon: File,
    },
    {
      title: "Gestion de Clients",
      description: "Gérez facilement votre base de clients, avec historique des factures, paiements et relances automatiques.",
      icon: User,
    },
    {
      title: "Suivi des Paiements",
      description: "Suivez vos encaissements, relancez les impayés et générez des reçus conformes à la législation marocaine.",
      icon: Wallet,
    },
    {
      title: "Bilingue Français-Arabe",
      description: "L'ensemble de l'interface et des documents sont disponibles en français et en arabe, pour s'adapter à vos besoins.",
      icon: Check,
    },
  ];

  return (
    <div id="features" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-base text-morocco-red font-semibold tracking-wide uppercase">Fonctionnalités</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Une solution complète pour votre entreprise marocaine
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            Gérez l'ensemble de votre activité commerciale en conformité avec la réglementation marocaine.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <Card key={index} className="border-none shadow-md hover:shadow-lg transition-shadow">
              <CardHeader className="pb-2">
                <div className="bg-morocco-red/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-morocco-red" />
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-base">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-20 bg-white shadow-xl rounded-2xl overflow-hidden">
          <div className="grid md:grid-cols-2">
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <div className="text-morocco-green font-semibold mb-2">100% conforme DGI</div>
              <h3 className="text-3xl font-bold mb-6">Factures professionnelles et conformes à la loi marocaine</h3>
              <p className="text-gray-600 mb-8">
                Notre système génère automatiquement des factures selon les exigences fiscales marocaines avec toutes les mentions légales.
              </p>
              <ul className="space-y-3">
                {[
                  "Mentions légales obligatoires automatisées",
                  "ICE et données fiscales intégrées",
                  "Export PDF compatible avec l'administration",
                  "Archivage conforme à la réglementation"
                ].map((item, i) => (
                  <li key={i} className="flex items-center">
                    <Check className="h-5 w-5 text-morocco-green mr-3" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gray-100 p-6 flex items-center justify-center">
              <img 
                src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80" 
                alt="Exemple de facture" 
                className="rounded-lg shadow-lg max-h-96 object-cover" 
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
