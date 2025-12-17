import { useLanguage } from '../context/LanguageContext';
import { motion } from 'motion/react';
import { Award, Shield, GraduationCap, CheckCircle } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function CertificationsPage() {
  const { t } = useLanguage();

  return (
    <motion.div 
      className="pt-24 pb-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl mb-6 text-gray-900">{t('certificationsTitle')}</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10">
            {t('certificationsSubtitle')}
          </p>
          
          {/* Hero Image */}
          <div className="rounded-2xl overflow-hidden shadow-2xl max-w-4xl mx-auto">
            <ImageWithFallback 
              src="https://images.unsplash.com/photo-1638636241638-aef5120c5153?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBjZXJ0aWZpY2F0aW9uJTIwZGlwbG9tYXxlbnwxfHx8fDE3NjU5ODQzMDF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Certificeringen en kwaliteitsstandaarden"
              className="w-full h-[450px] object-cover"
            />
          </div>
        </motion.div>

        {/* NOAB Certification */}
        <motion.div 
          className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-xl mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="flex-shrink-0">
              <div className="bg-[#253e95] text-white w-24 h-24 rounded-2xl flex items-center justify-center">
                <Award size={56} />
              </div>
            </div>
            <div className="flex-1">
              <h2 className="text-3xl mb-4 text-gray-900">{t('noabCertificationTitle')}</h2>
              <p className="text-lg text-gray-600 mb-4">{t('noabCertificationP1')}</p>
              <p className="text-gray-600 mb-6">{t('noabCertificationP2')}</p>
              
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-[#00a0d2] flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">{t('noabQuality1')}</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-[#00a0d2] flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">{t('noabQuality2')}</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-[#00a0d2] flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">{t('noabQuality3')}</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-[#00a0d2] flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">{t('noabQuality4')}</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Erkend Leerbedrijf */}
        <motion.div 
          className="bg-gradient-to-br from-green-50 to-white p-8 rounded-xl mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="flex-shrink-0">
              <div className="bg-green-600 text-white w-24 h-24 rounded-2xl flex items-center justify-center">
                <GraduationCap size={56} />
              </div>
            </div>
            <div className="flex-1">
              <h2 className="text-3xl mb-4 text-gray-900">{t('erkendLeerbedrijfTitle')}</h2>
              <p className="text-lg text-gray-600 mb-4">{t('erkendLeerbedrijfP1')}</p>
              <p className="text-gray-600 mb-6">{t('erkendLeerbedrijfP2')}</p>
              
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">{t('leerbedrijf1')}</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">{t('leerbedrijf2')}</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">{t('leerbedrijf3')}</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Professional Standards */}
        <motion.div 
          className="bg-gray-50 p-8 rounded-xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="flex-shrink-0">
              <div className="bg-gray-700 text-white w-24 h-24 rounded-2xl flex items-center justify-center">
                <Shield size={56} />
              </div>
            </div>
            <div className="flex-1">
              <h2 className="text-3xl mb-4 text-gray-900">{t('professionalStandardsTitle')}</h2>
              <p className="text-lg text-gray-600 mb-4">{t('professionalStandardsP1')}</p>
              
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-gray-700 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">{t('standard1')}</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-gray-700 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">{t('standard2')}</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-gray-700 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">{t('standard3')}</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-gray-700 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">{t('standard4')}</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}