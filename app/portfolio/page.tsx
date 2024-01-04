import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

type PortfolioItem = {
  title: string;
  description: string;
  imageUrl: string;
  link: string;
}

const PortfolioCard: React.FC<{ item: PortfolioItem }> = ({ item }) => {
  return (
    <div style={{ border: '1px solid #ccc', padding: '20px', margin: '10px' }}>
      <h3 className="text-2xl">{item.title}</h3>
      <Image src={item.imageUrl} alt={item.title} width={500} height={300} />
      <p>{item.description}</p>
      <Link href={item.link} className='hover:text-red-500'>View Project</Link>
    </div>
  )
}
const portfolioItems: PortfolioItem[] = [
  {
    title: 'Cat 1',
    description: 'This is a project about cats',
    imageUrl: "/cat-images/bingus-cat-calling.jpg",
    link: 'https://github.com/Fangoling' 
  },
  {
    title: 'Cat 2',
    description: 'This is another project about cats',
    imageUrl: "/cat-images/cat-meme-html.jpg",
    link: 'https://github.com/Fangoling' 
  },
];
export default function Portfolio() {
  return (
    <div>
      <h1 className='text-6xl'>My Portfolio</h1>
      <section>
        {portfolioItems.map((item, index) => (
          <PortfolioCard key={index} item={item} />
        ))}
      </section>
    </div>
  )
}
