import React, { Fragment, useState, useEffect } from "react";
import { Typography } from "@mui/material";
import contactAPI from "../../services/contactAPI";

export default function EditContact() {
  const [contactData, setContactData] = useState([]);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    contactAPI
      .getContact()
      .then((res) => {
        console.log(res);
        setContactData(res.data[0]);
        setIsLoaded(true);
      })
      .catch((err) => {
        setError(err);
        setIsLoaded(true);
      });
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div />;
  } else {
    // console.log(contactData);
    return (
      <Fragment>
        <Typography variant="h3" textAlign="center">
          EDIT CONTACT
        </Typography>
      </Fragment>
    );
  }
}
