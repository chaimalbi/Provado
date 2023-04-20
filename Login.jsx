import React from "react";
import { AuthClient } from "@dfinity/auth-client";
import App from "./App";


function LogIn() {
     async function handleClick() {
            const authClient = await AuthClient.create();

            if (await authClient.isAuthenticated()){
              const userId = authClient.getIdentity().getPrincipal();
                alert("You are already logged-in" + userId);
            } else {
              await authClient.login({
                identityProvider: "https://identity.ic0.app",
                onSuccess: () => {
               handelAuthenitcation(authClient);
              }
        });
            }
            async function handelAuthenitcation(authClient){
              ReactDOM.render(<App />, document.getElementById("root"));
              
            }
         
 
        }
  return (
    <p className="trade-buttons">
        <button id="btn-payout" onClick={handleClick}>
          Log in
        </button>
      </p>   
  );

}
export default LogIn;