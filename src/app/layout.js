import Header from './components/Header';
import Footer from './components/Footer';
import '../styles/globals.scss';

export const metadata = {
  title: 'American Flooring Services',
  description: 'Discover expert flooring solutions for residential and commercial spaces.',
  keywords: 'flooring, commercial flooring, residential flooring, tiling, tile, laminate, natural stone, multi-family housing, student housing, assisted living facilities',
  openGraph: {
    title: 'American Flooring Services',
    description: 'Discover expert flooring solutions for residential and commercial spaces.',
    url: 'https://americanflooringservices.com',
    siteName: 'American Flooring Services',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/favicon.ico',
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <div className='page-content'>
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}