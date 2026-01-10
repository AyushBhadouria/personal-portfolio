import React from 'react'

const SectionTitle: React.FC<{ title: string; subtitle?: string }> = ({ title, subtitle }) => (
  <div className="mb-8">
    <h2 className="text-3xl font-semibold text-gray-100">{title}</h2>
    {subtitle && <p className="text-gray-400 mt-2">{subtitle}</p>}
  </div>
)

export default SectionTitle
