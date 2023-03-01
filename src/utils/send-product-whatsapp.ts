export const sendProductWhatsapp = (name: string, id: string) => {
  const text = `Ol%C3%A1,%20gostaria%20de%20saber%20mais%20informa%C3%A7%C3%B5es%20sobre%20o%20seguinte%20produto:%0A%0A*Name*:%20${name}%0A*ID*:%20${id}`;

  window.open(`https://wa.me/5521999999999?text=${text}`);
};
