// File: src/components/Terms.jsx
import React from 'react';
import { Helmet } from 'react-helmet';

export default function Terms() {
  return (
    <div className="max-w-4xl mx-auto py-16 px-6 text-gray-800">
      <Helmet>
        <title>Terms & Conditions | StyleTrade</title>
        <meta
          name="description"
          content="Please review the terms and conditions for using StyleTrade's trading education platform."
        />
      </Helmet>

      <h1 className="text-4xl font-bold mb-6 text-green-600">Trading Terms & Conditions</h1>

      <section className="space-y-6 text-sm md:text-base text-gray-700">
        <p>
          Welcome to <strong>StyleTrade</strong>. By accessing and using our platform, you agree to the following
          terms and conditions. Please read them carefully before engaging with our trading courses and content.
        </p>

        <h2 className="text-lg font-semibold text-green-500">1. Educational Use Only</h2>
        <p>
          The materials provided on StyleTrade are for educational and informational purposes only. We are not
          financial advisors and do not provide any personalized investment advice.
        </p>

        <h2 className="text-lg font-semibold text-green-500">2. No Investment Guarantees</h2>
        <p>
          StyleTrade does not promise any specific outcomes or profits from trading. Trading involves risk and it is
          your sole responsibility to evaluate your decisions.
        </p>

        <h2 className="text-lg font-semibold text-green-500">3. Risk Warning</h2>
        <p>
          Financial markets carry risk and trading may result in losses. Make sure to assess your risk appetite before
          engaging in any strategies presented on our platform.
        </p>

        <h2 className="text-lg font-semibold text-green-500">4. Code of Conduct</h2>
        <p>
          Users must engage respectfully in all community spaces. We encourage constructive feedback and knowledge
          sharing. Harassment or abuse will not be tolerated.
        </p>

        <h2 className="text-lg font-semibold text-green-500">5. Intellectual Property</h2>
        <p>
          All videos, articles, and digital content on StyleTrade are our intellectual property. Unauthorized copying
          or distribution is strictly prohibited.
        </p>

        <h2 className="text-lg font-semibold text-green-500">6. Amendments</h2>
        <p>
          These terms may change over time as our services evolve. We encourage users to check this page regularly for
          updates.
        </p>

        <h2 className="text-lg font-semibold text-green-500">7. Contact Us</h2>
        <p>
          Questions about these terms? Reach out at
          <a href="mailto:support@styletrade.com" className="text-green-600 underline">
            support@styletrade.com
          </a>.
        </p>

        <p className="mt-8 text-gray-600 text-sm">Last updated: July 2025</p>
      </section>
    </div>
  );
}
