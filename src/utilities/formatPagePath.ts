export const formatPagePath = (collection: string, doc: any): string => {
  const { slug } = doc;

  let prefix = '';

  if (collection) {
    switch (collection) {
      case 'pages':
        prefix = '';
        break;
      case 'posts':
        prefix = '/blog';
        break;
      default:
        prefix = `/${collection}`;
    }
  }

  return `${prefix}/${slug}`;
}