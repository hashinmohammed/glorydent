const ContactMethod = ({ icon, title, description, contact, link }) => (
    <div className="text-center">
      <div className="w-12 h-12 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-4">
        {icon}
      </div>
      <h3 className="font-serif text-lg mb-2">{title}</h3>
      <p className="text-gray-600 text-sm mb-2">{description}</p>
      <a 
        href={link} 
        className="text-red-600 hover:text-red-700 font-medium"
      >
        {contact}
      </a>
    </div>
  );
  
export default   ContactMethod;