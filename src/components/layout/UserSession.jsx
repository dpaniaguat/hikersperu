import { IconCart, IconUser } from "../../assets/icons";
import './sass/UserSession.scss';

export const UserSession = () => {
  return (
    <div className="user_session">
      <div className="user_session__info">
        <IconUser />
      </div>
      <span>|</span>
      <div className="user_session__cart">
        <IconCart />
      </div>
    </div>
  );
};
