import { Button } from '@/core/components/Button';

/**
 * @summary The main landing page of the application.
 */
export default function HomePage() {
  return (
    <div className="text-center py-16">
      <h1 className="text-4xl md:text-6xl font-bold text-primary mb-4">
        Welcome to TDD Consulting
      </h1>
      <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
        We provide expert consulting in Test-Driven Development to help you build robust, maintainable, and high-quality software.
      </p>
      <div className="flex justify-center gap-4">
        <Button size="lg" variant="primary">
          Our Services
        </Button>
        <Button size="lg" variant="secondary">
          Contact Us
        </Button>
      </div>
    </div>
  );
}
