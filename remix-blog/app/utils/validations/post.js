export const validateTitle = ({ title }) => {
  if (typeof title !== "string" || title.length < 3)
    return "Title needs to be at least 3 characters long";
};

export const validateContent = ({ content }) => {
  //
};
