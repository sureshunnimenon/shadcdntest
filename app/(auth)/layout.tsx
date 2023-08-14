export default function AuthLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      
      <html lang="en">
        <body className="bg-pink-100 flex items-center justify-center">{children}</body>
      </html>
      
    )
  }
  