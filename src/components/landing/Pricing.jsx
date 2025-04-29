
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const Pricing = () => {
  const tiers = [
    {
      name: "Démarrage",
      price: "99",
      description: "Idéal pour les auto-entrepreneurs et les TPE",
      features: [
        "50 factures par mois",
        "10 clients",
        "Facturation conforme DGI",
        "Export PDF",
        "Support par email",
      ],
      buttonText: "Essai gratuit",
      buttonVariant: "outline",
    },
    {
      name: "Professionnel",
      price: "299",
      description: "Pour les PME en pleine croissance",
      features: [
        "Factures illimitées",
        "Clients illimités",
        "Facturation conforme DGI",
        "Export PDF et envoi par email",
        "Relances automatiques",
        "Paiements en ligne",
        "Support prioritaire",
      ],
      buttonText: "Commencer",
      buttonVariant: "default",
      highlighted: true,
    },
    {
      name: "Entreprise",
      price: "599",
      description: "Solution complète pour les grandes entreprises",
      features: [
        "Tout dans Professionnel",
        "Multi-utilisateurs",
        "Gestion des rôles",
        "API intégration",
        "Facturation récurrente",
        "Rapports personnalisés",
        "Support dédié",
      ],
      buttonText: "Nous contacter",
      buttonVariant: "outline",
    },
  ];

  return (
    <div id="pricing" className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base text-morocco-red font-semibold tracking-wide uppercase">Tarifs</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Des forfaits adaptés à chaque besoin
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Choisissez l'offre qui vous convient et commencez à simplifier votre gestion dès aujourd'hui.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {tiers.map((tier) => (
            <div 
              key={tier.name}
              className={`rounded-2xl shadow-lg overflow-hidden ${
                tier.highlighted ? 'ring-4 ring-morocco-green/20 scale-105 z-10 bg-white' : 'bg-white'
              }`}
            >
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900">{tier.name}</h3>
                <div className="mt-4 flex items-baseline">
                  <span className="text-5xl font-extrabold tracking-tight">{tier.price}</span>
                  <span className="ml-1 text-2xl font-medium text-gray-500">MAD/mois</span>
                </div>
                <p className="mt-5 text-lg text-gray-500">{tier.description}</p>

                <ul className="mt-8 space-y-4">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <div className="flex-shrink-0">
                        <Check className="h-5 w-5 text-morocco-green" />
                      </div>
                      <p className="ml-3 text-gray-600">{feature}</p>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="px-6 pt-6 pb-8 bg-gray-50">
                <Button
                  className={`w-full py-6 ${
                    tier.buttonVariant === 'default'
                      ? 'bg-morocco-green hover:bg-morocco-green/90 text-white'
                      : 'border-morocco-green text-morocco-green hover:bg-morocco-green/10'
                  }`}
                  variant={tier.buttonVariant === 'default' ? 'default' : 'outline'}
                >
                  {tier.buttonText}
                </Button>
                <p className="mt-4 text-center text-sm text-gray-500">
                  TVA non incluse. Facturation mensuelle ou annuelle.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;
