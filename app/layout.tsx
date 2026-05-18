import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'FreelanceTrack — Time Tracking & Tax Optimizer',
  description: 'Track time and optimize tax deductions automatically. Built for freelance developers, consultants, and agencies.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="1f2b76ec-6a49-44dc-abc3-4c7b78b0996b"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
