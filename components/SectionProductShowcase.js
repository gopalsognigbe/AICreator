import Image from "next/image";

const IMG = (id) =>
  `https://images.unsplash.com/${id}?w=200&h=300&fit=crop`;

const PRODUCT_IMAGE = IMG("photo-1521572163474-6864f9cf17ab");

const MODEL_WHITE_TEE_FRONT = IMG("photo-1503342217505-b0a15ec3261c");
const MODEL_WHITE_TEE_STUDIO = IMG("photo-1552374196-1ab2a1c593e8");
const MODEL_WHITE_TEE_CASUAL = IMG("photo-1521572163474-6864f9cf17ab");

const ROW_1_IMAGES = [
  { src: MODEL_WHITE_TEE_FRONT, label: "Front look" },
  { src: MODEL_WHITE_TEE_STUDIO, label: "3/4 look" },
  { src: MODEL_WHITE_TEE_CASUAL, label: "Mid-body" },
  { src: MODEL_WHITE_TEE_STUDIO, label: "Side look" },
];

const ROW_2_IMAGES = [
  { src: MODEL_WHITE_TEE_CASUAL },
  { src: MODEL_WHITE_TEE_FRONT },
  { src: MODEL_WHITE_TEE_STUDIO },
  { src: MODEL_WHITE_TEE_CASUAL },
];

const TITLE_STYLE = {
  fontFamily: 'Arial, "Helvetica Neue", Helvetica, sans-serif',
  fontSize: "43.2523px",
  lineHeight: "45.415px",
  fontWeight: 400,
  letterSpacing: "normal",
  color: "#333333",
};

const SUBTITLE_STYLE = {
  fontFamily:
    '"SF Pro Display", -apple-system, BlinkMacSystemFont, Arial, sans-serif',
  fontSize: "13.3084px",
  lineHeight: "16.6355px",
  fontWeight: 400,
  letterSpacing: "normal",
  color: "#6b7280",
  marginTop: "16px",
  maxWidth: "28rem",
};

function PhotoActions() {
  return (
    <div className="absolute top-2 right-2 flex gap-1.5 z-10">
      <button
        type="button"
        className="section-3-action flex items-center justify-center w-7 h-7 rounded-full bg-white/80 dark:bg-gray-800 shadow-sm hover:bg-white dark:hover:bg-gray-700 transition-colors"
        aria-label="Bookmark"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-neutral-600 dark:text-white"
          aria-hidden="true"
        >
          <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
        </svg>
      </button>
      <button
        type="button"
        className="section-3-action flex items-center justify-center w-7 h-7 rounded-full bg-white/80 dark:bg-gray-800 shadow-sm hover:bg-white dark:hover:bg-gray-700 transition-colors"
        aria-label="Download"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-neutral-600 dark:text-white"
          aria-hidden="true"
        >
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
          <polyline points="7 10 12 15 17 10" />
          <line x1="12" x2="12" y1="15" y2="3" />
        </svg>
      </button>
    </div>
  );
}

function PhotoCard({ src, alt, label }) {
  return (
    <div className="section-3-photo relative w-[200px] h-[300px] rounded-lg overflow-hidden bg-neutral-100">
      <Image
        src={src}
        alt={alt}
        width={200}
        height={300}
        className="object-cover w-full h-full"
      />
      <PhotoActions />
      {label && (
        <span className="section-3-photo-label absolute bottom-2 left-2 z-10 px-2 py-0.5 text-xs text-white bg-black/50 rounded">
          {label}
        </span>
      )}
    </div>
  );
}

export default function SectionProductShowcase() {
  return (
    <section id="section-3" className="section-product-showcase bg-white dark:bg-gray-900 py-16 md:py-32">
      <div className="max-w-[1440px] mx-auto px-4 md:px-12">
        <div className="flex flex-col md:flex-row gap-8 lg:gap-12">
          {/* Colonne gauche — 25%, produit centré */}
          <div className="md:w-1/4 flex flex-col items-center">
            <div className="section-3-product-box w-full max-w-[260px] aspect-square bg-gray-50 dark:bg-gray-800 border border-dashed border-neutral-300 dark:border-gray-600 rounded-xl mx-auto flex items-center justify-center">
              <div className="relative w-[72%] h-[72%] flex items-center justify-center">
                <Image
                  src={PRODUCT_IMAGE}
                  alt="White t-shirt product"
                  fill
                  className="object-contain"
                  sizes="260px"
                  priority
                />
              </div>
            </div>
            <span
              className="mt-5 text-2xl text-gray-400 dark:text-gray-500 text-center"
              aria-hidden="true"
            >
              →
            </span>
            <p className="section-3-label mt-2 text-sm text-gray-400 dark:text-gray-500 font-normal text-center">
              Your product
            </p>
          </div>

          {/* Colonne droite — 75%, photos plus grandes */}
          <div className="md:w-3/4 flex flex-col gap-3">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {ROW_1_IMAGES.map((photo) => (
                <PhotoCard
                  key={photo.label}
                  src={photo.src}
                  alt={photo.label}
                  label={photo.label}
                />
              ))}
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {ROW_2_IMAGES.map((photo, i) => (
                <PhotoCard
                  key={`lifestyle-${i}`}
                  src={photo.src}
                  alt={`Lifestyle look ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Texte bas gauche — styles inline pour éviter override Tailwind */}
        <div className="mt-16">
          <h2 className="section-3-title m-0 p-0">
            <span className="section-3-title-line block" style={TITLE_STYLE}>
              Campaign-ready,
            </span>
            <span className="section-3-title-line block" style={TITLE_STYLE}>
              without the photoshoot.
            </span>
          </h2>
          <p className="section-3-subtitle m-0 p-0" style={SUBTITLE_STYLE}>
            Upload one product and get every angle, mood and setting you need
            for ads and campaigns — no studio, no crew, no waiting.
          </p>
        </div>
      </div>
    </section>
  );
}
