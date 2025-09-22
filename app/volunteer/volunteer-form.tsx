"use client";

import { useState } from "react";
import { Card } from "../components/card";
import { ChevronDown, ChevronUp, Info } from "lucide-react";

interface VolunteerFormProps {
  userEmail?: string;
}

export function VolunteerForm({ userEmail }: VolunteerFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: userEmail || "",
    phone: "",
    role: "",
    experience: "",
    availability: "",
    skills: "",
    motivation: "",
    github: "",
    linkedin: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showRoleDetails, setShowRoleDetails] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      const response = await fetch("/api/submit-volunteer", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus({
          type: "success",
          message: "Application submitted successfully! We'll contact you soon with more details.",
        });
        setFormData({
          name: "",
          email: userEmail || "",
          phone: "",
          role: "",
          experience: "",
          availability: "",
          skills: "",
          motivation: "",
          github: "",
          linkedin: "",
        });
      } else {
        const errorData = await response.json();
        setSubmitStatus({
          type: "error",
          message: errorData.error || "Failed to submit application. Please try again.",
        });
      }
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message: "Network error. Please check your connection and try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const roleDescriptions = {
    "speaker-coordinator": "Communicate with speakers, coordinate presentations and slides, assist speakers on-site, manage tokens of appreciation and certificates.",
    "emcee": "Host event sessions, manage timing, prevent dead air, moderate breakout rooms (2 per room).",
    "opensource-coordinator": "Manage list of open source projects, contact maintainers, coordinate lightning talks.",
    "judging-committee": "Coordinate with judges, manage scoring sheets, ensure fair evaluation process.",
    "raffle-committee": "Manage stamp collection and validation, pack raffle prizes, coordinate with finance/sponsors.",
    "marketing": "Coordinate with sponsors, create sponsor letters, manage booth arrangements, prepare VIP letters, create post-event reports.",
    "creatives": "Design event assets, create visual materials, support branding and design needs.",
    "tech-team": "Manage audio/video equipment, coordinate WiFi with venue, handle technical setup for breakout sessions.",
    "livestreaming": "Manage live streaming for main and breakout sessions, handle recording for breakout rooms.",
    "logistics": "Handle physical arrangements, crowd control, Q&A microphone management, food coordination, general event support.",
    "registration": "Manage event registration, check-in attendees, handle on-site registration queries.",
    "photographer": "Capture event moments, cover main and breakout sessions, document the event visually.",
    "socmed": "Live social media coverage, conduct on-site interviews, coordinate with livestream team for content."
  };

  return (
    <div className="space-y-6">
      {/* Role Details Card */}
      <Card>
        <div className="p-6">
          <button
            type="button"
            onClick={() => setShowRoleDetails(!showRoleDetails)}
            className="w-full flex items-center justify-between text-left"
          >
            <div className="flex items-center gap-2">
              <Info className="w-5 h-5 text-lavender" />
              <span className="text-lg font-semibold text-melrose">
                View Role Descriptions
              </span>
            </div>
            {showRoleDetails ? (
              <ChevronUp className="w-5 h-5 text-space-dust" />
            ) : (
              <ChevronDown className="w-5 h-5 text-space-dust" />
            )}
          </button>

          {showRoleDetails && (
            <div className="mt-6 space-y-4">
              <div className="grid gap-4">
                <div className="space-y-3">
                  <h3 className="text-sm font-semibold text-lavender uppercase tracking-wider">Coordination Roles</h3>
                  <div className="space-y-2 text-sm">
                    <div className="p-3 bg-east-bay/20 rounded-lg border border-blue-violet/20">
                      <span className="font-semibold text-melrose">Speaker Coordinator (2):</span>
                      <span className="text-space-dust ml-2">{roleDescriptions["speaker-coordinator"]}</span>
                    </div>
                    <div className="p-3 bg-east-bay/20 rounded-lg border border-blue-violet/20">
                      <span className="font-semibold text-melrose">Emcee (4):</span>
                      <span className="text-space-dust ml-2">{roleDescriptions["emcee"]}</span>
                    </div>
                    <div className="p-3 bg-east-bay/20 rounded-lg border border-blue-violet/20">
                      <span className="font-semibold text-melrose">Open Source Coordinator (2):</span>
                      <span className="text-space-dust ml-2">{roleDescriptions["opensource-coordinator"]}</span>
                    </div>
                    <div className="p-3 bg-east-bay/20 rounded-lg border border-blue-violet/20">
                      <span className="font-semibold text-melrose">Judging Committee (1):</span>
                      <span className="text-space-dust ml-2">{roleDescriptions["judging-committee"]}</span>
                    </div>
                    <div className="p-3 bg-east-bay/20 rounded-lg border border-blue-violet/20">
                      <span className="font-semibold text-melrose">Raffle Committee (4):</span>
                      <span className="text-space-dust ml-2">{roleDescriptions["raffle-committee"]}</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <h3 className="text-sm font-semibold text-lavender uppercase tracking-wider">Marketing & Content</h3>
                  <div className="space-y-2 text-sm">
                    <div className="p-3 bg-east-bay/20 rounded-lg border border-blue-violet/20">
                      <span className="font-semibold text-melrose">Marketing Team (4):</span>
                      <span className="text-space-dust ml-2">{roleDescriptions["marketing"]}</span>
                    </div>
                    <div className="p-3 bg-east-bay/20 rounded-lg border border-blue-violet/20">
                      <span className="font-semibold text-melrose">Creatives Team (2):</span>
                      <span className="text-space-dust ml-2">{roleDescriptions["creatives"]}</span>
                    </div>
                    <div className="p-3 bg-east-bay/20 rounded-lg border border-blue-violet/20">
                      <span className="font-semibold text-melrose">Photographer (2):</span>
                      <span className="text-space-dust ml-2">{roleDescriptions["photographer"]}</span>
                    </div>
                    <div className="p-3 bg-east-bay/20 rounded-lg border border-blue-violet/20">
                      <span className="font-semibold text-melrose">Social Media Team (2):</span>
                      <span className="text-space-dust ml-2">{roleDescriptions["socmed"]}</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <h3 className="text-sm font-semibold text-lavender uppercase tracking-wider">Technical Roles</h3>
                  <div className="space-y-2 text-sm">
                    <div className="p-3 bg-east-bay/20 rounded-lg border border-blue-violet/20">
                      <span className="font-semibold text-melrose">Tech Team (2):</span>
                      <span className="text-space-dust ml-2">{roleDescriptions["tech-team"]}</span>
                    </div>
                    <div className="p-3 bg-east-bay/20 rounded-lg border border-blue-violet/20">
                      <span className="font-semibold text-melrose">Livestreaming Team (4):</span>
                      <span className="text-space-dust ml-2">{roleDescriptions["livestreaming"]}</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <h3 className="text-sm font-semibold text-lavender uppercase tracking-wider">Operations</h3>
                  <div className="space-y-2 text-sm">
                    <div className="p-3 bg-east-bay/20 rounded-lg border border-blue-violet/20">
                      <span className="font-semibold text-melrose">Logistics Team (10):</span>
                      <span className="text-space-dust ml-2">{roleDescriptions["logistics"]}</span>
                    </div>
                    <div className="p-3 bg-east-bay/20 rounded-lg border border-blue-violet/20">
                      <span className="font-semibold text-melrose">Registration Team (4):</span>
                      <span className="text-space-dust ml-2">{roleDescriptions["registration"]}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </Card>

      {/* Main Form */}
      <Card>
        <form onSubmit={handleSubmit} className="p-6 md:p-8 space-y-6">
        {submitStatus.type && (
          <div
            className={`p-4 rounded-md ${
              submitStatus.type === "success"
                ? "bg-green-900/20 border border-green-800 text-green-400"
                : "bg-red-900/20 border border-red-800 text-red-400"
            }`}
          >
            {submitStatus.message}
          </div>
        )}

        <div>
          <label htmlFor="name" className="block text-sm font-medium text-melrose mb-2">
            Full Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
            className="w-full px-3 py-2 bg-east-bay/50 border border-blue-violet/30 rounded-md text-space-white focus:ring-2 focus:ring-lavender focus:border-transparent"
            placeholder="Your full name"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-melrose mb-2">
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
            className="w-full px-3 py-2 bg-east-bay/50 border border-blue-violet/30 rounded-md text-space-white focus:ring-2 focus:ring-lavender focus:border-transparent"
            placeholder="your.email@example.com"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-melrose mb-2">
            Phone Number *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            required
            className="w-full px-3 py-2 bg-east-bay/50 border border-blue-violet/30 rounded-md text-space-white focus:ring-2 focus:ring-lavender focus:border-transparent"
            placeholder="+63 9XX XXX XXXX"
          />
        </div>

        <div>
          <label htmlFor="role" className="block text-sm font-medium text-melrose mb-2">
            Preferred Volunteer Role *
          </label>
          <select
            id="role"
            name="role"
            value={formData.role}
            onChange={handleInputChange}
            required
            className="w-full px-3 py-2 bg-east-bay/50 border border-blue-violet/30 rounded-md text-space-white focus:ring-2 focus:ring-lavender focus:border-transparent"
          >
            <option value="">Select a role</option>
            <optgroup label="Coordination">
              <option value="speaker-coordinator">Speaker Coordinator (2 positions)</option>
              <option value="emcee">Emcee/Host (4 positions)</option>
              <option value="opensource-coordinator">Open Source Maintainer Coordinator (2 positions)</option>
              <option value="judging-committee">Judging Committee (1 position)</option>
              <option value="raffle-committee">Raffle Committee (4 positions)</option>
            </optgroup>
            <optgroup label="Marketing & Content">
              <option value="marketing">Marketing Team (4 positions)</option>
              <option value="creatives">Creatives/Design Team (2 positions)</option>
              <option value="photographer">Photographer (2 positions)</option>
              <option value="socmed">Social Media Team (2 positions)</option>
            </optgroup>
            <optgroup label="Technical">
              <option value="tech-team">Tech Team - Audio/Video/WiFi (2 positions)</option>
              <option value="livestreaming">Livestreaming Team (4 positions)</option>
            </optgroup>
            <optgroup label="Operations">
              <option value="logistics">Logistics Team (10 positions)</option>
              <option value="registration">Registration Team (4 positions)</option>
            </optgroup>
            <option value="any">Any Role (Flexible)</option>
          </select>
          <p className="mt-1 text-xs text-space-haze">
            Select the role that best matches your skills and interests
          </p>
        </div>

        <div>
          <label htmlFor="experience" className="block text-sm font-medium text-melrose mb-2">
            Relevant Experience *
          </label>
          <textarea
            id="experience"
            name="experience"
            value={formData.experience}
            onChange={handleInputChange}
            required
            rows={3}
            className="w-full px-3 py-2 bg-east-bay/50 border border-blue-violet/30 rounded-md text-space-white focus:ring-2 focus:ring-lavender focus:border-transparent"
            placeholder="Tell us about your relevant experience, past volunteer work, or skills that would help in this role"
          />
        </div>

        <div>
          <label htmlFor="availability" className="block text-sm font-medium text-melrose mb-2">
            Availability *
          </label>
          <input
            type="text"
            id="availability"
            name="availability"
            value={formData.availability}
            onChange={handleInputChange}
            required
            className="w-full px-3 py-2 bg-east-bay/50 border border-blue-violet/30 rounded-md text-space-white focus:ring-2 focus:ring-lavender focus:border-transparent"
            placeholder="e.g., Weekends, October 5-15, Flexible"
          />
        </div>

        <div>
          <label htmlFor="skills" className="block text-sm font-medium text-melrose mb-2">
            Technical Skills <span className="text-space-haze">(optional)</span>
          </label>
          <input
            type="text"
            id="skills"
            name="skills"
            value={formData.skills}
            onChange={handleInputChange}
            className="w-full px-3 py-2 bg-east-bay/50 border border-blue-violet/30 rounded-md text-space-white focus:ring-2 focus:ring-lavender focus:border-transparent"
            placeholder="e.g., JavaScript, Python, Git, React, Node.js"
          />
          <p className="mt-1 text-xs text-space-haze">
            List programming languages, frameworks, or tools you're familiar with
          </p>
        </div>

        <div>
          <label htmlFor="motivation" className="block text-sm font-medium text-melrose mb-2">
            Why do you want to volunteer? *
          </label>
          <textarea
            id="motivation"
            name="motivation"
            value={formData.motivation}
            onChange={handleInputChange}
            required
            rows={3}
            className="w-full px-3 py-2 bg-east-bay/50 border border-blue-violet/30 rounded-md text-space-white focus:ring-2 focus:ring-lavender focus:border-transparent"
            placeholder="Share your motivation for volunteering at Hacktoberfest Cebu 2025"
          />
        </div>

        <div>
          <label htmlFor="github" className="block text-sm font-medium text-melrose mb-2">
            GitHub Profile <span className="text-space-haze">(optional)</span>
          </label>
          <input
            type="url"
            id="github"
            name="github"
            value={formData.github}
            onChange={handleInputChange}
            className="w-full px-3 py-2 bg-east-bay/50 border border-blue-violet/30 rounded-md text-space-white focus:ring-2 focus:ring-lavender focus:border-transparent"
            placeholder="https://github.com/yourusername"
          />
        </div>

        <div>
          <label htmlFor="linkedin" className="block text-sm font-medium text-melrose mb-2">
            LinkedIn Profile <span className="text-space-haze">(optional)</span>
          </label>
          <input
            type="url"
            id="linkedin"
            name="linkedin"
            value={formData.linkedin}
            onChange={handleInputChange}
            className="w-full px-3 py-2 bg-east-bay/50 border border-blue-violet/30 rounded-md text-space-white focus:ring-2 focus:ring-lavender focus:border-transparent"
            placeholder="https://linkedin.com/in/yourprofile"
          />
        </div>

        <div className="pt-4">
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-lavender text-void py-3 px-6 rounded-md font-medium hover:bg-melrose disabled:bg-east-bay disabled:text-space-haze disabled:cursor-not-allowed transition-colors"
          >
            {isSubmitting ? "Submitting..." : "Submit Volunteer Application"}
          </button>
        </div>

        <div className="text-sm text-space-dust/80">
          <p>
            By submitting this application, you agree that:
          </p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>You're committed to volunteering for Hacktoberfest Cebu 2025</li>
            <li>We may contact you via email or phone for coordination</li>
            <li>Your application will be reviewed by the organizing team</li>
          </ul>
        </div>
      </form>
    </Card>
    </div>
  );
}