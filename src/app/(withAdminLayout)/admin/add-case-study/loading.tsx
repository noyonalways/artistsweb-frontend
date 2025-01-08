const AddCaseStudyLoading = () => {
  return (
    <div className="grid lg:grid-cols-2 gap-4">
      {/* Add Form Skeleton */}
      <div className="bg-white p-2 lg:p-6 lg:shadow-sm rounded-md shadow-sm lg:rounded-lg ">
        <div className="h-8 w-48 bg-gray-200 rounded animate-pulse mb-6"></div>
        <div className="space-y-6">
          <div>
            <div className="h-4 w-24 bg-gray-200 rounded animate-pulse mb-1"></div>
            <div className="h-10 w-full bg-gray-200 rounded animate-pulse"></div>
          </div>
          <div>
            <div className="h-4 w-24 bg-gray-200 rounded animate-pulse mb-1"></div>
            <div className="h-10 w-full bg-gray-200 rounded animate-pulse"></div>
          </div>
          <div>
            <div className="h-4 w-24 bg-gray-200 rounded animate-pulse mb-1"></div>
            <div className="h-10 w-full bg-gray-200 rounded animate-pulse"></div>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-5 w-5 bg-gray-200 rounded animate-pulse"></div>
            <div className="h-5 w-32  bg-gray-200 rounded animate-pulse"></div>
          </div>
          <div className="h-10 w-full bg-gray-200 rounded animate-pulse"></div>
        </div>
      </div>

      {/* Manage List Skeleton */}
      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <div className="divide-y">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="p-4 flex items-center justify-between animate-pulse"
            >
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 bg-gray-200 rounded"></div>
                <div>
                  <div className="h-5 w-32 bg-gray-200 rounded mb-1"></div>
                  <div className="h-4 w-24 bg-gray-200 rounded"></div>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <div className="h-8 w-8 bg-gray-200 rounded-full"></div>
                <div className="h-8 w-8 bg-gray-200 rounded-full"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AddCaseStudyLoading;
