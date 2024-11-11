import Navbar from "../components/navbar";

const GridItem = ({  }) => (
  <div className="flex items-center justify-center h-24 rounded bg-gray-50 dark:bg-gray-800">
    <p className="text-2xl text-gray-400 dark:text-gray-500">
      <svg className="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 1v16M1 9h16" />
      </svg>
    </p>
  </div>
);

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="p-4 sm:ml-64">
        <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
          {/* 3 column grid */}
          <div className="grid grid-cols-3 gap-4 mb-4">
            {Array(3).fill(null).map((_, idx) => <GridItem />)}
          </div>
          {/* 1 large item */}
          <div className="flex items-center justify-center h-48 mb-4 rounded bg-gray-50 dark:bg-gray-800">
            <p className="text-2xl text-gray-400 dark:text-gray-500">
              <svg className="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 1v16M1 9h16" />
              </svg>
            </p>
          </div>
          {/* 2 column grid */}
          <div className="grid grid-cols-2 gap-4 mb-4">
            {Array(4).fill(null).map((_, idx) => <GridItem />)}
          </div>
          {/* Another large item */}
          <div className="flex items-center justify-center h-48 mb-4 rounded bg-gray-50 dark:bg-gray-800">
            <p className="text-2xl text-gray-400 dark:text-gray-500">
              <svg className="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 1v16M1 9h16" />
              </svg>
            </p>
          </div>
          {/* 2 column grid */}
          <div className="grid grid-cols-2 gap-4">
            {Array(4).fill(null).map((_, idx) => <GridItem/>)}
          </div>
        </div>
      </div>
    </>
  );
}
