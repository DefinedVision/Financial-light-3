import { useLanguage } from '../context/LanguageContext';
import { motion } from 'motion/react';
import { Users, Award, Target, Heart } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function AboutPage() {
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
          <h1 className="text-5xl mb-6 text-gray-900">{t('aboutTitle')}</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10">
            {t('aboutSubtitle')}
          </p>
          
          {/* Hero Image */}
          <div className="rounded-2xl overflow-hidden shadow-2xl max-w-4xl mx-auto">
            <ImageWithFallback 
              src="https://images.unsplash.com/photo-1712698137596-15ea82027b55?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvZmZpY2UlMjBkZXNrJTIwb3ZlcmhlYWQlMjB2aWV3fGVufDF8fHx8MTc2NTk4NDc1Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Financial Light team"
              className="w-full h-[450px] object-cover"
            />
          </div>
        </motion.div>

        {/* Story Section */}
        <motion.div 
          className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-xl mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-3xl mb-6 text-gray-900">{t('ourStoryTitle')}</h2>
          <div className="space-y-4 text-lg text-gray-600">
            <p>{t('ourStoryP1')}</p>
            <p>{t('ourStoryP2')}</p>
            <p>{t('ourStoryP3')}</p>
          </div>
        </motion.div>

        {/* Values Grid */}
        <div className="mb-16">
          <h2 className="text-3xl mb-8 text-center text-gray-900">{t('ourValuesTitle')}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div 
              className="text-center p-6 rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              <motion.div 
                className="bg-[#253e95] text-white w-16 h-16 rounded-2xl flex items-center justify-center mb-4 mx-auto"
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.5 }}
              >
                <Target size={32} />
              </motion.div>
              <h3 className="text-xl mb-3 text-gray-900">{t('professionalismTitle')}</h3>
              <p className="text-gray-600">{t('professionalismDesc')}</p>
            </motion.div>

            <motion.div 
              className="text-center p-6 rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              <motion.div 
                className="bg-[#253e95] text-white w-16 h-16 rounded-2xl flex items-center justify-center mb-4 mx-auto"
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.5 }}
              >
                <Users size={32} />
              </motion.div>
              <h3 className="text-xl mb-3 text-gray-900">{t('personalApproachTitle')}</h3>
              <p className="text-gray-600">{t('personalApproachDesc')}</p>
            </motion.div>

            <motion.div 
              className="text-center p-6 rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              <motion.div 
                className="bg-[#253e95] text-white w-16 h-16 rounded-2xl flex items-center justify-center mb-4 mx-auto"
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.5 }}
              >
                <Award size={32} />
              </motion.div>
              <h3 className="text-xl mb-3 text-gray-900">{t('qualityTitle')}</h3>
              <p className="text-gray-600">{t('qualityDesc')}</p>
            </motion.div>

            <motion.div 
              className="text-center p-6 rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              <motion.div 
                className="bg-[#253e95] text-white w-16 h-16 rounded-2xl flex items-center justify-center mb-4 mx-auto"
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.5 }}
              >
                <Heart size={32} />
              </motion.div>
              <h3 className="text-xl mb-3 text-gray-900">{t('trustTitle')}</h3>
              <p className="text-gray-600">{t('trustDesc')}</p>
            </motion.div>
          </div>
        </div>

        {/* Why Choose Us */}
        <motion.div 
          className="mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <h2 className="text-3xl mb-8 text-center text-gray-900">{t('whyChooseUsTitle')}</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <motion.div 
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border-l-4 border-[#00a0d2]"
              whileHover={{ x: 8, scale: 1.02 }}
            >
              <h3 className="text-xl mb-3 text-gray-900">{t('noabCertifiedTitle')}</h3>
              <p className="text-gray-600">{t('noabCertifiedDesc')}</p>
            </motion.div>
            <motion.div 
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border-l-4 border-[#00a0d2]"
              whileHover={{ x: 8, scale: 1.02 }}
            >
              <h3 className="text-xl mb-3 text-gray-900">{t('experiencedTeamTitle')}</h3>
              <p className="text-gray-600">{t('experiencedTeamDesc')}</p>
            </motion.div>
            <motion.div 
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border-l-4 border-[#00a0d2]"
              whileHover={{ x: 8, scale: 1.02 }}
            >
              <h3 className="text-xl mb-3 text-gray-900">{t('fixedRatesTitle')}</h3>
              <p className="text-gray-600">{t('fixedRatesDesc')}</p>
            </motion.div>
            <motion.div 
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border-l-4 border-[#00a0d2]"
              whileHover={{ x: 8, scale: 1.02 }}
            >
              <h3 className="text-xl mb-3 text-gray-900">{t('modernToolsTitle')}</h3>
              <p className="text-gray-600">{t('modernToolsDesc')}</p>
            </motion.div>
          </div>
        </motion.div>

        {/* Erkend Leerbedrijf Section */}
        <motion.div 
          className="bg-gradient-to-br from-green-50 to-white p-8 rounded-xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <h2 className="text-3xl mb-4 text-gray-900">{t('recognizedTrainingCompanyTitle')}</h2>
          <p className="text-lg text-gray-600 mb-4">{t('recognizedTrainingCompanyDesc')}</p>
          <p className="text-gray-600">{t('recognizedTrainingCompanyP2')}</p>
        </motion.div>
      </div>
    </motion.div>
  );
}