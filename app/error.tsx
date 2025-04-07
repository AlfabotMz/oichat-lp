'use client'

export default function Error({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div className="min-h-screen bg-dark-900 flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-white mb-4">Algo deu errado!</h1>
        <p className="text-gray-400 mb-8">Desculpe, ocorreu um erro inesperado.</p>
        <button
          onClick={reset}
          className="bg-gradient-to-r from-accent-purple to-accent-blue text-white px-6 py-3 rounded-full text-base font-semibold hover:opacity-90 transition-opacity"
        >
          Tentar novamente
        </button>
      </div>
    </div>
  )
} 