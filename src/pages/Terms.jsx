import React, { useEffect } from 'react';

export default function Terms() {
  useEffect(() => {
    document.title = 'Terms & Conditions | DP Trading';

    const metaDescription = document.querySelector("meta[name='description']");
    if (metaDescription) {
      metaDescription.setAttribute(
        'content',
        "Please review the terms and conditions for using DP Trading's trading education platform."
      );
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content =
        "Please review the terms and conditions for using DP Trading's trading education platform.";
      document.head.appendChild(meta);
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white px-6 py-20">
      <div className="max-w-5xl mx-auto bg-white/5 rounded-2xl p-10 shadow-2xl backdrop-blur-md border border-white/10">
        <h1 className="text-4xl md:text-5xl font-extrabold text-green-400 mb-10 text-center">
          📜 DP Trading – Terms & Conditions
        </h1>

        <section className="space-y-10 text-gray-300 text-sm md:text-base leading-relaxed">
          <p>
            Welcome to <strong className="text-white">DP Trading</strong>. By accessing and using our platform,
            you agree to the following terms and conditions. Please read them carefully before engaging with our
            trading courses and content.
          </p>

          <div>
            <h2 className="text-2xl font-bold text-green-300 mb-2">1. Educational Use Only</h2>
            <p>
              All materials provided on DP Trading are for educational purposes only. We do not offer financial
              advice or investment services.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-green-300 mb-2">2. No Investment Guarantees</h2>
            <p>
              We do not guarantee profits. Trading involves risk, and decisions are made solely at your own discretion.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-green-300 mb-2">3. Risk Warning</h2>
            <p>
              Trading in financial markets involves potential loss. You must assess your own risk tolerance before
              engaging.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-green-300 mb-2">4. Code of Conduct</h2>
            <p>
              Respectful participation is expected in all community spaces. Harassment or disruptive behavior is not
              tolerated.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-green-300 mb-2">5. Intellectual Property</h2>
            <p>
              All content including videos, tutorials, and documents are property of DP Trading. Unauthorized use is
              prohibited.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-green-300 mb-2">6. Amendments</h2>
            <p>
              We reserve the right to update these terms. Please review this page periodically for any changes.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-green-300 mb-2">7. Contact Us</h2>
            <p>
              For questions or support, reach out at{' '}
              <a
                href="mailto:support@dptrading.com"
                className="text-green-400 underline hover:text-green-300"
              >
                support@dptrading.com
              </a>.
            </p>
          </div>

          <p className="text-sm text-gray-400 pt-10 text-center">
            📅 Last Updated: July 2025
          </p>
        </section>
      </div>
    </div>
  );
}
