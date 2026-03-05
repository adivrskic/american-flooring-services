import ContactForm from "../components/Contact";

export const metadata = {
  title: 'Contact Us  - American Flooring Services',
  description: 'Contact us so we can work together on a commercial or residential project. Prequalify today!',
};

const ContactPage = () => {
  return (
    <>
      <h1>Contact Us</h1>
      <ContactForm />
    </>
  );
};

export default ContactPage;