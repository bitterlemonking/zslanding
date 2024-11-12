'use client';
import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function Terms() {
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
        
        <h1 className="heading-1 mb-8">Terms of Service</h1>
        
        <div className="prose prose-invert max-w-none">
          <p className="text-sm text-body-light">Last Updated: {new Date().toLocaleDateString()}</p>
          
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold mt-8">1. Agreement to Terms</h2>
              <p className="text-body-light">These Terms of Service ("Terms") constitute a legally binding agreement made between you and Zero Shot Media ("Company," "we," "us," or "our") concerning your use of our website and services. By accessing or using our services, you agree that you have read, understood, and agree to be bound by these Terms.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mt-8">2. Services</h2>
              <p className="text-body-light">The Company provides digital marketing and content creation services, including but not limited to:</p>
              <ul className="list-disc pl-6 text-body-light">
                <li>Creator partnerships and management services</li>
                <li>Live streaming services and support</li>
                <li>Digital advertising management</li>
                <li>E-commerce growth solutions</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mt-8">3. User Obligations</h2>
              <p className="text-body-light">By using our services, you represent and warrant that:</p>
              <ul className="list-disc pl-6 text-body-light">
                <li>You have the legal capacity to enter into these Terms</li>
                <li>You will comply with all applicable laws and regulations</li>
                <li>The information you provide is accurate and complete</li>
                <li>You will maintain the confidentiality of your account</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mt-8">4. Intellectual Property Rights</h2>
              <p className="text-body-light">The Service and its original content, features, and functionality are and will remain the exclusive property of the Company and its licensors. The Service is protected by copyright, trademark, and other laws of both the United States and foreign countries.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mt-8">5. Limitation of Liability</h2>
              <p className="text-body-light">TO THE MAXIMUM EXTENT PERMITTED BY LAW, IN NO EVENT SHALL THE COMPANY BE LIABLE FOR ANY INDIRECT, PUNITIVE, INCIDENTAL, SPECIAL, CONSEQUENTIAL OR EXEMPLARY DAMAGES, INCLUDING WITHOUT LIMITATION DAMAGES FOR LOSS OF PROFITS, GOODWILL, USE, DATA OR OTHER INTANGIBLE LOSSES, ARISING OUT OF OR RELATING TO THE USE OF, OR INABILITY TO USE, THE SERVICE.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mt-8">6. Contact Information</h2>
              <p className="text-body-light">Questions about the Terms of Service should be sent to us at:</p>
              <p className="text-body-light">Email: yddcreation@gmail.com</p>
              <p className="text-body-light">Address: Castro Valley, CA</p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
} 