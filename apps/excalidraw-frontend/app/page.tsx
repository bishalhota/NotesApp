import { Pencil, Zap, Users, Download, ArrowRight } from 'lucide-react';
import Link from 'next/link';
// import { Button } from "@repo/ui/button";

function App() {
  return (
    <div className="min-h-screen bg-[#fffef8]">
      <nav className="container mx-auto px-6 py-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Pencil className="w-7 h-7 text-gray-800" strokeWidth={2} />
          <span className="text-xl font-semibold text-gray-800">Excalidraw</span>
        </div>
        <button className="px-5 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors font-medium">
          Go to App
        </button>
      </nav>

      <main className="container mx-auto px-6">
        <section className="pt-20 pb-32 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-6xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Virtual whiteboard for
              <br />
              <span className="relative inline-block mt-2">
                <span className="relative z-10">sketching</span>
                <svg className="absolute -bottom-2 left-0 w-full" height="12" viewBox="0 0 300 12" fill="none">
                  <path d="M2 10C50 3 250 3 298 10" stroke="#fbbf24" strokeWidth="4" strokeLinecap="round" />
                </svg>
              </span>
              {' '}hand-drawn diagrams
            </h1>
            <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
              Collaborative and end-to-end encrypted. Create beautiful diagrams with a hand-drawn feel.
            </p>
            <div className="flex gap-4 justify-center items-center">
              <Link href="/signin">
                <button className="px-8 py-4 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-all font-medium text-lg flex items-center gap-2 shadow-lg hover:shadow-xl">
                  Sign in
                  <ArrowRight className="w-5 h-5" />
                </button>
              </Link>
              <Link href="/signup">
                <button className="px-8 py-4 border-2 border-gray-300 text-gray-800 rounded-lg hover:border-gray-400 transition-colors font-medium text-lg">
                  Sign up
                </button>
              </Link>
            </div>
          </div>

          <div className="mt-20 max-w-5xl mx-auto">
            <div className="bg-white rounded-2xl shadow-2xl border-4 border-gray-800 p-8 relative overflow-hidden">
              <div className="absolute top-4 left-4 flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                <div className="w-3 h-3 rounded-full bg-green-400"></div>
              </div>
              <div className="pt-8">
                <svg viewBox="0 0 800 400" className="w-full">
                  <rect x="100" y="80" width="200" height="120" fill="none" stroke="#1e293b" strokeWidth="3" rx="4" />
                  <text x="200" y="145" textAnchor="middle" className="text-2xl font-medium" fill="#1e293b">Ideas</text>

                  <rect x="500" y="80" width="200" height="120" fill="none" stroke="#1e293b" strokeWidth="3" rx="4" />
                  <text x="600" y="145" textAnchor="middle" className="text-2xl font-medium" fill="#1e293b">Reality</text>

                  <path d="M 310 140 Q 405 140 490 140" fill="none" stroke="#1e293b" strokeWidth="3" markerEnd="url(#arrowhead)" />

                  <circle cx="200" cy="280" r="60" fill="none" stroke="#7c3aed" strokeWidth="3" />
                  <text x="200" y="290" textAnchor="middle" className="text-xl font-medium" fill="#7c3aed">Create</text>

                  <rect x="440" y="240" width="120" height="80" fill="#fbbf24" fillOpacity="0.3" stroke="#f59e0b" strokeWidth="3" rx="4" />
                  <text x="500" y="285" textAnchor="middle" className="text-xl font-medium" fill="#92400e">Collaborate</text>

                  <defs>
                    <marker id="arrowhead" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                      <polygon points="0 0, 10 3, 0 6" fill="#1e293b" />
                    </marker>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-800 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Zap className="w-8 h-8 text-amber-300" />
              </div>
              <h3 className="text-2xl font-semibold mb-3 text-gray-900">Fast & Simple</h3>
              <p className="text-gray-600 leading-relaxed">
                No learning curve. Start drawing immediately with an intuitive interface designed for speed.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gray-800 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-amber-300" />
              </div>
              <h3 className="text-2xl font-semibold mb-3 text-gray-900">Real-time Collaboration</h3>
              <p className="text-gray-600 leading-relaxed">
                Work together with your team in real-time. See changes as they happen.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gray-800 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Download className="w-8 h-8 text-amber-300" />
              </div>
              <h3 className="text-2xl font-semibold mb-3 text-gray-900">Export Anywhere</h3>
              <p className="text-gray-600 leading-relaxed">
                Export your drawings as PNG, SVG, or clipboard. Works offline and online.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 text-center">
          <div className="max-w-3xl mx-auto bg-gray-800 rounded-3xl p-16 text-white">
            <h2 className="text-4xl font-bold mb-6">Ready to start creating?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of users who sketch and collaborate every day
            </p>
            <button className="px-10 py-4 bg-amber-400 text-gray-900 rounded-lg hover:bg-amber-300 transition-colors font-semibold text-lg shadow-lg">
              Launch Excalidraw
            </button>
          </div>
        </section>
      </main>

      <footer className="container mx-auto px-6 py-12 mt-20 border-t border-gray-200">
        <div className="text-center text-gray-600">
          <p className="text-sm">Open source and privacy-friendly. Built with ❤️ by the community.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
