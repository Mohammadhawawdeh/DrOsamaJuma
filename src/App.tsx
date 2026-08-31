import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HelmetProvider } from "react-helmet-async";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import AutismPage from "@/pages/autism";
import AdhdPage from "@/pages/adhd";
import IepPage from "@/pages/iep";
import TaleemDamejPage from "@/pages/taleem-damej";
import TamhidMubakirPage from "@/pages/tamhid-mubakir";

const queryClient = new QueryClient();

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/autism" component={AutismPage} />
      <Route path="/adhd" component={AdhdPage} />
      <Route path="/iep" component={IepPage} />
      <Route path="/taleem-damej" component={TaleemDamejPage} />
      <Route path="/tamhid-mubakir" component={TamhidMubakirPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
            <Router />
          </WouterRouter>
          <Toaster />
        </TooltipProvider>
      </QueryClientProvider>
    </HelmetProvider>
  );
}

export default App;
