import React from "react";
import { AuthClient } from "@dfinity/auth-client";

function LogOut() {

   async function handleClick(){
    const authClient = await AuthClient.create();
    await authClient.logout({
      onSuccess: () =>{
        console.log("logged out");
      }
    })
  

return  (<p className="trade-buttons">
        <button id="btn-payout" onClick={handleClick}>
          Log Out
        </button>
      </p>
);

}
}


export default LogOut;