import { useLanguage } from '../context/LanguageContext';
import { motion } from 'motion/react';
import { Calculator, FileText, Users, Lightbulb, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function ServicesOverviewPage() {
  const { t, language } = useLanguage();

  const services = [
    {
      icon: Calculator,
      titleKey: 'service1Title',
      descKey: 'service1Desc',
      pathNl: '/diensten/boekhouding',
      pathEn: '/services/bookkeeping',
      features: ['completeAdministration', 'fixedMonthlyRates', 'vatReturns', 'annualAccounts']
    },
    {
      icon: FileText,
      titleKey: 'service2Title',
      descKey: 'service2Desc',
      pathNl: '/diensten/belastingaangifte',
      pathEn: '/services/tax-returns',
      features: ['incomeTaxReturns', 'corporateTaxReturns', 'vatReturns', 'payrollTaxReturns']
    },
    {
      icon: Users,
      titleKey: 'service3Title',
      descKey: 'service3Desc',
      pathNl: '/diensten/loonadministratie',
      pathEn: '/services/payroll-administration',
      features: ['payslipsManagement', 'payrollTaxReturns', 'annualStatements', 'employmentContracts']
    },
    {
      icon: Lightbulb,
      titleKey: 'service4Title',
      descKey: 'service4Desc',
      pathNl: '/diensten/financieel-advies',
      pathEn: '/services/financial-advice',
      features: ['businessPlans', 'startupGuidance', 'financingAdvice', 'fiscalOptimization']
    }
  ];

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
          <h1 className="text-5xl mb-6 text-gray-900">{t('servicesOverviewTitle')}</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10">
            {t('servicesOverviewSubtitle')}
          </p>

          {/* Hero Image */}
          <div className="rounded-2xl overflow-hidden shadow-2xl max-w-4xl mx-auto">
            <ImageWithFallback 
              src="https://images.unsplash.com/photo-1647154936646-2ada256c1a48?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYW5kcyUyMHR5cGluZyUyMGxhcHRvcCUyMHdvcmt8ZW58MXx8fHwxNzY1OTg0NzUxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Professionele boekhouddiensten"
              className="w-full h-[400px] object-cover"
            />
          </div>
        </motion.div>

        {/* Services Grid */}
        <div className="space-y-12">
          {services.map((service, index) => {
            const Icon = service.icon;
            const path = language === 'nl' ? service.pathNl : service.pathEn;

            return (
              <motion.div
                key={service.titleKey}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-8"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              >
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="flex-shrink-0">
                    <div className="bg-[#253e95] text-white w-20 h-20 rounded-2xl flex items-center justify-center">
                      <Icon size={40} />
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <h2 className="text-3xl mb-4 text-gray-900">{t(service.titleKey)}</h2>
                    <p className="text-lg text-gray-600 mb-6">{t(service.descKey)}</p>
                    
                    <div className="grid sm:grid-cols-2 gap-3 mb-6">
                      {service.features.map((feature) => (
                        <div key={feature} className="flex items-start gap-2">
                          <CheckCircle className="text-[#00a0d2] flex-shrink-0 mt-1" size={20} />
                          <span className="text-gray-700">{t(feature)}</span>
                        </div>
                      ))}
                    </div>
                    
                    <Link
                      to={path}
                      className="inline-flex items-center text-[#00a0d2] hover:text-[#0090be] transition-colors"
                    >
                      {t('readMore')} →
                    </Link>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Section */}
        <motion.div 
          className="mt-16 bg-gradient-to-br from-[#00a0d2]/5 to-white p-8 rounded-xl text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <h2 className="text-3xl mb-4 text-gray-900">{t('needHelp')}</h2>
          <p className="text-xl text-gray-600 mb-8">
            {t('needHelpDesc')}
          </p>
          <Link
            to={language === 'nl' ? '/contact' : '/en/contact'}
            className="bg-[#253e95] text-white px-8 py-4 rounded-lg hover:bg-[#1e3278] transition-colors inline-block"
          >
            {t('contactUs')}
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
}