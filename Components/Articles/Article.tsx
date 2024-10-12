import Image from 'next/image';
import { useState } from 'react';

interface ArticleData {
    title: string;
    subtitle: string;
    author: string;
    image: string;
    content: string[]; // Changed to an array of strings
}

interface ArticleProps {
    data: ArticleData[];
}

export default function Article({ data }: ArticleProps) {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const renderContent = (content: string[], index: number) => {
        if (openIndex === index) {
            return (
                <div className="text-yellow-800 p-2 text-base text-justify">
                    {content.map((para, idx) => (
                        <p className='mb-3' key={idx}>{para}</p> // Render each paragraph
                        
                    ))}
                </div>
            );
        } else {
            const trimmedContent = content[0].substring(0,300); // Show only the first two paragraphs
            return (
                <div className="text-yellow-800 p-2 text-base text-justify">
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
                        className={`rounded-md h-auto m-4 ${index % 2 === 0 ? 'lg:float-left' : 'lg:float-right'} lg:float-none`}
                        style={{ float: index % 2 === 0 ? 'left' : 'right' }}
                    />
                    <div className="font-bold text-yellow-950 mt-4 text-brown-900 text-2xl text-center lg:text-left">{article.title}</div>
                    <div className="text-yellow-900 text-lg text-center lg:text-left">{article.subtitle}</div>
                    <div className="text-sm text-yellow-800 text-brown-700 italic text-center lg:text-left">By: {article.author}</div>
                    {renderContent(article.content, index)}
                    <button onClick={() => toggleRead(index)} className="p-2 text-yellow-950 hover:text-brown-600 font-semibold">
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
