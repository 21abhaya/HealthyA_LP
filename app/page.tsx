import PalikaCareJsonLd from "@/app/components/PalikaCareJsonLd";
import PalikaCareContent from "@/app/PalikaCareContent";

export const metadata = {
  title: "Healthy Ayush - Digital Healthcare for Municipalities",
  description:
    "Digital Healthcare for Every Municipality: Healthy Ayush is a complete healthcare management system that enables local governments to deliver accessible, efficient, and data-driven healthcare for their citizens."
}

export default function AjnaHOSEnterprisePage(){
  return (
    <>
    <PalikaCareContent />
    {/* <PalikaCareJsonLd /> */}
    </>
)
}