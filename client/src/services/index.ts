const subscribe = (): Promise<void> => new Promise((resolve) => {
  setTimeout(resolve, 2000);
});

export { subscribe };
