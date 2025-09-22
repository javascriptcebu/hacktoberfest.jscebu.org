import { AnimatedCard } from "../components/animated-card";
import { Footer } from "../components/footer";
import { Metadata } from "next";
import { Navigation } from "../components/nav";
import { ScrollAnimation } from "../components/scroll-animation";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms of Service for Hacktoberfest Cebu 2025 - Guidelines and conditions for participation.",
};

export default function TermsPage() {
  return (
    <div className="relative min-h-screen bg-gradient-to-tl from-black via-zinc-600/20 to-black">
      <Navigation />
      <div className="px-6 pt-20 pb-20 mx-auto max-w-4xl lg:px-8 md:pt-24 lg:pt-32">
        <ScrollAnimation animation="fade-up">
          <div className="mb-12">
            <h1 className="text-3xl sm:text-4xl font-bold text-zinc-100 mb-4">
              Terms of Service
            </h1>
            <p className="text-zinc-400">Effective Date: January 2025</p>
          </div>
        </ScrollAnimation>

        <div className="space-y-8">
          <AnimatedCard delay={0.1}>
            <div className="p-8">
              <h2 className="text-xl font-bold text-zinc-100 mb-4">
                Acceptance of Terms
              </h2>
              <p className="text-zinc-400 leading-relaxed">
                By registering for, attending, or participating in Hacktoberfest
                Cebu 2025 events, accessing our website, or submitting projects,
                you agree to be bound by these Terms of Service. If you do not
                agree to these terms, please do not participate in our events or
                use our services.
              </p>
            </div>
          </AnimatedCard>

          <AnimatedCard delay={0.1}>
            <div className="p-8">
              <h2 className="text-xl font-bold text-zinc-100 mb-4">
                Event Participation
              </h2>
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-zinc-200">
                  Registration
                </h3>
                <ul className="space-y-2 text-zinc-400 list-disc list-inside">
                  <li>
                    Registration is free and open to all individuals
                    regardless of skill level
                  </li>
                  <li>
                    You must provide accurate and complete registration
                    information
                  </li>
                  <li>
                    One registration per person; duplicate registrations will
                    be removed
                  </li>
                  <li>
                    Participants under 18 should have parental consent
                  </li>
                </ul>

                <h3 className="text-lg font-semibold text-zinc-200 mt-6">
                  Attendance
                </h3>
                <ul className="space-y-2 text-zinc-400 list-disc list-inside">
                  <li>
                    Follow venue rules and dress code (no shorts, no slippers
                    at certain venues)
                  </li>
                  <li>Respect event schedules and session timings</li>
                  <li>Maintain professional behavior at all times</li>
                </ul>
              </div>
            </div>
          </AnimatedCard>

          <AnimatedCard delay={0.1}>
            <div className="p-8">
              <h2 className="text-xl font-bold text-zinc-100 mb-4">
                Hackathon Rules
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-zinc-200 mb-2">
                    Team Formation
                  </h3>
                  <ul className="space-y-2 text-zinc-400">
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span>Teams may consist of up to 4 members</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span>
                        Team members can be developers, designers, or other
                        roles
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span>
                        Teams can be formed before or during the opening day
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span>Individual participation is also allowed</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-zinc-200 mb-2">
                    Project Requirements
                  </h3>
                  <ul className="space-y-2 text-zinc-400">
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span>
                        Projects must be new and created during the 20-day
                        hackathon period
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span>
                        All code must be open source and publicly accessible on
                        GitHub
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span>
                        Projects must include proper documentation and README
                        files
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span>
                        Use of AI tools is allowed but must be disclosed
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </AnimatedCard>

          <AnimatedCard delay={0.1}>
            <div className="p-8">
              <h2 className="text-xl font-bold text-zinc-100 mb-4">
                Intellectual Property
              </h2>
              <div className="space-y-4 text-zinc-400">
                <p className="leading-relaxed">
                  <strong className="text-zinc-300">Your Rights:</strong> You
                  retain all rights to the code and content you create. By
                  submitting projects to Hacktoberfest Cebu, you grant us a
                  non-exclusive license to:
                </p>
                <ul className="space-y-2 list-disc list-inside">
                  <li>
                    Display your project on our website and promotional
                    materials
                  </li>
                  <li>
                    Share your project with the community for educational
                    purposes
                  </li>
                  <li>
                    Include your project in event recaps and case studies
                  </li>
                </ul>
                <p className="leading-relaxed mt-4">
                  <strong className="text-zinc-300">
                    Open Source Requirement:
                  </strong>{" "}
                  All hackathon projects must be released under an OSI-approved
                  open source license of your choice.
                </p>
              </div>
            </div>
          </AnimatedCard>

          <AnimatedCard delay={0.1}>
            <div className="p-8">
              <h2 className="text-xl font-bold text-zinc-100 mb-4">
                Code of Conduct
              </h2>
              <p className="text-zinc-400 leading-relaxed mb-4">
                All participants must adhere to our Code of Conduct, which
                promotes:
              </p>
              <ul className="space-y-2 text-zinc-400 list-disc list-inside">
                <li>Inclusive and respectful behavior</li>
                <li>Professional and constructive communication</li>
                <li>Collaboration and knowledge sharing</li>
                <li>Zero tolerance for harassment or discrimination</li>
              </ul>
              <p className="text-zinc-400 mt-4">
                Violations may result in removal from the event without refund
                (if applicable) and prohibition from future events.
              </p>
            </div>
          </AnimatedCard>

          <AnimatedCard delay={0.1}>
            <div className="p-8">
              <h2 className="text-xl font-bold text-zinc-100 mb-4">
                Prizes and Recognition
              </h2>
              <ul className="space-y-2 text-zinc-400 list-disc list-inside">
                <li>
                  Prizes are awarded at the sole discretion of the judging
                  panel
                </li>
                <li>Judges' decisions are final and binding</li>
                <li>
                  Winners must be present at the culmination event or arrange
                  for prize collection
                </li>
                <li>
                  Prizes are non-transferable and cannot be exchanged for cash
                </li>
                <li>
                  Tax obligations on prizes are the responsibility of winners
                </li>
              </ul>
            </div>
          </AnimatedCard>

          <AnimatedCard delay={0.1}>
            <div className="p-8">
              <h2 className="text-xl font-bold text-zinc-100 mb-4">
                Limitation of Liability
              </h2>
              <p className="text-zinc-400 leading-relaxed">
                Hacktoberfest Cebu, its organizers, sponsors, and partners are
                not liable for:
              </p>
              <ul className="space-y-2 text-zinc-400 mt-4 list-disc list-inside">
                <li>
                  Any damages or losses arising from event participation
                </li>
                <li>
                  Technical issues, including website downtime or data loss
                </li>
                <li>Actions of other participants or third parties</li>
                <li>Loss or damage to personal property during events</li>
              </ul>
            </div>
          </AnimatedCard>

          <AnimatedCard delay={0.1}>
            <div className="p-8">
              <h2 className="text-xl font-bold text-zinc-100 mb-4">
                Photography and Recording
              </h2>
              <p className="text-zinc-400 leading-relaxed">
                By attending our events, you consent to being photographed,
                filmed, or recorded. These materials may be used for promotional
                purposes, documentation, and future event marketing. If you do
                not wish to be photographed, please inform event staff upon
                arrival.
              </p>
            </div>
          </AnimatedCard>

          <AnimatedCard delay={0.1}>
            <div className="p-8">
              <h2 className="text-xl font-bold text-zinc-100 mb-4">
                Modifications to Terms
              </h2>
              <p className="text-zinc-400 leading-relaxed">
                We reserve the right to modify these Terms of Service at any
                time. Changes will be effective immediately upon posting to our
                website. Your continued participation after any modifications
                constitutes acceptance of the updated terms.
              </p>
            </div>
          </AnimatedCard>

          <AnimatedCard delay={0.1}>
            <div className="p-8">
              <h2 className="text-xl font-bold text-zinc-100 mb-4">
                Governing Law
              </h2>
              <p className="text-zinc-400 leading-relaxed">
                These Terms of Service are governed by the laws of the Republic
                of the Philippines. Any disputes arising from these terms or
                your participation in Hacktoberfest Cebu shall be resolved in
                the courts of Cebu City, Philippines.
              </p>
            </div>
          </AnimatedCard>

          <AnimatedCard delay={0.1}>
            <div className="p-8 bg-gradient-to-r from-zinc-800/50 to-zinc-800/30">
              <h2 className="text-xl font-bold text-zinc-100 mb-4">
                Contact Information
              </h2>
              <p className="text-zinc-400 leading-relaxed mb-4">
                For questions about these Terms of Service, please contact:
              </p>
              <div className="space-y-2 text-zinc-300">
                <p>
                  <strong>Email:</strong>{" "}
                  <a
                    href="mailto:legal@hacktoberfest.jscebu.org"
                    className="text-yellow-400 hover:text-yellow-300"
                  >
                    legal@hacktoberfest.jscebu.org
                  </a>
                </p>
                <p>
                  <strong>Website:</strong>{" "}
                  <a
                    href="https://hacktoberfest.jscebu.org"
                    className="text-yellow-400 hover:text-yellow-300"
                  >
                    hacktoberfest.jscebu.org
                  </a>
                </p>
                <p>
                  <strong>Event Organizers:</strong> JavaScript Cebu, PizzaPy
                  Cebu, Ethereum Philippines
                </p>
              </div>
            </div>
          </AnimatedCard>
        </div>
      </div>
      <Footer />
    </div>
  );
}
