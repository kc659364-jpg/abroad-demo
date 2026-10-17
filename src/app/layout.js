import './globals.css';

export const metadata = {
  title: 'JY Overseas | Premier Study Abroad & Immigration Consultants',
  description:
    'Your Global Journey Starts Here with JY Overseas. Premium study abroad counseling, IELTS/PTE coaching, scholarships, and 98.7% visa success.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className="min-h-screen bg-[#0F1F16] text-[#EAF3E7] antialiased selection:bg-[#a7F432] selection:text-[#0F1F16]"
      >
        {children}
      </body>
    </html>
  );
}
