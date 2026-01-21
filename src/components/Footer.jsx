import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebook,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";
export default function Footer({ id }) {
  const { t, i18n } = useTranslation();
  return (
    <footer
      id={id}
      className={`bg-[#548780] text-white py-12 scroll-mt-15.5 ${
        i18n.language == "ge" ? "font-georgian" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 py-8  border-t border-b border-[#f5be9e]">
          <div>
            <div className="mb-4 text-2xl">OK Design</div>
            <p>{t("slogan")}</p>
          </div>
          <div>
            <h3 className="mb-4 text-2xl">{t("contact")}</h3>
            <a href="mailto:info@okdesign.ge">contact@okdesign.ge</a>
            <p>+995 514 257 257</p>
          </div>
          <div>
            <h3 className="mb-4 text-2xl">{t("followUs")}</h3>
            <div className="flex gap-4 ">
              <a
                href="https://www.instagram.com/okdesign_official/"
                target="_blank"
                className="hover:text-[#ea9573] transition-colors"
              >
                <FontAwesomeIcon icon={faInstagram} size="xl" />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=100064009065436"
                className="hover:text-[#ea9573] transition-colors"
                target="_blank"
              >
                <FontAwesomeIcon icon={faFacebook} size="xl" />
              </a>
              <a
                href="https://www.tiktok.com/@888fl0"
                target="_blank"
                className="hover:text-[#ea9573] transition-colors"
              >
                <FontAwesomeIcon icon={faTiktok} size="xl" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 text-center">
          <p>© 2025 OK Design. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
