const siteMeta = {
	name: "Astronotion Demo",
	description: "Make a fast, full-featured Astro site with content from Notion.",
	image: {
		src: "/images/sample-og.png",
		width: 300,
		height: 300,
	},
	lang: "en",
	twitterUsername: "@astrobuild",
};

const headerContent = {
	logoSrc: "/images/branding/icon-spacesuit-24.png",
	logoText: "Astronotion Demo",
	navLinks: [
		{ href: "/about", text: "About" },
		{ href: "/journal", text: "Posts" },
		{ href: "/kitchen-sink-markdown", text: "Markdown Demo" },
		{ href: "/kitchen-sink-notion", text: "Notion Demo" },
	],
};

const footerContent = {
	copyright: "All right reserved - Astronotion Demo",
	navLinks: [
		{ href: "/about", text: "About" },
		{ href: "https://github.com/blah", text: "Terms & Conditions" },
		{ href: "/privacy", text: "Privacy Policy" },
	],
	socialLinks: [
		{ href: "https://twitter.com/astrobuild" },
		{ href: "https://github.com/ekafyi" },
		{ href: "https://dev.to/@ekafyi" },
		{ href: "https://youtube.com/something" },
	],
};

const articleByline = {
	name: "Astrocat",
	url: "/about",
	avatarSrc: "/images/headshot-64x96.jpg",
};

export default {
	siteMeta,
	headerContent,
	footerContent,
	articleByline,
};
