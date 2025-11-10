"use client";

import { useEffect } from "react";

export const ReportView: React.FC<{ slug: string }> = ({ slug }) => {
	// Prevent reporting from local development
	if (
		typeof window !== "undefined" &&
		window.location.href.startsWith("http://localhost")
	) {
		return null;
	}

	useEffect(() => {
		fetch("/api/incr", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ slug }),
		});
	}, [slug]);

	return null;
};