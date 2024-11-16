import Image from 'next/image';

const ProductCard = ({ image }: { image: string }) => {
    return (
        <div className="bg-white dark:bg-[#1E201E] rounded-lg shadow-md overflow-hidden">
            <Image
                src={image}
                alt="Poster"
                className="w-full h-auto object-cover"
                width={300}
                height={300}
            />
        </div>
    );
};

export default ProductCard;
