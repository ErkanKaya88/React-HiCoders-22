const getDataByPromise = () => {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("erkan");
      }
    })
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.log(err);
    });
};

getDataByPromise();

const getDataByAsyncAwait = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    console.log("async await", data);
  } catch (error) {
    console.log(error);
  }
};

getDataByAsyncAwait();
