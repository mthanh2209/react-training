import { useEffect, useState } from "react";
import { fetchData } from "./api";

interface Option {
  id: string;
  name: string;
}

type UseSelectedOptionReturnType = [Option[] | null, string, React.Dispatch<React.SetStateAction<string>>];

export const useSelectedOption = (
  url: string | null
): UseSelectedOptionReturnType => {
  const [list, setList] = useState<Option[] | null>(null);
  const [selectedId, setSelectedId] = useState<string>("");

  useEffect(() => {
    if (url === null) {
      return;
    }

    let ignore = false;
    fetchData(url).then((result) => {
      if (!ignore) {
        setList(result);
        setSelectedId(result[0].id); // Select the first place
      }
    });

    return () => {
      ignore = true;
    };

  }, [url]);

  return [list, selectedId, setSelectedId];
};
