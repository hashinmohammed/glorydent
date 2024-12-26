const ServiceCard = ({ title, image, description, tags }) => (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg h-full flex flex-col">
      <div className="relative h-48 sm:h-64 shrink-0">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        <h3 className="absolute bottom-4 left-4 text-white text-xl font-serif">
          {title}
        </h3>
      </div>
      <div className="p-6 space-y-4 flex-grow flex flex-col">
        <p className="text-gray-600 flex-grow">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-red-50 text-red-600 rounded-full text-sm"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
  
  export default ServiceCard;