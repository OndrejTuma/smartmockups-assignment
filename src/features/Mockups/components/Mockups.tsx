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
    <div className={'grid grid-cols-1 gap-4 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4'}>
      {mockups.map(({ id, title, thumb }) => (
        <div key={id} className={'relative text-center'}>
          <Image src={thumb} width={320} height={240}/>
          <div className={'opacity-0 bg-gradient-to-t from-gray absolute inset-0 transition-all hover:opacity-100'}>
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