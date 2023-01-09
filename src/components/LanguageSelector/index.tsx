import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import Form from 'react-bootstrap/Form';
import Flag from 'react-world-flags'
import ISO6391 from 'iso-639-1';
import locales from '../../../locales/i18n';
import useTranslations from '../../components/useTranslations'
import { LocaleContext } from '../Layout';

import './LanguageSelector.scss';

const LanguageSelector = (): JSX.Element => {
  const { locale } = React.useContext(LocaleContext)
  const { changeLanguage } = useTranslations()

  function ISO3166(lng: string) {
    // Convert locale to ISO 3166-1 alpha-2 https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2
    switch(lng) {
      case 'en':
        return 'us';
        case 'en-GB':
          return 'gb';
      case 'zh-CN':
        return 'cn';
      default:
        return lng;
    }
  }

  function ISO639(lng: string) {
    // Convert locale to ISO 639-1 alpha-2 https://en.wikipedia.org/wiki/ISO_639-1_alpha-2
    switch(lng) {
      case 'zh-CN':
        return 'zh';
      case 'en-GB':
        return 'en';
      default:
        return lng;
    }
  }

  return (
    <div className="App lngg">
      <Form>
        <Dropdown>
          <Dropdown.Toggle aria-label="Language Selector" id="dropdown-flags" className="text-left text-white">
            {changeLanguage}
          </Dropdown.Toggle>
          <Dropdown.Menu className="dropdown-menu">
            {Object.keys(locales).map(function(key) {
              console.log(locale)
              let localeLink
              if (key === locale) {
                localeLink = location.pathname
              } else {
                if (key === 'en') {
                  localeLink = location.pathname.replace(`/${locale}/`, '/')
                } else {
                  if (locale === 'en') {
                    localeLink = `/${key}${location.pathname}`
                  } else {
                    localeLink = location.pathname.replace(`/${locale}/`, `/${key}/`)
                  }
                }
              }
              return (
                <Dropdown.Item
                  id={key}
                  data-testid={key}
                  key={key}
                  eventKey={key}
                  href={localeLink}
                  hrefLang={key}
                >
                  <Flag code={ISO3166(key)} width='35' /> 
                  {ISO6391.getNativeName(ISO639(key))}
                </Dropdown.Item>
              )
            })}
          </Dropdown.Menu>
        </Dropdown>
      </Form>
    </div>
  );
};

export default LanguageSelector;
