'use client'
import { useAuth } from './auth-context';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function ProtectedRoute({ children }) {
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    // Check localStorage for auth state (helps with page refresh)
    const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
    if (!isAuthenticated && !user) {
      router.push('/');
    }
  }, [user, router]);

  if (!user) {
    return null; // or a loading spinner
  }

  return children;
}