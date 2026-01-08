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
    <div className="border-y border-white/5 bg-bg-900/50 backdrop-blur-sm py-8 sm:py-10 relative overflow-hidden">
        {/* Subtle glow */}
        <div className="absolute top-0 left-1/4 w-1/2 h-full bg-neon-blue/5 blur-[50px] pointer-events-none"></div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          {/* Mobile: Horizontal scroll or compact grid. Desktop: Grid-cols-3 */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-y-8 gap-x-4 text-center">
            {stats.map((stat) => (
              <div key={stat.name} className="flex flex-col items-center justify-center p-4 rounded-2xl bg-white/5 border border-white/5 backdrop-blur-sm">
                <stat.icon
                  className="h-6 w-6 text-neon-blue mb-2"
                  aria-hidden="true"
                />
                <dt className="text-sm font-bold leading-6 text-white">
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
