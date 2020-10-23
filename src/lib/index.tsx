import { makeInventar, InventarConfig, InventarOptions } from 'inventar'
import React from 'react'

export interface IReactInventarProps {
  config: InventarConfig,
  options?: InventarOptions,
}

export const ReactInventar: React.FC<IReactInventarProps> = ({ children, config, options = {} }) => {
  const { cssInventar } = makeInventar(config, options)

  return (
    <div style={cssInventar}>
      {children}
    </div>
  )
}
