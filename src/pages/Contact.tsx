import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Contact as ContactComponent } from "@/components/Contact";

const ContactPage = () => {
  return (
    <div className="min-h-screen pt-20">
      <Header />
      <ContactComponent />
      <Footer />
    </div>
  );
};

export default ContactPage;
