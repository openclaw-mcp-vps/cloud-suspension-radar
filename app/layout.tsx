import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Cloud Suspension Radar — Early Warning for Cloud Account Risk',
  description: 'Monitor AWS and Google Cloud account health metrics that predict suspension. Get alerts before billing anomalies or compliance violations shut you down.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="a0e1b8e7-f0f4-41a0-be1f-b34b26a5ba3a"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
