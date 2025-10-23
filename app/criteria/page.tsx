import { Metadata } from "next";
import { CriteriaClient } from "./criteria-client";
import { NavWrapper } from "../components/nav-wrapper";

export const metadata: Metadata = {
  title: "Criteria",
  description: "Evaluation criteria for Hacktoberfest Cebu 2025 - Learn how your contributions and projects will be judged.",
};

export default function CriteriaPage() {
  return <CriteriaClient navWrapper={<NavWrapper />} />;
}
