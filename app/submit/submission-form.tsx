"use client";

import { Code, Info, Plus, Users, X } from "lucide-react";

import { Card } from "../components/card";
import { useState } from "react";

interface SubmissionFormProps {
  userEmail?: string;
}

interface TeamMember {
  name: string;
  email: string;
  github: string;
  role: string;
}

export function SubmissionForm({ userEmail }: SubmissionFormProps) {
  const [projectType, setProjectType] = useState<"hackathon" | "existing">(
    "existing"
  );
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    specialNote: "",
    repository: "",
    url: "",
    image: "",
    email: userEmail || "",
    category: "",
    techStack: "",
    lookingFor: "",
  });

  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([
    { name: "", email: userEmail || "", github: "", role: "Team Lead" },
  ]);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    const submissionData = {
      ...formData,
      projectType,
      teamMembers:
        projectType === "hackathon" ? teamMembers.filter((m) => m.name) : [],
    };

    try {
      const response = await fetch("/api/submit-project", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(submissionData),
      });

      if (response.ok) {
        setSubmitStatus({
          type: "success",
          message:
            "Project submitted successfully! We'll review it and get back to you soon.",
        });
        setFormData({
          title: "",
          description: "",
          specialNote: "",
          repository: "",
          url: "",
          image: "",
          email: userEmail || "",
          category: "",
          techStack: "",
          lookingFor: "",
        });
        setTeamMembers([
          { name: "", email: userEmail || "", github: "", role: "Team Lead" },
        ]);
      } else {
        const errorData = await response.json();
        setSubmitStatus({
          type: "error",
          message:
            errorData.error || "Failed to submit project. Please try again.",
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

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleTeamMemberChange = (
    index: number,
    field: keyof TeamMember,
    value: string
  ) => {
    const updatedMembers = [...teamMembers];
    updatedMembers[index] = { ...updatedMembers[index], [field]: value };
    setTeamMembers(updatedMembers);
  };

  const addTeamMember = () => {
    if (teamMembers.length < 4) {
      setTeamMembers([
        ...teamMembers,
        { name: "", email: "", github: "", role: "" },
      ]);
    }
  };

  const removeTeamMember = (index: number) => {
    if (teamMembers.length > 1) {
      setTeamMembers(teamMembers.filter((_, i) => i !== index));
    }
  };

  return (
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
            <div>
              <p className="font-medium">{submitStatus.message}</p>
              {submitStatus.type === "success" && (
                <p className="text-sm mt-2 opacity-90">
                  Note: Your project is now pending admin review. Once approved,
                  it will be displayed on the projects page for others to
                  discover and contribute to.
                </p>
              )}
            </div>
          </div>
        )}

        {/* Project Type Selection */}
        <div className="space-y-4">
          <label className="block text-sm font-medium text-melrose mb-3">
            Project Type *
          </label>
          <div className="grid md:grid-cols-2 gap-4">
            <button
              type="button"
              onClick={() => setProjectType("hackathon")}
              className={`p-4 rounded-lg border-2 transition-all text-left ${
                projectType === "hackathon"
                  ? "border-lavender bg-lavender/10 text-lavender"
                  : "border-blue-violet/30 hover:border-blue-violet/50 text-space-dust"
              }`}
            >
              <div className="flex items-center mb-2">
                <Users className="w-5 h-5 mr-2" />
                <span className="font-semibold">Hackathon Project</span>
              </div>
              <p className="text-sm opacity-80">
                New project for the 20-day hackathon with your team
              </p>
            </button>

            <button
              type="button"
              onClick={() => setProjectType("existing")}
              className={`p-4 rounded-lg border-2 transition-all text-left ${
                projectType === "existing"
                  ? "border-lavender bg-lavender/10 text-lavender"
                  : "border-blue-violet/30 hover:border-blue-violet/50 text-space-dust"
              }`}
            >
              <div className="flex items-center mb-2">
                <Code className="w-5 h-5 mr-2" />
                <span className="font-semibold">Existing Project</span>
              </div>
              <p className="text-sm opacity-80">
                Project seeking contributors and community support
              </p>
            </button>
          </div>
        </div>

        {/* Basic Project Information */}
        <div className="space-y-6">
          <div>
            <label
              htmlFor="title"
              className="block text-sm font-medium text-melrose mb-2"
            >
              Project Title *
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              required
              className="w-full px-3 py-2 bg-east-bay/30 border border-blue-violet/30 rounded-md text-space-white focus:ring-2 focus:ring-lavender focus:border-transparent"
              placeholder="Enter your project title"
            />
          </div>

          <div>
            <label
              htmlFor="description"
              className="block text-sm font-medium text-melrose mb-2"
            >
              Description *
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              required
              rows={4}
              className="w-full px-3 py-2 bg-east-bay/30 border border-blue-violet/30 rounded-md text-space-white focus:ring-2 focus:ring-lavender focus:border-transparent"
              placeholder={
                projectType === "hackathon"
                  ? "Describe your hackathon project idea, goals, and what you plan to build"
                  : "Describe your project, its purpose, and what kind of contributions you're looking for"
              }
            />
          </div>

          <div>
            <label
              htmlFor="specialNote"
              className="block text-sm font-medium text-melrose mb-2"
            >
              Special Note <span className="text-space-haze">(optional)</span>
            </label>
            <textarea
              id="specialNote"
              name="specialNote"
              value={formData.specialNote}
              onChange={handleInputChange}
              rows={3}
              className="w-full px-3 py-2 bg-east-bay/30 border border-blue-violet/30 rounded-md text-space-white focus:ring-2 focus:ring-lavender focus:border-transparent"
              placeholder="Add any special announcements, instructions, or notes for contributors (e.g., 'Looking for first-time contributors!', 'Hackathon deadline is Oct 31', etc.)"
            />
            <p className="mt-1 text-xs text-space-haze">
              This note will be prominently displayed on your project page to
              catch contributors' attention
            </p>
          </div>

          <div>
            <label
              htmlFor="category"
              className="block text-sm font-medium text-melrose mb-2"
            >
              Category *
            </label>
            <select
              id="category"
              name="category"
              value={formData.category}
              onChange={handleInputChange}
              required
              className="w-full px-3 py-2 bg-east-bay/30 border border-blue-violet/30 rounded-md text-space-white focus:ring-2 focus:ring-lavender focus:border-transparent"
            >
              <option value="">Select a category</option>
              <option value="web">Web Application</option>
              <option value="mobile">Mobile Application</option>
              <option value="ai-ml">AI/Machine Learning</option>
              <option value="blockchain">Blockchain/Web3</option>
              <option value="iot">IoT/Hardware</option>
              <option value="gaming">Gaming</option>
              <option value="devtools">Developer Tools</option>
              <option value="data">Data/Analytics</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div>
            <label
              htmlFor="techStack"
              className="block text-sm font-medium text-melrose mb-2"
            >
              Tech Stack *
            </label>
            <input
              type="text"
              id="techStack"
              name="techStack"
              value={formData.techStack}
              onChange={handleInputChange}
              required
              className="w-full px-3 py-2 bg-east-bay/30 border border-blue-violet/30 rounded-md text-space-white focus:ring-2 focus:ring-lavender focus:border-transparent"
              placeholder="e.g., React, Node.js, PostgreSQL, TypeScript"
            />
            <p className="mt-1 text-xs text-space-haze">
              List the main technologies, languages, and frameworks
            </p>
          </div>

          <div>
            <label
              htmlFor="repository"
              className="block text-sm font-medium text-melrose mb-2"
            >
              Repository URL *
            </label>
            <input
              type="url"
              id="repository"
              name="repository"
              value={formData.repository}
              onChange={handleInputChange}
              required
              className="w-full px-3 py-2 bg-east-bay/30 border border-blue-violet/30 rounded-md text-space-white focus:ring-2 focus:ring-lavender focus:border-transparent"
              placeholder="https://github.com/username/project"
            />
          </div>

          <div>
            <label
              htmlFor="url"
              className="block text-sm font-medium text-melrose mb-2"
            >
              Live URL <span className="text-space-haze">(optional)</span>
            </label>
            <input
              type="url"
              id="url"
              name="url"
              value={formData.url}
              onChange={handleInputChange}
              className="w-full px-3 py-2 bg-east-bay/30 border border-blue-violet/30 rounded-md text-space-white focus:ring-2 focus:ring-lavender focus:border-transparent"
              placeholder="https://your-project.com"
            />
          </div>

          <div>
            <label
              htmlFor="image"
              className="block text-sm font-medium text-melrose mb-2"
            >
              Image URL <span className="text-space-haze">(optional)</span>
            </label>
            <input
              type="url"
              id="image"
              name="image"
              value={formData.image}
              onChange={handleInputChange}
              className="w-full px-3 py-2 bg-east-bay/30 border border-blue-violet/30 rounded-md text-space-white focus:ring-2 focus:ring-lavender focus:border-transparent"
              placeholder="https://example.com/screenshot.png"
            />
            <p className="mt-1 text-xs text-space-haze">
              A screenshot or logo for your project
            </p>
          </div>

          {/* Existing Project Specific Field */}
          {projectType === "existing" && (
            <div>
              <label
                htmlFor="lookingFor"
                className="block text-sm font-medium text-melrose mb-2"
              >
                Looking For *
              </label>
              <textarea
                id="lookingFor"
                name="lookingFor"
                value={formData.lookingFor}
                onChange={handleInputChange}
                required
                rows={3}
                className="w-full px-3 py-2 bg-east-bay/30 border border-blue-violet/30 rounded-md text-space-white focus:ring-2 focus:ring-lavender focus:border-transparent"
                placeholder="Describe what kind of contributions you need: bug fixes, new features, documentation, UI/UX improvements, etc."
              />
              <p className="mt-1 text-xs text-space-haze">
                Be specific about the help you need to attract the right
                contributors
              </p>
            </div>
          )}
        </div>

        {/* Team Members Section for Hackathon */}
        {projectType === "hackathon" && (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <label className="block text-sm font-medium text-melrose">
                Team Members (1-4 members) *
              </label>
              {teamMembers.length < 4 && (
                <button
                  type="button"
                  onClick={addTeamMember}
                  className="inline-flex items-center px-3 py-1 text-sm bg-lavender/20 text-lavender rounded-md hover:bg-lavender/30 transition"
                >
                  <Plus className="w-4 h-4 mr-1" />
                  Add Member
                </button>
              )}
            </div>

            <div className="bg-blue-violet/10 border border-blue-violet/20 rounded-lg p-3">
              <div className="flex items-start gap-2">
                <Info className="w-4 h-4 text-lavender mt-0.5 flex-shrink-0" />
                <p className="text-xs text-space-dust">
                  Add your team members for the hackathon. Teams can have 1-4
                  members total. The first member is the team lead.
                </p>
              </div>
            </div>

            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="p-4 bg-east-bay/20 border border-blue-violet/30 rounded-lg space-y-4"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-semibold text-melrose">
                    {index === 0 ? "Team Lead" : `Team Member ${index}`}
                  </span>
                  {index > 0 && (
                    <button
                      type="button"
                      onClick={() => removeTeamMember(index)}
                      className="text-red-400 hover:text-red-300 transition"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  )}
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-space-dust mb-1">
                      Name *
                    </label>
                    <input
                      type="text"
                      value={member.name}
                      onChange={(e) =>
                        handleTeamMemberChange(index, "name", e.target.value)
                      }
                      required={index === 0}
                      className="w-full px-3 py-2 bg-east-bay/30 border border-blue-violet/30 rounded-md text-space-white text-sm focus:ring-2 focus:ring-lavender focus:border-transparent"
                      placeholder="Full name"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-space-dust mb-1">
                      Email *
                    </label>
                    <input
                      type="email"
                      value={member.email}
                      onChange={(e) =>
                        handleTeamMemberChange(index, "email", e.target.value)
                      }
                      required={index === 0}
                      className="w-full px-3 py-2 bg-east-bay/30 border border-blue-violet/30 rounded-md text-space-white text-sm focus:ring-2 focus:ring-lavender focus:border-transparent"
                      placeholder="email@example.com"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-space-dust mb-1">
                      GitHub Username
                    </label>
                    <input
                      type="text"
                      value={member.github}
                      onChange={(e) =>
                        handleTeamMemberChange(index, "github", e.target.value)
                      }
                      className="w-full px-3 py-2 bg-east-bay/30 border border-blue-violet/30 rounded-md text-space-white text-sm focus:ring-2 focus:ring-lavender focus:border-transparent"
                      placeholder="username"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-space-dust mb-1">
                      Role {index > 0 && "*"}
                    </label>
                    <input
                      type="text"
                      value={member.role}
                      onChange={(e) =>
                        handleTeamMemberChange(index, "role", e.target.value)
                      }
                      required={index > 0 && member.name !== ""}
                      readOnly={index === 0}
                      className="w-full px-3 py-2 bg-east-bay/30 border border-blue-violet/30 rounded-md text-space-white text-sm focus:ring-2 focus:ring-lavender focus:border-transparent"
                      placeholder={
                        index === 0
                          ? "Team Lead"
                          : "e.g., Frontend Dev, Designer"
                      }
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Contact Information */}
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-melrose mb-2"
          >
            Primary Contact Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
            className="w-full px-3 py-2 bg-east-bay/30 border border-blue-violet/30 rounded-md text-space-white focus:ring-2 focus:ring-lavender focus:border-transparent"
            placeholder="your.email@example.com"
          />
          <p className="mt-1 text-xs text-space-haze">
            We'll use this email for all project-related communications
          </p>
        </div>

        <div className="pt-4">
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-lavender text-void py-3 px-6 rounded-md font-semibold hover:bg-melrose disabled:bg-east-bay disabled:text-space-haze disabled:cursor-not-allowed transition-colors"
          >
            {isSubmitting ? "Submitting..." : "Submit Project"}
          </button>
          <p className="text-xs text-space-haze text-center mt-3">
            Projects are reviewed by our admin team before being published
          </p>
        </div>

        <div className="text-sm text-space-dust/80">
          <p>By submitting your project, you agree that:</p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>Your project is or will be open source</li>
            <li>You have the rights to submit this project</li>
            <li>Your submission will be reviewed before publication</li>
            {projectType === "hackathon" && (
              <li>All team members consent to participation</li>
            )}
          </ul>
        </div>
      </form>
    </Card>
  );
}
