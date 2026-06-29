import React from 'react'

interface Product {
  name: string
  description: string
  tags: string[]
  href?: string
}

const products: Product[] = [
  {
    name: 'shuttlr',
    description: 'a minimalist transit-coordination platform designed to simplify daily commutes. built with a focus on friction-free booking flows and behavioral micro-interactions.',
    tags: ['react native', 'node.js', 'websockets', 'ux design'],
    href: '#'
  },
  {
    name: 'provo',
    description: 'a structured decision-journaling tool helping product builders record, track, and review design choices. integrates consumer psychology concepts to combat cognitive biases.',
    tags: ['next.js', 'postgresql', 'tailwindcss', 'behavioral psychology'],
    href: '#'
  }
]

export function ProductsList() {
  return (
    <div className="space-y-6">
      {products.map((product) => (
        <div
          key={product.name}
          className="group block p-4 -mx-4 rounded-xl hover:bg-neutral-50 dark:hover:bg-neutral-900 transition-all"
        >
          <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-1">
            <h3 className="font-medium text-neutral-900 dark:text-neutral-100 flex items-center gap-1.5">
              {product.name}
              <span className="inline-block opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200 text-xs text-neutral-400 dark:text-neutral-500">
                →
              </span>
            </h3>
            <div className="flex flex-wrap gap-1.5 mt-1 md:mt-0">
              {product.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[10px] font-mono bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 px-1.5 py-0.5 rounded"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
            {product.description}
          </p>
        </div>
      ))}
    </div>
  )
}
