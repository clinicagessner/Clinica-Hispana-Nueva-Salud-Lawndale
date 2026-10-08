/* eslint-disable @typescript-eslint/no-explicit-any */
interface Window {
  // Opcional: el Pixel se carga con la primera interacción (google-tags.tsx).
  fbq?: (...args: any[]) => void;
  _fbq?: (...args: any[]) => void;
}
