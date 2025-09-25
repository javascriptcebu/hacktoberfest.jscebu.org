"use client";

export function Analytics() {
	const token = process.env.NEXT_PUBLIC_BEAM_TOKEN;
	const isProduction = process.env.NODE_ENV === "production";

	return (
		<>
			{token && (
				<script
					src="https://beamanalytics.b-cdn.net/beam.min.js"
					data-token={token}
					async
				/>
			)}
			{isProduction && (
				<script
					defer
					src="https://stats.gocebby.com/script.js"
					data-website-id="a1dea975-d81b-41b9-b9b1-1512aefeda04"
				/>
			)}
		</>
	);
}
