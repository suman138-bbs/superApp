import style from "./register.module.css";
import Signup from "../../components/signup/signup.component";
const Regiter = () => {
  return (
    <div className={style.registerContainer}>
      <div className={style.imageContainer}>
        <p>Discover new things on Superapp</p>
      </div>
      <Signup />
    </div>
  );
};

export default Regiter;
