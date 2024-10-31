"use client";
import { useEffect, useState } from "react";

/**
 * Хук для отслеживания состояния медиа-запроса.
 * @param query - Медиа-запрос, например "(min-width: 768px)".
 * @returns Возвращает `true`, если запрос соответствует, и `false` в противном случае.
 */
export function useMediaQuery(query: string): boolean {
  // Состояние для хранения соответствия медиа-запросу
  const [matches, setMatches] = useState<boolean>(false);

  useEffect(() => {
    // Создаем объект для отслеживания изменений медиа-запроса
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }

    // Функция-обработчик для изменения состояния при изменении медиа-запроса
    const listener = () => setMatches(media.matches);

    // Добавляем слушатель
    media.addEventListener("change", listener);

    // Убираем слушатель при размонтировании компонента
    return () => media.removeEventListener("change", listener);
  }, [matches, query]);

  return matches;
}
