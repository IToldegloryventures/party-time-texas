'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useUser } from '@clerk/nextjs';

interface Plan {
  id: string;
  name: string;
  price: string;
  description: string;
  features: string[];
  color: string;
  recommended?: boolean;
}

const plans: Plan[] = [
  {
    id: 'starter',
    name: 'Starter',
    price: '$29/month',
    description: 'Perfect for small events and personal use',
    features: [
      'Up to 5 NFC devices',
      'Basic analytics',
      'Email support',
      '1 landing page',
      'Up to 3 team members'
    ],
    color: 'from-blue-500 to-cyan-500'
  },
  {
    id: 'professional',
    name: 'Professional',
    price: '$79/month',
    description: 'Ideal for growing businesses and event companies',
    features: [
      'Up to 25 NFC devices',
      'Advanced analytics',
      'Priority support',
      'Unlimited landing pages',
      'Up to 10 team members',
      'Custom branding'
    ],
    color: 'from-purple-500 to-pink-500',
    recommended: true
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    price: '$199/month',
    description: 'For large organizations with complex needs',
    features: [
      'Unlimited NFC devices',
      'Real-time analytics',
      '24/7 phone support',
      'White-label solution',
      'Unlimited team members',
      'Custom integrations',
      'Dedicated account manager'
    ],
    color: 'from-red-500 to-orange-500'
  }
];

