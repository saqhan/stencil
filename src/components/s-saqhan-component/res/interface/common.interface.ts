/**
 * Интерфейс для массива главного пользователя
 * */
export interface mainUser {
  id: number;
  name: string;
  message: string;
  img: string;
  date: string;
}

/**
 * Интерфейс для массива обычного пользователя
 * */
export interface messages {
  id: number;
  name: string;
  message: string;
  img: string;
  date: string;
  position: string;
}
