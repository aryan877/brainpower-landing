import React from "react";
import {
  Github,
  Zap,
  Cpu,
  Wallet,
  Coins,
  ArrowRight,
  Terminal,
  Bot,
  Image,
  Boxes,
  LineChart,
  Shield,
  Code,
  Settings,
  MessageSquare,
} from "lucide-react";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section with Gradient Background */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 via-purple-500/20 to-black pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-600/20 via-purple-800/20 to-transparent pointer-events-none" />

        <div className="container mx-auto px-4 pt-24 pb-32 relative">
          <h1 className="text-6xl md:text-7xl font-bold text-white mb-6">
            BrainPower
          </h1>
          <p className="text-2xl text-neutral-200 max-w-2xl mb-12">
            An AI-powered blockchain agent that interacts with the Solana
            blockchain using natural language. Built with OpenAI's Assistant
            API.
          </p>
          <a
            href="https://github.com/aryan877/brainpower"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 text-lg font-medium rounded-full bg-gradient-to-r from-emerald-500 to-emerald-600 text-white hover:from-emerald-600 hover:to-emerald-700 transition-all duration-200 shadow-lg hover:shadow-emerald-500/25"
          >
            <Github className="w-5 h-5 mr-2" />
            Explore on GitHub
            <ArrowRight className="w-5 h-5 ml-2" />
          </a>
        </div>
      </div>

      {/* Chat Interface Section */}
      <section className="py-24 bg-neutral-950">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <h2 className="text-4xl font-bold text-white mb-6">
                Intuitive Chat Interface
              </h2>
              <p className="text-xl text-neutral-300 mb-8">
                Interact with the Solana blockchain using natural language
                through our user-friendly chat interface. Simply type your
                requests, and let BrainPower handle the complexities for you.
              </p>
              <ul className="space-y-4">
                {[
                  "Natural language processing for blockchain operations",
                  "Real-time responses and transaction updates",
                  "Seamless integration with all BrainPower tools",
                  "History tracking for easy reference",
                ].map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <MessageSquare className="w-6 h-6 text-emerald-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-neutral-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:w-1/2">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-purple-600 rounded-xl blur-xl opacity-50" />
                <img
                  src="/placeholder.svg?height=600&width=800"
                  alt="BrainPower Chat Interface"
                  className="relative rounded-xl shadow-2xl border border-neutral-800"
                  width={800}
                  height={600}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-neutral-950">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-white mb-16 text-center">
            Available Tools & Features
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureSection
              icon={<Wallet className="w-6 h-6" />}
              title="Wallet & Balance Operations"
              features={[
                "Get wallet address",
                "Check SOL/SPL token balances",
                "Request test SOL from faucet",
                "Send tokens to other wallets",
              ]}
              gradient="from-emerald-500 to-teal-500"
            />

            <FeatureSection
              icon={<Image className="w-6 h-6" />}
              title="NFT Operations"
              features={[
                "Create NFT collections",
                "Mint NFTs with metadata",
                "Generate AI images with DALL-E",
                "Set custom royalties",
              ]}
              gradient="from-purple-500 to-pink-500"
            />

            <FeatureSection
              icon={<Coins className="w-6 h-6" />}
              title="Token Operations"
              features={[
                "Launch SPL tokens",
                "Get token market data",
                "Launch on Pump.fun",
                "Configure token supply",
              ]}
              gradient="from-amber-500 to-orange-500"
            />

            <FeatureSection
              icon={<LineChart className="w-6 h-6" />}
              title="DeFi & Trading"
              features={[
                "Swap tokens via Jupiter",
                "Lend USDC on Lulo",
                "Get Pyth price feeds",
                "Create liquidity pools",
              ]}
              gradient="from-blue-500 to-cyan-500"
            />

            <FeatureSection
              icon={<Boxes className="w-6 h-6" />}
              title="Liquidity Pools"
              features={[
                "Create Orca Whirlpools",
                "Raydium AMM V4 pools",
                "Concentrated liquidity pools",
                "Constant product pools",
              ]}
              gradient="from-red-500 to-pink-500"
            />

            <FeatureSection
              icon={<Shield className="w-6 h-6" />}
              title="Utility & Monitoring"
              features={[
                "Check network TPS",
                "Register .sol domains",
                "Telegram notifications",
                "Transaction monitoring",
              ]}
              gradient="from-violet-500 to-purple-500"
            />
          </div>
        </div>
      </section>

      {/* Setup Guide */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-950 to-black pointer-events-none" />
        <div className="container mx-auto px-4 relative">
          <h2 className="text-4xl font-bold text-white mb-12">
            Complete Setup Guide
          </h2>

          <div className="space-y-8">
            {/* Repository Setup */}
            <div className="bg-neutral-900/50 backdrop-blur-xl rounded-2xl p-8 border border-neutral-800">
              <h3 className="text-xl font-semibold text-white mb-6">
                1. Repository Setup
              </h3>
              <div className="space-y-4">
                <CodeBlock
                  command="git clone https://github.com/aryan877/brainpower"
                  description="Clone the repository"
                />
                <CodeBlock
                  command="cd brainpower"
                  description="Navigate to project directory"
                />
                <CodeBlock
                  command="yarn install"
                  description="Install dependencies"
                />
              </div>
            </div>

            {/* Environment Variables */}
            <div className="bg-neutral-900/50 backdrop-blur-xl rounded-2xl p-8 border border-neutral-800">
              <h3 className="text-xl font-semibold text-white mb-6">
                2. Environment Configuration
              </h3>

              <div className="mb-8">
                <h4 className="text-lg font-medium text-emerald-500 mb-4">
                  Frontend (.env)
                </h4>
                <CodeBlock
                  command="NEXT_PUBLIC_BACKEND_URL=http://localhost:5000"
                  description="Configure backend URL"
                />
              </div>

              <div>
                <h4 className="text-lg font-medium text-emerald-500 mb-4">
                  Backend (.env)
                </h4>
                <div className="space-y-4">
                  <CodeBlock
                    command="PRIVATE_KEY_BASE58=your_private_key"
                    description="Solana wallet private key"
                  />
                  <CodeBlock
                    command="OPENAI_API_KEY=your_openai_key"
                    description="OpenAI API key for AI features"
                  />
                  <CodeBlock
                    command="MONGODB_URI=your_mongodb_uri"
                    description="MongoDB connection string"
                  />
                  <CodeBlock
                    command="HELIUS_API_KEY=your_helius_key"
                    description="Helius API key for RPC access"
                  />
                  <CodeBlock
                    command="TELEGRAM_BOT_TOKEN=your_bot_token
TELEGRAM_CHAT_ID=your_chat_id"
                    description="Optional: Telegram notification setup"
                  />
                </div>
              </div>
            </div>

            {/* Start Development */}
            <div className="bg-neutral-900/50 backdrop-blur-xl rounded-2xl p-8 border border-neutral-800">
              <h3 className="text-xl font-semibold text-white mb-6">
                3. Start Development
              </h3>
              <div className="space-y-4">
                <CodeBlock
                  command="yarn dev"
                  description="Start both frontend and backend servers"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-neutral-800 py-12">
        <div className="container mx-auto px-4 text-center">
          <p className="text-neutral-400">Built for the Solana AI Hackathon</p>
        </div>
      </footer>
    </div>
  );
}

function FeatureSection({
  icon,
  title,
  features,
  gradient,
}: {
  icon: React.ReactNode;
  title: string;
  features: string[];
  gradient: string;
}) {
  return (
    <div className="group relative">
      <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl blur-xl -z-10" />
      <div className="relative bg-neutral-900/50 backdrop-blur-sm p-8 rounded-2xl border border-neutral-800 h-full transition-all duration-300 hover:border-neutral-700">
        <div
          className={`inline-flex p-3 rounded-lg bg-gradient-to-br ${gradient} mb-6`}
        >
          {icon}
        </div>
        <h3 className="text-xl font-semibold text-white mb-4">{title}</h3>
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="text-neutral-400 flex items-center">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-2" />
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function CodeBlock({
  command,
  description,
}: {
  command: string;
  description: string;
}) {
  return (
    <div className="space-y-2">
      <code className="block bg-neutral-950 px-4 py-3 rounded-lg text-sm font-mono text-neutral-200 overflow-x-auto">
        {command}
      </code>
      <p className="text-sm text-neutral-500">{description}</p>
    </div>
  );
}
