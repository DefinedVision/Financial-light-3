import { CheckCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function About() {
  const { t } = useLanguage();
  
  const benefits = [
    'aboutBenefit1',
    'aboutBenefit2',
    'aboutBenefit3',
    'aboutBenefit4',
    'aboutBenefit5',
    'aboutBenefit6'
  ];

  const benefitVariants = {
    hidden: { opacity: 0, x: -20 },
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

  const featureVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.15,
        duration: 0.5,
        ease: "easeOut"
      }
    })
  };

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-4xl mb-6 text-gray-900">{t('aboutTitle')}</h2>
            <p className="text-lg text-gray-600 mb-6">
              {t('aboutP1')}
            </p>
            <p className="text-lg text-gray-600 mb-8">
              {t('aboutP2')}
            </p>
            <div className="space-y-3">
              {benefits.map((benefit, index) => (
                <motion.div 
                  key={index} 
                  className="flex items-start gap-3"
                  custom={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                  variants={benefitVariants}
                >
                  <CheckCircle className="text-[#00a0d2] flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">{t(benefit)}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
          <motion.div 
            className="relative rounded-2xl overflow-hidden shadow-2xl"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <ImageWithFallback 
              src="https://images.unsplash.com/photo-1712698137596-15ea82027b55?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvZmZpY2UlMjBkZXNrJTIwb3ZlcmhlYWQlMjB2aWV3fGVufDF8fHx8MTc2NTk4NDc1Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Modern kantoor workspace"
              className="w-full h-full object-cover min-h-[500px]"
            />
            
            {/* Overlay with text */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#253e95]/90 to-[#00a0d2]/90 p-12 text-white flex flex-col justify-center">
              <h3 className="text-3xl mb-6">{t('whyChooseUs')}</h3>
              <div className="space-y-6">
                <motion.div
                  custom={0}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={featureVariants}
                >
                  <div className="text-blue-200 mb-2">{t('experienceTitle')}</div>
                  <p>{t('experienceDesc')}</p>
                </motion.div>
                <motion.div
                  custom={1}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={featureVariants}
                >
                  <div className="text-blue-200 mb-2">{t('qualityTitle')}</div>
                  <p>{t('qualityDesc')}</p>
                </motion.div>
                <motion.div
                  custom={2}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={featureVariants}
                >
                  <div className="text-blue-200 mb-2">{t('personalTitle')}</div>
                  <p>{t('personalDesc')}</p>
                </motion.div>
                <motion.div
                  custom={3}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={featureVariants}
                >
                  <div className="text-blue-200 mb-2">{t('modernTitle')}</div>
                  <p>{t('modernDesc')}</p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}