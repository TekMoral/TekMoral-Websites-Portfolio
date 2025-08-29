import type { APIRoute } from 'astro';

// Placeholder API for future site search. Returns empty results for now.
export const GET: APIRoute = async ({ url }) => {
  const q = url.searchParams.get('q')?.trim() || '';
  return new Response(
    JSON.stringify({ query: q, results: [] }),
    { headers: { 'Content-Type': 'application/json' } }
  );
};
