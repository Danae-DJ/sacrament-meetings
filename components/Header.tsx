import NavLinks from './NavLinks';
import { connection } from 'next/server';

export default async function Header() {
    await connection();

    const today = new Date();
    const currentDate = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`;

    return (
        <header className="bg-[#556B2F] text-[#F5F5DC] shadow-md">
            <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-3 items-center md:flex-row md:justify-between">
                <h1 className="text-xl font-bold tracking-wide">
                    Greenvilla Ward
                </h1>

                <p className="text-xl font-bold tracking-wide">
                    {currentDate}
                </p>

                <NavLinks />
            </div>
        </header>
    );
}