import { Award, Shield, Star } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'motion/react';

export function Certifications() {
  const { t, language } = useLanguage();
  
  const certVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay: i * 0.15,
        duration: 0.6,
        ease: "easeOut"
      }
    })
  };
  
  return (
    <section id="certifications" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl mb-4 text-gray-900">{t('certTitle')}</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t('certDescription')}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <motion.div 
            className="text-center p-8 bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-xl"
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={certVariants}
            whileHover={{ scale: 1.05, y: -5 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div 
              className="bg-[#253e95] text-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
            >
              <Award size={40} />
            </motion.div>
            <h3 className="text-2xl mb-3 text-gray-900">{t('noabCertTitle')}</h3>
            <p className="text-gray-600">
              {t('noabCertDesc')}
            </p>
          </motion.div>

          <motion.div 
            className="text-center p-8 bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-xl"
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={certVariants}
            whileHover={{ scale: 1.05, y: -5 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div 
              className="bg-[#253e95] text-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
            >
              <Shield size={40} />
            </motion.div>
            <h3 className="text-2xl mb-3 text-gray-900">{t('trustTitle')}</h3>
            <p className="text-gray-600">
              {t('trustDesc')}
            </p>
          </motion.div>

          <motion.div 
            className="text-center p-8 bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-xl"
            custom={2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={certVariants}
            whileHover={{ scale: 1.05, y: -5 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div 
              className="bg-[#253e95] text-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
            >
              <Star size={40} />
            </motion.div>
            <h3 className="text-2xl mb-3 text-gray-900">{t('devTitle')}</h3>
            <p className="text-gray-600">
              {t('devDesc')}
            </p>
          </motion.div>
        </div>

        <motion.div 
          className="bg-gradient-to-br from-[#253e95] to-[#00a0d2] rounded-2xl p-12 text-center text-white"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <h3 className="text-3xl mb-4">{t('noabMemberTitle')}</h3>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            {t('noabMemberDesc')}
          </p>
          <div className="flex flex-wrap justify-center gap-8 text-left">
            <motion.div 
              className="flex-1 min-w-[250px] max-w-[300px]"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <div className="mb-2">{language === 'nl' ? '✓ Permanente educatie verplicht' : '✓ Mandatory continuing education'}</div>
              <div className="mb-2">{language === 'nl' ? '✓ Beroepsaansprakelijkheidsverzekering' : '✓ Professional liability insurance'}</div>
              <div className="mb-2">{language === 'nl' ? '✓ Tuchtrecht en klachtenregeling' : '✓ Disciplinary law and complaints procedure'}</div>
            </motion.div>
            <motion.div 
              className="flex-1 min-w-[250px] max-w-[300px]"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <div className="mb-2">{language === 'nl' ? '✓ Gedragscode voor leden' : '✓ Code of conduct for members'}</div>
              <div className="mb-2">{language === 'nl' ? '✓ Kwaliteitstoetsing' : '✓ Quality assessment'}</div>
              <div className="mb-2">{language === 'nl' ? '✓ Onafhankelijke geschillencommissie' : '✓ Independent disputes committee'}</div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}