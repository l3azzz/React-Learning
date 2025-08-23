import { NameContext, EmailContext } from "./Context_main";
import React from "react";
export default function ContextD() {
  return (
    <>
      {/* then we have to wrap it
          <UserContext.Consumer/> consumes the provider's value */}
      <NameContext.Consumer>
        {(username) => (
          <EmailContext.Consumer>
            {(email) => (
              <h1>
                name is {username} email {email} DDDDDD.
              </h1>
            )}
          </EmailContext.Consumer>
        )}
      </NameContext.Consumer>
      {/* messy fuction see context c */}
    </>
  );
}
