<script>
	import { onMount, tick } from "svelte";
	import {
		Email,
		HackerNews,
		LinkedIn,
		Telegram,
		Tumblr,
		WhatsApp,
		Facebook,
		Twitter,
	} from "svelte-share-buttons-component";

	export let url = "https://pchynoweth.github.io/svelte-share-buttons-component/";
	export let title = "Svelte Share Buttons Component";
	export let desc = "Svelte based social media share buttons component with no tracking.";

	let mounted = false;
	let shareApiSupported = false;
	let fallbackShareOpen = false;

	let triggerBtnRef;
	let closeBtnRef;

	const handleShare = async () => {
		if (shareApiSupported) {
			try {
				navigator.share({
					title,
					text: `Shared from ${siteTitle}`,
					url,
				});
			} catch (error) {
				console.error(error);
			}
		} else {
			fallbackShareOpen = true;
			await tick();
			closeBtnRef.focus();
		}
	};

	const handleCloseFallbackBox = () => {
		fallbackShareOpen = false;
		triggerBtnRef.focus();
	};

	onMount(() => {
		mounted = true;
		shareApiSupported = "share" in navigator;
	});
</script>

{#if mounted}
	<button class="btn" bind:this={triggerBtnRef} on:click={handleShare}> Share </button>
{/if}

{#if fallbackShareOpen}
	<section
		class="card card-compact my-4 bg-base-300 text-base-content shadow-lg"
		aria-labelledby="share-fallback-label"
	>
		<div class="card-body">
			<div class="card-actions items-center justify-between">
				<strong id="share-fallback-label">Share page</strong>
				<button
					aria-label="close share menu"
					class="btn btn-square btn-sm"
					bind:this={closeBtnRef}
					on:click={handleCloseFallbackBox}
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-6 w-6"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						><path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M6 18L18 6M6 6l12 12"
						/></svg
					>
				</button>
			</div>
			<div class="flex flex-wrap justify-center gap-4 leading-none">
				<Email subject={title} body="{desc} {url}" />
				<HackerNews class="share-button" {title} {url} />
				<LinkedIn class="share-button" {url} />
				<Tumblr class="share-button" {title} {url} caption={title} />
				<Telegram class="share-button" text={title} {url} />
				<WhatsApp class="share-button" text="{title} {url}" />
				<Facebook class="share-button" quote={title} {url} />
				<Twitter class="share-button" text={title} {url} via="username" />
			</div>
		</div>
	</section>
{/if}
