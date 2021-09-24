const replace = require("replace-in-file");

const options = {
  files: "docs/**/*.html",
  from: /^\s+<dl class="tsd-comment-tags">\n\s+<dt>inheritdoc<\/dt>\n\s+<dd><\/dd>\n\s+<\/dl>\n/gm,
  to: "",
};

try {
  const results = replace.sync(options);
  console.log("Removed 'inheritdoc' tags:");
  console.log(
    results
      .filter(({ hasChanged }) => hasChanged)
      .map(({ file }) => file)
      .join("\n")
  );
} catch (error) {
  console.error("Error occurred:", error);
}
