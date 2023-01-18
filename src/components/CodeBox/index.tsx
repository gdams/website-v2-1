import React, { useEffect, useState } from 'react';
import { highlight, languages } from 'prismjs';
import classnames from 'classnames';
import { useCopyToClipboard } from '../../hooks/useCopyToClipboard';
import styles from './index.module.scss';

interface Props {
  children: {
    props: {
      className: string | null;
      children: React.ReactNode;
    };
  };
}

const replaceLabelLanguages = (language: string) =>
  language
    .replace(/powershell/i, 'pwsh')
    .toUpperCase();


const CodeBox = ({ children: { props } }: Props): JSX.Element => {
  const [parsedCode, setParsedCode] = useState('');
  const [copied, copyText] = useCopyToClipboard();

  const className = props.className || 'text';

  // Language Matches in class
  const matches = className.match(/language-(?<lang>.*)/);

  // Language name from classname
  const language = matches?.groups?.lang || 'text';

  // Actual Code into a stringified format
  const stringCode = props.children?.toString() || '';

  const handleCopyCode = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    copyText(stringCode);
  };

  useEffect(() => {
    const prismLanguage = languages[language] || languages.text;
    setParsedCode(
      highlight(stringCode, prismLanguage, language)
    );
  }, []);

  return (
    <pre className={classnames(styles.pre, className)}>
      <div className={styles.top}>
        <span>{replaceLabelLanguages(language)}</span>
        <button type='button' onClick={handleCopyCode}>
          {copied ? 'copied' : 'copy'}
        </button>
      </div>
      <div
        className={styles.content}
        dangerouslySetInnerHTML={{ __html: parsedCode }}
      />
    </pre>
  );
};

export default CodeBox;