// Permalink possible fix from https://github.com/11ty/eleventy/issues/923
//   "permalink": "{{ page | post_permalink }}"

module.exports = page => {
  const yyyy = page.date.getFullYear();
  const mm = String(page.date.getMonth() + 1).padStart(2, "0");
  const slug = page.fileSlug.replace(/^\d{4}-\d{2}-\d{2}\./, "");
  return `${yyyy}/${mm}/${slug}/`;
};
