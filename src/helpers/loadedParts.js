const loadedParts = () => {
  const sections = document.querySelectorAll("section[id]");
  const parts = [];
  sections.forEach((section, i) => {
    const part = { id: i, name: section.id, label: section.ariaLabel };
    parts.push(part);
  });

  return parts;
};

export default loadedParts;
