export const startScreeenElement = () =>
  document.querySelector('#start-screen') as HTMLDivElement;

export const buttonElement = () =>
  startScreeenElement().querySelector('button') as HTMLButtonElement;

export const squareElement = () =>
  document.querySelector('#square') as HTMLDivElement;

export const circleElement = () =>
  document.querySelector('.circle') as HTMLDivElement;
