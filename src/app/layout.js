import './globals.css';

export const metadata = {
  title: 'Demo | Premier Study Abroad & Immigration Consultants',
  description:
    'Your Global Journey Starts Here with Demo. Premium study abroad counseling, IELTS/PTE coaching, scholarships, and 98.7% visa success.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className="min-h-screen bg-[#0B132B] text-[#F4F6F8] antialiased selection:bg-[#E6AF2E] selection:text-[#0B132B]"
      >
        {children}
      </body>
    </html>
  );
}
