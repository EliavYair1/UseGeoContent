import { useState, useEffect } from "react";

/**
 * Custom hook for fetching and rendering content based on the user's geolocation.
 * @param {Object} options - Options for configuring the hook.
 * @param {string} options.defaultRegion - Fallback region if geolocation fails.
 * @param {function} options.fetchContent - Function to fetch region-specific content.
 * @returns {Object} - The region, city, country, content, loading, and error states.
 */
function useGeoContent({ defaultRegion = "US", fetchContent }) {
  const [region, setRegion] = useState(defaultRegion);
  const [city, setCity] = useState(null);
  const [country, setCountry] = useState(null);
  const [content, setContent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRegion = async () => {
      try {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(
            async (position) => {
              const { latitude, longitude } = position.coords;

              // Fetch region data using geocode.xyz API
              const regionRes = await fetch(
                `https://geocode.xyz/${latitude},${longitude}?geoit=json`
              );
              const regionData = await regionRes.json();

              if (regionData.city && regionData.country) {
                setCity(regionData.city);
                setCountry(regionData.country);
                setRegion(regionData.region || regionData.country);
              }

              const contentData = await fetchContent(regionData.region || defaultRegion);
              setContent(contentData);
              setLoading(false);
            },
            async () => {
              const contentData = await fetchContent(defaultRegion);
              setContent(contentData);
              setLoading(false);
            }
          );
        } else {
          const contentData = await fetchContent(defaultRegion);
          setContent(contentData);
          setLoading(false);
        }
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    fetchRegion();
  }, [defaultRegion, fetchContent]);

  return { region, city, country, content, loading, error };
}

export default useGeoContent;
