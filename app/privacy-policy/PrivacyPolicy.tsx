'use client'

import ContentCard from "../components/ContentCard/ContentCard";

export default function PrivacyPolicyContent() {
  return (
    <ContentCard title="Privacy Policy" lastUpdated="October 9, 2025">
      <p>
        Welcome to <strong>Ajna Lab</strong>. We value your privacy and are
        committed to protecting your personal information. This Privacy Policy
        explains how we collect, use, and safeguard your data when you use our
        website or services.
      </p>

      <div>
        <h2 className="text-2xl font-semibold text-slate-900 mb-3">
          1. Information We Collect
        </h2>
        <p>
          We may collect personal information such as your name, email address,
          and usage data when you interact with our website, create an account,
          or make a purchase.
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-semibold text-slate-900 mb-3">
          2. How We Use Your Information
        </h2>
        <ul className="list-disc list-inside space-y-2">
          <li>To provide and maintain our services</li>
          <li>To communicate with you about updates and offers</li>
          <li>To analyze and improve our website’s performance</li>
        </ul>
      </div>

      <div>
        <h2 className="text-2xl font-semibold text-slate-900 mb-3">
          4. Data Sharing
        </h2>
        <p>
          We do not sell or rent your personal data. We may share data with
          trusted service providers such as payment processors (e.g., Stripe) or
          analytics tools (e.g., Google Analytics) to operate our business
          efficiently.
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-semibold text-slate-900 mb-3">
          5. Your Rights
        </h2>
        <p>
          You have the right to access, correct, or delete your data. If you
          wish to exercise these rights, please contact us at{" "}
          <a
            href="mailto:privacy@ajnalab.com"
            className="text-blue-600 hover:text-blue-800 underline"
          >
            privacy@ajnalab.com
          </a>
          .
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-semibold text-slate-900 mb-3">
          6. Contact Us
        </h2>
        <p>
          If you have any questions about this Privacy Policy, please contact us
          at{" "}
          <a
            href="mailto:privacy@ajnalab.com"
            className="text-blue-600 hover:text-blue-800 underline"
          >
            privacy@ajnalab.com
          </a>
          .
        </p>
      </div>
    </ContentCard>
  );
}

