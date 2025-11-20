'use client'

import ContentCard from "../components/ContentCard/ContentCard";

export default function GDPRComplianceContent() {
  return (
    <ContentCard title="GDPR Compliance" lastUpdated="October 9, 2025">
      <p>
        At <strong>Ajna Lab</strong>, we are committed to complying with the
        General Data Protection Regulation (GDPR) and protecting the privacy of
        our users in the European Economic Area (EEA). This page explains how we
        handle your personal data and what rights you have under the GDPR.
      </p>

      <section>
        <h2 className="text-2xl font-semibold text-slate-900 mt-10 mb-3">
          1. What Is GDPR?
        </h2>
        <p>
          The General Data Protection Regulation (EU) 2016/679 (“GDPR”) is a
          regulation in EU law on data protection and privacy. It gives
          individuals greater control over their personal data and requires
          organizations to handle that data responsibly and transparently.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-slate-900 mt-10 mb-3">
          2. Lawful Basis for Processing
        </h2>
        <p>We process personal data under one or more of the following lawful bases:</p>
        <ul className="list-disc list-inside space-y-2 mt-2">
          <li>Consent (when you explicitly agree to data processing)</li>
          <li>Performance of a contract (e.g., processing payments or orders)</li>
          <li>Legal obligations (e.g., tax or compliance purposes)</li>
          <li>Legitimate interests (e.g., improving user experience)</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-slate-900 mt-10 mb-3">
          3. Your Rights Under GDPR
        </h2>
        <p>You have the following rights regarding your data:</p>
        <ul className="list-disc list-inside space-y-2 mt-2">
          <li>
            <strong>Right to Access</strong> – You can request a copy of the
            data we hold about you.
          </li>
          <li>
            <strong>Right to Rectification</strong> – You can request
            corrections to inaccurate or incomplete data.
          </li>
          <li>
            <strong>Right to Erasure</strong> – You can request deletion of your
            data (“right to be forgotten”).
          </li>
          <li>
            <strong>Right to Restrict Processing</strong> – You can request
            limited use of your data in certain situations.
          </li>
          <li>
            <strong>Right to Data Portability</strong> – You can receive your
            data in a commonly used format and transfer it elsewhere.
          </li>
          <li>
            <strong>Right to Object</strong> – You can object to how your data
            is used, especially for marketing.
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-slate-900 mt-10 mb-3">
          4. Data Retention
        </h2>
        <p>
          We retain personal data only as long as necessary for the purposes for
          which it was collected, or as required by applicable law. Once data is
          no longer needed, it is securely deleted or anonymized.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-slate-900 mt-10 mb-3">
          5. Data Transfers Outside the EEA
        </h2>
        <p>
          If we transfer your personal data outside the European Economic Area,
          we ensure that it is protected by appropriate safeguards such as
          Standard Contractual Clauses or equivalent mechanisms approved by the
          EU.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-slate-900 mt-10 mb-3">
          6. Data Protection Officer
        </h2>
        <p>
          We have appointed a Data Protection Officer (DPO) responsible for
          overseeing our GDPR compliance efforts. You can contact them using the
          details below.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-slate-900 mt-10 mb-3">
          7. Contact Us
        </h2>
        <p>
          If you have questions about this GDPR notice or wish to exercise your
          rights, please contact us at{" "}
          <a
            href="mailto:privacy@ajnalab.com"
            className="text-blue-600 hover:text-blue-800 underline"
          >
            privacy@ajnalab.com
          </a>
          .
        </p>
      </section>
    </ContentCard>
  );
}
