import { Layout } from '@/components/Layout'

import '@/styles/tailwind.css'


export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <body className="flex h-full bg-zinc-50 dark:bg-black">
        <div className="flex w-full">
          <Layout>{children}</Layout>
        </div>
      </body>
    </html>
  )
}
