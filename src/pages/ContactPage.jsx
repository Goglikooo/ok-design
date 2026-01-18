import { useTranslation } from "react-i18next";
import { useState } from "react";
import { MapPin, Send } from "lucide-react";
import { services } from "../data/services";
import { contactInfo } from "../data/contactInfo";
export default function ContactPage() {
  const { t, i18n } = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock form submission
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", phone: "", service: "", message: "" });
    }, 3000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div
      className={`min-h-screen w-full bg-[#548780] ${
        i18n.language == "ge" ? "font-georgian " : ""
      }`}
      style={{ fontSize: `${i18n.language == "ge" ? "1.2rem" : "1rem"}` }}
    >
      {/* Hero Section */}
      <section className=" pt-18 md:pt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-white text-3xl mb-4">{t("contactTitle")}</h1>
          <p className="text-white max-w-2xl  mx-auto">
            {t("contactDescription")}
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-10 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <div className="space-y-6 mb-12">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="p-3 bg-[#ea9573] rounded-lg shrink-0">
                      <info.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-white mb-1">{t(info.title)}</h3>
                      {info.link ? (
                        <a
                          href={t(info.link)}
                          className="text-white hover:text-neutral-900 transition-colors"
                        >
                          {t(info.detail)}
                        </a>
                      ) : (
                        <p className="text-white">{t(info.detail)}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Map placeholder */}
              <div className="relative h-64 bg-neutral-200 rounded-lg overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1627917932033-74123f070958?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjBzdHVkaW98ZW58MXx8fHwxNzY1NjIwOTk1fDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Office location"
                  className="w-full h-full object-cover opacity-50"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <MapPin className="w-12 h-12 text-white" />
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-[#253c3f] text-white p-8 rounded-lg shadow-sm">
              <h2 className=" mb-6">{t("SendUsMessage")}</h2>

              {submitted ? (
                <div className="bg-green-50 border border-green-200 text-green-800 px-6 py-4 rounded-lg text-center">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <Send className="w-5 h-5" />
                    <span>{t("MessageSentSuccess")}!</span>
                  </div>
                  <p className="text-green-700">{t("WeWillGetBackToYou")}</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block  mb-2">
                      {t("Name")} *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#f4804e]"
                      placeholder={`${t("NamePlaceholder")}`}
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block  mb-2">
                      {t("Email")} *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#f4804e]"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block  mb-2">
                      {t("Phonenumber")}
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#f4804e]"
                      placeholder="+995 555 123 456"
                    />
                  </div>

                  <div>
                    <label htmlFor="service" className="block  mb-2 ">
                      {t("ServiceInterestedIn")} *
                    </label>
                    <select
                      id="service"
                      name="service"
                      required
                      value={formData.service}
                      onChange={handleChange}
                      className="bg-[#253c3f] w-full px-4 py-3 border  border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#f4804e]"
                    >
                      <option value="">{t("SelectService")}</option>
                      {services.map((item, index) => {
                        return (
                          <option value={item.title} key={index}>
                            {t(item.title)}
                          </option>
                        );
                      })}

                      <option value="consultation">
                        {t("JustConsultation")}
                      </option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block  mb-2">
                      {t("MessageField")} *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className="w-full px-4 py-3 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#f4804e] resize-none"
                      placeholder={`${t("MessageFieldPlaceholder")}*`}
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#ea9573] text-white py-3 rounded-md hover:bg-[#f4804e] cursor-pointer transition-colors flex items-center justify-center gap-2"
                  >
                    <Send className="w-5 h-5" />
                    <span>{t("SendMessage")}</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-9 md:py-12 bg-[#ea9573] text-2xl">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 bg-[#548780] text-white py-10 rounded-xl">
          <h2 className="text-white text-center mb-12 text-3xl">{t("FAQ")}</h2>
          <div className="space-y-6 ">
            <div className="border-b border-neutral-200 pb-6">
              <h3 className=" mb-2 text-white  ">{t("FirstQuestion")}</h3>
              <p className="text-xl">{t("FirstQuestionAnswer")}</p>
            </div>
            <div className="border-b border-neutral-200 pb-6">
              <h3 className=" mb-2 text-white ">{t("SecondQuestion")}</h3>
              <p className="text-xl">{t("SecondQuestionAnswer")}</p>
            </div>
            <div className="border-b border-neutral-200 pb-6">
              <h3 className=" mb-2  text-white ">{t("ThirdQuestion")}</h3>
              <p className="text-xl">{t("ThirdQuestionAnswer")}</p>
            </div>
            <div className="pb-6">
              <h3 className=" mb-2 text-white ">{t("FourthQuestion")}</h3>
              <p className="text-xl">{t("FourthQuestionAnswer")}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
