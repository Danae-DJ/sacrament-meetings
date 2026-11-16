'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';

interface PaginationProps {
  totalPages: number;
  currentPage: number;
}

export default function Pagination({
  totalPages,
  currentPage,
}: PaginationProps) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { replace } = useRouter();

  function changePage(page: number) {
    const params = new URLSearchParams(searchParams.toString());

    params.set('page', page.toString());

    replace(`${pathname}?${params.toString()}`);
  }

  if (totalPages <= 1) {
    return null;
  }

  return (
    <div className="flex justify-center items-center gap-4 mt-8">
      <button
        onClick={() => changePage(currentPage - 1)}
        disabled={currentPage <= 1}
        className="px-4 py-2 rounded bg-olive text-white disabled:opacity-40"
      >
        Previous
      </button>

      <span className="text-sm">
        Page {currentPage} of {totalPages}
      </span>

      <button
        onClick={() => changePage(currentPage + 1)}
        disabled={currentPage >= totalPages}
        className="px-4 py-2 rounded bg-olive text-white disabled:opacity-40"
      >
        Next
      </button>
    </div>
  );
}



/* Recordatorio:
currentPage: indica en qué página estan los usuario.
totalPages: indica cuántas páginas existen en total.
changePage(): actualiza el parámetro page de la URL.
Los botones se desactivan cuando se llega al principio o al final.
 */