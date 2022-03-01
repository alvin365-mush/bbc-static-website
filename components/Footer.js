import {
  DeviceMobileIcon,
  MicrophoneIcon,
  InboxInIcon,
  MailIcon,
} from "@heroicons/react/solid";
function Footer() {
  return (
    <div className="flex flex-col bg-gray-600">
      <div className="flex flex-col bg-gray-800 border-b border-gray-300">
        <div className="flex flex-row">
          <h1 className="m-3 font-normal text-white text-3xl">
            <span className="font-bold">BBC</span> News Services
          </h1>
        </div>
        <div className="m-3 grid grid-cols-1 sm:grid-cols-2  md:grid-cols-4 gap-y-6 text-center">
          <div className="flex flex-row">
            <DeviceMobileIcon className="text-white h-6" />
            <p className="text-white font-bold text-md hover:cursor-pointer hover:underline">
              On your mobile
            </p>
          </div>
          <div className="flex flex-row">
            <MicrophoneIcon className="text-white h-6" />
            <p className="text-white font-bold text-md hover:cursor-pointer hover:underline">
              On smart speakers
            </p>
          </div>
          <div className="flex flex-row">
            <InboxInIcon className="text-white h-6" />
            <p className="text-white font-bold text-md hover:cursor-pointer hover:underline">
              Get news alerts
            </p>
          </div>
          <div className="flex flex-row">
            <MailIcon className="text-white h-6" />
            <p className="text-white font-bold text-md hover:cursor-pointer hover:underline">
              Contact BBC News
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col ">
        <h1 className="m-3  font-bold text-white text-3xl">Explore the BBC</h1>
        <div className="m-3 grid pb-5 grid-cols-2  md:grid-cols-4 gap-y-6 border-b border-gray-300">
          <div className="flex flex-col space-y-3 border-l border-gray-300 pl-2">
            <p className="text-white font-bold text-sm cursor-pointer hover:underline">
              Home
            </p>
            <p className="text-white font-bold text-sm cursor-pointer hover:underline">
              Worklife
            </p>
            <p className="text-white font-bold text-sm cursor-pointer hover:underline">
              Music
            </p>
          </div>
          <div className="flex flex-col space-y-3 border-l border-gray-300 pl-2">
            <p className="text-white font-bold text-sm cursor-pointer hover:underline">
              News
            </p>
            <p className="text-white font-bold text-sm cursor-pointer hover:underline">
              Travel
            </p>
            <p className="text-white font-bold text-sm cursor-pointer hover:underline">
              TV
            </p>
          </div>
          <div className="flex flex-col space-y-3 border-l border-gray-300 pl-2">
            <p className="text-white font-bold text-sm cursor-pointer hover:underline">
              Sport
            </p>
            <p className="text-white font-bold text-sm cursor-pointer hover:underline">
              Future
            </p>
            <p className="text-white font-bold text-sm cursor-pointer hover:underline">
              Weather
            </p>
          </div>
          <div className="flex flex-col space-y-3 border-l border-gray-300 pl-2">
            <p className="text-white font-bold text-sm cursor-pointer hover:underline">
              Reel
            </p>
            <p className="text-white font-bold text-sm cursor-pointer hover:underline">
              Culture
            </p>
            <p className="text-white font-bold text-sm cursor-pointer hover:underline">
              Sounds
            </p>
          </div>
        </div>
      </div>
      <div className="flex-row flex px-3">
        <p className="text-white mb-3  text-sm cursor-pointer hover:underline">
          <span className="font-bold">Copyright © 2022 BBC.</span> The BBC is
          not responsible for the content of external sites.{" "}
          <span className="font-bold">
            Read about our approach to external linking.
          </span>
        </p>
      </div>
    </div>
  );
}

export default Footer;
