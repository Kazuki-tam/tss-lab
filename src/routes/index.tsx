import { createFileRoute } from "@tanstack/react-router";
import {
	Database,
	Layers,
	Route as RouteIcon,
	Server,
	Settings,
	Shield,
} from "lucide-react";
import { siteInfo } from "../config/site";

export const Route = createFileRoute("/")({ component: App });

function App() {
	const techStack = [
		{
			id: "router",
			icon: <RouteIcon className="w-10 h-10 text-emerald-400" />,
			title: "TanStack Router",
			description: "Type-safe file-based routing",
		},
		{
			id: "query",
			icon: <Database className="w-10 h-10 text-emerald-400" />,
			title: "TanStack Query",
			description: "Powerful server state management",
		},
		{
			id: "form",
			icon: <Layers className="w-10 h-10 text-emerald-400" />,
			title: "TanStack Form",
			description: "Type-safe form management",
		},
		{
			id: "t3env",
			icon: <Settings className="w-10 h-10 text-emerald-400" />,
			title: "T3Env",
			description: "Type-safe environment variables",
		},
		{
			id: "trpc",
			icon: <Server className="w-10 h-10 text-emerald-400" />,
			title: "tRPC",
			description: "End-to-end type-safe APIs",
		},
		{
			id: "tailwind",
			icon: <Shield className="w-10 h-10 text-emerald-400" />,
			title: "Tailwind CSS",
			description: "Modern utility-first styling",
		},
	];

	return (
		<div className="min-h-screen bg-linear-to-b from-slate-900 via-slate-800 to-slate-900">
			<section className="relative py-20 px-6 text-center overflow-hidden">
				<div className="absolute inset-0 bg-linear-to-r from-emerald-500/10 via-teal-500/10 to-green-500/10"></div>
				<div className="relative max-w-4xl mx-auto">
					<div className="flex items-center justify-center gap-4 mb-6">
						<img
							src="/tanstack-circle-logo.png"
							alt="TanStack Logo"
							className="w-20 h-20 md:w-24 md:h-24"
						/>
						<h1 className="text-5xl md:text-6xl font-black text-white">
							<span className="bg-linear-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
								{siteInfo.name}
							</span>
						</h1>
					</div>

					<p className="text-xl md:text-2xl text-gray-300 mb-4 font-light">
						TanStack Full-Stack Starter Template
					</p>

					<p className="text-base text-gray-400 max-w-2xl mx-auto mb-8">
						{siteInfo.description}
					</p>

					<div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
						<a
							href="https://tanstack.com/start"
							target="_blank"
							rel="noopener noreferrer"
							className="px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold rounded-lg transition-colors shadow-lg shadow-emerald-500/30"
						>
							TanStack Start Docs
						</a>
						<a
							href="https://trpc.io/docs"
							target="_blank"
							rel="noopener noreferrer"
							className="px-6 py-3 bg-slate-700 hover:bg-slate-600 text-white font-semibold rounded-lg transition-colors"
						>
							tRPC Docs
						</a>
					</div>

					<div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-4 max-w-md mx-auto">
						<p className="text-gray-400 text-sm">
							Get started by editing{" "}
							<code className="px-2 py-1 bg-slate-700 rounded text-emerald-400">
								src/routes/index.tsx
							</code>
						</p>
					</div>
				</div>
			</section>

			<section className="py-12 px-6 max-w-5xl mx-auto">
				<h2 className="text-2xl font-bold text-white text-center mb-8">
					Tech Stack
				</h2>
				<div className="grid grid-cols-2 md:grid-cols-3 gap-4">
					{techStack.map((item) => (
						<div
							key={item.id}
							className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-4 hover:border-emerald-500/50 transition-all duration-300"
						>
							<div className="mb-3">{item.icon}</div>
							<h3 className="text-lg font-semibold text-white mb-1">
								{item.title}
							</h3>
							<p className="text-gray-400 text-sm">{item.description}</p>
						</div>
					))}
				</div>
			</section>

			<section className="py-12 px-6 max-w-3xl mx-auto">
				<h2 className="text-2xl font-bold text-white text-center mb-8">
					Getting Started
				</h2>
				<div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 space-y-4">
					<div className="flex items-start gap-4">
						<span className="shrink-0 w-8 h-8 bg-emerald-500 text-white rounded-full flex items-center justify-center font-bold text-sm">
							1
						</span>
						<div>
							<p className="text-white font-medium">Add Routes</p>
							<p className="text-gray-400 text-sm">
								Create files in{" "}
								<code className="text-emerald-400">src/routes/</code>
							</p>
						</div>
					</div>
					<div className="flex items-start gap-4">
						<span className="shrink-0 w-8 h-8 bg-emerald-500 text-white rounded-full flex items-center justify-center font-bold text-sm">
							2
						</span>
						<div>
							<p className="text-white font-medium">Define APIs</p>
							<p className="text-gray-400 text-sm">
								Extend tRPC router in{" "}
								<code className="text-emerald-400">
									src/integrations/trpc/router.ts
								</code>
							</p>
						</div>
					</div>
					<div className="flex items-start gap-4">
						<span className="shrink-0 w-8 h-8 bg-emerald-500 text-white rounded-full flex items-center justify-center font-bold text-sm">
							3
						</span>
						<div>
							<p className="text-white font-medium">Build UI</p>
							<p className="text-gray-400 text-sm">
								Use Radix UI components in{" "}
								<code className="text-emerald-400">src/components/ui/</code>
							</p>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
