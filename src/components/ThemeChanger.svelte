<script>
	import { onMount } from "svelte";
	import { themeChange } from "theme-change";
	import {
		Listbox,
		ListboxButton,
		ListboxOptions,
		ListboxOption,
		Transition,
	} from "@rgossiaux/svelte-headlessui";
	import ThemeChangerIcon from "./ThemeChangerIcon.svelte";

	const themes = [
		{ iconKey: "feather_moon", name: "dark" },
		{ iconKey: "feather_sun", name: "light" },
		{ iconKey: "feather_disc", name: "retro" },
		{ iconKey: "snowflake", name: "winter" },
		{ iconKey: "city", name: "synthwave" },
		{ iconKey: "", name: "dracula" },
	];

	let selectedTheme = themes[0].name;
	let selectedIconKey = themes[0].iconKey;

	const triggerButtonCss =
		"h-12 flex items-center justify-center px-4 hover:bg-base-content hover:bg-opacity-10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-opacity-60";
	const triggerButtonOpenCss = "bg-base-content bg-opacity-10";

	const optionsContainerCss = `dropdown-content bg-base-200 text-base-content absolute right-0 z-50 mt-2 w-44 menu menu-compact rounded-md shadow-lg focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-opacity-60 focus:outline-none`;

	const optionSelectedCss = "bg-primary text-primary-content";
	const optionActiveCss = "bg-base-content bg-opacity-10";

	const getOptionCss = ({ active, selected }) => {
		if (!!selected) return optionSelectedCss;
		if (!!active) return optionActiveCss;
		return "";
	};

	const getIconKey = (themeName, themes = []) =>
		themes.find((item) => item.name === themeName)?.iconKey;

	const handleSelect = (e) => {
		selectedTheme = e.detail;
		selectedIconKey = getIconKey(selectedTheme, themes);

		// Handle theme change manually so we can use Transition on list items.
		// If not animating the list items programmatically, it's handled automatically
		// by the theme-change library.
		localStorage.setItem("theme", selectedTheme);
		document.documentElement.setAttribute("data-theme", selectedTheme);
	};

	onMount(() => {
		themeChange(false);

		if (!!localStorage.getItem("theme") && !!getIconKey(localStorage.getItem("theme"), themes)) {
			selectedTheme = localStorage.getItem("theme");
			selectedIconKey = getIconKey(selectedTheme, themes);
		}
	});
</script>

<Listbox class="relative" let:open value={selectedTheme} on:change={handleSelect}>
	<ListboxButton class={`${triggerButtonCss} ${open ? triggerButtonOpenCss : ""}`}>
		<ThemeChangerIcon iconKey={selectedIconKey} />
		<span class="hidden lg:inline-block pl-1">Theme</span>
	</ListboxButton>

	<Transition
		enter="transition duration-100 ease-out"
		enterFrom="transform scale-95 opacity-0"
		enterTo="transform scale-100 opacity-100"
		leave="transition duration-75 ease-out"
		leaveFrom="transform scale-100 opacity-100"
		leaveTo="transform scale-95 opacity-0"
	>
		<ListboxOptions class={optionsContainerCss}>
			{#each themes as t (t.name)}
				<ListboxOption value={t.name} class={getOptionCss} let:selected>
					<button data-set-theme={t.name}>
						<ThemeChangerIcon iconKey={t.iconKey} />
						<span>{t.name}</span>
					</button>
				</ListboxOption>
			{/each}
		</ListboxOptions>
	</Transition>
</Listbox>
