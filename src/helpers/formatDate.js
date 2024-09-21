const formatDate = (date, lang) => {
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return date.toLocaleDateString(lang, options);
};

export default formatDate;
