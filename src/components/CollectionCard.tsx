import { ArrowRight } from 'lucide-react';

interface CollectionCardProps {
  title: string;
  description: string;
  image: string;
  price?: string;
  category?: string;
}

const CollectionCard = ({ title, description, image, price, category }: CollectionCardProps) => {
  return (
    <div className="collection-card relative group">
      <div className="aspect-square overflow-hidden bg-muted">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {category && (
          <div className="absolute top-4 left-4 bg-primary/90 text-primary-foreground px-3 py-1 rounded-full text-xs font-medium">
            {category}
          </div>
        )}

        <div className="absolute bottom-4 flex justify-center items-center left-4 right-4 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
          <button className="btn-primary w-full flex gap-4  justify-center items-center group/btn">
            <span>View Details</span>
            <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
          </button>
        </div>
      </div>

      <div className="p-6">
        <h3 className="font-serif text-xl font-semibold mb-2 group-hover:text-primary transition-colors duration-300">
          {title}
        </h3>
        <p className="text-muted-foreground text-sm leading-relaxed mb-4">
          {description}
        </p>
        
        {price && (
          <div className="flex items-center justify-between">
            <span className="font-semibold text-lg bg-gold-gradient bg-clip-text text-transparent">
              {price}
            </span>
            <button className="btn-ghost flex justify-center items-center gap-2 text-sm group/link">
              Learn More
              <ArrowRight className="h-3 w-3 ml-1 group-hover/link:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CollectionCard;