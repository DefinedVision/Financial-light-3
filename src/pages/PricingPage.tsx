import { Check, ThumbsUp } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function PricingPage() {
  const { t } = useLanguage();
  const navigate = useNavigate();

  const goToContact = () => {
    navigate('/contact');
  };

  const packages = [
    {
      name: t('lightPackage'),
      price: '66',
      subtitle: t('lightPackageSubtitle'),
      features: [
        t('lightFeature1'),
        t('lightFeature2'),
        t('lightFeature3'),
        t('lightFeature4'),
        t('lightFeature5')
      ],
      buttonText: t('lightPackage'),
      color: 'blue'
    },
    {
      name: t('businessPackage'),
      price: '100',
      subtitle: t('businessPackageSubtitle'),
      features: [
        t('businessFeature1'),
        t('businessFeature2'),
        t('businessFeature3'),
        t('businessFeature4'),
        t('businessFeature5')
      ],
      buttonText: t('businessPackage'),
      color: 'blue',
      featured: true
    },
    {
      name: t('megaPackage'),
      price: '150',
      subtitle: t('megaPackageSubtitle'),
      features: [
        t('megaFeature1'),
        t('megaFeature2'),
        t('megaFeature3'),
        t('megaFeature4'),
        t('megaFeature5')
      ],
      buttonText: t('megaPackage'),
      color: 'blue'
    }
  ];

  return (
    <div className="pt-24 pb-20 bg-gradient-to-br from-blue-50 to-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl mb-6 text-gray-900">
            {t('pricingTitle')}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('pricingSubtitle')}
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              className={`bg-white rounded-xl shadow-lg overflow-hidden ${
                pkg.featured ? 'ring-4 ring-blue-500 transform scale-105' : ''
              }`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              {/* Header */}
              <div className="bg-gradient-to-r from-[#253e95] to-[#00a0d2] text-white p-8 text-center">
                <h3 className="text-2xl mb-4">{pkg.name}</h3>
                <div className="mb-2">
                  <div className="text-lg opacity-90 mb-1">{t('from')}</div>
                  <div className="text-5xl font-bold">€{pkg.price}</div>
                </div>
                <p className="text-sm opacity-90 italic mt-3">{pkg.subtitle}</p>
              </div>

              {/* Features */}
              <div className="p-8">
                <ul className="space-y-4 mb-8">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Check className="text-green-500 flex-shrink-0 mt-1" size={20} />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={goToContact}
                  className="w-full bg-[#253e95] text-white py-3 rounded-lg hover:bg-[#1e3278] transition-colors flex items-center justify-center gap-2"
                >
                  <ThumbsUp size={18} />
                  {pkg.buttonText}
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          className="bg-white rounded-xl shadow-lg p-8 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-2xl mb-4 text-center text-gray-900">{t('pricingInfoTitle')}</h3>
          <div className="space-y-4 text-gray-700">
            <p>{t('pricingInfo1')}</p>
            <p>{t('pricingInfo2')}</p>
            <p>{t('pricingInfo3')}</p>
            
            {/* Payroll Administration */}
            <div className="mt-6 pt-6 border-t border-gray-200">
              <div className="bg-[#00a0d2]/10 rounded-lg p-6 text-center">
                <h4 className="text-xl mb-2 text-[#253e95]">{t('payrollAdministration')}</h4>
                <p className="text-3xl text-[#00a0d2]">
                  {t('from')} <span className="font-bold">€15</span>
                </p>
                <p className="text-sm text-gray-600 mt-2">{t('perEmployee')}</p>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <button
              onClick={goToContact}
              className="bg-[#253e95] text-white px-8 py-3 rounded-lg hover:bg-[#1e3278] transition-colors inline-flex items-center gap-2"
            >
              {t('requestQuote')}
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}