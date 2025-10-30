import './globals.css'; 

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en"> 
      {/* 2. APPLY DARK THEME CLASSES: 
          - bg-slate-900: Sets the deep dark background color.
          - text-white: Sets the default text color to white.
          - min-h-screen: Ensures the page takes up the full height.
      */}
      <body className="bg-slate-900 text-white min-h-screen">
        {children} 
      </body>
    </html>
  );
}
