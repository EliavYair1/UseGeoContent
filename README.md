# useGeoContent Hook

This custom React hook, **useGeoContent**, was developed for personal purposes to simplify geolocation-based content fetching in React, Vite, and Next.js projects. It leverages the browser's Geolocation API and a geocoding service to detect the user's city, country, and region, then fetches region-specific content accordingly.

## Features

- Fetch user's city, country, and region using latitude and longitude.
- Integrate region-specific content dynamically.
- Built-in error handling and fallback mechanisms.
- Works seamlessly in React, Vite, and Next.js projects.

## Repository

GitHub Repository: [UseGeoContent](git@github.com:EliavYair1/UseGeoContent.git)

---

## How to Use

Follow these steps to use the **useGeoContent** hook in your project:

### 1. Clone the Repository

To start using this hook, clone the repository:

```bash
# Clone the repository
$ git clone git@github.com:EliavYair1/UseGeoContent.git

# Navigate to the project directory
$ cd UseGeoContent
```

### 2. Install Dependencies

Ensure you have the required dependencies installed. If the project uses a package manager (e.g., npm or yarn), install dependencies by running:

```bash
# Install dependencies
$ npm install
```

### 3. Import the Hook

Copy the `useGeoContent.js` file from the repository into your project, or include it as a module in your project setup. Then import it into your component:

```javascript
import useGeoContent from "./hooks/useGeoContent";
```

### 4. Configure the Hook

Use the hook in your React components by providing the necessary options:

```javascript
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
```

### 5. Run Your Application

Run your project locally to test the hook:

```bash
# For React projects
$ npm start

# For Vite projects
$ npm run dev

# For Next.js projects
$ npm run dev
```

### 6. Customize as Needed

Feel free to modify the hook or add features to suit your specific needs. For instance, you can integrate a different geolocation API service or enhance error handling.

---

## Contributing

This project was developed for personal use, but contributions are welcome! If you'd like to improve the hook or add features, feel free to submit a pull request.

1. Fork the repository.
2. Create a new branch for your feature or bugfix:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add feature-name"
   ```
4. Push to your fork:
   ```bash
   git push origin feature-name
   ```
5. Open a pull request on the original repository.

---

## License

This project is licensed under the MIT License. You are free to use, modify, and distribute this hook as long as proper attribution is provided.

---

Happy coding! Feel free to reach out if you encounter any issues or have suggestions for improvements.
