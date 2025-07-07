// toaster.jsx
import { Toaster as HotToaster } from "react-hot-toast";

// give it back out under the same name:
export function Toaster(props) {
  return <HotToaster {...props} />;
}
