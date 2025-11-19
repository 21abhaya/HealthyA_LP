'use client'
import React from 'react';
import StructuredData from './StructuredData';
import { faqData } from '../lib/palikaCaredata';

interface Faq {
  question: string;
  answer: string;
}

const PalikaCareJsonLd: React.FC = () => {
  const pageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Healthy Ayush - Digital Healthcare for Municipalities',
    url: 'https://www.ajnalab.com/hospital-product/palika-care',
    description: 'Healthy Ayush is a complete healthcare management system that enables local governments to deliver accessible, efficient, and data-driven healthcare for their citizens.',
  };

  const softwareSchema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Healthy Ayush',
    applicationCategory: 'HealthApplication',
    description: 'A Complete Platform for Public Health - Healthy Ayush integrates every aspect of municipal healthcare into one powerful, easy-to-use system.',
    url: 'https://www.ajnalab.com/hospital-product/palika-care',
    provider: {
      '@type': 'Organization',
      name: 'Ajna Lab',
    },
    offers: {
      '@type': 'Offer',
      url: 'https://www.ajnalab.com/book-a-demo?solution=palika-care',
    },
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqData.map((faq: Faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <StructuredData data={pageSchema} />
      <StructuredData data={softwareSchema} />
      <StructuredData data={faqSchema} />
    </>
  );
};

export default PalikaCareJsonLd;