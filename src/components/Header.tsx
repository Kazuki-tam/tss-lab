import { Link } from "@tanstack/react-router";
import { siteInfo } from "../config/site";

export default function Header() {
	return (
		<header className="p-4 flex items-center justify-between bg-gray-800 text-white shadow-lg">
			<Link to="/" className="flex items-center gap-3">
				<img
					src="/tanstack-circle-logo.png"
					alt={`${siteInfo.name} Logo`}
					className="h-8 w-8"
				/>
				<span className="text-xl font-bold bg-linear-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
					{siteInfo.name}
				</span>
			</Link>

			<nav className="flex items-center gap-4">
				<a
					href="https://github.com/Kazuki-tam/tss-lab"
					target="_blank"
					rel="noopener noreferrer"
					className="text-gray-400 hover:text-white transition-colors text-sm"
				>
					GitHub
				</a>
			</nav>
		</header>
	);
}
