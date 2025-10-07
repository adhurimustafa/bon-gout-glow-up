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
      className="fixed bottom-4 right-4 z-50 md:hidden"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <Button
        size="lg"
        onClick={handleCall}
        className="rounded-full h-14 w-14 shadow-[var(--shadow-glow)] animate-glow"
        aria-label="Appeler Au Bon Goût"
      >
        <Phone className="h-6 w-6" />
      </Button>
    </motion.div>
  );
};
