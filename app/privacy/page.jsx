'use client';
import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function Privacy() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-primary-dark text-white">
      <div className="container-default py-20">
        <button 
          onClick={() => router.back()} 
          className="flex items-center gap-2 text-body-light hover:text-accent mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back
        </button>
        
        <h1 className="heading-1 mb-8">Privacy Policy</h1>
        
        <div className="prose prose-invert max-w-none">
          <p className="text-sm text-body-light">Last Updated: {new Date().toLocaleDateString()}</p>
          
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold mt-8">1. Introduction</h2>
              <p className="text-body-light">Zero Shot Media ("Company," "we," "us," or "our") respects your privacy and is committed to protecting your personal data. This privacy policy will inform you as to how we handle your personal data when you visit our website and inform you of your privacy rights and how the law protects you.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mt-8">2. Data Collection</h2>
              <p className="text-body-light">We collect and process the following categories of personal data:</p>
              <ul className="list-disc pl-6 text-body-light">
                <li>Identity Data: including first name, last name, username or similar identifier</li>
                <li>Contact Data: including email address and telephone numbers</li>
                <li>Technical Data: including internet protocol (IP) address, browser type and version</li>
                <li>Usage Data: including information about how you use our website and services</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mt-8">3. Legal Basis for Processing</h2>
              <p className="text-body-light">We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:</p>
              <ul className="list-disc pl-6 text-body-light">
                <li>Where we need to perform the contract we are about to enter into or have entered into with you</li>
                <li>Where it is necessary for our legitimate interests and your interests</li>
                <li>Where we need to comply with a legal obligation</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mt-8">4. Data Retention</h2>
              <p className="text-body-light">We will only retain your personal data for as long as reasonably necessary to fulfill the purposes we collected it for, including for the purposes of satisfying any legal, regulatory, tax, accounting or reporting requirements.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mt-8">5. Your Legal Rights</h2>
              <p className="text-body-light">Under certain circumstances, you have rights under data protection laws in relation to your personal data, including the right to:</p>
              <ul className="list-disc pl-6 text-body-light">
                <li>Request access to your personal data</li>
                <li>Request correction of your personal data</li>
                <li>Request erasure of your personal data</li>
                <li>Object to processing of your personal data</li>
                <li>Request restriction of processing your personal data</li>
                <li>Request transfer of your personal data</li>
                <li>Right to withdraw consent</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mt-8">6. Contact Details</h2>
              <p className="text-body-light">If you have any questions about this privacy policy or our privacy practices, please contact us at:</p>
              <p className="text-body-light">Email: yddcreation@gmail.com</p>
              <p className="text-body-light">Address: Castro Valley, CA</p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
} 