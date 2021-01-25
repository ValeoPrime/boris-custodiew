export const fetchData = async function fetchData(path) {
  const result = await fetch(`./data/${path}.json`)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      return data;
    });
  return result;
};

export const rangeFilterObj = (start, end) => {
  if (start == null && end == null) {
    return null;
  }

  let title = "";
  if ((end == 0 || end == null) && start > 0) {
    title = `от ${start}`;
  }

  if ((start == 0 || start == null) && end > 0) {
    title = `до ${end}`;
  }

  if (start > 0 && end > 0) {
    title = `от ${start} до ${end}`;
  }

  const rangeObj = {
    range: true,
    rangeStart: start,
    rangeEnd: end,
    plotStyle: title,
  };
  return rangeObj;
};

export const filterPictures = function(filterTags, pictures) {
  let result = [];

  if (!filterTags.length) {
    return (result = pictures);
  }

  filterTags.forEach((filter) => {
    if (filter.work) {
      result = result.concat(pictures.filter((pic) => pic.work == filter.work));
    }

    if (filter.plot) {
      result = result.concat(pictures.filter((pic) => pic.plot == filter.plot));
    }
    if (filter.style) {
      result = result.concat(
        pictures.filter((pic) => pic.style == filter.style)
      );
    }
    if (filter.technics) {
      result = result.concat(
        pictures.filter((pic) => pic.technics == filter.technics)
      );
    }
    if (filter.year) {
      switch (filter.year) {
        case "period 1":
          result = result.concat(pictures.filter((pic) => pic.year <= 1900));
          break;
        case "period 2":
          result = result.concat(
            pictures.filter((pic) => pic.year > 1901 && pic.year < 1916)
          );
          break;
        case "period 3":
          result = result.concat(pictures.filter((pic) => pic.year >= 1917));
          break;
        default:
          return result;
      }
    }
    if (filter.range) {
      if (filter.rangeStart < 1300 || filter.rangeEnd < 1300) {
        return result;
      }
      result = result.concat(
        pictures.filter((pic) => {
          return pic.year >= filter.rangeStart && pic.year <= filter.rangeEnd;
        })
      );
    }
  });
  return getUniqueListBy(result, "key");
};

function getUniqueListBy(arr, key) {
  return [...new Map(arr.map((item) => [item[key], item])).values()];
}
