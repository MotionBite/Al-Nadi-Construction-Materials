import { CategoryGrid } from '@/components/home/CategoryGrid';
import { CtaBanner } from '@/components/home/CtaBanner';

export default function CategoriesPage() {
  return (
    <div className="pt-10">
      <CategoryGrid />
      <CtaBanner />
    </div>
  );
}
