import Hero from '@/components/Hero';
import CollectionCard from '@/components/CollectionCard';
import sareeCollection from '@/assets/saree-collection.jpg';
import dressMaterials from '@/assets/dress-materials.jpg';
import topsCollection from '@/assets/tops-collection.jpg';

const Home = () => {
  const featuredCollections = [
    {
      title: "Premium Sarees",
      description: "Exquisite silk sarees with intricate golden embroidery and traditional motifs",
      image: sareeCollection,
      price: "₹5,000 onwards",
      category: "Bestseller"
    },
    {
      title: "Dress Materials",
      description: "High-quality cotton and silk dress materials in stunning patterns",
      image: dressMaterials,
      price: "₹2,500 onwards",
      category: "New Arrival"
    },
    {
      title: "Traditional Tops",
      description: "Elegant blouses and tops crafted with premium fabrics and fine detailing",
      image: topsCollection,
      price: "₹1,800 onwards",
      category: "Trending"
    }
  ];

  return (
    <>
      <Hero />
      <section className="py-20 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 fade-in">
              Featured Collections
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed fade-in-delay">
              Discover our handpicked selection of premium fabrics and timeless designs,
              each piece crafted with exceptional attention to detail and quality.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredCollections.map((collection, index) => (
              <div
                key={collection.title}
                className="fade-in-delay"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CollectionCard {...collection} />
              </div>
            ))}
          </div>
        </div>
      </section>


      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
              Why Choose Elegance Couture
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Experience the perfect blend of traditional craftsmanship and modern elegance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center group">
              <div className="w-20 h-20 bg-soft-gradient rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <div className="w-10 h-10 bg-gold-gradient rounded-lg"></div>
              </div>
              <h3 className="font-serif text-xl font-semibold mb-4">Premium Quality</h3>
              <p className="text-muted-foreground leading-relaxed">
                Every piece is crafted using the finest materials and traditional techniques,
                ensuring exceptional quality and durability.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-soft-gradient rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <div className="w-10 h-10 bg-gold-gradient rounded-lg"></div>
              </div>
              <h3 className="font-serif text-xl font-semibold mb-4">Our Collections</h3>
              <p className="text-muted-foreground leading-relaxed">
                Explore our premium sarees, dress materials, traditional tops, and fabrics,
                carefully curated to bring elegance and style to every occasion.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-soft-gradient rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <div className="w-10 h-10 bg-gold-gradient rounded-lg"></div>
              </div>
              <h3 className="font-serif text-xl font-semibold mb-4">Timeless Design</h3>
              <p className="text-muted-foreground leading-relaxed">
                Our collections blend classic elegance with contemporary style,
                creating pieces that remain fashionable across generations.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;