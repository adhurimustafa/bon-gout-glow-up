import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Send } from "lucide-react";

export const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Validation simple
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Erreur",
        description: "Veuillez remplir tous les champs obligatoires",
        variant: "destructive"
      });
      setIsSubmitting(false);
      return;
    }

    // Simulation d'envoi - À remplacer par votre backend
    setTimeout(() => {
      toast({
        title: "Message envoyé !",
        description: "Nous vous répondrons dans les plus brefs délais.",
      });
      setFormData({ name: "", email: "", phone: "", message: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <Input
          type="text"
          name="name"
          placeholder="Votre nom *"
          value={formData.name}
          onChange={handleChange}
          required
          className="bg-background border-border"
        />
      </div>

      <div>
        <Input
          type="email"
          name="email"
          placeholder="Votre email *"
          value={formData.email}
          onChange={handleChange}
          required
          className="bg-background border-border"
        />
      </div>

      <div>
        <Input
          type="tel"
          name="phone"
          placeholder="Votre téléphone (optionnel)"
          value={formData.phone}
          onChange={handleChange}
          className="bg-background border-border"
        />
      </div>

      <div>
        <Textarea
          name="message"
          placeholder="Votre message *"
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
          className="bg-background border-border resize-none"
        />
      </div>

      <Button 
        type="submit"
        size="lg"
        disabled={isSubmitting}
        className="w-full bg-primary hover:bg-primary/90 text-white shadow-[var(--shadow-elegant)]"
      >
        <Send className="mr-2 h-5 w-5" />
        {isSubmitting ? "Envoi en cours..." : "Envoyer votre message"}
      </Button>
    </form>
  );
};
