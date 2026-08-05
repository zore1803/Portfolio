import React from 'react';

const SkeletonLoader = ({ hiding }: { hiding: boolean }) => {
  return (
    <div className={`skeleton-screen ${hiding ? 'is-hiding' : ''}`} aria-hidden="true">
      {/* Navbar pill */}
      <div className="flex justify-center px-4 pt-4">
        <div className="skel h-14 w-full max-w-3xl rounded-2xl" />
      </div>

      {/* Hero */}
      <div className="mx-auto max-w-[1180px] px-6 pt-16">
        <div className="grid gap-10 lg:grid-cols-2">
          {/* Left column */}
          <div className="space-y-5">
            <div className="skel h-4 w-64" />
            <div className="skel h-14 w-3/4" />
            <div className="space-y-3 pt-2">
              <div className="skel h-3 w-full" />
              <div className="skel h-3 w-11/12" />
              <div className="skel h-3 w-4/5" />
            </div>
            <div className="flex gap-3 pt-3">
              <div className="skel h-12 w-40 rounded-xl" />
              <div className="skel h-12 w-44 rounded-xl" />
            </div>
            {/* Avatar + chips */}
            <div className="flex items-center gap-4 pt-8">
              <div className="skel skel-circle h-52 w-52" />
              <div className="space-y-3">
                <div className="skel h-7 w-28 rounded-full" />
                <div className="skel h-7 w-24 rounded-full" />
                <div className="skel h-7 w-20 rounded-full" />
              </div>
            </div>
          </div>

          {/* Right column */}
          <div className="space-y-5">
            <div className="skel h-44 w-full rounded-2xl" />
            <div className="skel h-52 w-full rounded-2xl" />
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
              <div className="skel h-32 rounded-xl" />
              <div className="skel h-32 rounded-xl" />
              <div className="skel h-32 rounded-xl" />
              <div className="skel h-32 rounded-xl" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonLoader;
