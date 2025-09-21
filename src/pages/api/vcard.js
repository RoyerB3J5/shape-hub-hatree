export async function GET({ request }) {
  const url = new URL(request.url);
  const params = url.searchParams;

  const c = {
    firstName: params.get('firstName') || '',
    lastName: params.get('lastName') || '',
    org: params.get('org') || '',
    title: params.get('title') || '',
    phone: params.get('phone') || '',
    email: params.get('email') || '',
    url: params.get('url') || '',
    street: params.get('street') || '',
    city: params.get('city') || '',
    region: params.get('region') || '',
    postal: params.get('postal') || '',
    country: params.get('country') || '',
    note: params.get('note') || '',
  };

  const lines = [
    'BEGIN:VCARD',
    'VERSION:3.0',
    `FN:${c.firstName} ${c.lastName}`.trim(),
    `N:${c.lastName};${c.firstName};;;`,
    c.org ? `ORG:${c.org}` : '',
    c.title ? `TITLE:${c.title}` : '',
    c.phone ? `TEL;TYPE=CELL,VOICE:${c.phone}` : '',
    c.email ? `EMAIL;TYPE=INTERNET:${c.email}` : '',
    c.url ? `URL:${c.url}` : '',
    c.street || c.city
      ? `ADR;TYPE=WORK:;;${c.street};${c.city};${c.region};${c.postal};${c.country}`
      : '',
    c.note ? `NOTE:${c.note}` : '',
    'END:VCARD',
  ]
    .filter(Boolean)
    .join('\r\n');

  const filename = `${c.firstName || 'contact'}_${c.lastName || ''}.vcf`.replace(/\s+/g, '_');

  return new Response(lines, {
    status: 200,
    headers: {
      'Content-Type': 'text/vcard; charset=utf-8',
      'Content-Disposition': `inline; filename="${filename}"`,
    },
  });
}
