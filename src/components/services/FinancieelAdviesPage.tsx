import { ArrowLeft, CheckCircle, TrendingUp } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { useNavigate } from 'react-router-dom';
import { ImageWithFallback } from '../figma/ImageWithFallback';

export function FinancieelAdviesPage() {
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

  return (
    <div className="pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <button
          onClick={handleBack}
          className="flex items-center gap-2 text-[#00a0d2] hover:text-[#0090be] mb-8"
        >
          <ArrowLeft size={20} />
          {t('backToOverview')}
        </button>

        <div className="mb-8">
          <div className="bg-[#253e95] text-white w-20 h-20 rounded-2xl flex items-center justify-center mb-6">
            <TrendingUp size={40} />
          </div>
          <h1 className="text-5xl mb-4 text-gray-900">{t('adviceTitle')}</h1>
          <p className="text-xl text-gray-600">{t('adviceSubtitle')}</p>
        </div>

        {/* Hero Image */}
        <div className="mb-12 rounded-2xl overflow-hidden shadow-2xl">
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1634326080825-985cfc816db6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG1lZXRpbmclMjBiYWNrJTIwdmlld3xlbnwxfHx8fDE3NjU5ODQ3NTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Financieel advies en consultancy"
            className="w-full h-[400px] object-cover"
          />
        </div>

        <div className="prose max-w-none">
          <div className="bg-gradient-to-br from-[#00a0d2]/5 to-white p-8 rounded-xl mb-8">
            <h2 className="text-3xl mb-4 text-gray-900">{t('adviceIntroTitle')}</h2>
            <p className="text-lg text-gray-600 mb-6">{t('adviceIntroP1')}</p>
          </div>

          <h2 className="text-3xl mb-6 text-gray-900">{t('ourAdviceAreas')}</h2>
          <div className="space-y-6 mb-8">
            {[
              { title: 'businessEstablishment', desc: 'businessEstablishmentDesc' },
              { title: 'legalFormConversion', desc: 'legalFormConversionDesc' },
              { title: 'financingCredit', desc: 'financingCreditDesc' },
              { title: 'acquisitionMerger', desc: 'acquisitionMergerDesc' },
              { title: 'businessTermination', desc: 'businessTerminationDesc' },
              { title: 'businessSuccession', desc: 'businessSuccessionDesc' }
            ].map((item, index) => (
              <div key={index} className="bg-white border border-gray-200 p-6 rounded-lg">
                <div className="flex items-start gap-4">
                  <CheckCircle className="text-[#00a0d2] flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="text-xl mb-2 text-gray-900">{t(item.title)}</h3>
                    <p className="text-gray-600">{t(item.desc)}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-br from-[#253e95] to-[#00a0d2] rounded-xl p-8 text-white mb-8">
            <h2 className="text-3xl mb-4">{t('fiscalOptimization')}</h2>
            <p className="text-lg mb-6">{t('fiscalOptimizationP1')}</p>
            <div className="space-y-3">
              {['fiscalPoint1', 'fiscalPoint2', 'fiscalPoint3', 'fiscalPoint4'].map((key, index) => (
                <div key={index} className="flex items-start gap-3">
                  <span className="text-2xl">✓</span>
                  <p>{t(key)}</p>
                </div>
              ))}
            </div>
          </div>

          <h2 className="text-3xl mb-6 text-gray-900">{t('growthDevelopment')}</h2>
          <div className="bg-gray-50 p-6 rounded-lg mb-8">
            <p className="text-gray-600 mb-4">{t('growthDevelopmentP1')}</p>
            <div className="grid md:grid-cols-2 gap-4 text-gray-600">
              <div>
                {['growthPoint1', 'growthPoint2', 'growthPoint3', 'growthPoint4'].map((key, index) => (
                  <div key={index} className="mb-2">• {t(key)}</div>
                ))}
              </div>
              <div>
                {['growthPoint5', 'growthPoint6', 'growthPoint7', 'growthPoint8'].map((key, index) => (
                  <div key={index} className="mb-2">• {t(key)}</div>
                ))}
              </div>
            </div>
          </div>

          <h2 className="text-3xl mb-6 text-gray-900">{t('dgaAdvice')}</h2>
          <div className="bg-[#00a0d2]/10 border-l-4 border-[#00a0d2] p-6 rounded mb-8">
            <p className="text-gray-600 mb-4">{t('dgaAdviceP1')}</p>
            <ul className="space-y-2 text-gray-600">
              {['dgaPoint1', 'dgaPoint2', 'dgaPoint3', 'dgaPoint4', 'dgaPoint5', 'dgaPoint6'].map((key, index) => (
                <li key={index}>• {t(key)}</li>
              ))}
            </ul>
          </div>

          <h2 className="text-3xl mb-6 text-gray-900">{t('periodicConsultation')}</h2>
          <div className="space-y-4 mb-8">
            {[
              { title: 'proactiveContact', desc: 'proactiveContactDesc' },
              { title: 'alwaysAvailable', desc: 'alwaysAvailableDesc' },
              { title: 'clearUnderstandable', desc: 'clearUnderstandableDesc' }
            ].map((item, index) => (
              <div key={index} className="bg-white border border-gray-200 p-6 rounded-lg">
                <h3 className="text-xl mb-2 text-gray-900">{t(item.title)}</h3>
                <p className="text-gray-600">{t(item.desc)}</p>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-xl p-8 mb-8">
            <h2 className="text-3xl mb-4 text-gray-900">{t('specialistNetwork')}</h2>
            <p className="text-gray-600 mb-4">{t('specialistNetworkP1')}</p>
            <div className="grid md:grid-cols-2 gap-4 text-gray-600">
              <div>
                {['specialistPoint1', 'specialistPoint2', 'specialistPoint3'].map((key, index) => (
                  <div key={index} className="mb-2">• {t(key)}</div>
                ))}
              </div>
              <div>
                {['specialistPoint4', 'specialistPoint5', 'specialistPoint6'].map((key, index) => (
                  <div key={index} className="mb-2">• {t(key)}</div>
                ))}
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <h2 className="text-3xl mb-4 text-gray-900">{t('discussFuture')}</h2>
            <p className="text-xl text-gray-600 mb-8">{t('discussFutureDesc')}</p>
            <button
              onClick={scrollToContact}
              className="bg-[#253e95] text-white px-8 py-4 rounded-lg hover:bg-[#1e3278] transition-colors"
            >
              {t('contactUs')}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}