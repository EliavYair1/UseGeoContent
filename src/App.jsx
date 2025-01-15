import useGeoContent from "./hooks/useGeoContent";

function App() {
  const fetchContent = async (region) => {
    const contentMap = {
      US: "Hello from the United States!",
      CA: "Bonjour du Canada!",
      UK: "Greetings from the United Kingdom!",
    };
    return contentMap[region] || "Hello from somewhere in the world!";
  };

  const { region, city, country, content, loading, error } = useGeoContent({
    defaultRegion: "US",
    fetchContent,
  });

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h1>Geo-Specific Content</h1>
      <p>Region: {region}</p>
      <p>City: {city || "Unknown City"}</p>
      <p>Country: {country || "Unknown Country"}</p>
      <p>Content: {content}</p>
    </div>
  );
}

export default App;
