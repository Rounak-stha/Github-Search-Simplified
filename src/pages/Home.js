import SearchAndResults from '../components/views/SearchAndResults';

export default function Home() {
  return (
    <>
      <div className="font-bold text-blue-6 text-5xl md:text-7xl text-center my-12">
        <p className="mb-4">Github Repo Search</p>
        <p>Made Simpler</p>
      </div>
      <div>
        <SearchAndResults />
      </div>
    </>
  );
}

