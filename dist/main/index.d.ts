import { InventarConfig, InventarOptions } from 'inventar';
import React from 'react';

interface IReactInventarProps {
    config: InventarConfig;
    options?: InventarOptions;
}
declare const ReactInventar: React.FC<IReactInventarProps>;

export { IReactInventarProps, ReactInventar };
