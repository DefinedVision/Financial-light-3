import { Calculator, FileText, Users, Lightbulb } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'motion/react';

const services = [
  {
    icon: Calculator,
    titleKey: 'service1Title',
    descKey: 'service1Desc',
    pathNl: '/diensten/boekhouding',
    pathEn: '/services/bookkeeping'
  },
  {
    icon: FileText,
    titleKey: 'service2Title',
    descKey: 'service2Desc',
    pathNl: '/diensten/belastingaangifte',
    pathEn: '/services/tax-returns'
  },
  {
    icon: Users,
    titleKey: 'service3Title',
    descKey: 'service3Desc',
    pathNl: '/diensten/loonadministratie',
    pathEn: '/services/payroll-administration'
  },
  {
    icon: Lightbulb,
    titleKey: 'service4Title',
    descKey: 'service4Desc',
    pathNl: '/diensten/financieel-advies',
    pathEn: '/services/financial-advice'
  }
];

export function Services() {
  const { t, language } = useLanguage();
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };
  
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl mb-4 text-gray-900">{t('servicesTitle')}</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t('servicesDescription')}
          </p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {services.map((service, index) => (
            <Link 
              key={index}
              to={language === 'nl' ? service.pathNl : service.pathEn}
            >
              <motion.div 
                variants={cardVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.98 }}
                className="p-8 bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-xl hover:shadow-lg transition-all"
              >
                <motion.div 
                  className="bg-[#253e95] text-white w-14 h-14 rounded-lg flex items-center justify-center mb-6"
                  whileHover={{ rotate: 5, scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <service.icon size={28} />
                </motion.div>
                <h3 className="text-xl mb-3 text-gray-900">{t(service.titleKey)}</h3>
                <p className="text-gray-600">{t(service.descKey)}</p>
                <motion.div 
                  className="mt-4 text-[#00a0d2] flex items-center gap-2"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  {t('readMore')} →
                </motion.div>
              </motion.div>
            </Link>
          ))}
        </motion.div>
      </div>
    </section>
  );
}