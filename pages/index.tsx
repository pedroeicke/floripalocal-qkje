import React from 'react';
import Home from './Home'; // Importing the existing component

interface PageProps {
  onNavigate: (page: string, params?: any) => void;
}

export default function HomePage({ onNavigate }: PageProps) {
  return <Home onNavigate={onNavigate} />;
}