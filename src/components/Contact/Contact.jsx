import { LuInstagram } from "react-icons/lu";
import { BsTelephone } from "react-icons/bs";
import { PiTiktokLogo } from "react-icons/pi";
import { LuFacebook } from "react-icons/lu";

function Contact() {
  return (
    <div className="bg-contact py-[60px] px-8">
      <div className="container grid grid-cols-2 items-center t-16   bg-secondary p-14 rounded-lg shadow-lg">
        <div>
          <h1 className="text-6xl font-bold text-white py-2">Get In Touch</h1>
          <p className="w-3/4 text-white">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam quae
            voluptatum eius impedit harum. Fugiat natus aperiam, omnis eius odio
            quo.
          </p>
          <div className="mt-3">
            <div className="flex items-center ">
              <LuInstagram className="text-white text-xl mt-3 " />{" "}
              <a
                href="https://www.instagram.com/anjelonatanaelx/"
                className="mt-2 text-white ml-2 text-sm "
              >
                @angelonatanaelx
              </a>
            </div>
            <div className="flex items-center">
              <BsTelephone className="text-white text-xl mt-3 " />{" "}
              <a
                href="https://wa.me/6285243536699/?text=Hello"
                className="mt-2 text-white ml-2 text-sm "
              >
                0852-4353-6699
              </a>
            </div>
            <div className="flex items-center">
              <PiTiktokLogo className="text-white text-xl mt-3 " />{" "}
              <a
                href="https://www.tiktok.com/@anjelooo_ntnl"
                className="mt-2 text-white ml-2 text-sm "
              >
                @anjeloxX
              </a>
            </div>
            <div className="flex items-center">
              <LuFacebook className="text-white text-xl mt-3 " />{" "}
              <a
                href="https://www.facebook.com/anjelo.nathanael"
                className="mt-2 text-white ml-2 text-sm "
              >
                Anjelo Natanael
              </a>
            </div>
          </div>
        </div>
        {/* Contact Section */}
        <div>
          <div className="m">
            <h3 className="text-xl font-bold text-white mb-6">Contact Us</h3>
            <form className="grid grid-cols-1 gap-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-white"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-white"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Your Email"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-white"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows="4"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Your Message"
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full bg-white text-primary px-4 py-2 rounded-lg shadow hover:bg-gray-100 transition"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
        {/* Contact Section Lower*/}
      </div>
    </div>
  );
}

export default Contact;
