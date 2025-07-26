import { AuthProvider } from './auth-context';
import './globals.css'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}


export const metadata = {
  title: {
    default: 'Solvance | Powerful Solution for logo design',
    template: '%s | Solvance'
  },
  description: 'Default site description',
  metadataBase: new URL('https://sovance.online'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    images: '/og-image.jpg',
  }
}