
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ForgotPassword from "./pages/ForgotPassword";
import Dashboard from "./pages/Dashboard";
import ClientSpace from "./pages/ClientSpace";
import InvoiceCreate from "./pages/InvoiceCreate";
import Clients from "./pages/Clients";
import Invoices from "./pages/Invoices";
import Calendar from "./pages/Calendar";
import Reports from "./pages/Reports";
import Settings from "./pages/Settings";
import ClientInvoices from "./pages/client/ClientInvoices";
import ClientProducts from "./pages/client/ClientProducts";
import ClientQuotations from "./pages/client/ClientQuotations";
import ClientReports from "./pages/client/ClientReports";
import ClientSettings from "./pages/client/ClientSettings";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          
          {/* Admin routes */}
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/invoices" element={<Invoices />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/settings" element={<Settings />} />
          
          {/* Client routes */}
          <Route path="/client" element={<ClientSpace />} />
          <Route path="/client/invoices" element={<ClientInvoices />} />
          <Route path="/client/invoices/create" element={<InvoiceCreate />} />
          <Route path="/client/products" element={<ClientProducts />} />
          <Route path="/client/quotations" element={<ClientQuotations />} />
          <Route path="/client/reports" element={<ClientReports />} />
          <Route path="/client/settings" element={<ClientSettings />} />
          
          {/* Catch-all route for 404s */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
