import { Phone } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export const StickyCallButton = () => {
  const handleCall = () => {
    window.location.href = "tel:0557494130";
  };

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 1, duration: 0.4 }}
      className="fixed bottom-24 left-4 z-30 md:hidden"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="relative group"
      >
        {/* Pulsing ring */}
        <div className="absolute -inset-2 bg-primary/30 rounded-full animate-ping" />
        
        {/* Glow */}
        <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-full opacity-75 blur-lg group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Button */}
        <Button
          size="lg"
          onClick={handleCall}
          className="relative rounded-full h-16 w-16 bg-gradient-to-r from-primary to-accent text-black shadow-[var(--shadow-glow-hover)]"
          aria-label="Appeler Au Bon Goût"
        >
          <Phone className="h-7 w-7 animate-pulse" />
        </Button>
      </motion.div>
    </motion.div>
  );
};
