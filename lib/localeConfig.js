// 支持的语言列表
export const supportedLocales = [
	{ lang: 'en' },
	{ lang: 'zh' },
	{ lang: 'ja' },
	{ lang: 'ar' },
	{ lang: 'es' },
	{ lang: 'ru' },
	{ lang: 'fr' }
];

// 用于 generateStaticParams
export function generateStaticParams() {
	return supportedLocales;
}
