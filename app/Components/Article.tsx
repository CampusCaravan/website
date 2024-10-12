import Image from 'next/image';
import { useState } from 'react';

interface ArticleData {
    title: string;
    subtitle: string;
    author: string;
    image: string;
    content: string;
}

interface ArticleProps {
    data: ArticleData[];
}

export default function Article({ data }: ArticleProps) {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const renderContent = (content: string, index: number) => {
        if (openIndex === index) {
            return (
                <div className="text-brown-800 text-base text-justify">
                    {content}
                </div>
            );
        } else {
            const trimmedContent = content.substring(0, 300); // Adjust the length as needed
            return (
                <div className="text-brown-700 text-base text-justify">
                    {trimmedContent}...
                </div>
            );
        }
    };

    const toggleRead = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const render = data.map((article, index) => (
        <div key={index}>
            <div className='flex flex-col m-4 items-center'>
                <div className='w-11/12 h-68 border shadow-lg p-4'>
                    <Image
                        src={article.image}
                        alt={article.title}
                        width={400}
                        height={0}
                        className="rounded-md h-auto float-left m-4"
                        style={{ float: index % 2 === 0 ? 'left' : 'right' }}
                    />
                    <div className="font-bold text-brown-900 text-2xl">{article.title}</div>
                    <div className="text-brown-600 text-lg">{article.subtitle}</div>
                    <div className="text-sm text-brown-700 italic">{article.author}</div>
                    {renderContent(article.content, index)}
                    <button onClick={() => toggleRead(index)} className="text-brown-800 hover:text-brown-600 font-semibold">
                        {openIndex === index ? "Show Less" : "Read More"}
                    </button>
                </div>
            </div>
        </div>
    ));

    return (
        <div>
            {render}
        </div>
    );
}
