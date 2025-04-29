
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Checkbox } from '@/components/ui/checkbox';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Eye, EyeOff, Key } from 'lucide-react';

const loginSchema = z.object({
  email: z.string().email("Veuillez entrer un email valide"),
  password: z.string().min(8, "Le mot de passe doit contenir au moins 8 caractères"),
  remember: z.boolean().optional(),
});

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [use2FA, setUse2FA] = useState(false);
  const [otpCode, setOtpCode] = useState('');
  
  const form = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
      remember: false,
    },
  });

  const onSubmit = (data) => {
    console.log(data);
    // Simulate 2FA check - in a real app, this would come from backend
    setUse2FA(true);
  };

  const handleOTPSubmit = (e) => {
    e.preventDefault();
    console.log('OTP submitted:', otpCode);
    // In real app: verify OTP with backend then redirect
    window.location.href = '/dashboard';
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
            {!use2FA ? "Connexion" : "Vérification à deux facteurs"}
          </CardTitle>
          <CardDescription className="text-center">
            {!use2FA 
              ? "Entrez vos identifiants pour accéder à votre compte" 
              : "Entrez le code de vérification envoyé à votre appareil"
            }
          </CardDescription>
        </CardHeader>
        <CardContent>
          {!use2FA ? (
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
                
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Mot de passe</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Input 
                            type={showPassword ? "text" : "password"}
                            placeholder="Mot de passe"
                            {...field}
                          />
                          <button
                            type="button"
                            className="absolute inset-y-0 right-0 pr-3 flex items-center"
                            onClick={() => setShowPassword(!showPassword)}
                          >
                            {showPassword ? <EyeOff className="h-4 w-4 text-gray-400" /> : <Eye className="h-4 w-4 text-gray-400" />}
                          </button>
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <FormField
                      control={form.control}
                      name="remember"
                      render={({ field }) => (
                        <FormItem className="flex flex-row items-center space-x-2 space-y-0">
                          <FormControl>
                            <Checkbox 
                              checked={field.value} 
                              onCheckedChange={field.onChange}
                            />
                          </FormControl>
                          <FormLabel className="text-sm font-medium leading-none">
                            Se souvenir de moi
                          </FormLabel>
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="text-sm">
                    <Link to="/forgot-password" className="font-medium text-morocco-red hover:text-morocco-red/80">
                      Mot de passe oublié?
                    </Link>
                  </div>
                </div>
                
                <Button type="submit" className="w-full bg-morocco-red hover:bg-morocco-red/90">
                  Se connecter
                </Button>
              </form>
            </Form>
          ) : (
            <form onSubmit={handleOTPSubmit} className="space-y-4">
              <div className="flex justify-center my-4">
                <div className="rounded-full bg-morocco-green/10 p-3">
                  <Key className="h-6 w-6 text-morocco-green" />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="otp">Code d'authentification</Label>
                <Input
                  id="otp"
                  placeholder="Entrez le code à 6 chiffres"
                  value={otpCode}
                  onChange={(e) => setOtpCode(e.target.value)}
                  maxLength={6}
                  className="text-center text-xl tracking-widest"
                />
              </div>
              
              <Button type="submit" className="w-full bg-morocco-green hover:bg-morocco-green/90">
                Vérifier
              </Button>
              
              <div className="text-center">
                <button
                  type="button"
                  className="text-sm text-morocco-red hover:text-morocco-red/80"
                  onClick={() => setUse2FA(false)}
                >
                  Retour à la connexion
                </button>
              </div>
            </form>
          )}
        </CardContent>
        <CardFooter className="flex flex-col space-y-2">
          <div className="text-center text-sm">
            Vous n'avez pas de compte ?{" "}
            <Link to="/register" className="font-medium text-morocco-red hover:text-morocco-red/80">
              Créer un compte
            </Link>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Login;
