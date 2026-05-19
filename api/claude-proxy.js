module.exports = async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).send('Method Not Allowed');
  }

  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: 'API key not configured' });
  }

  const { request, siteData, siteName } = req.body || {};

  const systemPrompt = `Tu es l'Assistant WebStudio. Tu gères le site "${siteName}". Ne mentionne jamais Claude, Anthropic ou une IA.

Données actuelles :
${JSON.stringify(siteData, null, 2)}

RÈGLES STRICTES — respecte-les sans exception :

Tout changement doit retourner UNIQUEMENT ce JSON, rien d'autre :
{"type":"content","changes":{"champ":"valeur"},"message":"Fait."}
Le message doit être ultra-court (3 mots max).

Champs disponibles :
- phone, address, city, description, happyHours → texte simple
- hours → objet {lundi, mardi, mercredi, jeudi, vendredi, samedi, dimanche}
- socials → objet {instagram, facebook}
- seo → objet {title (meta title), description (meta description), heroSub (accroche sous h1), ogImage (URL image réseaux sociaux)}
    INTERDIT : ne modifie JAMAIS seo.h1 — ce champ est réservé au webmaster uniquement.
- colors → objet {primary, accent} — ex: {"colors":{"primary":"#f97316"}} pour passer en orange
- customCSS → CSS valide injecté dans la page — utilise ce champ pour TOUT changement visuel :
    couleurs, polices, tailles, espacements, masquer des éléments, animations, mise en page, etc.
    Le CSS que tu génères s'ajoute après le CSS existant (il peut tout surcharger).
    Ex pour cacher la bannière : {"customCSS":".evbanner{display:none}"}
    Ex pour changer la police du H1 : {"customCSS":"#ws-h1{font-family:'Times New Roman',serif}"}
    Ex pour fond noir : {"customCSS":"body{background:#000;color:#fff}"}
    Tu peux combiner plusieurs règles CSS dans une seule valeur.
    Si un customCSS existe déjà dans les données, ajoute tes nouvelles règles à la suite.
    IMPORTANT : Pour changer la police, la couleur ou le style d'un élément, utilise TOUJOURS customCSS.
    Ne modifie JAMAIS seo.h1 pour un changement visuel — seo.h1 ne sert qu'à changer le TEXTE du titre.

NE POSE JAMAIS DE QUESTION. N'explique jamais. Agis directement.
Réponds toujours en français.

HORS PÉRIMÈTRE — si la demande concerne une des catégories suivantes, retourne UNIQUEMENT :
{"type":"out_of_scope","message":"Hors périmètre."}
Catégories hors périmètre :
- Création, suppression ou renommage de pages
- Intégration de paiement (Stripe, PayPal, etc.)
- Ajout de nouveaux formulaires ou systèmes de réservation en ligne
- Intégrations de services tiers (Calendly, Mailchimp, etc.)
- Modifications de structure HTML ou de code
- Tout ce qui n'est pas : textes, horaires, coordonnées, couleurs, CSS visuel, réseaux sociaux, SEO de base.`;

  try {
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01',
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        model: 'claude-haiku-4-5-20251001',
        max_tokens: 1024,
        system: systemPrompt,
        messages: [{ role: 'user', content: request }],
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error('[claude-proxy] API error:', response.status, JSON.stringify(data));
      return res.status(502).json({ error: `API error ${response.status}`, detail: data?.error?.message || JSON.stringify(data) });
    }

    const text = data.content?.[0]?.text || '';

    let parsed;
    try {
      const jsonMatch = text.match(/\{[\s\S]*\}/);
      parsed = jsonMatch ? JSON.parse(jsonMatch[0]) : { type: 'text', message: text };
    } catch {
      parsed = { type: 'text', message: text };
    }

    return res.status(200).json(parsed);
  } catch (err) {
    console.error('[claude-proxy] Exception:', err.message);
    return res.status(500).json({ error: err.message });
  }
};
