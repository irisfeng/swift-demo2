'use client';

import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import clsx from "clsx";
import "./globals.css";
import { Toaster } from "sonner";
import { Analytics } from "@vercel/analytics/react";
import { IntlProvider } from 'react-intl';
import { useState } from 'react';
import enMessages from '../locales/en.json';
import zhMessages from '../locales/zh.json';
import LanguageSelector from './components/LanguageSelector';

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const [locale, setLocale] = useState('en');
	const messages = locale === 'zh' ? zhMessages : enMessages;

	return (
		<html lang={locale}>
			<IntlProvider messages={messages} locale={locale}>
				<body
					className={clsx(
						GeistSans.variable,
						GeistMono.variable,
						"py-8 px-6 lg:p-10 dark:text-white bg-white dark:bg-black min-h-dvh flex flex-col justify-between antialiased font-sans select-none"
					)}
				>
					<div className="absolute top-4 right-4">
						<LanguageSelector locale={locale} setLocale={setLocale} />
					</div>
					<main className="flex flex-col items-center justify-center grow">
						{children}
					</main>

					<Toaster richColors theme="system" />
					<Analytics />
				</body>
			</IntlProvider>
		</html>
	);
}
