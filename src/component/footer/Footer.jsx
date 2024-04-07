import React from "react";
import {
  FaFacebookF,
  FaXTwitter,
  FaGoogle,
  FaInstagram,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa6";
function Footer() {
  const socialLinks = [
    { title: "Facebook", icon: <FaFacebookF />, link: "/" },
    { title: "TwitterX", icon: <FaXTwitter />, link: "/" },
    { title: "Google", icon: <FaGoogle />, link: "/" },
    { title: "Instagram", icon: <FaInstagram />, link: "/" },
    { title: "Linkedin", icon: <FaLinkedin />, link: "/" },
    { title: "Github", icon: <FaGithub />, link: "/" },
  ];
  return (
    <>
      <div className="" dir="rtl">
        <footer
          className="text-center text-lg-start text-white"
          style={{ backgroundColor: "#3e4551" }}
        >
          <div className="container p-4 pb-0 ">
            <section className="text-center">
              <div className="row">
                <div className="">
                  <h5>استمتع برحلتك التعليمية!</h5>

                  <p className="mb-0 p-0">
                    استمتع برحلتك في اكتساب المعرفة وتطوير مهاراتك. نحن هنا
                    لدعمك في كل خطوة .
                  </p>
                  <p className="mt-0 pt-0">ابنِ لنفسك مستقبلًا لامعًا!</p>
                </div>
              </div>
            </section>

            <section className="">
              <p className="d-flex justify-content-center align-items-center">
                <span className="mx-3">انضم الينا للبدأ</span>
                <a type="button" className="text-warning " href="/">
                  حساب جديد!
                </a>
              </p>
            </section>

            <section className="my-4 text-center  p-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  className="btn btn-outline-light btn-floating m-1"
                  href={social.link}
                  role="button"
                  title={social.title}
                >
                  {social.icon}
                </a>
              ))}
            </section>
          </div>

          <div
            className="text-center p-3"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
          >
            <span className="text-white">© 2020 Copyright:Ahmed Elsayed</span>
          </div>
        </footer>
      </div>
    </>
  );
}

export default Footer;
