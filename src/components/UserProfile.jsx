import { useContext } from "react";
import UserContext from "../contexts/UserContext";

function UserProfile() {
  const { isOnLine, setIsOnLine } = useContext(UserContext);

  return (
    <section>
      <p>L'utilisateur est {isOnLine ? "en ligne" : "hors ligne"}</p>
      <button onClick={() => setIsOnLine(!isOnLine)}>
        click to change user status
      </button>
    </section>
  );
}

export default UserProfile;
