'use client';

import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { SignupFlowService } from '@/lib/signup-flow';

export default function CustomSignUpPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<string[]>([]);
  
  // Initialize with URL parameter if present
  const getInitialPlanType = () => {
    const plan = searchParams.get('plan');
    if (plan === 'event') return 'event';
    if (plan === 'business') return 'business';
    return 'business';
  };
  
  const getInitialUserType = () => {
    const plan = searchParams.get('plan');
    if (plan === 'event') return 'event_admin';
    if (plan === 'business') return 'business_admin';
    return 'business_admin';
  };
  
  const [signupData, setSignupData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    organizationName: '',
    organizationSlug: '',
    planType: getInitialPlanType() as 'business' | 'event',
    userType: getInitialUserType() as 'business_admin' | 'event_admin',
  });

  // Set plan type from URL parameter
  useEffect(() => {
    const plan = searchParams.get('plan');
    if (plan === 'event') {
      setSignupData(prev => ({
        ...prev,
        planType: 'event',
        userType: 'event_admin'
      }));
    } else if (plan === 'business') {
      setSignupData(prev => ({
        ...prev,
        planType: 'business',
        userType: 'business_admin'
      }));
    }
  }, [searchParams]);

  const handleInputChange = (field: string, value: string) => {
    setSignupData(prev => {
      const updated = { ...prev, [field]: value };
      
      // Auto-generate slug when organization name changes
      if (field === 'organizationName') {
        updated.organizationSlug = SignupFlowService.generateOrganizationSlug(value);
      }
      
      return updated;
    });
    setErrors([]);
  };

  const handleNext = () => {
    const validation = SignupFlowService.validateSignupData(signupData);
    if (!validation.valid) {
      setErrors(validation.errors);
      return;
    }
    setStep(2);
  };

  const handleSignup = async () => {
    setLoading(true);
    setErrors([]);

    try {
      // Validate data
      const validation = SignupFlowService.validateSignupData(signupData);
      if (!validation.valid) {
        setErrors(validation.errors);
        setLoading(false);
        return;
      }

      // Check if slug is available
      const isAvailable = await SignupFlowService.isSlugAvailable(signupData.organizationSlug);
      if (!isAvailable) {
        const uniqueSlug = await SignupFlowService.generateUniqueSlug(signupData.organizationName);
        setSignupData(prev => ({ ...prev, organizationSlug: uniqueSlug }));
      }

      // Redirect to Clerk signup with metadata
      const clerkSignupUrl = new URL('/sign-up', window.location.origin);
      clerkSignupUrl.searchParams.set('signup_data', JSON.stringify(signupData));
      
      router.push(clerkSignupUrl.toString());
    } catch (error) {
      console.error('Signup error:', error);
      setErrors(['An error occurred. Please try again.']);
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-black">
      <div className="w-full max-w-md">
        <div className="mb-8 text-center">
          <h1 className="mb-2 text-3xl font-bold text-white">Get Started</h1>
          <p className="text-white/70">Create your Cosmic Portals account</p>
        </div>

        {step === 1 && (
          <div className="space-y-6">
            <div>
              <label className="mb-2 block text-sm font-medium text-white/70">
                First Name
              </label>
              <input
                type="text"
                value={signupData.firstName}
                onChange={(e) => handleInputChange('firstName', e.target.value)}
                className="w-full rounded-lg border border-gray-600 bg-gray-800 px-4 py-3 text-white placeholder-gray-400 focus:border-purple-400 focus:outline-none"
                placeholder="Enter your first name"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-white/70">
                Last Name
              </label>
              <input
                type="text"
                value={signupData.lastName}
                onChange={(e) => handleInputChange('lastName', e.target.value)}
                className="w-full rounded-lg border border-gray-600 bg-gray-800 px-4 py-3 text-white placeholder-gray-400 focus:border-purple-400 focus:outline-none"
                placeholder="Enter your last name"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-white/70">
                Email Address
              </label>
              <input
                type="email"
                value={signupData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                className="w-full rounded-lg border border-gray-600 bg-gray-800 px-4 py-3 text-white placeholder-gray-400 focus:border-purple-400 focus:outline-none"
                placeholder="Enter your email address"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-white/70">
                Organization Name
              </label>
              <input
                type="text"
                value={signupData.organizationName}
                onChange={(e) => handleInputChange('organizationName', e.target.value)}
                className="w-full rounded-lg border border-gray-600 bg-gray-800 px-4 py-3 text-white placeholder-gray-400 focus:border-purple-400 focus:outline-none"
                placeholder="Enter your organization name"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-white/70">
                Plan Type
              </label>
              {searchParams.get('plan') ? (
                // Show selected plan (read-only when coming from products page)
                <div className="rounded-lg border border-purple-400 bg-purple-400/20 p-4 text-center">
                  <div className="font-semibold text-purple-300">
                    {signupData.planType === 'business' ? 'Business' : 'Event'} Platform
                  </div>
                  <div className="text-sm text-purple-200">
                    {signupData.planType === 'business' 
                      ? 'For companies and teams' 
                      : 'For event planners'
                    }
                  </div>
                </div>
              ) : (
                // Allow plan selection if no plan parameter
                <div className="grid grid-cols-2 gap-4">
                  <button
                    type="button"
                    onClick={() => {
                      handleInputChange('planType', 'business');
                      handleInputChange('userType', 'business_admin');
                    }}
                    className={`rounded-lg border p-4 text-center transition-colors ${
                      signupData.planType === 'business'
                        ? 'border-purple-400 bg-purple-400/20 text-purple-300'
                        : 'border-gray-600 bg-gray-800 text-white/70 hover:border-gray-500'
                    }`}
                  >
                    <div className="font-semibold">Business</div>
                    <div className="text-sm">For companies and teams</div>
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      handleInputChange('planType', 'event');
                      handleInputChange('userType', 'event_admin');
                    }}
                    className={`rounded-lg border p-4 text-center transition-colors ${
                      signupData.planType === 'event'
                        ? 'border-purple-400 bg-purple-400/20 text-purple-300'
                        : 'border-gray-600 bg-gray-800 text-white/70 hover:border-gray-500'
                    }`}
                  >
                    <div className="font-semibold">Event</div>
                    <div className="text-sm">For event planners</div>
                  </button>
                </div>
              )}
            </div>

            {errors.length > 0 && (
              <div className="rounded-lg bg-red-500/20 border border-red-500/30 p-4">
                <ul className="text-sm text-red-300">
                  {errors.map((error, index) => (
                    <li key={index}>• {error}</li>
                  ))}
                </ul>
              </div>
            )}

            <button
              onClick={handleNext}
              className="w-full rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 px-6 py-3 font-semibold text-white transition-all duration-300 hover:from-purple-700 hover:to-blue-700"
            >
              Continue
            </button>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-6">
            <div className="rounded-lg border border-gray-600 bg-gray-800/50 p-4">
              <h3 className="mb-2 font-semibold text-white">Organization Details</h3>
              <div className="space-y-2 text-sm text-white/70">
                <div><strong>Name:</strong> {signupData.organizationName}</div>
                <div><strong>URL:</strong> cosmicportals.com/{signupData.organizationSlug}</div>
                <div><strong>Plan:</strong> {signupData.planType === 'business' ? 'Business' : 'Event'}</div>
                <div><strong>Your Role:</strong> {signupData.userType === 'business_admin' ? 'Business Admin' : 'Event Admin'}</div>
              </div>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-white/70">
                Organization URL (customizable)
              </label>
              <div className="flex">
                <span className="flex items-center rounded-l-lg border border-r-0 border-gray-600 bg-gray-700 px-3 text-white/70">
                  cosmicportals.com/
                </span>
                <input
                  type="text"
                  value={signupData.organizationSlug}
                  onChange={(e) => handleInputChange('organizationSlug', e.target.value)}
                  className="flex-1 rounded-r-lg border border-gray-600 bg-gray-800 px-4 py-3 text-white placeholder-gray-400 focus:border-purple-400 focus:outline-none"
                  placeholder="organization-slug"
                />
              </div>
            </div>

            {errors.length > 0 && (
              <div className="rounded-lg bg-red-500/20 border border-red-500/30 p-4">
                <ul className="text-sm text-red-300">
                  {errors.map((error, index) => (
                    <li key={index}>• {error}</li>
                  ))}
                </ul>
              </div>
            )}

            <div className="flex gap-4">
              <button
                onClick={() => setStep(1)}
                className="flex-1 rounded-lg border border-gray-600 bg-gray-800 px-6 py-3 font-semibold text-white transition-colors hover:bg-gray-700"
              >
                Back
              </button>
              <button
                onClick={handleSignup}
                disabled={loading}
                className="flex-1 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 px-6 py-3 font-semibold text-white transition-all duration-300 hover:from-purple-700 hover:to-blue-700 disabled:opacity-50"
              >
                {loading ? 'Creating Account...' : 'Create Account'}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
