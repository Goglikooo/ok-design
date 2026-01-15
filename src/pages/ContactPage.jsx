import { useTranslation } from "react-i18next";
import { useState } from "react";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
export default function ContactPage() {
  const { t } = useTranslation();
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
  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      detail: "info@okdesign.ge",
      link: "mailto:info@okdesign.ge",
    },
    {
      icon: Phone,
      title: "Phone",
      detail: "+995 514 257 257",
      link: "tel:+15551234567",
    },

    {
      icon: Clock,
      title: "Hours",
      detail: "Mon-Fri: 9:00 AM - 6:00 PM",
      link: null,
    },
  ];
  return (
    <div className="min-h-screen w-full bg-[#548780] ">
      {/* Hero Section */}
      <section className=" pt-18 md:pt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-white mb-4">საკონტაქტო ველი</h1>
          <p className="text-white max-w-2xl mx-auto">
            თუ მზად ხართ დიზაინის პროცესის დასაწყებად, სიამოვნებით მოვისმენთ
            თქვენი პროექტის შესახებ. მოგვწერეთ ფორმის საშუალებით ან
            დაგვიკავშირდით პირდაპირ.
            {/* Ready to start your design journey? We'd love to hear about your
            project. Fill out the form below or reach out directly. */}
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-10 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-white mb-8 ">საკონტაქტო ინფორმაცია</h2>
              <div className="space-y-6 mb-12">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="p-3 bg-neutral-100 rounded-lg shrink-0">
                      <info.icon className="w-6 h-6 text-neutral-900" />
                    </div>
                    <div>
                      <h3 className="text-neutral-900 mb-1">{info.title}</h3>
                      {info.link ? (
                        <a
                          href={info.link}
                          className="text-neutral-600 hover:text-neutral-900 transition-colors"
                        >
                          {info.detail}
                        </a>
                      ) : (
                        <p className="text-neutral-600">{info.detail}</p>
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
                  <MapPin className="w-12 h-12 text-neutral-900" />
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-[#253c3f] text-white p-8 rounded-lg shadow-sm">
              <h2 className=" mb-6">Send us a Message</h2>

              {submitted ? (
                <div className="bg-green-50 border border-green-200 text-green-800 px-6 py-4 rounded-lg text-center">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <Send className="w-5 h-5" />
                    <span>Message sent successfully!</span>
                  </div>
                  <p className="text-green-700">
                    We'll get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block  mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#f4804e]"
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block  mb-2">
                      Email *
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
                      Phone
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
                      Service Interested In *
                    </label>
                    <select
                      id="service"
                      name="service"
                      required
                      value={formData.service}
                      onChange={handleChange}
                      className="bg-[#253c3f] w-full px-4 py-3 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#f4804e]"
                    >
                      <option value="">Select a service</option>
                      <option value="design">Design & Visualization</option>
                      <option value="turnkey">Turn-Key Solution</option>
                      <option value="monitoring">Renovation Monitoring</option>
                      <option value="consultation">Just a Consultation</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block  mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className="w-full px-4 py-3 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#f4804e] resize-none"
                      placeholder="Tell us about your project..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#ea9573] text-white py-3 rounded-md hover:bg-[#f4804e] cursor-pointer transition-colors flex items-center justify-center gap-2"
                  >
                    <Send className="w-5 h-5" />
                    <span>Send Message</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-neutral-900 text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            <div className="border-b border-neutral-200 pb-6">
              <h3 className="text-neutral-900 mb-2">
                What areas do you serve?
              </h3>
              <p className="text-neutral-600">
                We primarily serve the New York metropolitan area, but we're
                happy to discuss projects in other locations on a case-by-case
                basis.
              </p>
            </div>
            <div className="border-b border-neutral-200 pb-6">
              <h3 className="text-neutral-900 mb-2">
                How long does a typical project take?
              </h3>
              <p className="text-neutral-600">
                Design phase typically takes 4-8 weeks, and construction 8-16
                weeks, depending on the scope. We'll provide a detailed timeline
                during our initial consultation.
              </p>
            </div>
            <div className="border-b border-neutral-200 pb-6">
              <h3 className="text-neutral-900 mb-2">
                Do you offer virtual consultations?
              </h3>
              <p className="text-neutral-600">
                Yes! We offer virtual consultations via video call for clients
                who prefer remote meetings or are located outside our primary
                service area.
              </p>
            </div>
            <div className="pb-6">
              <h3 className="text-neutral-900 mb-2">
                What is your pricing structure?
              </h3>
              <p className="text-neutral-600">
                Our pricing varies based on the service and project scope. We
                offer both flat-fee and hourly rate options. Contact us for a
                detailed quote tailored to your project.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
