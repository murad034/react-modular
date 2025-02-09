import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// Get __dirname equivalent in ES module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Function to create a new module
function createModule(moduleName) {
  const modulePath = path.join(__dirname, "..", "src", "modules", moduleName);

  // Create module folder
  fs.mkdirSync(modulePath, { recursive: true });

  // Create subfolders
  const subfolders = ["components", "pages", "services", "hooks", "context"];
  subfolders.forEach((folder) => {
    fs.mkdirSync(path.join(modulePath, folder), { recursive: true });
  });

  // Create boilerplate files
  const files = {
    "index.js": `export * from "./pages";`,
    "pages/index.js": `export { default as ${moduleName}Page } from "./${moduleName}Page";`,
    [`pages/${moduleName}Page.jsx`]: `export default function ${moduleName}Page() {
  return <div>${moduleName} Page</div>;
}`,
    "services/index.js": `export * from "./${moduleName}Service";`,
    [`services/${moduleName}Service.js`]: `export const get${moduleName} = async () => {
  // API call or logic here
};`,
    "hooks/index.js": `export * from "./use${moduleName}";`,
    [`hooks/use${moduleName}.js`]: `export const use${moduleName} = () => {
  // Custom hook logic here
};`,
    "context/index.js": `export * from "./${moduleName}Context";`,
    [`context/${moduleName}Context.js`]: `import { createContext, useContext } from "react";

const ${moduleName}Context = createContext();

export const ${moduleName}Provider = ({ children }) => {
  return (
    <${moduleName}Context.Provider value={{}}>
      {children}
    </${moduleName}Context.Provider>
  );
};

export const use${moduleName}Context = () => useContext(${moduleName}Context);`,
    // Add route configuration file (as JSX)
    "routes.jsx": `import ${moduleName}Page from "./pages/${moduleName}Page";

export const ${moduleName}Routes = [
  {
    path: "/${moduleName.toLowerCase()}",
    element: <${moduleName}Page />,
  },
];`,
  };

  // Write files
  Object.entries(files).forEach(([fileName, content]) => {
    fs.writeFileSync(path.join(modulePath, fileName), content);
  });

  console.log(`Module "${moduleName}" created successfully!`);
}

// Get module name from command line argument
const moduleName = process.argv[2];

if (!moduleName) {
  console.error("Please provide a module name.");
  process.exit(1);
}

createModule(moduleName);
