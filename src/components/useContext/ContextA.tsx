import { useState, createContext } from "react";
import ComponetB from "./ContextB";

export const UserContxt = createContext<string | null>(null);

const ContextA = () => {
  const [user, setUser] = useState<string>("sabith");
  return (
    <div className="box">
      <h1>ComponentA</h1>
      <h2>{`hello ${user}`}</h2>
      <UserContxt.Provider value={user}>
        <ComponetB/>
      </UserContxt.Provider>
    </div>
  );
};

export default ContextA;
