const Link = ({ src, label, children, ...delegated }) => {
  const isLinkExternal = (par) => par.toLowerCase().match(/^http/);

  const secureAttributes = {
    ...(isLinkExternal(src) && {
      target: "_blank",
      rel: "noopener noreferrer nofollow",
    }),
  };

  return (
    <a href={src} {...secureAttributes} aria-label={label} {...delegated}>
      {children}
    </a>
  );
};

export default Link;
