import * as React from 'react';
import { Outlet } from 'react-router-dom';
import { Navigation } from './Navigation';

export function AnatomyLayout() {
  return (
    <div className="min-h-screen text-white">
      <Navigation />
      <main className="container mx-auto px-4 py-8">
        <Outlet />
      </main>
    </div>
  );
}