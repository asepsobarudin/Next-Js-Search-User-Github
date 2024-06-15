"use client";
import Image from "next/image";
import icons from "../../../public/vercel.svg";
import { FiGithub } from "react-icons/fi";

const SearchResult = ({ result }: any) => {
  console.log(result);

  const imageLoader = () => {
    return result.avatar_url;
  };
  return (
    <div className="mt-5">
      {!result.status && result.name != null ? (
        <div className="flex justify-center items-center p-2 border-2 rounded-md shadow-md">
          <div className="flex justify-center gap-2">
            <div className="w-[100px] h-[100xp] overflow-hidden rounded-md">
              <Image
                src={icons}
                loader={imageLoader}
                alt="avatar"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col">
              <h2 className="font-medium text-[20px] font-Popins">
                {result.name}
              </h2>
              <p className="max-w-[300px] text-sm italic">"{result.bio}"</p>
              <div className=" pt-2">
                <a
                  href={result.html_url}
                  className="rounded-full inline-block p-[2px] hover:bg-slate-200"
                >
                  <FiGithub className="text-lg" />
                </a>
              </div>
            </div>
          </div>
        </div>
      ) : (
        "Username Not Found!"
      )}
    </div>
  );
};

export default SearchResult;
