import React, {useState} from "react";
import defaultAvatar from '../../assets/man.png';

const Account = () => {
  const [profileImage, setProfileImage] = useState<string | ArrayBuffer | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };
    return (
      <div className="bg-secondary relative right-60 xl:left-4 rounded-lg shadow-stone-500 min-h-screen pt-2 font-mono my-16 w-[300px] xl:w-[1020px] ">
        <div className="container mx-auto">
          <div className="inputs w-full max-w-2xl p-6 mx-auto ">
            <h2 className="text-2xl text-gray-50">Account Setting</h2>
            <form className="mt-6 border-t border-gray-400 pt-4">
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full md:w-full px-3 mb-6 ">
                  <span className="block uppercase tracking-wide text-gray-400 text-xs font-bold mb-2">
                    Pick your country
                  </span>
                  <div className="flex-shrink w-full inline-block relative">
                    <select className="block appearance-none bg-black text-gray-200 w-full border border-gray-900 shadow-inner px-4 py-2 pr-8 rounded">
                    <option>Choose...</option>
                <option>Kenya</option>
                <option>Tanzania</option>
                <option>Uganda</option>
                <option>Ethiopia</option>
                <option>Rwanda</option>
                <option>Burundi</option>
                <option>South Africa</option>
                <option>Nigeria</option>
                <option>Other</option>
                    </select>
                    <div className="pointer-events-none absolute top-0 mt-3 right-0 flex items-center px-2 text-gray-600">
                      <svg
                        className="fill-current h-4 w-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                      </svg>
                    </div>
                  </div>
                </div>
                
                <div className="personal w-full border-t border-gray-400 pt-4">
                  <h2 className="text-2xl text-gray-50">Personal info:</h2>
                  <div className="profile-photo-section">
              <div className="current-photo mt-4">
                <img
                  src={(profileImage as string) || defaultAvatar}
                  alt="Current Profile"
                />
              </div>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
              />
            </div>
                  <div className="flex items-center justify-between mt-4">
                    <div className="w-full md:w-1/2 px-3 mb-6">
                      <span className="block uppercase tracking-wide text-gray-400 text-xs font-bold mb-2">
                        First name
                      </span>
                      <input
                        className="appearance-none block w-full text-gray-200 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none focus:border-gray-900 bg-black"
                        type="text"
                        required
                      />
                    </div>
                    <div className="w-full md:w-1/2 px-3 mb-6">
                      <span className="block uppercase tracking-wide text-gray-400 text-xs font-bold mb-2">
                        Last name
                      </span>
                      <input
                        className="appearance-none block w-full text-gray-200 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none focus:border-gray-900 bg-black"
                        type="text"
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
  