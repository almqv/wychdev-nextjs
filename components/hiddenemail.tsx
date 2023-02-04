import React, { useState, useEffect } from "react";

const HiddenEmail = ({
  email,
  alt,
  althref,
}: {
  email: string;
  alt: string;
  althref: string;
}) => {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <a href={visible ? `mailto:${email}` : althref}>{visible ? email : alt}</a>
  );
};

export default HiddenEmail;
