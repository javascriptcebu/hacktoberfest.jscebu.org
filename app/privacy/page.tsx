import { Metadata } from "next";
import { Navigation } from "../components/nav";
import { Footer } from "../components/footer";
import { Card } from "../components/card";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for Hacktoberfest Cebu 2025 - Learn how we collect, use, and protect your information.",
};

export default function PrivacyPage() {
  return (
    <div className="relative min-h-screen bg-gradient-to-tl from-black via-zinc-600/20 to-black">
      <Navigation />
      <div className="px-6 pt-20 pb-20 mx-auto max-w-4xl lg:px-8 md:pt-24 lg:pt-32">
        <div className="mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-zinc-100 mb-4">
            Privacy Policy
          </h1>
          <p className="text-zinc-400">
            Last updated: January 2025
          </p>
        </div>

        <div className="space-y-8">
          <Card>
            <div className="p-8">
              <h2 className="text-xl font-bold text-zinc-100 mb-4">Introduction</h2>
              <p className="text-zinc-400 leading-relaxed">
                Hacktoberfest Cebu ("we," "our," or "us") is committed to protecting your privacy.
                This Privacy Policy explains how we collect, use, disclose, and safeguard your information
                when you participate in our events, visit our website, or interact with our community.
              </p>
            </div>
          </Card>

          <Card>
            <div className="p-8">
              <h2 className="text-xl font-bold text-zinc-100 mb-4">Information We Collect</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-zinc-200 mb-2">Personal Information</h3>
                  <ul className="space-y-2 text-zinc-400">
                    <li className="flex items-start">
                      <span className="text-zinc-500 mr-2">•</span>
                      <span>Name and email address when you register for events</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-zinc-500 mr-2">•</span>
                      <span>GitHub username for hackathon participation</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-zinc-500 mr-2">•</span>
                      <span>Contact information for prize distribution</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-zinc-500 mr-2">•</span>
                      <span>Professional information (company, role) if voluntarily provided</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-zinc-200 mb-2">Usage Information</h3>
                  <ul className="space-y-2 text-zinc-400">
                    <li className="flex items-start">
                      <span className="text-zinc-500 mr-2">•</span>
                      <span>Website analytics (page views, session duration)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-zinc-500 mr-2">•</span>
                      <span>Project submission and contribution data</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-zinc-500 mr-2">•</span>
                      <span>Event attendance and participation records</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </Card>

          <Card>
            <div className="p-8">
              <h2 className="text-xl font-bold text-zinc-100 mb-4">How We Use Your Information</h2>
              <ul className="space-y-2 text-zinc-400">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>To register and manage your participation in Hacktoberfest Cebu events</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>To communicate event updates, schedules, and important announcements</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>To facilitate hackathon team formation and project submissions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>To distribute prizes and recognition to winners and participants</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>To improve our events and website based on usage patterns</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>To send newsletters about future tech events (with your consent)</span>
                </li>
              </ul>
            </div>
          </Card>

          <Card>
            <div className="p-8">
              <h2 className="text-xl font-bold text-zinc-100 mb-4">Information Sharing</h2>
              <div className="space-y-4 text-zinc-400">
                <p className="leading-relaxed">
                  We do not sell, trade, or rent your personal information to third parties.
                  We may share your information only in the following circumstances:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-zinc-500 mr-2">•</span>
                    <span>With event partners and sponsors for prize distribution (with your consent)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-zinc-500 mr-2">•</span>
                    <span>With service providers who assist in event management (under confidentiality agreements)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-zinc-500 mr-2">•</span>
                    <span>When required by law or to protect our rights and safety</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-zinc-500 mr-2">•</span>
                    <span>Publicly display project submissions and contributor names (as part of the open source nature of the event)</span>
                  </li>
                </ul>
              </div>
            </div>
          </Card>

          <Card>
            <div className="p-8">
              <h2 className="text-xl font-bold text-zinc-100 mb-4">Data Security</h2>
              <p className="text-zinc-400 leading-relaxed">
                We implement appropriate technical and organizational security measures to protect
                your personal information against unauthorized access, alteration, disclosure, or destruction.
                However, no method of transmission over the Internet or electronic storage is 100% secure,
                and we cannot guarantee absolute security.
              </p>
            </div>
          </Card>

          <Card>
            <div className="p-8">
              <h2 className="text-xl font-bold text-zinc-100 mb-4">Your Rights</h2>
              <div className="space-y-4">
                <p className="text-zinc-400 leading-relaxed">
                  You have the following rights regarding your personal information:
                </p>
                <ul className="space-y-2 text-zinc-400">
                  <li className="flex items-start">
                    <span className="text-zinc-500 mr-2">•</span>
                    <span><strong className="text-zinc-300">Access:</strong> Request a copy of the personal information we hold about you</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-zinc-500 mr-2">•</span>
                    <span><strong className="text-zinc-300">Correction:</strong> Request correction of inaccurate or incomplete information</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-zinc-500 mr-2">•</span>
                    <span><strong className="text-zinc-300">Deletion:</strong> Request deletion of your personal information (subject to legal requirements)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-zinc-500 mr-2">•</span>
                    <span><strong className="text-zinc-300">Opt-out:</strong> Unsubscribe from marketing communications at any time</span>
                  </li>
                </ul>
              </div>
            </div>
          </Card>

          <Card>
            <div className="p-8">
              <h2 className="text-xl font-bold text-zinc-100 mb-4">Cookies and Analytics</h2>
              <p className="text-zinc-400 leading-relaxed">
                We use cookies and similar tracking technologies to analyze website traffic and understand
                user behavior. We use Beam Analytics, a privacy-focused analytics tool that does not collect
                personal information or use tracking cookies. You can disable cookies in your browser settings,
                but this may affect your ability to use certain features of our website.
              </p>
            </div>
          </Card>

          <Card>
            <div className="p-8">
              <h2 className="text-xl font-bold text-zinc-100 mb-4">Children's Privacy</h2>
              <p className="text-zinc-400 leading-relaxed">
                Our events and website are open to participants of all ages. For participants under 18,
                we recommend parental consent and supervision. We do not knowingly collect personal
                information from children under 13 without parental consent.
              </p>
            </div>
          </Card>

          <Card>
            <div className="p-8">
              <h2 className="text-xl font-bold text-zinc-100 mb-4">Changes to This Policy</h2>
              <p className="text-zinc-400 leading-relaxed">
                We may update this Privacy Policy from time to time. We will notify you of any changes
                by posting the new Privacy Policy on this page and updating the "Last updated" date.
                Your continued participation in our events or use of our website after any changes
                indicates your acceptance of the updated policy.
              </p>
            </div>
          </Card>

          <Card>
            <div className="p-8 bg-gradient-to-r from-zinc-800/50 to-zinc-800/30">
              <h2 className="text-xl font-bold text-zinc-100 mb-4">Contact Us</h2>
              <p className="text-zinc-400 leading-relaxed mb-4">
                If you have any questions about this Privacy Policy or our data practices, please contact us:
              </p>
              <div className="space-y-2 text-zinc-300">
                <p>
                  <strong>Email:</strong>{" "}
                  <a href="mailto:privacy@hacktoberfest.jscebu.org" className="text-yellow-400 hover:text-yellow-300">
                    privacy@hacktoberfest.jscebu.org
                  </a>
                </p>
                <p>
                  <strong>Website:</strong>{" "}
                  <a href="https://hacktoberfest.jscebu.org" className="text-yellow-400 hover:text-yellow-300">
                    hacktoberfest.jscebu.org
                  </a>
                </p>
                <p>
                  <strong>Organizers:</strong> JavaScript Cebu, PizzaPy Cebu, Ethereum Philippines
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
      <Footer />
    </div>
  );
}