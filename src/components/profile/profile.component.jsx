import style from "./profile.module.css";
import ProfilePic from "../../assets/Profile.png";
const Profile = () => {
  const userInfo = JSON.parse(localStorage.getItem("formData"));
  const selectedMovie = JSON.parse(localStorage.getItem("selectedItem"));

  return (
    <div className={style.profileContainer}>
      <div className={style.imageContainer}>
        <img src={ProfilePic} alt="" />
      </div>
      <div className={style.userData}>
        <p>{userInfo.name}</p>
        <p>{userInfo.email}</p>
        <h1>{userInfo.username}</h1>
      </div>
      <div className={style.categoryList}>
        {selectedMovie.map((category) => {
          return <p key={category.id}>{category.name}</p>;
        })}
      </div>
    </div>
  );
};

export default Profile;
