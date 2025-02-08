export * from './button';
export * from './card';
export * from './textarea';
export * from './input';
export * from './label';
export interface Journal {
    title: string;
    type: 'open access' | 'contains open access';
    category: string;
  }
  
  export interface PublicationTypes {
    journals: boolean;
    books: boolean;
  }