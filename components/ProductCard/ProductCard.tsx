import Image from 'next/image';
import Link from 'next/link';

const ProductCard = ({ image }: { image: string }) => {
    return (
        <div className="bg-white dark:bg-[#1E201E] rounded-lg shadow-md overflow-hidden">
            <Link href="https://wa.me/+905513954420">
                <Image
                    src={image}
                    alt="Poster"
                    className="w-full h-auto object-cover"
                    width={300}
                    height={300}
                />
            </Link>
        </div>
    );
};

export default ProductCard;
