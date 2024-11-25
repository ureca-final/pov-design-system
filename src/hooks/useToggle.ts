import { useCallback, useState } from 'react';

export const useToggle = (initialSelectedId: boolean) => {
  const [selected, setSelected] = useState(initialSelectedId);

  const handleSelectClick = useCallback((selectedId: boolean) => {
    setSelected(selectedId);
  }, []);

  return { selected, handleSelectClick };
};
