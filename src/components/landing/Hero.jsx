
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-white pt-24 pb-16 sm:pb-24">
      <div className="bg-morocco-pattern absolute inset-0 z-0"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
              <span className="block">Simplifiez votre</span>
              <span className="block text-morocco-red">Facturation au Maroc</span>
            </h1>
            <p className="mt-3 text-base text-gray-600 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
              La solution complète de gestion commerciale pour les entreprises marocaines.
              Créez des factures conformes, suivez vos paiements et gérez votre activité en toute simplicité.
            </p>
            <div className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0">
              <div className="flex flex-col sm:flex-row sm:justify-center lg:justify-start gap-4">
                <Button className="bg-morocco-red hover:bg-morocco-red/90 text-white px-8 py-6 text-lg">
                  Démarrer gratuitement
                </Button>
                <Button variant="outline" className="text-gray-700 hover:text-morocco-red px-8 py-6 text-lg">
                  Voir une démo
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
              <p className="mt-3 text-sm text-gray-500">
                Pas de carte de crédit requise • Essai gratuit de 14 jours
              </p>
            </div>
          </div>
          <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
            <div className="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md">
              <div className="relative block w-full bg-white rounded-lg overflow-hidden">
                <img
                  className="w-full"
                  src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80"
                  alt="Aperçu du tableau de bord de facturation"
                />
                <div className="absolute inset-0 w-full h-full flex items-center justify-center">
                  <Button variant="outline" className="bg-white/90 hover:bg-white text-morocco-red w-16 h-16 rounded-full flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1">
                      <polygon points="5 3 19 12 5 21 5 3"></polygon>
                    </svg>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
