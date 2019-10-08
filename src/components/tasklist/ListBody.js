import React from "react";

const styles = {
  wrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    padding: "1em"
  },
  name: {
    fontSize: "1.5em",
    fontWeight: "400",
    marginBottom: "0.3rem"
  },
  description: {
    fontSize: "0.8em",
    marginBottom: "0.3rem"
  }
};

const ListBody = ({ name, description }) => (
    <div style={styles.wrapper}>
        <span style={styles.name}>{name}</span>
        <span style={styles.description}>{description}</span>
    </div>
);

export default ListBody;