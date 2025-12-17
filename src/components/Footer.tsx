import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import certificates from 'figma:asset/37642dc86647d4def1a41fb651e6bd117a6fda15.png';

export function Footer() {
  const { t, language } = useLanguage();
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-5 gap-8 mb-8">
          {/* Logos Section - Left Side */}
          <div className="md:col-span-1">
            <h4 className="mb-4">{t('certifications')}</h4>
            <div className="bg-white rounded-lg p-4">
              <img 
                src={certificates} 
                alt="NOAB Certified & Erkend Leerbedrijf" 
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* Company Info */}
          <div>
            <h4 className="mb-4">{t('about')}</h4>
            <p className="text-gray-400">
              {t('footerTagline')}
            </p>
          </div>

          <div>
            <h4 className="mb-4">{t('services')}</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link to={language === 'nl' ? '/diensten/boekhouding' : '/services/bookkeeping'} className="hover:text-white transition-colors">
                  {t('service1Title')}
                </Link>
              </li>
              <li>
                <Link to={language === 'nl' ? '/diensten/belastingaangifte' : '/services/tax-returns'} className="hover:text-white transition-colors">
                  {t('service2Title')}
                </Link>
              </li>
              <li>
                <Link to={language === 'nl' ? '/diensten/loonadministratie' : '/services/payroll-administration'} className="hover:text-white transition-colors">
                  {t('service3Title')}
                </Link>
              </li>
              <li>
                <Link to={language === 'nl' ? '/diensten/financieel-advies' : '/services/financial-advice'} className="hover:text-white transition-colors">
                  {t('service4Title')}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4">{t('about')}</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link to="/" onClick={() => setTimeout(() => scrollToSection('about'), 100)} className="hover:text-white transition-colors">
                  {t('aboutTitle')}
                </Link>
              </li>
              <li>
                <Link to="/" onClick={() => setTimeout(() => scrollToSection('certifications'), 100)} className="hover:text-white transition-colors">
                  {t('certifications')}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">
                  {t('contact')}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4">{t('contact')}</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Tijnmuiden 79</li>
              <li>1046 AK Amsterdam</li>
              <li>{t('phone')}: (020) 7165588</li>
              <li>{t('email')}: info@financiallight.nl</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <p className="text-gray-400 text-sm text-center">
            © {currentYear} Financial Light. {t('allRightsReserved')}
          </p>
        </div>
      </div>
    </footer>
  );
}