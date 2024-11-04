import { useState } from "react";
import defaultAvatar from "../../assets/man.png";

const Account = () => {
  const [profileImage] = useState<string | ArrayBuffer | null>(
    null
  );
  const [email, setEmail] = useState("");

  return (
    <div className="bg-secondary relative right-60 xl:left-4 rounded-lg shadow-stone-500 min-h-screen pt-2 font-mono my-16 w-[300px] xl:w-[1020px] ">
      <div className="container mx-auto">
        <div className="inputs w-full max-w-2xl p-6 mx-auto ">
          <h2 className="text-2xl text-gray-50">Account Settings</h2>
          <form className="mt-6  pt-4">
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="personal w-full  pt-4">
                <div className="profile-photo-section">
                  <div className="current-photo mt-4">
                    <img
                      src={(profileImage as string) || defaultAvatar}
                      alt="Current Profile"
                    />
                  </div>
                </div>
                <div className="w-full md:w-full px-3 mb-6">
                  <div className="mb-4">
                    <span className="block text-sm font-medium mb-2">
                      Email
                    </span>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full p-2 border rounded"
                      required
                    />
                  </div>
                </div>
                <div className="w-full md:w-full px-3 mb-6">
                  <span className="block uppercase tracking-wide text-gray-400 text-xs font-bold mb-2">
                    User name
                  </span>
                  <input
                    className="appearance-none block w-full text-gray-200 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none focus:border-gray-900 bg-black"
                    type="text"
                    required
                  />
                </div>
                {/* <div className="w-full md:w-full px-3 mb-6">
                    <span className="block uppercase tracking-wide text-gray-400 text-xs font-bold mb-2">
                      Bio
                    </span>
                    <textarea
                      className="rounded-md leading-normal resize-none w-full h-20 py-2 px-3 shadow-inner border border-gray-400 font-medium placeholder-gray-600 focus:outline-none focus:border-gray-900 bg-black text-gray-200"
                      required
                    ></textarea>
                  </div> */}
                <div className="flex justify-end">
                  <button
                    className="appearance-none bg-[#ff6633] text-gray-50 px-2 py-1 shadow-sm border border-gray-400 rounded-md mr-3"
                    type="submit"
                  >
                    Save changes
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Account;
