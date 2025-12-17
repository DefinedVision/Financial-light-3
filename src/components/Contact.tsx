import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'motion/react';

export function Contact() {
  const { t, language } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const thankYouMessage = language === 'nl' 
      ? 'Bedankt voor uw bericht! We nemen zo spoedig mogelijk contact met u op.'
      : 'Thank you for your message! We will contact you as soon as possible.';
    alert(thankYouMessage);
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactItemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut"
      }
    })
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl mb-4 text-gray-900">{t('contactTitle')}</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t('contactDescription')}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-2xl mb-6 text-gray-900">{t('contactDetailsTitle')}</h3>
            <div className="space-y-6 mb-8">
              <motion.div 
                className="flex items-start gap-4"
                custom={0}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={contactItemVariants}
              >
                <div className="bg-[#253e95] text-white p-3 rounded-lg">
                  <Phone size={24} />
                </div>
                <div>
                  <div className="text-gray-900 mb-1">{t('phone')}</div>
                  <a href="tel:0207165588" className="text-[#00a0d2] hover:underline">
                    (020) 716 55 88
                  </a>
                  <p className="text-sm text-gray-500 mt-1">{t('callUs')}</p>
                </div>
              </motion.div>

              <motion.div 
                className="flex items-start gap-4"
                custom={1}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={contactItemVariants}
              >
                <div className="bg-[#253e95] text-white p-3 rounded-lg">
                  <Mail size={24} />
                </div>
                <div>
                  <div className="text-gray-900 mb-1">{t('email')}</div>
                  <a href="mailto:info@financiallight.nl" className="text-[#00a0d2] hover:underline">
                    info@financiallight.nl
                  </a>
                </div>
              </motion.div>

              <motion.div 
                className="flex items-start gap-4"
                custom={2}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={contactItemVariants}
              >
                <div className="bg-[#253e95] text-white p-3 rounded-lg">
                  <MapPin size={24} />
                </div>
                <div>
                  <div className="text-gray-900 mb-1">{t('address')}</div>
                  <div className="text-gray-600">
                    Tijnmuiden 79<br />
                    1046 AK Amsterdam
                  </div>
                </div>
              </motion.div>

              <motion.div 
                className="flex items-start gap-4"
                custom={3}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={contactItemVariants}
              >
                <div className="bg-[#253e95] text-white p-3 rounded-lg">
                  <Clock size={24} />
                </div>
                <div>
                  <div className="text-gray-900 mb-1">{t('openingHours')}</div>
                  <div className="text-gray-600 space-y-1">
                    <div>{t('mondayFriday')}: {t('hours1018')}</div>
                    <div>{t('saturday')}: {t('hours1018')}</div>
                    <div>{t('sunday')}: {t('closed')}</div>
                  </div>
                </div>
              </motion.div>
            </div>

            <motion.div 
              className="bg-gradient-to-br from-[#253e95] to-[#00a0d2] rounded-xl p-6 text-white"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h4 className="text-xl mb-3">{t('makeAppointment')}</h4>
              <p className="text-white/90 mb-4">
                {t('appointmentDesc')}
              </p>
              <p className="text-white/90">
                {t('freeIntro')}
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-2xl mb-6 text-gray-900">{t('sendMessage')}</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-gray-700 mb-2">
                  {t('name')} *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00a0d2]"
                  placeholder={t('yourName')}
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-700 mb-2">
                  {t('email')} *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00a0d2]"
                  placeholder={t('yourEmail')}
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-gray-700 mb-2">
                  {t('telephone')}
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00a0d2]"
                  placeholder="06 12345678"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-700 mb-2">
                  {t('message')} *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00a0d2]"
                  placeholder={t('messagePlaceholder')}
                />
              </div>

              <motion.button
                type="submit"
                className="w-full bg-[#253e95] text-white py-3 rounded-lg hover:bg-[#1e3278] transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {t('sendButton')}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}