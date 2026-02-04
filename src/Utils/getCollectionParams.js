const getCollectionParams = (url) => {
  const parsedUrl = new URL(url);
  return {
    collection: parsedUrl.searchParams.get("collection_id"),
    tags: parsedUrl.searchParams.get("tags"),
  };
};
export default getCollectionParams