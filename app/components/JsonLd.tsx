'use client'
import React from 'react';
import StructuredData from './StructuredData';

const JsonLd = () => {
  const organization = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Ajna Lab',
    url: 'https://www.ajnalab.com',
    logo: 'https://www.ajnalab.com/assets/images/logo.png',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+977-980-1912821',
      contactType: 'customer service',
      areaServed: 'NP',
      availableLanguage: ['en-US', 'ne-NP'],
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Bhimsengola, Old Baneshwor Road',
      addressLocality: 'Kathmandu',
      postalCode: '44600',
      addressCountry: 'NP',
    },
    sameAs: [
      '#', // Facebook
      '#', // Twitter
      '#', // LinkedIn
      '#', // Instagram
      '#', // Youtube
    ],
  };

  const webSite = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Ajna Lab',
    url: 'https://www.ajnalab.com',
  };

  return (
    <>
      <StructuredData data={organization} />
      <StructuredData data={webSite} />
    </>
  );
};

export default JsonLd;
