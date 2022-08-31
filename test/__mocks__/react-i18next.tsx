const React = require('react');

module.exports = {
    useTranslation: (): {} => ({ t: (key: string): string => key }),
    Trans: (): ReactElement => <>Text</>,
};