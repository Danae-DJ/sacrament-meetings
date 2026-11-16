'use client';

import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';

export default function MeetingSearch() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = useDebouncedCallback((term: string) => {
    const params = new URLSearchParams(searchParams);

    // Reset pagination when searching
    params.set('page', '1');

    // Add or remove the search query
    if (term) {
      params.set('query', term);
    } else {
      params.delete('query');
    }

    replace(`${pathname}?${params.toString()}`);
  }, 300);

  return (
    <div className="relative">
      <label htmlFor="meeting-search" className="sr-only">
        Search meetings
      </label>

      <input
        id="meeting-search"
        type="search"
        placeholder="Search meetings..."
        defaultValue={searchParams.get('query')?.toString()}
        onChange={(event) => handleSearch(event.target.value)}
        className="w-full rounded-lg border border-sand bg-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-olive"
      />
    </div>
  );
}

/*Recordatorio para el buscador:
useSearchParams() lee los parámetros de la dirección URL, como ?query=Bishop.
useRouter() y usePathname() permiten actualizar la dirección
sin recargar toda la página.
useDebouncedCallback(..., 300) espera 300 milisegundos después
de que dejas de escribir antes de realizar la búsqueda.
*/