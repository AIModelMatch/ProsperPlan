/**
 * ProserPlan Vite Configuration (vite.config.ts)
 * * Explicitly configures Vite for a standard single-page React application.
 * This is often necessary to resolve persistent 404/file serving errors.
 */

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // -------------------------------------------------------------------
  // VITE FIX: Explicitly set the base path and server host.
  // This is critical for resolving 404 errors during local development
  // where the browser isn't correctly picking up the serving path.
  // -------------------------------------------------------------------
  base: '/', 
  server: {
    // Ensures Vite uses the host flag we set in package.json
    host: true, 
    // This setting prevents the server from starting with a strange or
    // unresolvable local IP address.
    open: true,
  }
});