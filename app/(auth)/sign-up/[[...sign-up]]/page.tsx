import { SignUp } from '@clerk/nextjs';

export default function SignUpPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-black">
      <div className="w-full max-w-md">
        <div className="mb-8 text-center">
          <h1 className="mb-2 text-3xl font-bold text-white">Get Started</h1>
          <p className="text-white/70">Create your Cosmic Portals account</p>
        </div>
        <SignUp
          appearance={{
            elements: {
              formButtonPrimary: 'bg-purple-600 hover:bg-purple-700 text-white',
              card: 'bg-gray-900/50 border border-purple-400/20',
              headerTitle: 'text-white',
              headerSubtitle: 'text-white/70',
              socialButtonsBlockButton:
                'bg-gray-800 hover:bg-gray-700 border-gray-600 text-white',
              formFieldInput: 'bg-gray-800 border-gray-600 text-white',
              footerActionLink: 'text-purple-400 hover:text-purple-300',
            },
          }}
        />
      </div>
    </div>
  );
}
