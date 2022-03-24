module.exports = function(eleventyConfig) {

	eleventyConfig.addPassthroughCopy("src/images");
	eleventyConfig.addPassthroughCopy("css");
	eleventyConfig.addPassthroughCopy("js");

	return {
		dir: {
			input: "src",
			output: "docs"
		}
	};
};
