import { Metadata } from "next";
import { Navigation } from "../components/nav";
import { Footer } from "../components/footer";
import { AnimatedCard } from "../components/animated-card";
import { ScrollAnimation } from "../components/scroll-animation";

export const metadata: Metadata = {
  title: "Code of Conduct",
  description: "Code of Conduct for Hacktoberfest Cebu 2025 - Our commitment to fostering an inclusive and respectful community.",
};

export default function CodeOfConductPage() {
  return (
    <div className="relative min-h-screen bg-gradient-to-tl from-black via-zinc-600/20 to-black">
      <Navigation />
      <div className="px-6 pt-20 pb-20 mx-auto max-w-4xl lg:px-8 md:pt-24 lg:pt-32">
        <ScrollAnimation animation="fade-up">
          <div className="mb-12">
            <h1 className="text-3xl sm:text-4xl font-bold text-zinc-100 mb-4">
              Code of Conduct
            </h1>
            <p className="text-zinc-400">
              Our pledge to foster an inclusive and welcoming community
            </p>
          </div>
        </ScrollAnimation>

        <div className="space-y-8">
          <AnimatedCard delay={0.1}>
            <div className="p-8 bg-gradient-to-r from-orange-900/20 to-pink-900/20 border border-orange-800/30">
              <h2 className="text-xl font-bold text-zinc-100 mb-4">Our Commitment</h2>
              <p className="text-zinc-300 leading-relaxed">
                Hacktoberfest Cebu is dedicated to providing a harassment-free experience for everyone,
                regardless of age, body size, disability, ethnicity, sex characteristics, gender identity
                and expression, level of experience, education, socio-economic status, nationality,
                personal appearance, race, religion, or sexual identity and orientation.
              </p>
              <p className="text-zinc-300 leading-relaxed mt-4">
                We pledge to act and interact in ways that contribute to an open, welcoming, diverse,
                inclusive, and healthy community.
              </p>
            </div>
          </AnimatedCard>

          <AnimatedCard delay={0.1}>
            <div className="p-8">
              <h2 className="text-xl font-bold text-zinc-100 mb-4">Expected Behavior</h2>
              <p className="text-zinc-400 mb-4">
                All participants, speakers, sponsors, and volunteers are expected to:
              </p>
              <ul className="space-y-3 text-zinc-400">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 mt-1">✓</span>
                  <div>
                    <strong className="text-zinc-300">Be Respectful:</strong> Value each other's ideas,
                    styles, and viewpoints. Disagreement is no excuse for poor manners.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 mt-1">✓</span>
                  <div>
                    <strong className="text-zinc-300">Be Inclusive:</strong> Welcome and support people
                    of all backgrounds and identities. Use inclusive language.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 mt-1">✓</span>
                  <div>
                    <strong className="text-zinc-300">Be Collaborative:</strong> Work together effectively,
                    share knowledge, and help others learn and grow.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 mt-1">✓</span>
                  <div>
                    <strong className="text-zinc-300">Be Professional:</strong> Maintain professionalism
                    in all interactions, both online and offline.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 mt-1">✓</span>
                  <div>
                    <strong className="text-zinc-300">Be Empathetic:</strong> Understand and respect
                    different perspectives and experiences.
                  </div>
                </li>
              </ul>
            </div>
          </AnimatedCard>

          <AnimatedCard delay={0.1}>
            <div className="p-8">
              <h2 className="text-xl font-bold text-zinc-100 mb-4">Unacceptable Behavior</h2>
              <p className="text-zinc-400 mb-4">
                The following behaviors are considered harassment and are unacceptable:
              </p>
              <ul className="space-y-3 text-zinc-400">
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✗</span>
                  <span>Violence, threats of violence, or violent language directed against another person</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✗</span>
                  <span>Sexist, racist, homophobic, transphobic, ableist, or otherwise discriminatory jokes and language</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✗</span>
                  <span>Posting or displaying sexually explicit or violent material</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✗</span>
                  <span>Personal insults, particularly those related to gender, sexual orientation, race, religion, or disability</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✗</span>
                  <span>Inappropriate photography or recording without consent</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✗</span>
                  <span>Inappropriate physical contact without consent</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✗</span>
                  <span>Unwelcome sexual attention, including sexualized comments or jokes</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✗</span>
                  <span>Deliberate intimidation, stalking, or following (online or in person)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✗</span>
                  <span>Sustained disruption of community events, including talks and presentations</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✗</span>
                  <span>Advocating for, or encouraging, any of the above behavior</span>
                </li>
              </ul>
            </div>
          </AnimatedCard>

          <AnimatedCard delay={0.1}>
            <div className="p-8">
              <h2 className="text-xl font-bold text-zinc-100 mb-4">Online Community Standards</h2>
              <div className="space-y-4">
                <p className="text-zinc-400">
                  In our online spaces (Discord, GitHub, social media), we additionally expect:
                </p>
                <ul className="space-y-2 text-zinc-400">
                  <li className="flex items-start">
                    <span className="text-zinc-500 mr-2">•</span>
                    <span>Stay on topic and keep discussions relevant</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-zinc-500 mr-2">•</span>
                    <span>No spam, excessive self-promotion, or off-topic content</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-zinc-500 mr-2">•</span>
                    <span>Respect others' time and attention</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-zinc-500 mr-2">•</span>
                    <span>Give credit where credit is due</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-zinc-500 mr-2">•</span>
                    <span>Ask for consent before sharing others' personal information</span>
                  </li>
                </ul>
              </div>
            </div>
          </AnimatedCard>

          <AnimatedCard delay={0.1}>
            <div className="p-8">
              <h2 className="text-xl font-bold text-zinc-100 mb-4">Consequences of Unacceptable Behavior</h2>
              <p className="text-zinc-400 mb-4">
                Unacceptable behavior will not be tolerated. Anyone asked to stop unacceptable behavior
                is expected to comply immediately. If a participant engages in unacceptable behavior,
                organizers may take any action they deem appropriate, including:
              </p>
              <ul className="space-y-2 text-zinc-400">
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">1.</span>
                  <span>Warning the offender</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">2.</span>
                  <span>Temporary suspension from the event or online platforms</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">3.</span>
                  <span>Permanent expulsion from the event without refund (if applicable)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">4.</span>
                  <span>Banning from future Hacktoberfest Cebu events</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">5.</span>
                  <span>Reporting to local law enforcement when appropriate</span>
                </li>
              </ul>
            </div>
          </AnimatedCard>

          <AnimatedCard delay={0.1}>
            <div className="p-8">
              <h2 className="text-xl font-bold text-zinc-100 mb-4">Reporting Violations</h2>
              <div className="space-y-4">
                <p className="text-zinc-400">
                  If you experience or witness unacceptable behavior, or have any other concerns,
                  please report it as soon as possible:
                </p>

                <div className="bg-zinc-800/50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-zinc-200 mb-3">During Events</h3>
                  <ul className="space-y-2 text-zinc-400">
                    <li className="flex items-start">
                      <span className="text-zinc-500 mr-2">•</span>
                      <span>Find an organizer or volunteer (wearing event badges)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-zinc-500 mr-2">•</span>
                      <span>Visit the registration/help desk</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-zinc-500 mr-2">•</span>
                      <span>Call or text the emergency contact number provided at registration</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-zinc-800/50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-zinc-200 mb-3">Online</h3>
                  <ul className="space-y-2 text-zinc-400">
                    <li className="flex items-start">
                      <span className="text-zinc-500 mr-2">•</span>
                      <span>
                        Email:{" "}
                        <a href="mailto:conduct@hacktoberfest.jscebu.org" className="text-orange-400 hover:text-orange-300">
                          conduct@hacktoberfest.jscebu.org
                        </a>
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-zinc-500 mr-2">•</span>
                      <span>Direct message an admin on Discord</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-zinc-500 mr-2">•</span>
                      <span>Use the report feature on the platform where the violation occurred</span>
                    </li>
                  </ul>
                </div>

                <p className="text-zinc-400">
                  All reports will be handled with discretion and confidentiality. We will respect
                  your privacy and safety throughout the process.
                </p>
              </div>
            </div>
          </AnimatedCard>

          <AnimatedCard delay={0.1}>
            <div className="p-8">
              <h2 className="text-xl font-bold text-zinc-100 mb-4">Scope</h2>
              <p className="text-zinc-400 leading-relaxed">
                This Code of Conduct applies to all Hacktoberfest Cebu spaces, including:
              </p>
              <ul className="space-y-2 text-zinc-400 mt-4">
                <li className="flex items-start">
                  <span className="text-zinc-500 mr-2">•</span>
                  <span>All event venues and activities</span>
                </li>
                <li className="flex items-start">
                  <span className="text-zinc-500 mr-2">•</span>
                  <span>Online platforms (Discord, GitHub, social media)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-zinc-500 mr-2">•</span>
                  <span>Event-related social gatherings</span>
                </li>
                <li className="flex items-start">
                  <span className="text-zinc-500 mr-2">•</span>
                  <span>One-on-one communications pertaining to community business</span>
                </li>
              </ul>
              <p className="text-zinc-400 mt-4">
                This code also applies when an individual is representing the community in public spaces.
              </p>
            </div>
          </AnimatedCard>

          <AnimatedCard delay={0.1}>
            <div className="p-8">
              <h2 className="text-xl font-bold text-zinc-100 mb-4">Attribution</h2>
              <p className="text-zinc-400 leading-relaxed">
                This Code of Conduct is adapted from the{" "}
                <a
                  href="https://www.contributor-covenant.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-orange-400 hover:text-orange-300"
                >
                  Contributor Covenant
                </a>
                , version 2.1, and the{" "}
                <a
                  href="https://www.rust-lang.org/policies/code-of-conduct"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-orange-400 hover:text-orange-300"
                >
                  Rust Code of Conduct
                </a>
                .
              </p>
            </div>
          </AnimatedCard>

          <AnimatedCard delay={0.1}>
            <div className="p-8 bg-gradient-to-r from-orange-900/20 to-pink-900/20 border border-orange-800/30">
              <h2 className="text-xl font-bold text-zinc-100 mb-4">Questions?</h2>
              <p className="text-zinc-300 leading-relaxed mb-4">
                If you have questions about this Code of Conduct, please contact us:
              </p>
              <div className="space-y-2 text-zinc-200">
                <p>
                  <strong>Email:</strong>{" "}
                  <a href="mailto:conduct@hacktoberfest.jscebu.org" className="text-orange-400 hover:text-orange-300">
                    conduct@hacktoberfest.jscebu.org
                  </a>
                </p>
                <p>
                  <strong>Website:</strong>{" "}
                  <a href="https://hacktoberfest.jscebu.org" className="text-orange-400 hover:text-orange-300">
                    hacktoberfest.jscebu.org
                  </a>
                </p>
              </div>
              <p className="text-zinc-300 mt-6 font-semibold">
                Together, let's build an inclusive and welcoming tech community in Cebu! 🧡
              </p>
            </div>
          </AnimatedCard>
        </div>
      </div>
      <Footer />
    </div>
  );
}