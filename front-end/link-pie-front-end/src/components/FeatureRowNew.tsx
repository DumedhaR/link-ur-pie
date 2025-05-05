

interface Feature {
  title: string;
  forArtist: string;
  forFans: string;
  image: string;
}

interface FeatureCardProps {
  feature: Feature;
}

function FeatureRowNew({ feature }: FeatureCardProps) {
  return (
    <div className="w-full flex flex-col md:flex-row bg-white gap-5 p-10 rounded-md shadow-md">
      <div className="w-full md:w-1/2 max-w-md text-left">
        <h3 className="text-2xl font-semibold text-gray-900 mb-4">{feature.title}</h3>

        <div className="mb-6">
          <h4 className="text-lg font-medium text-indigo-700 mb-1">For Artists</h4>
          <p className="text-gray-700">{feature.forArtist}</p>
        </div>

        <div>
          <h4 className="text-lg font-medium text-indigo-700 mb-1">For Fans</h4>
          <p className="text-gray-700">{feature.forFans}</p>
        </div>
      </div>
        <div className="w-full md:w-1/2 flex flex-col gap-4">
        <img
          src={feature.image}
          alt="Feature visual"
          className="w-full max-w-sm rounded-xl"
        />
      </div>
    </div>
  );
}

export default FeatureRowNew;
