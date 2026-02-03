import localFont from 'next/font/local';

export const vremenaGrotesk = localFont({
  src: [
    {
      path: '../../public/fonts/vremena-grotesk/vremenagrotesk-webfont.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/vremena-grotesk/vremenagroteskitalic-webfont.woff2',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../../public/fonts/vremena-grotesk/vremenagroteskbook-webfont.woff2',
      weight: '450',
      style: 'normal',
    },
    {
      path: '../../public/fonts/vremena-grotesk/vremenagroteskbookitalic-webfont.woff2',
      weight: '450',
      style: 'italic',
    },
    {
      path: '../../public/fonts/vremena-grotesk/vremenagroteskmedium-webfont.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/fonts/vremena-grotesk/vremenagroteskmediumitalic-webfont.woff2',
      weight: '500',
      style: 'italic',
    },
    {
      path: '../../public/fonts/vremena-grotesk/vremenagroteskbold-webfont.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../public/fonts/vremena-grotesk/vremenagroteskbolditalic-webfont.woff2',
      weight: '700',
      style: 'italic',
    },
  ],
  variable: '--font-vremena',
  display: 'swap',
});
