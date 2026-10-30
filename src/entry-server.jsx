import { renderToString } from "react-dom/server";
import Root from "./Root.jsx";

export function render() {
  return renderToString(<Root />);
}
