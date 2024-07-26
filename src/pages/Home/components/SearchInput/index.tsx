import { zodResolver } from "@hookform/resolvers/zod";
import { SearchInputContainer } from "./styles";
import { useForm } from "react-hook-form";
import { SearchInputProps } from "./types";
import { searchInputSchema, SearchInputType } from "./validation-schema";

export const SearchInput = ({ handleSearch }: SearchInputProps) => {
  const { register, handleSubmit } = useForm<SearchInputType>({
    resolver: zodResolver(searchInputSchema),
  });

  return (
    <SearchInputContainer onSubmit={handleSubmit(handleSearch)}>
      <input type="text" placeholder="Buscar conteúdo" {...register("query")} />
    </SearchInputContainer>
  );
};
