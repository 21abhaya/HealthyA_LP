'use client'

import ContentCard from "../components/ContentCard/ContentCard";

export default function TermsOfServiceContent() {
  return (
    <ContentCard title="Terms of Service" lastUpdated="October 9, 2025">
      <p>
        Welcome to <strong>Ajna Lab</strong>. By accessing or using our website,
        services, or applications, you agree to comply with and be bound by
        these Terms of Service. Please read them carefully before using our
        website.
      </p>

      <div>
        <h2 className="text-2xl font-semibold text-slate-900 mb-3">
          1. Acceptance of Terms
        </h2>
        <p>
          By accessing or using our website, you agree to be legally bound by
          these Terms of Service and our Privacy Policy. If you do not agree,
          please do not use our website or services.
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-semibold text-slate-900 mb-3">
          2. Use of Our Services
        </h2>
        <ul className="list-disc list-inside space-y-2">
          <li>You must be at least 13 years old to use our services.</li>
          <li>
            You agree not to use the website for any unlawful, abusive, or
            harmful purpose.
          </li>
          <li>
            You are responsible for maintaining the confidentiality of your
            account credentials.
          </li>
        </ul>
      </div>

      <div>
        <h2 className="text-2xl font-semibold text-slate-900 mb-3">
          3. Intellectual Property
        </h2>
        <p>
          All content, logos, trademarks, and other materials available on this
          website are the property of <strong>Ajna Lab</strong> or its
          licensors. You may not copy, modify, or distribute any materials
          without prior written permission.
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-semibold text-slate-900 mb-3">
          4. Payment and Refunds
        </h2>
        <p>
          If you purchase any product or service from us, you agree to provide
          accurate payment information. Refund policies, if applicable, are
          stated on the purchase page or in our Refund Policy.
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-semibold text-slate-900 mb-3">
          5. Limitation of Liability
        </h2>
        <p>
          We are not liable for any indirect, incidental, or consequential
          damages arising from your use of the website or services. Use of our
          platform is at your own risk and provided “as is”.
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-semibold text-slate-900 mb-3">
          6. Termination
        </h2>
        <p>
          We reserve the right to suspend or terminate your access to our
          website at any time without prior notice if we believe you have
          violated these Terms.
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-semibold text-slate-900 mb-3">
          7. Changes to These Terms
        </h2>
        <p>
          We may update or revise these Terms of Service periodically. Continued
          use of our website after changes means you accept the updated terms.
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-semibold text-slate-900 mb-3">
          8. Governing Law
        </h2>
        <p>
          These Terms are governed by and construed in accordance with the laws
          of your country or region of operation, without regard to conflict of
          law principles.
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-semibold text-slate-900 mb-3">
          9. Contact Us
        </h2>
        <p>
          If you have any questions about these Terms, please contact us at{" "}
          <a
            href="mailto:support@ajnalab.com"
            className="text-blue-600 hover:text-blue-800 underline"
          >
            support@ajnalab.com
          </a>
          .
        </p>
      </div>
    </ContentCard>
  );
}
