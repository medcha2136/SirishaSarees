import { Heart, Award, Users } from 'lucide-react';

const About = () => {
  return (
    <div className="pt-16">
      
      <section className="py-20 bg-soft-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6 fade-in">
              Our Story
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed fade-in-delay">
              Three generations of passion, craftsmanship, and dedication to preserving 
              the timeless beauty of traditional Indian textiles.
            </p>
          </div>
        </div>
      </section>


      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-serif text-4xl font-bold mb-6">
                A Legacy of Excellence
              </h2>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  With over 2 years of dedicated experience in the fashion and textile industry, 
                  we at Sirisha Sarees have honed the art of blending tradition with contemporary style. 
                  Every piece in our collection reflects our commitment to quality, authenticity, and timeless elegance.
                </p>
                <p>
                  Our team of skilled artisans brings precision, creativity, and passion to every creation, 
                  ensuring that each saree, dress material, and traditional wear not only meets but exceeds our customers' expectations. 
                  From selecting the finest fabrics to applying meticulous craftsmanship, we take pride in delivering excellence in every thread.
                </p>
                <p>
                  Over the past two years, we have successfully served a growing clientele who value heritage, sophistication, 
                  and modern fashion sensibilities. Our journey is built on trust, consistency, and a relentless pursuit of perfection, 
                  making Sirisha Sarees a name synonymous with premium quality and elegance.
                </p>
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-card rounded-2xl p-8 border border-border/50 scale-hover">
                <div className="flex items-center space-x-4 mb-4">
                  <Heart className="h-8 w-8 text-primary" />
                  <h3 className="font-serif text-xl font-semibold">Our Mission</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  At Sirisha Sarees, our mission is to celebrate the timeless elegance of traditional Indian textiles 
                  while embracing contemporary fashion sensibilities. We are committed to sourcing the finest fabrics, 
                  supporting skilled artisans, and delivering exquisite sarees and dress materials that bring joy and sophistication 
                  to every wearer. With passion, precision, and over 2 years of dedicated experience, we strive to make every creation 
                  a masterpiece that honors heritage and inspires confidence.
                </p>
              </div>


              <div className="bg-card rounded-2xl p-8 border border-border/50 scale-hover">
                <div className="flex items-center space-x-4 mb-4">
                  <Award className="h-8 w-8 text-primary" />
                  <h3 className="font-serif text-xl font-semibold">Our Vision</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Our vision at Sirisha Sarees is to become a beacon of elegance and tradition in the world of Indian fashion. 
                  We aspire to bring the rich heritage of handwoven fabrics and intricate craftsmanship to modern wardrobes, 
                  making premium sarees and dress materials accessible to discerning customers worldwide. 
                  By blending timeless artistry with contemporary design, we aim to inspire confidence, celebrate culture, 
                  and create a lasting impression with every piece.
                </p>
              </div>


              <div className="bg-card rounded-2xl p-8 border border-border/50 scale-hover">
                <div className="flex items-center space-x-4 mb-4">
                  <Users className="h-8 w-8 text-primary" />
                  <h3 className="font-serif text-xl font-semibold">Our Values</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  At Sirisha Sarees, our values are rooted in <strong>authenticity, quality, and customer delight</strong>. 
                  We uphold the traditions of Indian textile artistry, ensuring every piece is crafted with care and precision. 
                  Integrity guides our interactions with artisans and clients alike, while creativity drives us to blend heritage 
                  with modern elegance. We are committed to sustainability, ethical practices, and celebrating the timeless beauty 
                  of Indian fashion in every collection.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="py-20 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="fade-in">
              <div className="font-serif text-4xl font-bold bg-gold-gradient bg-clip-text text-transparent mb-2">
                2+
              </div>
              <p className="text-muted-foreground font-medium">Years of Excellence</p>
            </div>
            <div className="fade-in-delay">
              <div className="font-serif text-4xl font-bold bg-gold-gradient bg-clip-text text-transparent mb-2">
                750+
              </div>
              <p className="text-muted-foreground font-medium">Happy Customers</p>
            </div>
            <div className="fade-in-delay">
              <div className="font-serif text-4xl font-bold bg-gold-gradient bg-clip-text text-transparent mb-2">
                1
              </div>
              <p className="text-muted-foreground font-medium">Branches</p>
            </div>
            <div className="fade-in-delay">
              <div className="font-serif text-4xl font-bold bg-gold-gradient bg-clip-text text-transparent mb-2">
                2000+
              </div>
              <p className="text-muted-foreground font-medium">Products</p>
            </div>
          </div>
        </div>
      </section>


      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
              The Art of Craftsmanship
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Every piece we create goes through a meticulous process that combines 
              traditional techniques with modern quality standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="w-16 h-16 bg-soft-gradient rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="font-serif text-2xl font-bold text-primary">1</span>
              </div>
              <h3 className="font-serif text-xl font-semibold mb-4">Design & Selection</h3>
              <p className="text-muted-foreground leading-relaxed">
                Our designers carefully select premium fabrics and create patterns that 
                blend traditional motifs with contemporary aesthetics.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-soft-gradient rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="font-serif text-2xl font-bold text-primary">2</span>
              </div>
              <h3 className="font-serif text-xl font-semibold mb-4">Handcrafted Creation</h3>
              <p className="text-muted-foreground leading-relaxed">
                Our master artisans bring decades of experience to every piece, ensuring 
                each detail meets our exacting standards of quality and beauty.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-soft-gradient rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="font-serif text-2xl font-bold text-primary">3</span>
              </div>
              <h3 className="font-serif text-xl font-semibold mb-4">Quality Assurance</h3>
              <p className="text-muted-foreground leading-relaxed">
                Every finished piece undergoes rigorous quality checks to ensure it meets 
                our standards before reaching our valued customers.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
