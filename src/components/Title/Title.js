import React from "react";
import Helmet from "react-helmet";

const Title = ({id}) => {
  return (
    <Helmet>
      <title>{id} -Fruit Shope </title>
    </Helmet>
  );
};

export default Title;