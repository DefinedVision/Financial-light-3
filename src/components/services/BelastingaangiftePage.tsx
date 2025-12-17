import { ArrowLeft, CheckCircle, FileText } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { useNavigate } from 'react-router-dom';
import { ImageWithFallback } from '../figma/ImageWithFallback';

export function BelastingaangiftePage() {
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
            <FileText size={40} />
          </div>
          <h1 className="text-5xl mb-4 text-gray-900">{t('taxReturnsTitle')}</h1>
          <p className="text-xl text-gray-600">{t('taxReturnsSubtitle')}</p>
        </div>

        {/* Hero Image */}
        <div className="mb-12 rounded-2xl overflow-hidden shadow-2xl">
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1763769905496-b5dbf7f00c79?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGRvY3VtZW50cyUyMHNpZ25pbmclMjBoYW5kc3xlbnwxfHx8fDE3NjU5ODQ3NTR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Belastingaangifte documenten"
            className="w-full h-[400px] object-cover"
          />
        </div>

        <div className="prose max-w-none">
          <div className="bg-gradient-to-br from-[#00a0d2]/5 to-white p-8 rounded-xl mb-8">
            <h2 className="text-3xl mb-4 text-gray-900">{t('taxIntroTitle')}</h2>
            <p className="text-lg text-gray-600 mb-6">{t('taxIntroP1')}</p>
          </div>

          <h2 className="text-3xl mb-6 text-gray-900">{t('ourTaxServices')}</h2>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {[
              { title: 'incomeTax', desc: 'incomeTaxDesc' },
              { title: 'corporateTax', desc: 'corporateTaxDesc' },
              { title: 'vat', desc: 'vatDesc' },
              { title: 'payrollTax', desc: 'payrollTaxDesc' },
              { title: 'giftInheritanceTax', desc: 'giftInheritanceTaxDesc' },
              { title: 'objectionAppeal', desc: 'objectionAppealDesc' }
            ].map((service, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle className="text-[#00a0d2] flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="text-xl mb-2 text-gray-900">{t(service.title)}</h3>
                  <p className="text-gray-600">{t(service.desc)}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-br from-[#253e95] to-[#00a0d2] rounded-xl p-8 text-white mb-8">
            <h2 className="text-3xl mb-4">{t('maxTaxBenefit')}</h2>
            <p className="text-lg mb-6">{t('maxTaxBenefitP1')}</p>
            <div className="space-y-3">
              {['taxBenefit1', 'taxBenefit2', 'taxBenefit3', 'taxBenefit4'].map((key, index) => (
                <div key={index} className="flex items-start gap-3">
                  <span className="text-2xl">✓</span>
                  <p>{t(key)}</p>
                </div>
              ))}
            </div>
          </div>

          <h2 className="text-3xl mb-6 text-gray-900">{t('forIndividuals')}</h2>
          <div className="bg-gray-50 p-6 rounded-lg mb-8">
            <p className="text-gray-600 mb-4">{t('forIndividualsP1')}</p>
            <ul className="space-y-2 text-gray-600">
              {['mortgageDeduction', 'medicalExpenses', 'alimonyDeduction', 'donationDeduction', 'educationExpenses', 'box3Assets'].map((key, index) => (
                <li key={index}>• {t(key)}</li>
              ))}
            </ul>
          </div>

          <h2 className="text-3xl mb-6 text-gray-900">{t('forEntrepreneurs')}</h2>
          <div className="bg-gray-50 p-6 rounded-lg mb-8">
            <p className="text-gray-600 mb-4">{t('forEntrepreneursP1')}</p>
            <ul className="space-y-2 text-gray-600">
              {['fiscalResult', 'fiscalAnnualAccounts', 'businessFacilities', 'vatPlanning', 'corporateTaxBV', 'dgaTax'].map((key, index) => (
                <li key={index}>• {t(key)}</li>
              ))}
            </ul>
          </div>

          <div className="bg-[#00a0d2]/10 border-l-4 border-[#00a0d2] p-6 rounded mb-8">
            <h3 className="text-xl mb-3 text-gray-900">{t('currentKnowledge')}</h3>
            <p className="text-gray-600">{t('currentKnowledgeDesc')}</p>
          </div>

          <h2 className="text-3xl mb-6 text-gray-900">{t('ourApproach')}</h2>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {[
              { step: 'step1', desc: 'step1Desc' },
              { step: 'step2', desc: 'step2Desc' },
              { step: 'step3', desc: 'step3Desc' },
              { step: 'step4', desc: 'step4Desc' }
            ].map((item, index) => (
              <div key={index} className="bg-white border border-gray-200 p-6 rounded-lg">
                <div className="text-[#00a0d2] text-3xl mb-3">{index + 1}</div>
                <h3 className="text-xl mb-2 text-gray-900">{t(item.step)}</h3>
                <p className="text-gray-600">{t(item.desc)}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <h2 className="text-3xl mb-4 text-gray-900">{t('leaveTaxToUs')}</h2>
            <p className="text-xl text-gray-600 mb-8">{t('leaveTaxToUsDesc')}</p>
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