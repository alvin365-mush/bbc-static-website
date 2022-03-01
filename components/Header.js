import { SearchIcon, ChevronDownIcon, MenuIcon } from "@heroicons/react/solid";
import { Fragment, useEffect, useRef, useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import { useRouter } from "next/dist/client/router";

export default function Header({
  placeholder,
  txtColor,
  changeContent,
  lang,
  dataHindi,
  dataEng,
}) {
  const [navbar, setNavBar] = useState(false);

  const router = useRouter();
  useEffect(() => {
    const changeHeader = () => {
      if (window.scrollY >= 80) {
        setNavBar(true);
      } else {
        setNavBar(false);
      }
    };

    window.addEventListener("scroll", changeHeader);
  }, []);
  return (
    <header
      className={
        navbar
          ? "sticky z-[20] top-0  grid grid-cols-2 md:grid-cols-3 items-center   bg-black text-gray-600 shadow-md p-1 md:px-5"
          : `${txtColor} sticky z-[20] top-0 grid grid-cols-2 md:grid-cols-3  items-center bg-black shadow-md p-1 md:px-5`
      }
    >
      <div
        className="flex flex-row items-center justify-between h-10 hover:cursor-pointer mx-2 md:mx-0 my-auto "
        onClick={() => router.push("/")}
      >
        {/*Logo*/}
        <h2 className="text-3xl text-white font-bold">BBC</h2>
        <div className="justify-end pr-10 mr-10">
          <Menu as="div" className=" relative inline-block text-left ml-4">
            <div>
              <Menu.Button className="inline-flex justify-center w-full  py-2 text-sm font-medium text-white bg-black rounded-md bg-opacity-20 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                Language
                <ChevronDownIcon
                  className="w-5 h-5 ml-1 -mr-1 text-violet-200 hover:text-violet-100"
                  aria-hidden="true"
                />
              </Menu.Button>
            </div>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute right-0 w-55 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="px-1 py-1 ">
                  {lang === dataHindi && (
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          onClick={changeContent}
                          className={`${
                            active ? "bg-gray-400 text-white" : "text-black"
                          } group flex flex-row rounded-md items-center w-full px-2 py-2 text-sm`}
                        >
                          🇬🇧English
                        </button>
                      )}
                    </Menu.Item>
                  )}
                  {lang === dataEng && (
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          onClick={changeContent}
                          className={`${
                            active ? "bg-gray-400 text-white" : "text-black"
                          } group flex flex-row rounded-md items-center w-full px-2 py-2 text-sm`}
                        >
                          🇮🇳 Hindi
                        </button>
                      )}
                    </Menu.Item>
                  )}
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
      </div>

      <div className="hidden  md:flex items-center justify-between ">
        <h2 className="text-md text-white hover:cursor-pointer  "> Home </h2>
        <h2 className="text-md text-white hover:cursor-pointer   "> News </h2>
        <h2 className="text-md text-white hover:cursor-pointer   "> Sport </h2>
        <h2 className="text-md hidden lg:flex text-white hover:cursor-pointer   ">
          {" "}
          Reel{" "}
        </h2>
        <h2 className="text-md hidden xl:flex text-white hover:cursor-pointer   ">
          Worklife
        </h2>
        <h2 className="text-md hidden xl:flex text-white hover:cursor-pointer   ">
          {" "}
          Travel{" "}
        </h2>
        <h2 className="text-md hidden xl:flex text-white hover:cursor-pointer   ">
          {" "}
          Future{" "}
        </h2>
        <h2 className="text-md hidden xl:flex text-white hover:cursor-pointer   ">
          Culture
        </h2>

        {/*<Menu as="div" className="lg:hidden relative inline-block text-left">*/}

        <Menu as="div" className="xl:hidden relative inline-block text-left">
          <div>
            <Menu.Button className="inline-flex justify-center w-full  py-2 text-sm font-medium text-white bg-black rounded-md bg-opacity-20 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
              More
              <ChevronDownIcon
                className="w-5 h-5 ml-1 -mr-1 text-violet-200 hover:text-violet-100"
                aria-hidden="true"
              />
            </Menu.Button>
          </div>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute right-0 w-46 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div className="px-1 py-1 ">
                <Menu.Item className="lg:hidden">
                  {({ active }) => (
                    <button
                      className={`${
                        active ? "bg-gray-400 text-white" : "text-black"
                      } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                    >
                      Reel
                    </button>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <button
                      className={`${
                        active ? "bg-gray-400 text-white" : "text-black"
                      } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                    >
                      Travel
                    </button>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <button
                      className={`${
                        active ? "bg-gray-400 text-white" : "text-black"
                      } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                    >
                      Future
                    </button>
                  )}
                </Menu.Item>
              </div>
              <div className="px-1 py-1">
                <Menu.Item>
                  {({ active }) => (
                    <button
                      className={`${
                        active ? "bg-gray-400 text-white" : "text-black"
                      } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                    >
                      Culture
                    </button>
                  )}
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>

      {/* right */}
      <div className="hidden  md:flex rounded-sm items-center md:border-2 md:shadow-sm h-7 py-2 mx-8 bg-gray-100 justify-end ">
        <input
          type="text"
          placeholder={placeholder || "Start your search"}
          className=" pl-5 bg-transparent outline-none flex-grow  placeholder-gray-400 w-8"
        />
        <SearchIcon className="hidden md:mx-2 md:inline-flex h-8  p-2 text-gray-600 rounded-full cursor-pointer" />
      </div>
      {/*mobile menu*/}
      <Menu as="div" className="md:hidden relative inline-block text-left ">
        <div className="flex flex-row mr-3 ">
          <Menu.Button className="inline-flex  justify-end  w-full  py-2 text-sm font-medium text-white bg-black rounded-md bg-opacity-20 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
            <MenuIcon
              className="w-6 h-6 ml-1 -mr-1 text-white hover:text-white"
              aria-hidden="true"
            />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 w-46 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="px-1 py-1 ">
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? "bg-gray-400 text-white" : "text-black"
                    } group flex rounded-md items-center w-full px-4 py-2 text-sm`}
                  >
                    Home
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? "bg-gray-400 text-white" : "text-black"
                    } group flex rounded-md items-center w-full px-4 py-2 text-sm`}
                  >
                    News
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? "bg-gray-400 text-white" : "text-black"
                    } group flex rounded-md items-center w-full px-4 py-2 text-sm`}
                  >
                    Sport
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? "bg-gray-400 text-white" : "text-black"
                    } group flex rounded-md items-center w-full px-4 py-2 text-sm`}
                  >
                    Reel
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? "bg-gray-400 text-white" : "text-black"
                    } group flex rounded-md items-center w-full px-4 py-2 text-sm`}
                  >
                    Travel
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? "bg-gray-400 text-white" : "text-black"
                    } group flex rounded-md items-center w-full px-4 py-2 text-sm`}
                  >
                    Future
                  </button>
                )}
              </Menu.Item>
            </div>
            <div className="px-1 py-1">
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? "bg-gray-400 text-white" : "text-black"
                    } group flex rounded-md items-center w-full px-4 py-2 text-sm`}
                  >
                    Culture
                  </button>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </header>
  );
}
const customStyles = {
  overlay: {
    zIndex: 50,
  },
};

function EditInactiveIcon(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 13V16H7L16 7L13 4L4 13Z"
        fill="#EDE9FE"
        stroke="#A78BFA"
        strokeWidth="2"
      />
    </svg>
  );
}

function EditActiveIcon(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 13V16H7L16 7L13 4L4 13Z"
        fill="#8B5CF6"
        stroke="#C4B5FD"
        strokeWidth="2"
      />
    </svg>
  );
}

function DuplicateInactiveIcon(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 4H12V12H4V4Z"
        fill="#EDE9FE"
        stroke="#A78BFA"
        strokeWidth="2"
      />
      <path
        d="M8 8H16V16H8V8Z"
        fill="#EDE9FE"
        stroke="#A78BFA"
        strokeWidth="2"
      />
    </svg>
  );
}

function DuplicateActiveIcon(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 4H12V12H4V4Z"
        fill="#8B5CF6"
        stroke="#C4B5FD"
        strokeWidth="2"
      />
      <path
        d="M8 8H16V16H8V8Z"
        fill="#8B5CF6"
        stroke="#C4B5FD"
        strokeWidth="2"
      />
    </svg>
  );
}

function ArchiveInactiveIcon(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="5"
        y="8"
        width="10"
        height="8"
        fill="#EDE9FE"
        stroke="#A78BFA"
        strokeWidth="2"
      />
      <rect
        x="4"
        y="4"
        width="12"
        height="4"
        fill="#EDE9FE"
        stroke="#A78BFA"
        strokeWidth="2"
      />
      <path d="M8 12H12" stroke="#A78BFA" strokeWidth="2" />
    </svg>
  );
}

function ArchiveActiveIcon(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="5"
        y="8"
        width="10"
        height="8"
        fill="#8B5CF6"
        stroke="#C4B5FD"
        strokeWidth="2"
      />
      <rect
        x="4"
        y="4"
        width="12"
        height="4"
        fill="#8B5CF6"
        stroke="#C4B5FD"
        strokeWidth="2"
      />
      <path d="M8 12H12" stroke="#A78BFA" strokeWidth="2" />
    </svg>
  );
}

function MoveInactiveIcon(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M10 4H16V10" stroke="#A78BFA" strokeWidth="2" />
      <path d="M16 4L8 12" stroke="#A78BFA" strokeWidth="2" />
      <path d="M8 6H4V16H14V12" stroke="#A78BFA" strokeWidth="2" />
    </svg>
  );
}

function MoveActiveIcon(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M10 4H16V10" stroke="#C4B5FD" strokeWidth="2" />
      <path d="M16 4L8 12" stroke="#C4B5FD" strokeWidth="2" />
      <path d="M8 6H4V16H14V12" stroke="#C4B5FD" strokeWidth="2" />
    </svg>
  );
}

function DeleteInactiveIcon(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="5"
        y="6"
        width="10"
        height="10"
        fill="#EDE9FE"
        stroke="#A78BFA"
        strokeWidth="2"
      />
      <path d="M3 6H17" stroke="#A78BFA" strokeWidth="2" />
      <path d="M8 6V4H12V6" stroke="#A78BFA" strokeWidth="2" />
    </svg>
  );
}

function DeleteActiveIcon(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="5"
        y="6"
        width="10"
        height="10"
        fill="#8B5CF6"
        stroke="#C4B5FD"
        strokeWidth="2"
      />
      <path d="M3 6H17" stroke="#C4B5FD" strokeWidth="2" />
      <path d="M8 6V4H12V6" stroke="#C4B5FD" strokeWidth="2" />
    </svg>
  );
}
