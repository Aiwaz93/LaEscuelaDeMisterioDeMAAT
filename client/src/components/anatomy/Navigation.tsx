import * as React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';

export function Navigation() {
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Anatomía' },
    { path: '/sephirot', label: 'Sephirot' },
    { path: '/qliphoth', label: 'Qliphoth' },
    { path: '/tarot', label: 'Tarot' },
    { path: '/hebrew', label: 'Letras Hebreas' },
  ];

  return (
    <nav className="bg-black/20 backdrop-blur-sm border-b border-purple-500/30">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-white">
            Anatomía Esotérica
          </h1>
          <div className="flex gap-2">
            {navItems.map((item) => (
              <Link key={item.path} to={item.path}>
                <Button
                  variant={location.pathname === item.path ? 'default' : 'ghost'}
                  className="text-white hover:bg-purple-500/20"
                >
                  {item.label}
                </Button>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}