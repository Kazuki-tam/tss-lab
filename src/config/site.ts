type SiteInfo = {
	name: string;
	title: string;
	description: string;
	url: string;
};

export const siteInfo = {
	name: "TSS-Lab",
	title: "TSS-Lab | TanStack Start Starter",
	description:
		"A type-safe full-stack starter template integrating TanStack Router + TanStack Start + tRPC + TanStack Query",
	url: "https://tss-lab.vercel.app/",
} as const satisfies SiteInfo;
