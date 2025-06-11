import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-16">
        <Link href="/" className="inline-flex items-center text-neon-red hover:text-neon-red/80 mb-8 transition-colors">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Link>

        <h1 className="text-3xl md:text-4xl font-bold mb-8">Terms & Privacy Policy</h1>

        <div className="prose prose-invert max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Overview</h2>
            <p className="text-gray-300">
              By using the BackWin website, you agree to our Terms & Privacy Policy. We collect basic customer
              information to process orders, provide support, and improve your experience—never shared or sold.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Information Collection</h2>
            <p className="text-gray-300">We collect the following information:</p>
            <ul className="list-disc pl-6 mt-2 text-gray-300">
              <li>Contact information (name, email address, phone number)</li>
              <li>Billing and shipping address</li>
              <li>Order history and preferences</li>
              <li>Device information and browsing activity on our site</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">How We Use Your Information</h2>
            <p className="text-gray-300">We use your information to:</p>
            <ul className="list-disc pl-6 mt-2 text-gray-300">
              <li>Process and fulfill your orders</li>
              <li>Provide customer support</li>
              <li>Improve our products and services</li>
              <li>Send promotional communications (with your consent)</li>
              <li>Analyze website usage and trends</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Intellectual Property</h2>
            <p className="text-gray-300">
              All content on this website including images, text, logos, and designs is protected under BackWin's
              intellectual property rights. Unauthorized use, reproduction, or distribution is prohibited.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Cookies & Analytics</h2>
            <p className="text-gray-300">
              Our website uses cookies and analytics tools to enhance your browsing experience, analyze site traffic,
              and understand where our audience is coming from. By using our website, you consent to our use of cookies.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Security</h2>
            <p className="text-gray-300">
              We implement appropriate security measures to protect your personal information. All payment transactions
              are processed through secure payment gateways.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Governing Law</h2>
            <p className="text-gray-300">
              This policy is governed by the laws of India. Any disputes arising from the use of our website or services
              shall be subject to the exclusive jurisdiction of the courts in India.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Changes to This Policy</h2>
            <p className="text-gray-300">
              We may update this policy from time to time. We will notify you of any changes by posting the new policy
              on this page.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
            <p className="text-gray-300">
              If you have any questions about our Terms & Privacy Policy, please contact us at:
            </p>
            <p className="text-neon-red mt-2">backwinindia@gmail.com</p>
          </section>
        </div>
      </div>
    </main>
  )
}
