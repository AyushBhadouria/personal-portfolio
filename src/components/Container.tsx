import React, { PropsWithChildren } from 'react'

const Container: React.FC<PropsWithChildren<{ id?: string }>> = ({ children, id }) => {
  return (
    <section id={id} className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {children}
    </section>
  )
}

export default Container
