function ProfileCard({ title, image }) {
  return (
    <div>
      <img src={image} alt="pda logo" />
      <h3>{title}</h3>
    </div>
  );
}

export default ProfileCard;
