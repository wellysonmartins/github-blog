export interface SearchData {
  query: string
}

export interface SearchInputProps {
  handleSearch: (data: SearchData) => void;
}