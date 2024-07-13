import './globals.css';
import Navbar from '@/component/Navbar';
import Footer from '@/component/Footer';
import CssBaseline from '@mui/material/CssBaseline';
export const metadata = {
  title: 'Hard Fork Maintenance inc',
  description:
    'Hardfork Maintenance Inc. offers expert commercial building maintenance services in North and South Carolina. Contact us for carpentry, masonry, light plumbing, and electrical services. We ensure prompt, professional solutions and excellent client communication.',
  icons: {
    icon: [`favicon.ico`],
    apple: [`apple-touch-icon.png`],
    shortcut: [`apple-touch-icon.png`],
  },
  manifest: `/site.webmanifest`,
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <CssBaseline />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
