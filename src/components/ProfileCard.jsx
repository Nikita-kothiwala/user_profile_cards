
import { useState } from "react";

function ProfileCard({ user, isFollowing, onFollowToggle }) {
  const [imgFailed, setImgFailed] = useState(false);
  const [isActive, setIsActive] = useState(false);

 
  const isOnline = user.isOnline ?? user.online ?? false;

  const initials = user.name.split(" ").map((n) => n[0]).join("").slice(0, 2);

  const handleCardTap = () => {
    setIsActive((current) => !current);
  };

  return (
    <article
      onClick={handleCardTap}
      className={`group flex min-h-[390px] flex-col rounded-2xl border border-slate-200 bg-white
        p-6 shadow-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-[1.015]
  hover:border-blue-100 hover:shadow-xl

        ${
          isActive
            ? "-translate-y-1 scale-[1.015] border-blue-100 shadow-xl"
            : ""
        } `}>
  
      <div className="flex flex-col items-center">

  
        <div
          className={` relative mb-2  h-24  w-24  transition-transform  duration-300 ease-out
            group-hover:scale-105

            ${
              isActive
                ? "scale-105"
                : ""
            }  `} >
  
          <div
            className={` h-full  w-full overflow-hidden rounded-full ring-2 ring-transparent  ring-offset-2    ring-offset-white transition-all  duration-300 ease-out
             group-hover:ring-indigo-300

              ${
                isActive
                  ? "ring-indigo-300"
                  : ""
              } `}  >
            {imgFailed ? (
              <div className="flex  h-full w-full items-center  justify-center rounded-full bg-indigo-100
                  text-2xl  font-medium  text-indigo-700  " >
                {initials}
              </div>
            ) : (
              <img
                src={user.image}
                alt={`${user.name}'s profile`}
                onError={() => setImgFailed(true)}
                className="h-full w-full rounded-full  object-cover
                "
              /> )}
          </div>

      
          <span
            className="  absolute bottom-1.5 right-1.5  flex  h-4  w-4 "
            title={isOnline ? "Online" : "Offline"}
            aria-label={isOnline ? "Online" : "Offline"}
          >
            {isOnline && (
              <span
                className=" absolute  inline-flex h-full  w-full animate-ping rounded-full bg-emerald-400
                  opacity-75 motion-reduce:animate-none "
              />  )}

            <span
              className={` relative inline-flex  h-4 w-4 rounded-full border-2  border-white
                ${
                  isOnline
                    ? "bg-emerald-500"
                    : "bg-slate-300"
                }
              `}
            />
          </span>
        </div>

      
        <span
          className={`  mt-5 rounded-full  px-2.5 py-1 text-[11px] font-semibold
            ${
              isOnline
                ? "bg-emerald-50 text-emerald-600"
                : "bg-slate-100 text-slate-500"
            }
          `}
        >
          {isOnline ? "Online" : "Offline"}
        </span>
      </div>

      <div className="mt-5 text-center">
        <h2 className="text-lg font-bold text-slate-900">
          {user.name}
        </h2>

        <p className="mt-1 text-sm font-semibold text-blue-600">
          {user.role}
        </p>

        <p className="mt-3 min-h-[48px] text-sm leading-6 text-slate-500">
          {user.bio}
        </p>
      </div>

   
      <div className="mt-auto pt-6">
        <button
          type="button"
          onClick={(event) => {
            event.stopPropagation();
            onFollowToggle(user.id);
          }}
          aria-pressed={isFollowing}
          className={`  w-full rounded-full  border px-4  py-2.5 text-sm font-semibold  transition-all duration-200  ease-out  active:scale-[0.97]

            ${
              isFollowing
                ? `
                  border-slate-300  bg-slate-100  text-slate-600 hover:border-red-300 hover:bg-red-50
                  hover:text-red-600
                `
                : `
                  border-blue-600 bg-blue-600 text-white
                `
            }
          `}
        >
          {isFollowing ? "Following" : "Follow"}
        </button>
      </div>
    </article>
  );
}

export default ProfileCard;
