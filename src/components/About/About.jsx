import React from "react";

const AboutSection = () => {
  return (
    <section className="bg-about py-32 px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center ">
        {/* Image Section */}
        <div></div>
        {/* Text Section */}
        <div className="text-center md:text-left bg-primary p-8 rounded-xl  ">
          <h2 className="text-4xl font-bold text-secondary mb-4">About Us</h2>
          <p className="text-secondary mb-6">
            ini adalah sebuah usaha yang masih di hayalkah dan mungkin suatu
            saat akan menjadi nyata dengan kerja keras dari si pembuat Design
            ini. Dan yang termpenting adalah banyak-banyak berdoa dan yang
            pernting yakin, jangan lupa juga untuk bersyukur dengan apa yang ada
            pada diri kalian
          </p>
          <p className="text-secondary  mb-6">
            Baik Anda di sini untuk mempelajari lebih lanjut tentang produk kami
            atau terhubung dengan tim kami, kami senang untuk berbagi kisah dan
            visi kami dengan Anda.
          </p>
          <a href="/" className="text-blue-700 flex justify-end">
            @anjelonatanaelx
          </a>
          <div className="flex items-center justify-center md:justify-start mt-4">
            <a
              href="https://www.instagram.com/anjelonatanaelx/"
              className="bg-white text-primary px-6 py-3 rounded-lg shadow hover:bg-gray-100 transition"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
