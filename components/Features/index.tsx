"use client";
import ProductCard from "../ProductCard/ProductCard";


const images = ['/poster1.png', '/poster2.png', '/poster3.png', '/poster4.png'];

const Features = () => {
  return (
    <section id="features" className="py-16 md:py-20 lg:py-28">
      <div className="mx-auto">
        {/* Başlık */}
        <div className="mt-8">
          <h2 className="mb-4 text-3xl font-bold !leading-tight text-center text-black dark:text-white sm:text-4xl md:text-[45px]">
            Hizmetlerimiz
          </h2>
        </div>

        {/* Poster Grid */}
        <div className="flex flex-wrap mt-8 -mx-2 justify-center">
          {images.map((image, index) => (
            <div
              key={index} // Görselin sırasını key olarak kullanıyoruz.
              className="w-1/2 sm:w-1/2 lg:w-1/4 p-2 flex justify-center"
            >
              <div className="w-full max-w-sm">
                {/* ProductCard Bileşeni */}
                <ProductCard image={image} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
