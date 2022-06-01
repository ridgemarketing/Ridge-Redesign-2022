import React from "react";
import { UseStaticQuery, graphql, ReactDOM } from "gatsby"
import GravityFormForm from "gatsby-plugin-gravity-forms";

const gf_forms = () => {
  const data = UseStaticQuery(graphql`
    query formQuery {
      wpGfForm(databaseId: { eq: 1 }) {
        ...GravityFormFields
      }
    }
  `);

  return (
    ReactDOM.render(<GravityFormForm data={data} />, document.getElementById('___gatsby'))
  );
};
export default gf_forms;