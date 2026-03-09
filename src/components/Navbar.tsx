import { Button } from "@/components/ui/button";

const DEMO_URL = "https://calendly.com/mario-scagnetti-tabedizioni/30min";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <span className="text-xl font-bold tracking-tight text-foreground">tablick</span>
        <Button asChild size="sm" className="rounded-full px-6">
          <a href={DEMO_URL}>Prenota una demo</a>
        </Button>
      </div>
    </nav>);

};

export default Navbar;