import ProfileCard from "./ProfileCard";
import { users } from "../data/usersdata";

function ProfileGrid({ followingUsers, onFollowToggle }) {
  return (
    <section
      aria-label="Community members"
      className=" grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3
      "
    >
      {users.map((user) => (
        <ProfileCard
          key={user.id}
          user={user}
          isFollowing={followingUsers.includes(user.id)}
          onFollowToggle={onFollowToggle}
        />
      ))}
    </section>
  );
}

export default ProfileGrid;