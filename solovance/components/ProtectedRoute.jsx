'use client'
import { useAuth } from '../app/auth-context';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function ProtectedRoute({ children }) {
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
    if (!isAuthenticated) {
      router.push('/');
    }
  }, [user, router]);

  if (!user) {
    return null; // or a loading spinner
  }

  return children;
}