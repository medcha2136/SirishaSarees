import { useState } from 'react';
import CollectionCard from '@/components/CollectionCard';
import { Filter } from 'lucide-react';
import sareeCollection from '@/assets/saree-collection.jpg';
import dressMaterials from '@/assets/dress-materials.jpg';
import topsCollection from '@/assets/tops-collection.jpg';
import sirisha from '@/assets/random.png';
const Collections = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const collections = [
    
    {
      title: "silk saree",
      description: "Luxurious silk saree with gold zari work and traditional motifs",
      image: sirisha,
      price: "₹2,500",
      category: "sarees"
    },
    {
      title: "Banarasi Silk Saree",
      description: "Handwoven Banarasi silk with intricate brocade patterns",
      image: sareeCollection,
      price: "₹1,500",
      category: "sarees"
    },
    {
      title: "Cotton Dress Material",
      description: "Premium cotton fabric with block print designs",
      image: dressMaterials,
      price: "₹3,200",
      category: "dress-materials"
    },
    {
      title: "Silk Dress Material",
      description: "Pure silk fabric with embroidered borders",
      image: dressMaterials,
      price: "₹2,800",
      category: "dress-materials"
    },
    {
      title: "Designer Blouse",
      description: "Elegant blouse with hand embroidery and mirror work",
      image: topsCollection,
      price: "₹2,200",
      category: "tops"
    },
    {
      title: "Traditional Kurti",
      description: "Cotton kurti with traditional prints and comfortable fit",
      image: topsCollection,
      price: "₹1,800",
      category: "tops"
    },
    {
      title: "Chanderi Saree",
      description: "Lightweight Chanderi silk with subtle golden threads",
      image: sareeCollection,
      price: "₹1,000",
      category: "sarees"
    },
    {
      title: "Kota Dress Material",
      description: "Breathable Kota cotton perfect for summer wear",
      image: dressMaterials,
      price: "₹2,800",
      category: "dress-materials"
    },
    {
      title: "Embroidered Top",
      description: "Contemporary top with traditional embroidery work",
      image: topsCollection,
      price: "₹2,500",
      category: "tops"
    }
  ];

  const filters = [
    { id: 'all', name: 'All Collections' },
    { id: 'sarees', name: 'Sarees' },
    { id: 'dress-materials', name: 'Dress Materials' },
    { id: 'tops', name: 'Tops & Blouses' }
  ];

  const filteredCollections = activeFilter === 'all' 
    ? collections 
    : collections.filter(item => item.category === activeFilter);

  return (
    <div className="pt-16">
      
      <section className="py-20 bg-soft-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6 fade-in">
            Our Collections
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed fade-in-delay">
            Explore our carefully curated selection of premium sarees, dress materials, 
            and traditional wear, each piece crafted with exceptional attention to detail.
          </p>
        </div>
      </section>

      <section className="py-8 bg-background border-b border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between">
            <div className="flex items-center space-x-2 mb-4 sm:mb-0">
              <Filter className="h-5 w-5 text-muted-foreground" />
              <span className="text-muted-foreground font-medium">Filter by Category:</span>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {filters.map((filter) => (
                <button
                  key={filter.id}
                  onClick={() => setActiveFilter(filter.id)}
                  className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                    activeFilter === filter.id
                      ? 'bg-primary text-primary-foreground shadow-lg'
                      : 'bg-muted hover:bg-primary/10 text-muted-foreground hover:text-primary'
                  }`}
                >
                  {filter.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCollections.map((collection, index) => (
              <div 
                key={collection.title + index}
                className="fade-in group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CollectionCard {...collection} />
              </div>
            ))}
          </div>

          {filteredCollections.length === 0 && (
            <div className="text-center py-16">
              <p className="text-muted-foreground text-lg">
                No collections found for the selected category.
              </p>
            </div>
          )}
        </div>
      </section>

      <section className="py-20 bg-secondary/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-4xl font-bold mb-6">
            Can't Find What You're Looking For?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Our team can help you find the perfect piece or create something custom just for you. 
            Get in touch with our fashion consultants today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-primary">
              Custom Design Request
            </button>
            <button className="btn-outline">
              Speak with Consultant
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Collections;