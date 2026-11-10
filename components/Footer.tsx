import { connection } from 'next/server';

export default async function Footer() {
    await connection();

    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-olive text-[#F5F0E6] py-6 mt-12 border-t border-sand">
            <div className="container mx-auto text-center">
                <p>
                Copyright &copy; {currentYear} | Greenvilla Ward | All rights reserved
                </p>
            </div>
        </footer>
    );
}