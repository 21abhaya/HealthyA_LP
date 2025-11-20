// app/about/page.tsx
import GDPRComplianceContent from "./GdprContent";

export const metadata = {
  title: "GDPR",
  description: "Privacy Policy of Ajna Lab",
};

export default function PrivacyPolicyPage() {
  return <GDPRComplianceContent />;
}
