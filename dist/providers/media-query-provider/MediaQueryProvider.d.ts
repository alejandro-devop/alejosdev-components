import React from 'react';
type MediaQueryType = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type MediaQueryProviderType = {
    currentRes: MediaQueryType;
    isIn: (res: MediaQueryType[]) => boolean;
};
export declare const MediaQueryCTX: React.Context<MediaQueryProviderType>;
export declare const MediaQueryProviderProvider: React.Provider<MediaQueryProviderType>;
export declare const MediaQueryProviderConsumer: React.Consumer<MediaQueryProviderType>;
interface MediaQueryProviderProps {
    children: React.ReactNode;
}
declare const MediaQueryProvider: React.FC<MediaQueryProviderProps>;
export default MediaQueryProvider;
