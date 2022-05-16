// @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleString
const sampleConfig = {
	locales: "en-GB",
	options: {
		dateStyle: "long",

		// Either use the "dateStyle" field _or_ the fields below.
		// year: "numeric",
		// month: "long",
		// day: "numeric",
		// hour: "2-digit",
		// minute: "2-digit",
	} as Intl.DateTimeFormatOptions,
};

export const formatReadableDate = (
	d: Date | string | number,
	config: { locales: string | string[]; options: Intl.DateTimeFormatOptions } = sampleConfig
) => new Date(d).toLocaleString(config.locales, config.options);
