"use client";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NewsLatterBox from "./NewsLatterBox";

// Form doğrulama şeması
const validationSchema = Yup.object().shape({
  name: Yup.string().required("Ad zorunludur"),
  phone: Yup.string()
    .matches(/^((\+90|0)?5\d{9})$/, "Geçerli bir Türkiye telefon numarası girin")
    .required("Telefon numarası zorunludur"),
  message: Yup.string().min(10, "Mesaj en az 10 karakter olmalıdır").required("Mesaj zorunludur"),
});

const Contact = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = async (data) => {
    try {
      const response = await fetch("https://formspree.io/f/xvgoabka", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        toast.success("Mesajınız başarıyla alındı!");
        reset(); // Formu sıfırla
      } else {
        toast.error("Mesaj gönderilemedi, lütfen tekrar deneyin.");
      }
    } catch (error) {
      toast.error("Bir hata oluştu, lütfen tekrar deneyin.");
    }
  };

  return (
    <section id="contact" className="overflow-hidden py-6 md:py-10 lg:py-10">
      <div className="container">
        <ToastContainer position="top-right" autoClose={3000} />
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 lg:w-7/12 xl:w-7/12">
            <div
              className="wow fadeInUp mb-12 rounded-sm bg-white px-8 py-11 shadow-three dark:bg-gray-dark sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]"
              data-wow-delay=".15s"
            >
              <h2 className="mb-3 text-2xl font-bold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl">
                Mesaj bırakın, sizi arayalım!
              </h2>
              <p className="mb-12 text-base font-medium text-body-color">
                Bilgilerinizi girin.
              </p>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="-mx-4 flex flex-wrap">
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label htmlFor="name" className="mb-3 block text-sm font-medium text-dark dark:text-white">
                        Adınız
                      </label>
                      <input
                        type="text"
                        name="name"
                        placeholder="Adınız"
                        {...register("name")}
                        className="w-full rounded-sm border border-stroke bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                      />
                      <p className="text-red-500 text-sm">{errors.name?.message}</p>
                    </div>
                  </div>
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label htmlFor="phone" className="mb-3 block text-sm font-medium text-dark dark:text-white">
                        Telefon Numaranız
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        placeholder="Telefon Numaranız"
                        {...register("phone")}
                        className="w-full rounded-sm border border-stroke bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                      />
                      <p className="text-red-500 text-sm">{errors.phone?.message}</p>
                    </div>
                  </div>
                  <div className="w-full px-4">
                    <div className="mb-8">
                      <label htmlFor="message" className="mb-3 block text-sm font-medium text-dark dark:text-white">
                        Mesajınız
                      </label>
                      <textarea
                        name="message"
                        rows={5}
                        placeholder="Mesajınız..."
                        {...register("message")}
                        className="w-full resize-none rounded-sm border border-stroke bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                      ></textarea>
                      <p className="text-red-500 text-sm">{errors.message?.message}</p>
                    </div>
                  </div>
                  <div className="w-full px-4">
                    <button
                      type="submit"
                      className="rounded-sm bg-primary px-9 py-4 text-base font-medium text-white shadow-submit duration-300 hover:bg-primary/90 dark:shadow-submit-dark"
                    >
                      Gönder
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="w-full px-4 lg:w-5/12 xl:w-5/12">
            <NewsLatterBox />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
