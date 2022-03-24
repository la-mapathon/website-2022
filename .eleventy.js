module.exports = function(eleventyConfig) {

	eleventyConfig.addPassthroughCopy("images");
	eleventyConfig.addPassthroughCopy("css");
	eleventyConfig.addPassthroughCopy("js");

	return {
		dir: {
			input: "src",
			output: "docs"
		}
	};
};
