import { BlogPosts } from 'app/components/posts'
import { ProductsList } from 'app/components/products'

export default function Page() {
  return (
    <section className="space-y-12">
      <div>
        <h1 className="mb-4 text-2xl font-semibold tracking-tighter">
          hi, i'm kshitij
        </h1>
        <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed">
          i love building things. i spend my time exploring the intersection of{' '}
          <strong className="font-medium text-neutral-900 dark:text-neutral-100">development</strong>,{' '}
          <strong className="font-medium text-neutral-900 dark:text-neutral-100">user experience</strong>, and{' '}
          <strong className="font-medium text-neutral-900 dark:text-neutral-100">consumer psychology</strong>{' '}
          — figuring out how people interact with technology and how to make digital products feel natural and engaging.
        </p>
      </div>

      <div>
        <h2 className="mb-6 text-lg font-semibold tracking-tighter text-neutral-900 dark:text-neutral-100">
          products
        </h2>
        <ProductsList />
      </div>

      <div>
        <h2 className="mb-6 text-lg font-semibold tracking-tighter text-neutral-900 dark:text-neutral-100">
          writing
        </h2>
        <BlogPosts />
      </div>
    </section>
  )
}

