export default function TestPage() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">
          Test Page Works!
        </h1>
        <p className="text-gray-600 mb-4">
          If you can see this page, Next.js is working correctly.
        </p>
        <div className="space-y-2">
          <p className="text-sm text-gray-500">
            <strong>Domain:</strong> {typeof window !== 'undefined' ? window.location.hostname : 'Server-side'}
          </p>
          <p className="text-sm text-gray-500">
            <strong>Time:</strong> {new Date().toLocaleString()}
          </p>
        </div>
        <div className="mt-6">
          <a 
            href="/" 
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
          >
            Back to Home
          </a>
        </div>
      </div>
    </div>
  )
}

