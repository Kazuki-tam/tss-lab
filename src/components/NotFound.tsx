import { Link } from "@tanstack/react-router";
import { Home } from "lucide-react";

export function NotFoundComponent() {
	return (
		<div className="min-h-screen bg-linear-to-b from-slate-900 via-slate-800 to-slate-900">
			<div className="flex min-h-screen flex-col items-center justify-center gap-6 px-6 py-20 text-center">
				<div className="space-y-2">
					<h1 className="text-8xl font-black text-slate-700">404</h1>
					<h2 className="text-2xl font-bold text-white">Page Not Found</h2>
					<p className="text-gray-300">
						The page you are looking for does not exist or has been moved.
					</p>
				</div>
				<Link
					to="/"
					className="inline-flex items-center gap-2 rounded-lg bg-emerald-500 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-emerald-600 shadow-lg shadow-emerald-500/30"
				>
					<Home className="h-4 w-4" aria-hidden="true" />
					Back to Home
				</Link>
			</div>
		</div>
	);
}
