// Utility to load HTML components into divs by ID
async function loadComponent(id, path) {
  try {
    const res = await fetch(path);
    if (!res.ok) throw new Error(`Failed to load ${path}`);
    const html = await res.text();
    document.getElementById(id).innerHTML = html;
  } catch (err) {
    console.error(err);
  }
}

// Load header and footer into every page
document.addEventListener("DOMContentLoaded", () => {
  const root = location.pathname;

  // Adjust paths for root vs subpages
  const isHomePage = root.endsWith("/index.html") || root === "/" || root.endsWith("/");

  const basePath = isHomePage ? "components/" : "../components/";

  loadComponent("header", basePath + "header.html");
  loadComponent("footer", basePath + "footer.html");
});
