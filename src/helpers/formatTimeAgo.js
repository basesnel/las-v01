const formatTimeAgo = (dateString, lang) => {
  const now = new Date();
  const date = new Date(dateString);
  const secondPast = (now.getTime() - date.getTime()) / 1000;

  if (secondPast < 60) {
    switch (lang) {
      case "en":
        return `created ${Math.floor(secondPast)}s ago`;

      case "uk":
        return `створено ${Math.floor(secondPast)}с тому`;
    }
  }

  if (secondPast < 3600) {
    switch (lang) {
      case "en":
        return `created ${Math.floor(secondPast / 60)}m ago`;

      case "uk":
        return `створено ${Math.floor(secondPast / 60)}хв тому`;
    }
  }

  if (secondPast <= 86400) {
    switch (lang) {
      case "en":
        return `created ${Math.floor(secondPast / 3600)}h ago`;

      case "uk":
        return `створено ${Math.floor(secondPast / 3600)}г тому`;
    }
  }

  if (secondPast > 86400) {
    const day = Math.floor(secondPast / 86400);
    switch (lang) {
      case "en":
        return day === 1 ? `created ${day} day ago` : `created ${day} days ago`;

      case "uk":
        return day === 1
          ? `створено ${day} день тому`
          : `створено ${day} днів тому`;
    }
  }
};

export default formatTimeAgo;
