
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { ArrowLeft, CheckCircle } from 'lucide-react';

const emailSchema = z.object({
  email: z.string().email("Veuillez entrer un email valide"),
});

const ForgotPassword = () => {
  const [isEmailSent, setIsEmailSent] = useState(false);
  
  const form = useForm<z.infer<typeof emailSchema>>({
    resolver: zodResolver(emailSchema),
    defaultValues: {
      email: '',
    },
  });

  const onSubmit = (data: z.infer<typeof emailSchema>) => {
    console.log("Reset password for:", data);
    // In a real app, this would send a reset password email
    setIsEmailSent(true);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-morocco-pattern py-12 px-4 sm:px-6 lg:px-8">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <div className="flex justify-center mb-4">
            <div className="font-bold text-2xl text-morocco-red">
              efacture<span className="text-morocco-green">maroc</span>
              <span className="text-gray-600 text-sm">.com</span>
            </div>
          </div>
          <CardTitle className="text-2xl text-center font-bold">
            Récupération de mot de passe
          </CardTitle>
          <CardDescription className="text-center">
            {!isEmailSent 
              ? "Entrez votre adresse e-mail pour réinitialiser votre mot de passe" 
              : "Instructions envoyées ! Vérifiez votre boîte de réception."}
          </CardDescription>
        </CardHeader>
        <CardContent>
          {!isEmailSent ? (
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="votre@email.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <Button type="submit" className="w-full bg-morocco-red hover:bg-morocco-red/90">
                  Envoyer les instructions
                </Button>
              </form>
            </Form>
          ) : (
            <div className="text-center space-y-4">
              <div className="flex justify-center">
                <CheckCircle className="h-16 w-16 text-morocco-green" />
              </div>
              <p className="text-gray-600">
                Si un compte existe avec cette adresse e-mail, vous recevrez un lien de réinitialisation de mot de passe.
              </p>
              <p className="text-gray-600">
                Si vous ne recevez pas d'e-mail dans les prochaines minutes, vérifiez votre dossier spam.
              </p>
            </div>
          )}
        </CardContent>
        <CardFooter className="flex justify-center">
          <Link 
            to="/login" 
            className="flex items-center text-morocco-red hover:text-morocco-red/80 font-medium"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Retour à la connexion
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
};

export default ForgotPassword;
