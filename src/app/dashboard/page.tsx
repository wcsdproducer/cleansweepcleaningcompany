import { redirect } from 'next/navigation';

/**
 * /dashboard redirects to /account.
 * Google OAuth sends users here after sign-in; the actual
 * customer dashboard lives at /account.
 */
export default function DashboardPage() {
  redirect('/account');
}
