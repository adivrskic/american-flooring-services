import Header from './components/Header';
import Footer from './components/Footer';
import '../styles/globals.scss';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header /> {/* Include Header here */}
        <main>{children}</main> {/* Content of each page */}
        <Footer /> {/* Include Footer here */}
      </body>
    </html>
  );
}