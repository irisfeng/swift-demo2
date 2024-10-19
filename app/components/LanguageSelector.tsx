import React from 'react';

type Props = {
  locale: string;
  setLocale: (locale: string) => void;
};

const LanguageSelector: React.FC<Props> = ({ locale, setLocale }) => {
  return (
    <select
      value={locale}
      onChange={(e) => setLocale(e.target.value)}
      className="bg-neutral-200 dark:bg-neutral-800 rounded-md p-2"
    >
      <option value="en">English</option>
      <option value="zh">中文</option>
    </select>
  );
};

export default LanguageSelector;
