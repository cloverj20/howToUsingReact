import Post from "./models/post";

export default function createFakeData() {
  const posts = [...Array(40).keys()].map((i) => ({
    title: `포스트${i}`,
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rhoncus luctus odio nec sagittis. Ut malesuada vestibulum ligula, eget rutrum neque sollicitudin at. Maecenas vel nunc pulvinar, condimentum orci eu, dictum ex. Duis bibendum quam eu lacus facilisis placerat. Sed nulla massa, auctor volutpat neque eu, tincidunt faucibus tellus. Nulla tempus vestibulum nunc, dictum finibus magna sagittis quis. Fusce luctus porttitor odio.",
    tags: ["가짜", "데이터"],
  }));
  Post.insertMany(posts, (err, docs) => {
    console.log(docs);
  });
}
