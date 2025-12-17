import { ArrowLeft, CheckCircle, Users } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { ImageWithFallback } from '../figma/ImageWithFallback';

export function LoonadministratiePage() {
  const { t } = useLanguage();
  const navigate = useNavigate();
  
  const scrollToContact = () => {
    navigate('/');
    setTimeout(() => {
      const element = document.getElementById('contact');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const handleBack = () => {
    navigate('/');
    setTimeout(() => {
      const servicesElement = document.getElementById('services');
      if (servicesElement) {
        servicesElement.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut"
      }
    })
  };

  return (
    <motion.div 
      className="pt-24 pb-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.button
          onClick={handleBack}
          className="flex items-center gap-2 text-[#00a0d2] hover:text-[#0090be] mb-8"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <ArrowLeft size={20} />
          {t('backToOverview')}
        </motion.button>

        <motion.div 
          className="mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <motion.div 
            className="bg-[#253e95] text-white w-20 h-20 rounded-2xl flex items-center justify-center mb-6"
            whileHover={{ rotate: 5, scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            <Users size={40} />
          </motion.div>
          <h1 className="text-5xl mb-4 text-gray-900">{t('payrollTitle')}</h1>
          <p className="text-xl text-gray-600">
            {t('payrollSubtitle')}
          </p>
        </motion.div>

        {/* Hero Image */}
        <motion.div
          className="mb-12 rounded-2xl overflow-hidden shadow-2xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1737703638422-2cfa152cdcb7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW5hbmNpYWwlMjBjaGFydHMlMjBncmFwaHMlMjBkZXNrfGVufDF8fHx8MTc2NTk4NDc1NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Loonadministratie en salarisverwerking"
            className="w-full h-[400px] object-cover"
          />
        </motion.div>

        <div className="prose max-w-none">
          <motion.div 
            className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-xl mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-3xl mb-4 text-gray-900">{t('payrollIntroTitle')}</h2>
            <p className="text-lg text-gray-600 mb-6">
              {t('payrollIntroP1')}
            </p>
          </motion.div>

          <motion.h2 
            className="text-3xl mb-6 text-gray-900"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {t('whatWeDoTitle')}
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <motion.div 
              className="flex items-start gap-3"
              custom={0}
              initial="hidden"
              animate="visible"
              variants={itemVariants}
            >
              <CheckCircle className="text-[#00a0d2] flex-shrink-0 mt-1" size={24} />
              <div>
                <h3 className="text-xl mb-2 text-gray-900">{t('payslipsTitle')}</h3>
                <p className="text-gray-600">{t('payslipsDesc')}</p>
              </div>
            </motion.div>

            <motion.div 
              className="flex items-start gap-3"
              custom={1}
              initial="hidden"
              animate="visible"
              variants={itemVariants}
            >
              <CheckCircle className="text-[#00a0d2] flex-shrink-0 mt-1" size={24} />
              <div>
                <h3 className="text-xl mb-2 text-gray-900">{t('taxReturnTitle')}</h3>
                <p className="text-gray-600">{t('taxReturnDesc')}</p>
              </div>
            </motion.div>

            <motion.div 
              className="flex items-start gap-3"
              custom={2}
              initial="hidden"
              animate="visible"
              variants={itemVariants}
            >
              <CheckCircle className="text-[#00a0d2] flex-shrink-0 mt-1" size={24} />
              <div>
                <h3 className="text-xl mb-2 text-gray-900">{t('annualStatementsTitle')}</h3>
                <p className="text-gray-600">{t('annualStatementsDesc')}</p>
              </div>
            </motion.div>

            <motion.div 
              className="flex items-start gap-3"
              custom={3}
              initial="hidden"
              animate="visible"
              variants={itemVariants}
            >
              <CheckCircle className="text-[#00a0d2] flex-shrink-0 mt-1" size={24} />
              <div>
                <h3 className="text-xl mb-2 text-gray-900">{t('contractsTitle')}</h3>
                <p className="text-gray-600">{t('contractsDesc')}</p>
              </div>
            </motion.div>

            <motion.div 
              className="flex items-start gap-3"
              custom={4}
              initial="hidden"
              animate="visible"
              variants={itemVariants}
            >
              <CheckCircle className="text-[#00a0d2] flex-shrink-0 mt-1" size={24} />
              <div>
                <h3 className="text-xl mb-2 text-gray-900">{t('pensionTitle')}</h3>
                <p className="text-gray-600">{t('pensionDesc')}</p>
              </div>
            </motion.div>

            <motion.div 
              className="flex items-start gap-3"
              custom={5}
              initial="hidden"
              animate="visible"
              variants={itemVariants}
            >
              <CheckCircle className="text-[#00a0d2] flex-shrink-0 mt-1" size={24} />
              <div>
                <h3 className="text-xl mb-2 text-gray-900">{t('absenceTitle')}</h3>
                <p className="text-gray-600">{t('absenceDesc')}</p>
              </div>
            </motion.div>
          </div>

          <div className="bg-[#00a0d2]/10 border-l-4 border-[#00a0d2] p-6 rounded mb-8">
            <h3 className="text-xl mb-3 text-gray-900">{t('accurateTimely')}</h3>
            <p className="text-gray-600 mb-3">{t('accurateTimelyDesc')}</p>
          </div>

          <div className="text-center mt-12">
            <h2 className="text-3xl mb-4 text-gray-900">{t('interestedTitle')}</h2>
            <p className="text-xl text-gray-600 mb-8">
              {t('payrollInterestedDesc')}
            </p>
            <button
              onClick={scrollToContact}
              className="bg-[#253e95] text-white px-8 py-4 rounded-lg hover:bg-[#1e3278] transition-colors"
            >
              {t('contactUs')}
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}