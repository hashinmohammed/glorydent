const StatisticItem = ({ number, label }) => (
    <div className="text-center">
      <div className="text-4xl lg:text-5xl font-serif text-gray-900 mb-2">
        {number}<span className="text-red-600">+</span>
      </div>
      <div className="text-red-600 text-sm lg:text-base">{label}</div>
    </div>
  );
  export default StatisticItem