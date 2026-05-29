'use client';

import React, { useState, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { LogOut, Mail, User, Calendar, Shield } from 'lucide-react';
import { useFirebase } from '@/firebase';
import { initiateSignOut } from '@/firebase/non-blocking-login';
import { CustomerAuthModal } from '@/components/CustomerAuthModal';
import { Button } from '@/components/ui/button';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';

export default function AccountPage() {
  const { user, isUserLoading, auth } = useFirebase();
  const [authModalOpen, setAuthModalOpen] = useState(false);

  const handleSignOut = useCallback(() => {
    initiateSignOut(auth);
  }, [auth]);

  // Show loading skeleton while auth resolves
  if (isUserLoading) {
    return (
      <>
        <Navigation />
        <main className="min-h-screen bg-gray-50 flex items-center justify-center">
          <div className="flex flex-col items-center gap-4 text-gray-400">
            <div className="h-16 w-16 rounded-full bg-gray-200 animate-pulse" />
            <div className="h-4 w-40 bg-gray-200 rounded animate-pulse" />
            <div className="h-3 w-28 bg-gray-200 rounded animate-pulse" />
          </div>
        </main>
        <Footer />
      </>
    );
  }

  // Prompt sign-in if not authenticated
  if (!user) {
    return (
      <>
        <Navigation />
        <main className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
          <div className="bg-white rounded-3xl shadow-xl p-10 max-w-md w-full text-center space-y-6">
            <div className="h-20 w-20 rounded-full bg-[#1a6a91]/10 flex items-center justify-center mx-auto">
              <User className="h-10 w-10 text-[#1a6a91]" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-[#1a6a91]">My Account</h1>
              <p className="text-gray-500 mt-2 text-sm">
                Sign in with Google to access your quotes, booking history, and account details.
              </p>
            </div>
            <Button
              onClick={() => setAuthModalOpen(true)}
              className="w-full rounded-2xl py-6 text-base font-semibold bg-[#1a6a91] hover:bg-[#155878]"
            >
              Sign In to Continue
            </Button>
            <Link href="/" className="block text-sm text-gray-400 hover:text-[#1a6a91] transition-colors">
              ← Back to Home
            </Link>
          </div>
          <CustomerAuthModal open={authModalOpen} onOpenChange={setAuthModalOpen} />
        </main>
        <Footer />
      </>
    );
  }

  const initials = (user.displayName ?? user.email ?? 'C')
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-gray-50 py-12 px-4">
        <div className="max-w-2xl mx-auto space-y-6">

          {/* Profile Card */}
          <section className="bg-white rounded-3xl shadow-sm p-8 flex flex-col sm:flex-row items-center sm:items-start gap-6">
            <div className="relative h-20 w-20 rounded-full overflow-hidden ring-4 ring-[#1a6a91]/20 shrink-0">
              {user.photoURL ? (
                <Image
                  src={user.photoURL}
                  alt={user.displayName ?? 'Profile'}
                  fill
                  className="object-cover"
                />
              ) : (
                <div className="h-full w-full bg-[#1a6a91] flex items-center justify-center text-white text-2xl font-bold">
                  {initials}
                </div>
              )}
            </div>
            <div className="flex-1 text-center sm:text-left">
              <h1 className="text-2xl font-bold text-gray-900">
                {user.displayName ?? 'Customer'}
              </h1>
              <div className="mt-3 space-y-2">
                {user.email && (
                  <div className="flex items-center gap-2 text-sm text-gray-500 justify-center sm:justify-start">
                    <Mail className="h-4 w-4 text-[#1a6a91]" />
                    <span>{user.email}</span>
                    {user.emailVerified && (
                      <span className="inline-flex items-center gap-1 text-xs bg-green-50 text-green-600 px-2 py-0.5 rounded-full font-medium">
                        <Shield className="h-3 w-3" /> Verified
                      </span>
                    )}
                  </div>
                )}
                <div className="flex items-center gap-2 text-sm text-gray-500 justify-center sm:justify-start">
                  <Calendar className="h-4 w-4 text-[#1a6a91]" />
                  <span>Signed in via Google</span>
                </div>
              </div>
            </div>
            <button
              id="account-sign-out"
              onClick={handleSignOut}
              className="flex items-center gap-2 text-sm text-red-400 hover:text-red-500 transition-colors shrink-0"
            >
              <LogOut className="h-4 w-4" />
              Sign Out
            </button>
          </section>

          {/* Quick Actions */}
          <section className="bg-white rounded-3xl shadow-sm p-8">
            <h2 className="text-lg font-bold text-gray-800 mb-4">Quick Actions</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Link
                href="/contact"
                className="flex items-center gap-3 p-4 rounded-2xl border border-gray-100 hover:border-[#1a6a91]/30 hover:bg-[#1a6a91]/5 transition-all group"
              >
                <div className="h-10 w-10 rounded-xl bg-[#1a6a91]/10 flex items-center justify-center group-hover:bg-[#1a6a91]/20 transition-colors">
                  <Calendar className="h-5 w-5 text-[#1a6a91]" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-800">Get a Free Estimate</p>
                  <p className="text-xs text-gray-400">Book your next cleaning</p>
                </div>
              </Link>

            </div>
          </section>

          {/* Activity placeholder */}
          <section className="bg-white rounded-3xl shadow-sm p-8">
            <h2 className="text-lg font-bold text-gray-800 mb-2">My Bookings &amp; Quotes</h2>
            <p className="text-sm text-gray-400 mb-6">Your service history will appear here once you&apos;ve booked with us.</p>
            <div className="flex flex-col items-center gap-4 py-8 border-2 border-dashed border-gray-100 rounded-2xl">
              <Calendar className="h-10 w-10 text-gray-200" />
              <p className="text-sm text-gray-400 text-center">No bookings yet</p>
              <Button asChild className="rounded-full bg-[#1a6a91] hover:bg-[#155878]">
                <Link href="/contact">Schedule a Cleaning</Link>
              </Button>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
