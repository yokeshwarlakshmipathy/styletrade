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
    <div className="max-w-4xl mx-auto py-16 px-6 text-gray-200">
      <h1 className="text-4xl font-bold mb-6 text-green-400">Trading Terms & Conditions</h1>

      <section className="space-y-6 text-sm md:text-base text-gray-300">
        <p>
          Welcome to <strong>DP Trading</strong>. By accessing and using our platform, you agree to the following
          terms and conditions. Please read them carefully before engaging with our trading courses and content.
        </p>

        <h2 className="text-lg font-semibold text-green-300">1. Educational Use Only</h2>
        <p>
          The materials provided on DP Trading are for educational and informational purposes only. We are not
          financial advisors and do not provide any personalized investment advice.
        </p>

        <h2 className="text-lg font-semibold text-green-300">2. No Investment Guarantees</h2>
        <p>
          DP Trading does not promise any specific outcomes or profits from trading. Trading involves risk and it is
          your sole responsibility to evaluate your decisions.
        </p>

        <h2 className="text-lg font-semibold text-green-300">3. Risk Warning</h2>
        <p>
          Financial markets carry risk and trading may result in losses. Make sure to assess your risk appetite before
          engaging in any strategies presented on our platform.
        </p>

        <h2 className="text-lg font-semibold text-green-300">4. Code of Conduct</h2>
        <p>
          Users must engage respectfully in all community spaces. We encourage constructive feedback and knowledge
          sharing. Harassment or abuse will not be tolerated.
        </p>

        <h2 className="text-lg font-semibold text-green-300">5. Intellectual Property</h2>
        <p>
          All videos, articles, and digital content on DP Trading are our intellectual property. Unauthorized copying
          or distribution is strictly prohibited.
        </p>

        <h2 className="text-lg font-semibold text-green-300">6. Amendments</h2>
        <p>
          These terms may change over time as our services evolve. We encourage users to check this page regularly for
          updates.
        </p>

        <h2 className="text-lg font-semibold text-green-300">7. Contact Us</h2>
        <p>
          Questions about these terms? Reach out at{' '}
          <a href="mailto:support@DP Trading.com" className="text-green-400 underline">
            support@DP Trading.com
          </a>.
        </p>

        <p className="mt-8 text-gray-500 text-sm">Last updated: July 2025</p>
      </section>
    </div>
  );
}
