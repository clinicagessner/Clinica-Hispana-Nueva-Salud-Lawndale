import Script from "next/script";

const GOOGLE_ADS_ID = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID;
const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

// Cuando GA4 está activo (@next/third-parties) ya carga gtag.js; volver a
// cargarlo con el ID de Ads duplicaba ~230 KB por página. Basta con encolar
// el config: gtag.js procesa dataLayer al llegar, sin importar el orden.
export function GoogleAdsTag() {
  if (!GOOGLE_ADS_ID) return null;

  return (
    <>
      {!GA_ID && (
        <Script
          id="google-ads-src"
          src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ADS_ID}`}
          strategy="afterInteractive"
        />
      )}
      <Script id="google-ads-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GOOGLE_ADS_ID}');
        `}
      </Script>
    </>
  );
}
