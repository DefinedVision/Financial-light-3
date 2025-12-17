import { Menu, X, Phone, Globe, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { motion, AnimatePresence } from 'motion/react';
import logo from 'figma:asset/15e76f79c059f9176b88ba7a576f565db2ff69e5.png';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const location = useLocation();
  const navigate = useNavigate();

  const scrollToSection = (id: string) => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMenuOpen(false);
  };

  const handleHomeClick = () => {
    navigate('/');
    setIsMenuOpen(false);
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  };

  const scrollToContact = () => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById('contact');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById('contact');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMenuOpen(false);
  };

  return (
    <motion.header 
      className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <motion.button 
              onClick={handleHomeClick} 
              className="flex items-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <img 
                src={logo} 
                alt="Financial Light Logo" 
                className="h-12 md:h-16 w-auto"
              />
            </motion.button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <motion.button 
              onClick={handleHomeClick} 
              className="text-gray-700 hover:text-[#00a0d2] transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {t('home')}
            </motion.button>
            <Link 
              to="/about"
              onClick={() => setIsMenuOpen(false)}
              className="text-gray-700 hover:text-[#00a0d2] transition-colors"
            >
              {t('about')}
            </Link>
            <Link 
              to="/services-overview"
              onClick={() => setIsMenuOpen(false)}
              className="text-gray-700 hover:text-[#00a0d2] transition-colors"
            >
              {t('services')}
            </Link>
            <Link 
              to="/pricing"
              onClick={() => setIsMenuOpen(false)}
              className="text-gray-700 hover:text-[#00a0d2] transition-colors"
            >
              {t('pricing')}
            </Link>
            <Link 
              to="/certifications"
              onClick={() => setIsMenuOpen(false)}
              className="text-gray-700 hover:text-[#00a0d2] transition-colors"
            >
              {t('certifications')}
            </Link>
            <Link 
              to="/contact"
              onClick={() => setIsMenuOpen(false)}
              className="text-gray-700 hover:text-[#00a0d2] transition-colors"
            >
              {t('contact')}
            </Link>
            
            {/* Language Dropdown */}
            <div className="relative border-l border-gray-300 pl-6">
              <motion.button
                onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
                className="flex items-center gap-2 text-gray-700 hover:text-[#00a0d2] transition-colors px-3 py-2 rounded"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Globe size={18} />
                <span className="uppercase">{language}</span>
                <ChevronDown size={16} className={`transition-transform ${isLangDropdownOpen ? 'rotate-180' : ''}`} />
              </motion.button>
              
              <AnimatePresence>
                {isLangDropdownOpen && (
                  <motion.div
                    className="absolute top-full right-0 mt-2 bg-white shadow-lg rounded-lg overflow-hidden min-w-[120px] border border-gray-200"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                  >
                    <button
                      onClick={() => {
                        setLanguage('nl');
                        setIsLangDropdownOpen(false);
                      }}
                      className={`w-full text-left px-4 py-3 hover:bg-[#00a0d2]/10 transition-colors flex items-center gap-2 ${
                        language === 'nl' ? 'bg-[#00a0d2]/10 text-[#00a0d2]' : 'text-gray-700'
                      }`}
                    >
                      <span className="text-xl">🇳🇱</span>
                      <span>Nederlands</span>
                    </button>
                    <button
                      onClick={() => {
                        setLanguage('en');
                        setIsLangDropdownOpen(false);
                      }}
                      className={`w-full text-left px-4 py-3 hover:bg-[#00a0d2]/10 transition-colors flex items-center gap-2 ${
                        language === 'en' ? 'bg-[#00a0d2]/10 text-[#00a0d2]' : 'text-gray-700'
                      }`}
                    >
                      <span className="text-xl">🇬🇧</span>
                      <span>English</span>
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Contact Button */}
            <motion.button
              onClick={scrollToContact}
              className="bg-[#253e95] text-white px-6 py-2 rounded-lg hover:bg-[#1e3278] transition-colors flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Phone size={18} />
              {t('contactUs')}
            </motion.button>
          </nav>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            whileTap={{ scale: 0.9 }}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.nav 
              className="md:hidden py-4 space-y-4 border-t border-gray-200"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <button onClick={handleHomeClick} className="block w-full text-left text-gray-700 hover:text-[#00a0d2] transition-colors py-2">
                {t('home')}
              </button>
              <Link 
                to="/about"
                onClick={() => setIsMenuOpen(false)}
                className="block w-full text-left text-gray-700 hover:text-[#00a0d2] transition-colors py-2"
              >
                {t('about')}
              </Link>
              <Link 
                to="/services-overview"
                onClick={() => setIsMenuOpen(false)}
                className="block w-full text-left text-gray-700 hover:text-[#00a0d2] transition-colors py-2"
              >
                {t('services')}
              </Link>
              <Link 
                to="/pricing"
                onClick={() => setIsMenuOpen(false)}
                className="block w-full text-left text-gray-700 hover:text-[#00a0d2] transition-colors py-2"
              >
                {t('pricing')}
              </Link>
              <Link 
                to="/certifications"
                onClick={() => setIsMenuOpen(false)}
                className="block w-full text-left text-gray-700 hover:text-[#00a0d2] transition-colors py-2"
              >
                {t('certifications')}
              </Link>
              <Link 
                to="/contact"
                onClick={() => setIsMenuOpen(false)}
                className="block w-full text-left text-gray-700 hover:text-[#00a0d2] transition-colors py-2"
              >
                {t('contact')}
              </Link>
              
              {/* Mobile Language Switcher */}
              <div className="flex items-center gap-2 pt-4 border-t border-gray-200">
                <span className="text-gray-600 mr-2">Taal:</span>
                <button
                  onClick={() => setLanguage('nl')}
                  className={`px-4 py-2 rounded transition-colors ${
                    language === 'nl' 
                      ? 'bg-[#253e95] text-white' 
                      : 'bg-gray-100 text-gray-600'
                  }`}
                >
                  NL
                </button>
                <button
                  onClick={() => setLanguage('en')}
                  className={`px-4 py-2 rounded transition-colors ${
                    language === 'en' 
                      ? 'bg-[#253e95] text-white' 
                      : 'bg-gray-100 text-gray-600'
                  }`}
                >
                  EN
                </button>
              </div>

              {/* Mobile Contact Button */}
              <button
                onClick={scrollToContact}
                className="w-full bg-[#253e95] text-white px-6 py-3 rounded-lg hover:bg-[#1e3278] transition-colors flex items-center justify-center gap-2 mt-4"
              >
                <Phone size={18} />
                {t('contactUs')}
              </button>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}