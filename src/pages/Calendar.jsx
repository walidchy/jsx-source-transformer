
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Bell, Calendar as CalendarIcon, FileSearch, Home, List, LogOut, Plus, Search, Settings, User, Users } from 'lucide-react';
import { Calendar as CalendarComponent } from '@/components/ui/calendar';

const Calendar = () => {
  const [date, setDate] = React.useState(new Date());
  
  // Dummy data for events
  const events = [
    { id: 1, title: 'Réunion client', client: 'Société Example SARL', time: '09:00 - 10:30', type: 'meeting' },
    { id: 2, title: 'Échéance facture FAC-2023-041', client: 'Client Important SA', time: 'Toute la journée', type: 'deadline' },
    { id: 3, title: 'Appel de suivi', client: 'Nouveau Client', time: '14:00 - 14:30', type: 'call' },
    { id: 4, title: 'Préparation devis', client: 'Fournisseur Regular', time: '16:00 - 17:00', type: 'task' },
  ];

  const getEventTypeClass = (type) => {
    switch (type) {
      case 'meeting':
        return 'border-l-4 border-blue-500';
      case 'deadline':
        return 'border-l-4 border-red-500';
      case 'call':
        return 'border-l-4 border-green-500';
      case 'task':
        return 'border-l-4 border-orange-500';
      default:
        return 'border-l-4 border-gray-500';
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
              
              <Button variant="secondary" className="w-full justify-start" asChild>
                <Link to="/calendar">
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  Calendrier
                </Link>
              </Button>
              
              <Button variant="ghost" className="w-full justify-start" asChild>
                <Link to="/reports">
                  <Home className="mr-2 h-4 w-4" />
                  Rapports
                </Link>
              </Button>
              
              <Button variant="ghost" className="w-full justify-start" asChild>
                <Link to="/settings">
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
            <h1 className="text-xl font-semibold text-gray-800">Calendrier</h1>
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
            <h2 className="text-lg font-semibold">Avril 2023</h2>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Nouvel événement
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Calendar */}
            <Card className="col-span-1 md:col-span-2">
              <CardContent className="p-6">
                <CalendarComponent
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  className="rounded-md border"
                />
              </CardContent>
            </Card>
            
            {/* Events for selected day */}
            <Card className="col-span-1">
              <CardHeader>
                <CardTitle>Événements du jour</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {events.length > 0 ? (
                    events.map(event => (
                      <div key={event.id} className={`p-3 bg-white border rounded-md ${getEventTypeClass(event.type)}`}>
                        <h3 className="font-medium">{event.title}</h3>
                        <p className="text-sm text-gray-500">{event.client}</p>
                        <p className="text-sm text-gray-500">{event.time}</p>
                      </div>
                    ))
                  ) : (
                    <p className="text-center text-gray-500 py-4">Aucun événement prévu pour aujourd'hui</p>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Calendar;
