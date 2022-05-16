/**
 * astro-lunr plugin
 * @link https://github.com/siverv/astro-lunr
 *
 * To enable, add to astro.config.mjs:
 *
 * import astroLunr from "@siverv/astro-lunr/plugin.mjs";
 * import lunrConfig from "../configs/lunr-config.mjs";
 *
 * Add astroLunr(lunrConfig) to config.integrations
 */

export default {
	subDir: "lunr",
	// pathFilter: (pathname) => { },
	// documentFilter: (doc) => { },
	// mapDocument: (doc) => doc,
	initialize: (builder, lunr) => {
		lunr.tokenizer.separator = /[^\w]+/;
		builder.pipeline.reset();
		builder.searchPipeline.reset();
		builder.field("title", { boost: 10 });
		builder.metadataWhitelist = ["position"];
	},
};

/**
 * Example markup in pages/*.astro

<lunr-document index={"posts"}>
	<lunr-field name="title" value={title}></lunr-field>
	<lunr-field name="description" value={description}></lunr-field>
</lunr-document>

*/
