import { getLogtoContext, signIn } from "@logto/next/server-actions";
import { logtoConfig } from "../logto";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";
import { redirect } from "next/navigation";
import { Shield, Users, Zap, ArrowRight, CheckCircle } from "lucide-react";

export default async function SignInPage({
  searchParams,
}: {
  searchParams: { returnTo?: string };
}) {
  const { isAuthenticated } = await getLogtoContext(logtoConfig);

  // If already authenticated, redirect to the return URL or home
  if (isAuthenticated) {
    redirect(searchParams.returnTo || "/");
  }

  const returnTo = searchParams.returnTo || "/";

  return (
    <div className="relative pb-16">
      <Navigation />
      <div className="px-6 pt-20 mx-auto max-w-6xl lg:px-8 md:pt-24 lg:pt-32">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-sm font-semibold tracking-wider text-space-haze uppercase">
              Sign In Required
            </span>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-space-white sm:text-5xl lg:text-6xl">
              Welcome to OneCebby
            </h1>
            <p className="mt-6 text-lg text-space-dust max-w-2xl mx-auto">
              Your unified identity for Cebu's tech community
            </p>
          </div>

          {/* OneCebby Introduction Card */}
          <Card>
            <div className="p-8 space-y-8">
              {/* What is OneCebby */}
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-melrose flex items-center gap-2">
                  <Shield className="w-6 h-6" />
                  What is OneCebby?
                </h2>
                <p className="text-space-dust leading-relaxed">
                  OneCebby is your single sign-on (SSO) solution for the entire Cebu tech ecosystem.
                  Instead of creating multiple accounts across different platforms, OneCebby gives you
                  one secure identity that works everywhere in our community.
                </p>
              </div>

              {/* Why You Need an Account */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-lavender">
                  Why do you need to sign in?
                </h3>
                <div className="bg-east-bay/30 border border-blue-violet/30 rounded-lg p-4">
                  <p className="text-space-dust mb-3">
                    {returnTo === '/volunteer'
                      ? 'To submit your volunteer application, we need to verify your identity and contact information.'
                      : returnTo === '/submit'
                      ? 'To submit your project, we need to verify your identity so we can showcase your work properly.'
                      : 'To access this feature, we need to verify your identity.'
                    }
                    {' '}This helps us:
                  </p>
                  <ul className="space-y-2 text-sm text-space-dust">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-lavender mt-0.5 flex-shrink-0" />
                      <span>Ensure authentic {returnTo === '/volunteer' ? 'applications' : returnTo === '/submit' ? 'project submissions' : 'participation'} from real community members</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-lavender mt-0.5 flex-shrink-0" />
                      <span>{returnTo === '/volunteer' ? 'Communicate with you about your volunteer role' : returnTo === '/submit' ? 'Connect you with contributors and mentors' : 'Keep you informed about updates'}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-lavender mt-0.5 flex-shrink-0" />
                      <span>Track your contributions to the community</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-lavender mt-0.5 flex-shrink-0" />
                      <span>{returnTo === '/volunteer' ? 'Provide you with volunteer certificates and recognition' : returnTo === '/submit' ? 'Feature your project and help you win prizes' : 'Recognize your participation and achievements'}</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Benefits Grid */}
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center p-6 bg-gradient-to-br from-lavender/10 to-transparent rounded-lg border border-lavender/20">
                  <div className="w-12 h-12 bg-lavender/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Zap className="w-6 h-6 text-lavender" />
                  </div>
                  <h4 className="font-semibold text-melrose mb-2">One Account</h4>
                  <p className="text-sm text-space-dust">
                    Access all Cebu tech platforms with a single login
                  </p>
                </div>

                <div className="text-center p-6 bg-gradient-to-br from-melrose/10 to-transparent rounded-lg border border-melrose/20">
                  <div className="w-12 h-12 bg-melrose/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-6 h-6 text-melrose" />
                  </div>
                  <h4 className="font-semibold text-lavender mb-2">Secure</h4>
                  <p className="text-sm text-space-dust">
                    Enterprise-grade security powered by Logto
                  </p>
                </div>

                <div className="text-center p-6 bg-gradient-to-br from-blue-violet/10 to-transparent rounded-lg border border-blue-violet/20">
                  <div className="w-12 h-12 bg-blue-violet/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-6 h-6 text-blue-violet" />
                  </div>
                  <h4 className="font-semibold text-melrose mb-2">Community</h4>
                  <p className="text-sm text-space-dust">
                    Join Cebu's unified tech ecosystem
                  </p>
                </div>
              </div>

              {/* Platforms Section */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-lavender">
                  Works across platforms
                </h3>
                <div className="flex flex-wrap gap-3">
                  <div className="px-4 py-2 bg-east-bay/30 border border-blue-violet/30 rounded-full text-sm text-space-dust">
                    Cebby Events
                  </div>
                  <div className="px-4 py-2 bg-east-bay/30 border border-blue-violet/30 rounded-full text-sm text-space-dust">
                    JavaScript Cebu
                  </div>
                  <div className="px-4 py-2 bg-east-bay/30 border border-blue-violet/30 rounded-full text-sm text-space-dust">
                    Hacktoberfest Cebu
                  </div>
                  <div className="px-4 py-2 bg-east-bay/30 border border-lavender/30 rounded-full text-sm text-melrose">
                    + More Coming Soon
                  </div>
                </div>
              </div>

              {/* Sign In Button */}
              <div className="pt-4">
                <form
                  action={async () => {
                    "use server";
                    // Store the return URL in cookies before signing in
                    const { cookies } = await import('next/headers');
                    cookies().set('returnTo', returnTo, {
                      httpOnly: true,
                      secure: process.env.NODE_ENV === 'production',
                      sameSite: 'lax',
                      maxAge: 60 * 5 // 5 minutes
                    });
                    await signIn(logtoConfig);
                  }}
                >
                  <button
                    type="submit"
                    className="w-full bg-lavender text-void py-4 px-6 rounded-md font-medium hover:bg-melrose transition-colors flex items-center justify-center gap-2 group"
                  >
                    <Shield className="w-5 h-5" />
                    Sign In with OneCebby
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </form>
                <p className="text-center text-sm text-space-haze mt-4">
                  Don't have an account? You'll be able to create one during sign-in.
                </p>
              </div>

              {/* Privacy Note */}
              <div className="text-sm text-space-dust/80 bg-east-bay/20 border border-blue-violet/20 rounded-lg p-4">
                <p className="font-semibold text-melrose mb-2">Your Privacy Matters</p>
                <p>
                  OneCebby only shares your basic profile information (name and email) with authorized platforms.
                  You maintain full control over your data and can manage your privacy settings at any time.
                </p>
              </div>
            </div>
          </Card>

          {/* Vision Quote */}
          <div className="mt-12 text-center">
            <blockquote className="text-lg italic text-space-dust">
              "Breaking down the silos that separate different tech communities in Cebu"
            </blockquote>
            <p className="mt-2 text-sm text-space-haze">— OneCebby Vision</p>
          </div>
        </div>
      </div>
    </div>
  );
}