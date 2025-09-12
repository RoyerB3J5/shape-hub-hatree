import { useEffect, useId, useState } from 'react';

export default function NuvisionForm() {
  const [loaded, setLoaded] = useState(false);
  const iframeId = useId();

  useEffect(() => {
    // Only run in the browser
    if (typeof window === 'undefined' || typeof document === 'undefined') return;

    const SRC = 'https://link.hatreebrothers.com/js/form_embed.js';
    // Avoid injecting the script multiple times
    let addedByUs = false;
    let script = document.querySelector(`script[src="${SRC}"]`) as HTMLScriptElement | null;
    if (!script) {
      script = document.createElement('script');
      script.src = SRC;
      script.async = true;
      script.setAttribute('data-capitile-embed', '1');
      document.body.appendChild(script);
      addedByUs = true;
    }

    return () => {
      if (addedByUs && script && script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  return (
    <div
      style={{
        position: 'relative',
        width: '330px',
        height: '510px', // Altura específica basada en data-height
        padding: 0,
        overflow: 'hidden',
        // Oculta cualquier contenido que se desborde
      }}
      className="bg-transparent "
    >
      {!loaded && (
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: '#fff',
          }}
        >
          Cargando…
        </div>
      )}
      <iframe
        id="inline-v96kecdrTfvdaar1kabL"
        src="https://link.hatreebrothers.com/widget/form/v96kecdrTfvdaar1kabL"
        title="Form Reviews"
        loading="lazy"
        onLoad={() => setLoaded(true)}
        style={{
          width: '100%',
          height: '100%',
          border: 'none',
          borderRadius: 3,
          background: 'transparent',
          padding: 0,
          overflow: 'hidden', // Oculta el scroll interno del iframe
        }}
        data-layout="{'id':'INLINE'}"
        data-trigger-type="alwaysShow"
        data-trigger-value=""
        data-activation-type="alwaysActivated"
        data-activation-value=""
        data-deactivation-type="neverDeactivate"
        data-deactivation-value=""
        data-form-name="Form Reviews"
        data-height="558"
        data-layout-iframe-id="inline-v96kecdrTfvdaar1kabL"
        data-form-id="v96kecdrTfvdaar1kabL"
      />
    </div>
  );
}
