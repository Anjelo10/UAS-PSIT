function Hero() {
  return (
    <div className="bg relative overflow-hidden min-h-[600px] sm:min-h-[600px] flex justify-center items-center">
      <div className="container pb-8 sm-pb-0">
        <div>
          <div className=" grid grid-cols-1 sm:grid-cols-2">
            <div>
              {/* Hero Text */}
              <h1 className="text-shadow-glow text-3xl font-bold text-white">
                Kamu lapar?
              </h1>
              <h1 className="text-shadow-glow text-8xl font-bold text-white leading-0.5">
                <span className="text-primary">Pesan</span> Sekarang!
              </h1>
              <p className="text-shadow-glow text-white text-xl">
                Daging premium, harga terjangkau
              </p>
              <div className="py-4">
                <a
                  href="#"
                  className="py-1 px-4 rounded-xl text-white font-medium bg-primary text-xl text-shadow-glow hover:bg-yellow-600 transition-all duration-300"
                >
                  Lihat Menu
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
