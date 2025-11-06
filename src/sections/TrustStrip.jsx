import {
  UsersIcon,
  CheckBadgeIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/outline";

const stats = [
  { name: "520+ Students Enrolled", icon: UsersIcon },
  { name: "97% Student Success", icon: CheckBadgeIcon },
  { name: "89% Placement Rate", icon: AcademicCapIcon },
];

const TrustStrip = () => {
  return (
    <div className="bg-gray-900 py-8 sm:py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div className="text-center grid grid-cols-1 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.name} className="flex flex-col items-center">
                <stat.icon
                  className="h-8 w-8 text-blue-400"
                  aria-hidden="true"
                />
                <dt className="mt-2 text-lg font-semibold leading-6 text-white">
                  {stat.name}
                </dt>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrustStrip;
