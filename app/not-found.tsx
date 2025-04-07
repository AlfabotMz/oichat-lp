export default function NotFound() {
  return (
    <div className="min-h-screen bg-dark-900 flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-white mb-4">404 - Página não encontrada</h1>
        <p className="text-gray-400 mb-8">A página que você está procurando não existe.</p>
        <a
          href="/"
          className="bg-gradient-to-r from-accent-purple to-accent-blue text-white px-6 py-3 rounded-full text-base font-semibold hover:opacity-90 transition-opacity"
        >
          Voltar para a página inicial
        </a>
      </div>
    </div>
  )
} 