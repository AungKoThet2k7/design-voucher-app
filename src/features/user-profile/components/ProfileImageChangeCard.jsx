import { useRef } from "react";
import { HiCamera } from "react-icons/hi2";
import useCookie from "react-use-cookie";
import toast from "react-hot-toast";
import useUserStore from "../../../stores/userUserStore";
import { changeImage } from "../../../services/userProfile";

const ProfileImageChangeCard = () => {

  const [userCookie, setUserCookie] = useCookie("user");

  const { profile_image } = JSON.parse(userCookie);
  const { user, setUser } = useUserStore();

 

  const handleUpdateImage = async (event) => {
    // console.log(event.target.files[0]);
    const formData = new FormData();
    formData.append("profile_image", event.target.files[0]);

    const res = await changeImage(formData);

    const json = await res.json();

    if (res.status === 200) {
      toast.success("Image updated successfully");
      setUserCookie(JSON.stringify(json.user));
      setUser(json.user);
    } else {
      toast.error(json.message);
    }
  };

  const fileInputRef = useRef();
  
  const handleImageUploader = () => {
    // console.log(fileInputRef.current);
    fileInputRef.current.click();
  };
  return (
    <div className="">
      <div className="border border-gray-300 rounded-lg p-10">
        <div className="relative inline-block">
          <img
            className="size-40 rounded-lg"
            src={
              profile_image
                ? profile_image
                : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScvC6w8tifYJLzXGgX42aMl4aInILAAozKgw&s"
            }
            alt=""
          />
          <button
            onClick={handleImageUploader}
            className="bg-sky-400 text-white hover:bg-sky-600 rounded-full border-2 border-white p-1 absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2"
          >
            <HiCamera size={20} />
          </button>
        </div>
      </div>
      <div className="">
        <input
          onChange={handleUpdateImage}
          ref={fileInputRef}
          type="file"
          id="profile_image"
          className={`bg-gray-50 border hidden text-gray-900 text-sm  rounded-lg w-full p-2.5 focus-visible:outline-none`}
        />
      </div>
    </div>
  );
};

export default ProfileImageChangeCard;
