export const sortAndFormatData = dataObj => {
  let data = [];
  if (dataObj) {
    for (let [id, props] of Object.entries(dataObj)) {
      data.push({
        ...props,
        id,
        createdAt: new Date(props.createdAt)
      });
    }
    return data.sort((x, y) => y.createdAt - x.createdAt);
  } else {
    return data;
  }
};