export default function OrganizationSetup() {
  const { user } = useUser();
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    organizationName: '',
    organizationSlug: '',
    selectedPlan: 'professional',
    industry: '',
    teamSize: '1-5'
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));

    // Auto-generate slug from organization name
    if (field === 'organizationName') {
      const slug = value
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, '')
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-')
        .trim();
      setFormData(prev => ({
        ...prev,
        organizationSlug: slug
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('/api/organizations/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.organizationName,
          slug: formData.organizationSlug,
          plan_type: formData.selectedPlan,
          industry: formData.industry,
          team_size: formData.teamSize
        }),
      });

      if (response.ok) {
        // Organization created successfully, redirect to dashboard
        router.push('/dashboard');
      } else {
        const error = await response.json();
        alert(`Error: ${error.error}`);
      }
    } catch (error) {
      console.error('Error creating organization:', error);
      alert('Failed to create organization. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const nextStep = () => {
    if (step === 1 && formData.organizationName && formData.organizationSlug) {
      setStep(2);
    } else if (step === 2) {
      setStep(3);
    }
  };

  const prevStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  return (
    <div className="min-h-screen bg-black">
      <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="mb-4 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-4xl font-bold text-transparent">
            Welcome to Cosmic Portals, {user?.firstName}!
          </h1>
          <p className="text-xl text-white/70">
            Let's set up your organization and get you started
          </p>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            {[1, 2, 3].map((stepNumber) => (
              <div key={stepNumber} className="flex items-center">
                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-full border-2 ${
                    step >= stepNumber
                      ? 'border-purple-400 bg-purple-400 text-black'
                      : 'border-gray-600 text-gray-400'
                  }`}
                >
                  {stepNumber}
                </div>
                {stepNumber < 3 && (
                  <div
                    className={`h-1 w-32 ${
                      step > stepNumber ? 'bg-purple-400' : 'bg-gray-600'
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
          <div className="mt-2 flex justify-between text-sm text-white/60">
            <span>Organization Details</span>
            <span>Choose Plan</span>
            <span>Review & Create</span>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Step 1: Organization Details */}
          {step === 1 && (
            <div className="rounded-xl border border-purple-400/20 bg-gradient-to-br from-purple-900/20 to-purple-800/10 p-8">
              <h2 className="mb-6 text-2xl font-bold text-white">Organization Details</h2>
              
              <div className="space-y-6">
                <div>
                  <label className="mb-2 block text-sm font-medium text-white/70">
                    Organization Name *
                  </label>
                  <input
                    type="text"
                    value={formData.organizationName}
                    onChange={(e) => handleInputChange('organizationName', e.target.value)}
                    className="w-full rounded-lg border border-gray-600 bg-gray-700 px-4 py-3 text-white placeholder-gray-400 focus:border-purple-400 focus:outline-none"
                    placeholder="Your Company Name"
                    required
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-white/70">
                    Organization URL *
                  </label>
                  <div className="flex items-center">
                    <span className="rounded-l-lg border border-r-0 border-gray-600 bg-gray-800 px-3 py-3 text-white/70">
                      cosmicportals.com/
                    </span>
                    <input
                      type="text"
                      value={formData.organizationSlug}
                      onChange={(e) => handleInputChange('organizationSlug', e.target.value)}
                      className="w-full rounded-r-lg border border-gray-600 bg-gray-700 px-4 py-3 text-white placeholder-gray-400 focus:border-purple-400 focus:outline-none"
                      placeholder="your-company"
                      required
                    />
                  </div>
                  <p className="mt-1 text-xs text-white/50">
                    This will be your organization's unique URL
                  </p>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-white/70">
                    Industry (Optional)
                  </label>
                  <select
                    value={formData.industry}
                    onChange={(e) => handleInputChange('industry', e.target.value)}
                    className="w-full rounded-lg border border-gray-600 bg-gray-700 px-4 py-3 text-white focus:border-purple-400 focus:outline-none"
                  >
                    <option value="">Select your industry</option>
                    <option value="event-planning">Event Planning</option>
                    <option value="corporate">Corporate</option>
                    <option value="wedding">Wedding</option>
                    <option value="education">Education</option>
                    <option value="nonprofit">Non-profit</option>
                    <option value="marketing">Marketing Agency</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-white/70">
                    Team Size
                  </label>
                  <select
                    value={formData.teamSize}
                    onChange={(e) => handleInputChange('teamSize', e.target.value)}
                    className="w-full rounded-lg border border-gray-600 bg-gray-700 px-4 py-3 text-white focus:border-purple-400 focus:outline-none"
                  >
                    <option value="1-5">1-5 people</option>
                    <option value="6-15">6-15 people</option>
                    <option value="16-50">16-50 people</option>
                    <option value="50+">50+ people</option>
                  </select>
                </div>
              </div>
            </div>
          )}

          {/* Step 2: Choose Plan */}
          {step === 2 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-white">Choose Your Plan</h2>
              
              <div className="grid gap-6 md:grid-cols-3">
                {plans.map((plan) => (
                  <div
                    key={plan.id}
                    className={`relative rounded-xl border p-6 transition-all duration-200 cursor-pointer ${
                      formData.selectedPlan === plan.id
                        ? 'border-purple-400 bg-purple-900/20'
                        : 'border-gray-600 bg-gray-800/50 hover:border-gray-500'
                    }`}
                    onClick={() => handleInputChange('selectedPlan', plan.id)}
                  >
                    {plan.recommended && (
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                        <span className="rounded-full bg-gradient-to-r from-purple-500 to-pink-500 px-3 py-1 text-xs font-medium text-white">
                          Recommended
                        </span>
                      </div>
                    )}
                    
                    <div className="text-center">
                      <h3 className="text-xl font-bold text-white">{plan.name}</h3>
                      <p className={`text-3xl font-bold bg-gradient-to-r ${plan.color} bg-clip-text text-transparent`}>
                        {plan.price}
                      </p>
                      <p className="mt-2 text-sm text-white/70">{plan.description}</p>
                    </div>

                    <ul className="mt-6 space-y-3">
                      {plan.features.map((feature, index) => (
                        <li key={index} className="flex items-center text-sm text-white/80">
                          <svg className="mr-3 h-4 w-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-6">
                      <div className={`rounded-lg px-4 py-2 text-center font-medium ${
                        formData.selectedPlan === plan.id
                          ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white'
                          : 'border border-gray-600 text-white/70'
                      }`}>
                        {formData.selectedPlan === plan.id ? 'Selected' : 'Select Plan'}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Step 3: Review & Create */}
          {step === 3 && (
            <div className="rounded-xl border border-purple-400/20 bg-gradient-to-br from-purple-900/20 to-purple-800/10 p-8">
              <h2 className="mb-6 text-2xl font-bold text-white">Review Your Setup</h2>
              
              <div className="space-y-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <h3 className="mb-3 text-lg font-semibold text-white">Organization Details</h3>
                    <div className="space-y-2 text-white/80">
                      <p><span className="font-medium">Name:</span> {formData.organizationName}</p>
                      <p><span className="font-medium">URL:</span> cosmicportals.com/{formData.organizationSlug}</p>
                      <p><span className="font-medium">Industry:</span> {formData.industry || 'Not specified'}</p>
                      <p><span className="font-medium">Team Size:</span> {formData.teamSize} people</p>
                    </div>
                  </div>

                  <div>
                    <h3 className="mb-3 text-lg font-semibold text-white">Selected Plan</h3>
                    <div className="space-y-2 text-white/80">
                      <p><span className="font-medium">Plan:</span> {plans.find(p => p.id === formData.selectedPlan)?.name}</p>
                      <p><span className="font-medium">Price:</span> {plans.find(p => p.id === formData.selectedPlan)?.price}</p>
                      <p><span className="font-medium">Features:</span> {plans.find(p => p.id === formData.selectedPlan)?.features.length} included</p>
                    </div>
                  </div>
                </div>

                <div className="rounded-lg bg-green-900/20 border border-green-500/30 p-4">
                  <h4 className="mb-2 font-semibold text-green-300">What happens next:</h4>
                  <ul className="space-y-1 text-sm text-green-200">
                    <li>• Your organization will be created with you as the owner</li>
                    <li>• You'll have full admin access to invite team members</li>
                    <li>• You can start creating NFC devices and landing pages</li>
                    <li>• Your team can be invited with different permission levels</li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-between">
            <button
              type="button"
              onClick={prevStep}
              disabled={step === 1}
              className={`rounded-lg px-6 py-3 font-medium transition-colors ${
                step === 1
                  ? 'cursor-not-allowed bg-gray-800 text-gray-500'
                  : 'bg-gray-700 text-white hover:bg-gray-600'
              }`}
            >
              Previous
            </button>

            {step < 3 ? (
              <button
                type="button"
                onClick={nextStep}
                disabled={
                  (step === 1 && (!formData.organizationName || !formData.organizationSlug)) ||
                  (step === 2 && !formData.selectedPlan)
                }
                className={`rounded-lg px-6 py-3 font-medium transition-colors ${
                  (step === 1 && (!formData.organizationName || !formData.organizationSlug)) ||
                  (step === 2 && !formData.selectedPlan)
                    ? 'cursor-not-allowed bg-gray-800 text-gray-500'
                    : 'bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600'
                }`}
              >
                Next Step
              </button>
            ) : (
              <button
                type="submit"
                disabled={loading}
                className="rounded-lg bg-gradient-to-r from-green-500 to-emerald-500 px-8 py-3 font-medium text-white transition-colors hover:from-green-600 hover:to-emerald-600 disabled:opacity-50"
              >
                {loading ? 'Creating Organization...' : 'Create Organization'}
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
