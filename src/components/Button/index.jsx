import Link from 'next/link';
import { Button } from '@/components/ui/button';

const Button = () => {
  return (
    <Button asChild>
      <Link href='/'>Button</Link>
    </Button>
  );
};

export { Button };
