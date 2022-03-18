module.exports = function(eleventyConfig) {

	eleventyConfig.addPassthroughCopy("assets");
	eleventyConfig.addPassthroughCopy("css");

	return {
		dir: {
			input: "src",
			output: "docs"
		}
	};
};