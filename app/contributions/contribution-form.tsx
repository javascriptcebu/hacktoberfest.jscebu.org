"use client";

import {
  AlertCircle,
  CheckCircle,
  ExternalLink,
  GitPullRequest,
  Loader2,
} from "lucide-react";

import { Card } from "../components/card";
import { useState } from "react";

interface ContributionFormProps {
  userEmail?: string;
}

export function ContributionForm({ userEmail }: ContributionFormProps) {
  const [formData, setFormData] = useState({
    prUrl: "",
    projectName: "",
    projectUrl: "",
    isLocalProject: false,
    contributionType: "code",
    description: "",
    email: userEmail || "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      const response = await fetch("/api/submit-contribution", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus({
          type: "success",
          message:
            "Contribution submitted successfully! We'll review and track your PR.",
        });
        setFormData({
          prUrl: "",
          projectName: "",
          projectUrl: "",
          isLocalProject: false,
          contributionType: "code",
          description: "",
          email: userEmail || "",
        });
      } else {
        setSubmitStatus({
          type: "error",
          message: data.error || "Failed to submit contribution",
        });
      }
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message: "Network error. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]:
        type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  return (
    <Card>
      <div className="p-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 bg-lavender/20 rounded-full flex items-center justify-center">
            <GitPullRequest className="w-5 h-5 text-lavender" />
          </div>
          <h2 className="text-xl font-bold text-melrose">
            Submit Your Pull Request
          </h2>
        </div>

        {submitStatus.type && (
          <div
            className={`mb-6 p-4 rounded-lg border ${
              submitStatus.type === "success"
                ? "bg-green-900/20 border-green-800/50 text-green-400"
                : "bg-red-900/20 border-red-800/50 text-red-400"
            }`}
          >
            <div className="flex items-center gap-2">
              {submitStatus.type === "success" ? (
                <CheckCircle className="w-5 h-5" />
              ) : (
                <AlertCircle className="w-5 h-5" />
              )}
              <span>{submitStatus.message}</span>
            </div>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="prUrl"
              className="block text-sm font-medium text-space-dust mb-2"
            >
              Pull Request URL <span className="text-red-400">*</span>
            </label>
            <input
              type="url"
              id="prUrl"
              name="prUrl"
              value={formData.prUrl}
              onChange={handleChange}
              placeholder="https://github.com/owner/repo/pull/123"
              className="w-full px-4 py-2 bg-east-bay/50 border border-blue-violet/30 rounded-md text-space-white placeholder-space-haze focus:outline-none focus:border-lavender/50 focus:ring-1 focus:ring-lavender/50"
              required
            />
            <p className="text-xs text-space-haze mt-1">
              The full URL to your pull request on GitHub, GitLab, etc.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="projectName"
                className="block text-sm font-medium text-space-dust mb-2"
              >
                Project Name <span className="text-red-400">*</span>
              </label>
              <input
                type="text"
                id="projectName"
                name="projectName"
                value={formData.projectName}
                onChange={handleChange}
                placeholder="e.g., React, Vue, Express"
                className="w-full px-4 py-2 bg-east-bay/50 border border-blue-violet/30 rounded-md text-space-white placeholder-space-haze focus:outline-none focus:border-lavender/50 focus:ring-1 focus:ring-lavender/50"
                required
              />
            </div>

            <div>
              <label
                htmlFor="projectUrl"
                className="block text-sm font-medium text-space-dust mb-2"
              >
                Project Repository URL <span className="text-red-400">*</span>
              </label>
              <input
                type="url"
                id="projectUrl"
                name="projectUrl"
                value={formData.projectUrl}
                onChange={handleChange}
                placeholder="https://github.com/owner/repo"
                className="w-full px-4 py-2 bg-east-bay/50 border border-blue-violet/30 rounded-md text-space-white placeholder-space-haze focus:outline-none focus:border-lavender/50 focus:ring-1 focus:ring-lavender/50"
                required
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="contributionType"
              className="block text-sm font-medium text-space-dust mb-2"
            >
              Contribution Type <span className="text-red-400">*</span>
            </label>
            <select
              id="contributionType"
              name="contributionType"
              value={formData.contributionType}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-east-bay/50 border border-blue-violet/30 rounded-md text-space-white focus:outline-none focus:border-lavender/50 focus:ring-1 focus:ring-lavender/50"
              required
            >
              <option value="code">Code (Feature/Enhancement)</option>
              <option value="bugfix">Bug Fix</option>
              <option value="documentation">Documentation</option>
              <option value="translation">Translation/Localization</option>
              <option value="design">Design/UI/UX</option>
              <option value="testing">Testing/Test Coverage</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div>
            <label
              htmlFor="description"
              className="block text-sm font-medium text-space-dust mb-2"
            >
              Brief Description <span className="text-red-400">*</span>
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows={3}
              placeholder="Briefly describe what your contribution does..."
              className="w-full px-4 py-2 bg-east-bay/50 border border-blue-violet/30 rounded-md text-space-white placeholder-space-haze focus:outline-none focus:border-lavender/50 focus:ring-1 focus:ring-lavender/50"
              required
            />
          </div>

          <div className="flex items-center gap-3 p-4 bg-lavender/10 rounded-lg border border-lavender/30">
            <input
              type="checkbox"
              id="isLocalProject"
              name="isLocalProject"
              checked={formData.isLocalProject}
              onChange={handleChange}
              className="w-5 h-5 rounded border-blue-violet/30 bg-east-bay/50 text-lavender focus:ring-lavender/50"
            />
            <label htmlFor="isLocalProject" className="flex-1 cursor-pointer">
              <span className="font-semibold text-melrose">
                This is a Cebu-based project
              </span>
              <p className="text-xs text-space-dust mt-1">
                Check this if the project is created by Cebu developers or
                companies (2x points!)
              </p>
            </label>
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-space-dust mb-2"
            >
              Email <span className="text-red-400">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="your@email.com"
              className="w-full px-4 py-2 bg-east-bay/50 border border-blue-violet/30 rounded-md text-space-white placeholder-space-haze focus:outline-none focus:border-lavender/50 focus:ring-1 focus:ring-lavender/50"
              required
            />
            <p className="text-xs text-space-haze mt-1">
              We'll use this to notify you about your contribution status
            </p>
          </div>

          <div className="pt-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-lavender text-void py-3 px-6 rounded-md font-medium hover:bg-melrose transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Submitting...
                </>
              ) : (
                <>
                  <GitPullRequest className="w-5 h-5" />
                  Submit Contribution
                </>
              )}
            </button>
          </div>
        </form>

        <div className="mt-6 p-4 bg-yellow-900/20 border border-yellow-800/30 rounded-lg">
          <p className="text-sm text-yellow-400">
            <span className="font-semibold">💡 Tips:</span> You can submit
            multiple PRs! Each valid contribution counts towards your total
            score. Focus on quality over quantity for better chances of winning.
          </p>
        </div>
      </div>
    </Card>
  );
}
