export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          Cloud Monitoring
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Early Warning for{' '}
          <span className="text-[#58a6ff]">Cloud Account Suspension</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          Monitor AWS and Google Cloud health metrics that predict suspension — billing anomalies, API rate limits, compliance violations — before they shut you down.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={checkoutUrl}
            className="bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg transition-colors text-base"
          >
            Start Monitoring — $29/mo
          </a>
          <a
            href="#faq"
            className="border border-[#30363d] hover:border-[#58a6ff] text-[#c9d1d9] px-8 py-3 rounded-lg transition-colors text-base"
          >
            Learn More
          </a>
        </div>
        <div className="mt-12 grid grid-cols-3 gap-6 text-center">
          {[['AWS + GCP', 'Both major clouds'], ['Hourly Checks', 'Background jobs'], ['Email & Slack', 'Instant alerts']].map(([title, sub]) => (
            <div key={title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-4">
              <div className="text-[#58a6ff] font-bold text-sm">{title}</div>
              <div className="text-[#8b949e] text-xs mt-1">{sub}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border-2 border-[#58a6ff] rounded-2xl p-8 text-center">
          <div className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro Plan</div>
          <div className="text-5xl font-bold text-white mb-1">$29</div>
          <div className="text-[#8b949e] text-sm mb-6">per month, cancel anytime</div>
          <ul className="text-left space-y-3 mb-8">
            {[
              'AWS CloudWatch + GCP Operations',
              'Billing anomaly detection',
              'API rate limit monitoring',
              'Compliance violation alerts',
              'Hourly background health checks',
              'Email & Slack notifications',
              'Suspension risk score dashboard',
            ].map((f) => (
              <li key={f} className="flex items-start gap-2 text-sm">
                <span className="text-[#58a6ff] mt-0.5">&#10003;</span>
                <span>{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors text-base"
          >
            Get Started Now
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            {
              q: 'Which cloud providers are supported?',
              a: 'Cloud Suspension Radar connects to AWS via CloudWatch and Google Cloud via GCP Operations Suite. Support for Azure is on the roadmap.',
            },
            {
              q: 'How does it detect suspension risk?',
              a: 'We monitor billing spikes, unusual API usage, quota exhaustion, and compliance policy violations — the same signals cloud providers use internally before suspending accounts.',
            },
            {
              q: 'How quickly will I be alerted?',
              a: 'Background jobs run hourly checks and trigger email or Slack alerts within minutes of detecting a risk indicator, giving you time to act before suspension occurs.',
            },
          ].map(({ q, a }) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <div className="font-semibold text-white mb-2">{q}</div>
              <div className="text-[#8b949e] text-sm leading-relaxed">{a}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-6 text-[#8b949e] text-xs">
        &copy; {new Date().getFullYear()} Cloud Suspension Radar. All rights reserved.
      </footer>
    </main>
  )
}
