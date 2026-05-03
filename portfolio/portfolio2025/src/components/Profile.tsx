import { IoIosMail } from "react-icons/io";
import { FaCalendar } from "react-icons/fa";
import { IoPersonSharp } from "react-icons/io5";
import type { ReactElement } from "react";

interface ProfileProps {
  name?: string;
  src?: string;
  birth?: string;
  email?: string;
  [key: string]: any;
}

interface ProfileInnerProps {
  type?: string;
  label?: string;
  icon?: ReactElement;
}

const Profile = ({ profile }: ProfileProps) => {
  const { name, src, birth, email } = profile;

  const innerData = [
    { type: "name", label: name, icon: <IoPersonSharp /> },
    { type: "birth", label: birth, icon: <FaCalendar /> },
    { type: "email", label: email, icon: <IoIosMail /> },
  ];

  const ProfileInner = ({ label, icon, type }: ProfileInnerProps) => (
    <p className="flex gap-1 items-center">
      <span
        className={`text-black w-6 flex justify-center ${
          type === "email" && "text-2xl"
        }`}
      >
        {icon}
      </span>
      <span>{label}</span>
    </p>
  );

  return (
    <div className="w-[300px] h-[500px]  p-2 bg-white  shadow-[0px_0px_5px_1px_gray] rounded-[50px] flex flex-col font-sub xl:mr-20">
      <img
        className="w-full aspect-square rounded-[50px] border border-gray-500"
        src={src}
      />
      <div className="mt-5 py-4 px-2 flex-1 flex flex-col gap-3 text-lg">
        {innerData.map((item, index) => (
          <ProfileInner
            key={index}
            label={item.label}
            icon={item.icon}
            type={item.type}
          />
        ))}
      </div>
    </div>
  );
};

export default Profile;
