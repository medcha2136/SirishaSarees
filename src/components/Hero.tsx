import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { FaYoutube, FaInstagram } from 'react-icons/fa'; 
import heroBanner from '@/assets/hero-banner.jpg';

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroBanner}
          alt="Elegant fashion collection featuring premium sarees and traditional wear"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/60 to-background/30" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h1 className="font-serif text-5xl md:text-7xl font-bold leading-tight mb-6 fade-in text-white  ">
  Sirisha Sarees
</h1>


          <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed fade-in-delay">
            Discover exquisite sarees, premium dress materials, and traditional wear 
            crafted with the finest fabrics and timeless artistry.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 fade-in-delay">
            <Link
              to="/collections"
              className="btn-primary inline-flex items-center justify-center space-x-2 group"
            >
              <span>Explore Collections</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
            
            <Link
              to="/about"
              className="btn-primary inline-flex items-center justify-center"
            >
              Our Story
            </Link>
          </div>

          <div className="flex items-center justify-center sm:justify-start gap-4 mt-7 fade-in-delay">
  <a 
    href="https://youtube.com/@sirisha.sarees?si=1R47tEXuygGpGX33" 
    target="_blank" 
    rel="noopener noreferrer" 
    className="transition text-2xl hover:text-[#fbbd23]"
    style={{ color: "#f49569ff" }}
  >
    <FaYoutube size={30}/>
  </a>
  <a 
    href="https://www.instagram.com/_sirisha.sarees?igsh=MXB4aWpnbG1jcnB2Yw==" 
    target="_blank" 
    rel="noopener noreferrer" 
    className="transition text-2xl hover:text-[#fbbd23]"
    style={{ color: "#bb85b7ff" }}
  >
    <FaInstagram size={25}/>
  </a>
</div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-7 fade-in-delay">
            <div className="text-center sm:text-left">
              <h3 className="font-serif text-lg font-semibold mb-2">Premium Quality</h3>
              <p className="text-muted-foreground text-sm">
                Handpicked fabrics with superior craftsmanship
              </p>
            </div>
            <div className="text-center sm:text-left">
              <h3 className="font-serif text-lg font-semibold mb-2">Traditional Art</h3>
              <p className="text-muted-foreground text-sm">
                Heritage techniques passed down generations
              </p>
            </div>
            <div className="text-center sm:text-left">
              <h3 className="font-serif text-lg font-semibold mb-2">Modern Style</h3>
              <p className="text-muted-foreground text-sm">
                Contemporary designs for today's woman
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-1 h-8 bg-gradient-to-b from-primary to-transparent rounded-full" />
      </div>
    </section>
  );
};

export default Hero;
