import React from "react";
import { withRouter } from "react-router-dom";
import { useQuery, useMutation } from "react-apollo-hooks";
import { GET_USER, LOG_OUT } from "./ProfileQueries";
import ProfilePresenter from "./ProfilePresenter";

export default withRouter(
  ({
    match: {
      params: { username }
    }
  }) => {
    //const { data, loading } = useQuery(GET_USER, { variables: { username } });
    //const logUserOut = useMutation(LOG_OUT);
    return <ProfilePresenter />;
  }
);
