import React from 'react'
import Image from 'next/image'

export type Mockup = {
  id: string,
  title: string,
  category: Array<string>,
  thumb: string,
}

type Props = {
  mockups: Array<Mockup>,
}

const Mockups = ({ mockups }: Props) => {
  return (
    <div className={'grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 text-none'}>
      {mockups.map(({ id, title, thumb }) => (
        <div key={id} className={'relative text-center bg-gray rounded'}>
          <Image src={thumb} width={360} height={270} className={'rounded'} alt={title}/>
          <div className={'border border-secondary text-base opacity-0 bg-gradient-to-t rounded from-gray absolute inset-0 transition-all hover:opacity-100'}>
            <p className={'absolute bottom-0 left-0 p-3 text-left text-white'}>
              {title}
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Mockups