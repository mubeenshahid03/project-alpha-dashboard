// searchStore.ts
import create from "zustand";

interface SearchStoreState {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

const useSearchStore = create<SearchStoreState>((set) => ({
  searchQuery: "",
  setSearchQuery: (query: string) => set({ searchQuery: query }),
}));

export default useSearchStore;
