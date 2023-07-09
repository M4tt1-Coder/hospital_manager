// import type { HandleFetch } from '@sveltejs/kit';

import type { Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ resolve, event }) => {

  // Apply CORS header for API routes
  if (event.url.pathname.startsWith('/api')) {
    // Required for CORS to work
    if(event.request.method === 'OPTIONS') {
      return new Response(null, {
        headers: {
          'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Headers': '*',
        }
      });
    }

  }

  const response = await resolve(event);
  if (event.url.pathname.startsWith('/api')) {
    response.headers.append('Access-Control-Allow-Origin', `*`);
  }
  return response;
};




// export const handleFetch = async ({ request, fetch }) => {
//   if (request.url.startsWith('http:')){

//   } 
// };
//https://kit.svelte.dev/docs/hooks#server-hooks-handlefetchs
//look how to allow cors with hooks....
//how to call the declared function here?
//search for help by liam