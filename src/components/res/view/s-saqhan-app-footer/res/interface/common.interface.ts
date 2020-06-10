/**
* Интерфейс для данных из массива
**/

export interface footerItems1 {
  name: string;
  id: string;
}

export interface footerItems2 {
  title: string;
  links: footerItems1[];
}
