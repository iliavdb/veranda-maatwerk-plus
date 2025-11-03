import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MapPin, Phone, Mail } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { toast } from 'sonner';

const Contact = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success(
      t(
        'Bedankt voor uw bericht! We nemen zo snel mogelijk contact met u op.',
        'Thank you for your message! We will contact you as soon as possible.'
      )
    );
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-5xl font-bold mb-12 text-center">Contact</h1>

      <div className="grid md:grid-cols-2 gap-12 mb-12">
        {/* Contact Information */}
        <div>
          <Card>
            <CardHeader>
              <CardTitle>{t('Contactgegevens', 'Contact Information')}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-accent/10 p-3 rounded-lg">
                  <MapPin className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">{t('Adres', 'Address')}</h3>
                  <p className="text-muted-foreground">
                    Croy 19<br />
                    5653 LC Eindhoven
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-accent/10 p-3 rounded-lg">
                  <Phone className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">{t('Telefoon', 'Phone')}</h3>
                  <a
                    href="tel:+31610576944"
                    className="text-accent hover:underline block"
                  >
                    06 10 57 69 44
                  </a>
                  <p className="text-sm text-muted-foreground">(WhatsApp)</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-accent/10 p-3 rounded-lg">
                  <Mail className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">E-mail</h3>
                  <a
                    href="mailto:Powerveranda@icloud.com"
                    className="text-accent hover:underline break-all"
                  >
                    Powerveranda@icloud.com
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Contact Form */}
        <Card>
          <CardHeader>
            <CardTitle>{t('Stuur ons een bericht', 'Send us a message')}</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  {t('Naam', 'Name')}
                </label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  E-mail
                </label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  {t('Bericht', 'Message')}
                </label>
                <Textarea
                  id="message"
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                />
              </div>

              <Button type="submit" className="w-full">
                {t('Verstuur', 'Send')}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>

      {/* Google Maps */}
      <div className="rounded-lg overflow-hidden shadow-elegant h-[400px]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2487.147!2d5.4827!3d51.4416!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c6d90d9e5c8c8d%3A0x8e9c8c8c8c8c8c8!2sCroy%2019%2C%205653%20LC%20Eindhoven!5e0!3m2!1snl!2snl!4v1234567890"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  );
};

export default Contact;
